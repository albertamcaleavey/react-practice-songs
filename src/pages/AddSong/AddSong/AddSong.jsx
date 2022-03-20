import { useState, useRef, useEffect } from "react";

const AddSong = (props) => {
const [validForm, setValidForm] = useState(false)

const formElement = useRef()

  const [formData, setFormData] = useState({
    name: '',
    artist: '',
    rating: 0
  })
  //checks if the form is valid (are the required fields filled) and then updates the the value of formElement in the form 
  useEffect(()=> {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  // sets the value in state for any input
  // input name= input value in state
  const handleChange= evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddSong(formData)
  }

  return (  
    <>
      <h1>Add Song</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name-input">Song Name (required)</label>
          <input type="text" name="name" value={formData.name} required onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="artist-input">Artist Name (required)</label>
          <input type="text" name="artist" value={formData.artist} required onChange={handleChange}/>
        </div>

        <div>
          <label htmlFor="rating-input">Song Rating (0-10)</label>
          <input type="text" name="rating" value={formData.rating} onChange={handleChange} />
        </div>

        <button type="submit" disabled={!validForm}>Add Song</button>
      </form>
    </>
  );
}
 
export default AddSong;