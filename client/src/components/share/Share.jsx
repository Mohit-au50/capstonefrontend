import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import user from '../../assets/user.png'
import { request } from '../../util/request'
import "./share.css"


const Share = () => {
    const [desc, setDesc] = useState("")
    const [photo, setPhoto] = useState("")
    const { token } = useSelector((state) => state.auth)

    const handleCreatePost = async () => {
        try {
          let filename = null
    
          if(photo){
            const formData = new FormData()
            filename = crypto.randomUUID() + photo.name
            formData.append("imageUrl", filename)
            formData.append("photo", photo)
            await request('/upload', 'POST', {}, formData, true)
          } else {
            return
          }
    
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
    
          const body = {
            imageUrl: filename,
            desc
          }
    
          await request('/post', 'POST', headers, body)
          window.location.reload()
        } catch (error) {
          console.error(error)
        }
      }

  return (
    <>
      <div className="post">
        <div className="post-details">
          <div className="img">
            <img src={user} alt="" />
          </div>
          <input
            type="text"
            placeholder="Share your opinion"
            onChange={(e) => setDesc(e.target.value)}
          />
          <button onClick={handleCreatePost}>POST</button>
        </div>

        <div className="post-content">
          <div>
            <span className="ri-live-fill red"></span>
            <span className="text">live video</span>
          </div>

          <label htmlFor="photo">
            <span className="ri-image-2-fill green"></span>
            <span className="text">Photo/video</span>
          </label>

          <div>
            <span className="ri-emotion-line yellow"></span>
            <span className="text">Feeling</span>
          </div>
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          id="photo"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
      </div>
    </>
  );
}

export default Share