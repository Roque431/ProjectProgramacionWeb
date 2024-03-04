import React, { useState } from "react";
import "./App2.css";
// import Header from './pages/Header';
import Header from "../Moleculas/Header";
import Tarjet from "../Moleculas/Tarjet";
// import Tarjeta from "../Moleculas/Tarjet";
import ArticulosRecientes from "../Moleculas/ArticulosRecientes";
//import Comentarios from "./pages/Comentarios";
// Define the data structure for a post
const post = {
  user: "Joanna Rosenbaum",
  icon: "",
  image: "",
  timeAgo: "4 hours",
  likes: 0,
  content:
    "Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.",
  comments: 10,
};
const Publish = () => {
  return(
    <div className="content-publish">
      <img
            className="profile-publish"
            src="https://th.bing.com/th?id=OIP.GHGGLYe7gDfZUzF_tElxiQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="Profile"
          />
          <input type="text"  placeholder="create publication " className="publication-bar" />
          <div className="buttons"><button className="button-multi">&#127916; Content multimedia </button>
        <button className="button-Event">&#128198; Event</button>
        <button className="button-write"> &#128390;Write article</button>
      </div>
     </div>
    
  );
};


const Post = () => {
  
  const [heartActive, setHeartActive] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleHeartColor = () => {
    setHeartActive(!heartActive);
    setLikeCount( likeCount +1 );
  };

  return (
    <article className="post">
      <header>
        <div className="user-info">
          <img
            className="profile-picture"
            src="https://th.bing.com/th?q=Imagen+De+Perro&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=es-MX&cc=MX&setlang=es&adlt=moderate&t=1&mw=247"
            alt="Profile"
          />
          <p className="i-icon">{post.icon} <button className="button-icon"> &#11592;</button></p>
          <p className="username">{post.user}</p>
          <time className="time-ago">{post.timeAgo}</time>
        </div>
      </header>
      <section className="post-content">
        <p>{post.content}</p>
        <img className="img-ima" src="https://th.bing.com/th?q=Imagen+De+Perro&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=es-MX&cc=MX&setlang=es&adlt=moderate&t=1&mw=247" alt="" />
      </section>
      <footer>
        <button className="like-button" onClick={toggleHeartColor}>
          <i className={`like-icon ${heartActive ? 'active' : ''}`}>&#x2764;</i>
          <span className="like-count">Me gusta  {likeCount}</span>
        </button>
        <button className="comment-button">&#128172; Comment</button>
        <button className="share-button"> &#11150; Share</button>
      </footer>
    </article>
  );
};
const Filtrado = () => {
  return (
    <div className="contenedor">
      <input type="text" placeholder="Filtrar por" className="input" />
      <input  type="text" placeholder="categorias eventos" className="boton"></input>
      <button className="boton">Etiquetas:ciclo 2023-2024</button>
    </div>
  );
};



const Event = () => {
  return (
    <article className="event">
      <header>
        <h2 className="event-title">Event Title</h2>
      </header>
      <section className="event-content">
        <p>Event description</p>
      </section>
      <footer>
        <button className="register-button">Register</button>
      </footer>
    </article>
  );
};


const Feed = () => {
  return (  <>
    <Header />
    <div className="app">
      <main className="main"> 
        <div className="column-container">
          <Tarjet
      nombre="Joanna Rosenbaum"
      bio="Capa principal de la variante del componente ipsum de Figma. Vínculo de equipo de componente vertical horizontal de escala de marco booleano"
      seguidores="24"
      siguiendo="134"
      imagenPerfil="https://th.bing.com/th?q=Imagen+De+Perro&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=es-MX&cc=MX&setlang=es&adlt=moderate&t=1&mw=247"
      imagenFondo="https://th.bing.com/th?q=Imagen+De+Perro&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=es-MX&cc=MX&setlang=es&adlt=moderate&t=1&mw=247"
    />
          <div className="column-content">
            <Publish />
            <Filtrado/>
            <Post />
            <Post />
            <Post />
            <Event />
          </div>
        </div>
      </main>
      <div className="Culum3"><ArticulosRecientes/> 
      <ArticulosRecientes/><ArticulosRecientes/></div>
       
    </div></>
  );
};

export default Feed;
