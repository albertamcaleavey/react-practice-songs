import { useEffect, useState } from 'react';
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import './App.css';
import AddSong from './pages/AddSong/AddSong/AddSong';
import SongList from './components/SongList/SongList';
import EditSong from './pages/EditSong/EditSong';
import *  as songService from './services/songs'

function App() {
  const [songs, setSongs] = useState([])

  const navigate = useNavigate()

  const handleAddSong = async newSongData => {
    const newSong = await songService.create(newSongData)
    setSongs([...songs, newSong])
    navigate('/')
    // navigates back to / route after adding 
  }

  // stores the songs in state, so everytime the page loads all of the songs in the database are retrieved, stored in state and then displayed
  useEffect(()=> {
    songService.getAll()
    .then(allSongs => setSongs(allSongs))
  }, [])

  const handleDeleteSong = id => {
    songService.deleteOne(id)
    .then(deletedSong => setSongs(songs.filter(song => song._id !== deletedSong._id)))
  }

  const handleUpdateSong = updatedSongData => {
    // builds a new array, replacing the song with a matching id of the updated song, to the value of the updated song
    songService.update(updatedSongData)
    .then(updatedSong => {
      const newSongsArray = songs.map(song => song._id === updatedSong ? updatedSongData : song )
    setSongs(newSongsArray)
    navigate('/')
    })
  }

  return (
   <>
    <nav>
      <NavLink to='/'>Song List</NavLink>
      <NavLink className='m-left' to='/add'>Add Song</NavLink>
    </nav>
    <Routes>
      <Route path='/add' element={<AddSong handleAddSong={handleAddSong} />}/>
      <Route path='/' element={<SongList songs={songs} handleDeleteSong={handleDeleteSong} />} />
      <Route path='/edit' element={<EditSong handleUpdateSong={handleUpdateSong} />}/>
    </Routes>
   </>
  );
}

export default App;
