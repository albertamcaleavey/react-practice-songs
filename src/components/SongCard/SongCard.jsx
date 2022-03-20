import { Link } from "react-router-dom";

const SongCard = ({song, handleDeleteSong}) => {
  return (  
    <div>
      <div class='body'>
        <p>Name: {song.name}</p>
        <p>Artist: {song.artist}</p>
        <p>Rating: {song.rating}</p>
      </div>
      <div class='footer'>
        <Link to='/edit' state={{song}}>Edit
        </Link>
        <button onClick={()=> handleDeleteSong(song._id)}>Delete</button>
      </div>     
    </div>
  )
  
}
 
export default SongCard;