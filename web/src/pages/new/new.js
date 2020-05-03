import React, { useState, useMemo } from 'react'
import './new.css'
import camera from '../../assets/camera.svg'
import { create } from '../../api/services/postService'
export default (props) => {

  const [author, setAuthor] = useState('')
  const [place, setPlace] = useState('')
  const [description, setDescription] = useState('')
  const [hashtag, setHashtag] = useState('')
  const [image, setImage] = useState('')
  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null
  }, [image])
  const handlerSumbit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('image', image)
    data.append('author', author)
    data.append('place', place)
    data.append('description', description)
    data.append('hashtags', hashtag)
    await create(data)
    setAuthor('')
    setPlace('')
    setDescription('')
    setHashtag('')
    setImage('')
  }
  const handlerFile = (e) => {
    const file = e.target.files[0]
    image && URL.revokeObjectURL(image)
    setImage(file)
  } 
  return (
    <section className="form-new">
      <form action="" onSubmit={handlerSumbit}>
        <label htmlFor="file">
          <img src={camera} alt="" />
          {preview && <img src={preview} alt="preview-post" className="preview-image" width="100%" height="300"/>}
          <input type="file" id="file" name="file" onChange={handlerFile}/>
        </label>
        <input type="text" value={author} placeholder="Author do post" onChange={(e) => setAuthor(e.target.value)}/>
        <input type="text" value={place} placeholder="local do post"  onChange={(e) => setPlace(e.target.value)}/>
        <input type="text" value={description} placeholder="descrição do post" onChange={(e) => setDescription(e.target.value)}/>
        <input type="text" value={hashtag} placeholder="hashtag do post"  onChange={(e) => setHashtag(e.target.value)}/>
        <button>Enviar</button>
      </form>
    </section>
  )
}