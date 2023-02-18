import "./App.css";
import { Msg } from "./Msg";
import { MovieList } from "./MovieList";
import { Routes, Route, Link } from "react-router-dom";
export default function App() {
  console.log("Hi");
  const names = ["mohammed ", "aashik", "musab"];
  const users = [
    {
      name: "mohammed",
      pic: "https://1fid.com/wp-content/uploads/2022/07/aesthetic-profile-picture-2-1024x1024.jpg",
    },
    {
      name: "aashik",
      pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "musab",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU",
    },
  ];

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/" Home>
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies">movies</Link>
        </li>
      </ul>
      {/* {users.map((usr) => (
        <Welcome name={usr.name} pic={usr.pic} />
      ))} */}

      {/* <Welcome
        name="mohammed"
        pic="https://1fid.com/wp-content/uploads/2022/07/aesthetic-profile-picture-2-1024x1024.jpg"
      />
      <Welcome
        name="aashik"
        pic="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <Welcome
        name="musab"
        pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
      /> */}
      {/* <Msg name="mohammed" />
      <Msg name="aashik" />
      <Msg name="musab" /> */}
      {/* 
      {names.map((nm) => (
        <Msg name={nm} />
      ))} */}

      {/* <Msg name={"Sharafath"} />
      <MovieList /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1> Welcome to the Movie App 💕🌹</h1>
    </div>
  );
}
