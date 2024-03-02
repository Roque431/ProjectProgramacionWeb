// ... Importaciones
import React, { useState } from 'react';
import TILINEITOR from '../images/TILINEITOR.jpeg';
import Banner from '../images/Banner.png';

// Componente del Post
const Post = ({ content, date, image }) => (
  <div className="post">
    {image && <img src={image} alt="Post" className="post-image" />}
    <p className="post-content">{content}</p>
    <small className="post-date">{date}</small>
  </div>
);

// Componente UserProfile
function UserProfile() {
  const [following, setFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(15);
  const [posts, setPosts] = useState([
    { id: 1, content: 'Este es mi primer post.', date: '2022-03-01', image: null },
    { id: 2, content: '¡Hola a todos!', date: '2022-03-02', image: null },
    // Agrega más posts según sea necesario
  ]);
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState('');

  const handleFollowToggle = () => {
    if (following) {
      setFollowersCount((prevCount) => prevCount - 1);
    } else {
      setFollowersCount((prevCount) => prevCount + 1);
    }
    setFollowing(!following);
  };

  const handleAddPost = () => {
    const newPost = {
      id: posts.length + 1,
      content: newPostContent,
      date: new Date().toLocaleDateString(),
      image: newPostImage,
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setNewPostContent('');
    setNewPostImage('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPostImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user-profile-container">
      <div className="banner-container">
        <img src={Banner} alt="Banner" className="banner-image" />
      </div>
      <div className="profile-image-container">
        <img src={TILINEITOR} alt="Profile" className="profile-image" />
      </div>
      <div className="user-profile-info">
        <h1>Tilineitor Sanchez</h1>
        <p>Suchiapa, Chiapas</p>
        <hr />
        <div className="stats">
          <div className="stat">
            <h3>Seguidores</h3>
            <p>{followersCount}</p>
          </div>
          <div className="stat">
            <h3>Seguidos</h3>
            <p>200</p>
          </div>
        </div>
        <button className={following ? 'following-btn' : 'follow-btn'} onClick={handleFollowToggle}>
          {following ? 'Siguiendo' : 'Seguir'}
        </button>
        <h3>Descripción del perfil</h3>
        <p>Me encanta el tilin y el niño del oxxo, diavlo, que piquete la chamaquita</p>
      </div>
      <div className="user-posts">
        <h2>Posts</h2>
        <div className="post-form">
          <textarea
            placeholder="¿Qué estás pensando?"
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
          />
          <label htmlFor="imageInput">Seleccionar imagen:</label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageChange}
          />
          {newPostImage && (
            <img src={newPostImage} alt="Preview" className="image-preview" />
          )}
          <button onClick={handleAddPost}>Publicar</button>
        </div>
        {posts.map((post) => (
          <Post key={post.id} content={post.content} date={post.date} image={post.image} />
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
