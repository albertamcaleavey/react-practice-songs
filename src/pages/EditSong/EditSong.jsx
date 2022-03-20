import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'

const EditSong = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.song)
  const [validForm, setValidForm] = useState(true)
  const formeElement = useRef()

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  useEffect(() => {
    formeElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  return (  
    <>
    <h1>Add Song</h1>
    <form autoComplete="off" ref={formeElement}>
      <div>
        <label htmlFor="name-input">Song Name (required)</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="artist-input">Artist Name (required)</label>
        <input type="text" name="artist" required value={formData.artist} onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="rating-input">Song Rating (0-10)</label>
        <input type="text" name="rating" value={formData.rating} onChange={handleChange} />
      </div>

      <button type="submit" disabled={!validForm} >Save Song</button>
    </form>
  </>
  )
}
 
export default EditSong;