const SongCard = ({song, handleDeleteSong}) => {
  return (  
    <div>
      <p>Name: {song.name}</p>
            <p>Artist: {song.artist}</p>
            <p>Rating: {song.rating}</p>
            <button onClick={()=> handleDeleteSong(song._id)}>Delete</button>
    </div>
  )
  
}
 
export default SongCard;