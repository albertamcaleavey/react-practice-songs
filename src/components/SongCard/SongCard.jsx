const SongCard = (props) => {
  return (  
    <div>
      <p>Name: {props.song.name}</p>
            <p>Artist: {props.song.artist}</p>
            <p>Rating: {props.song.rating}</p>
            <button>Delete</button>
    </div>
  )
  
}
 
export default SongCard;