import SongCard from "../SongCard/SongCard";

const SongList = (props) => {
  return (  
    <>
      <h1>Song List</h1>
      <div>
        {props.songs.map(song => (
          <div key={song._id}>
            <SongCard song={song} handleDeleteSong={props.handleDeleteSong} />
            <br />
          </div>
        ))}
      </div>
    </>
  );
}
 
export default SongList;