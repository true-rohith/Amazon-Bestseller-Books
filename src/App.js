import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./components/Data";
import { useState } from "react";
function App() {
  const [info, setInfo] = useState(data);
  return (
    <>
      <div className="container">
        <Header />
        <div className="container-parts">
          <div className="container-sidebar">
            <p>Books</p>
            <p>Action</p>
            <p>Game</p>
            <p>Movies</p>
            <p>Anime</p>
            <p>Water Park</p>
            <p>Maharashtra</p>
            <p>Bharat</p>
            <p>Super</p>
            <p>Marvel</p>
            <p>Books</p>
            <p>Action</p>
            <p>Game</p>
            <p>Movies</p>
            <p>Anime</p>
            <p>Water Park</p>
            <p>Maharashtra</p>
            <p>Bharat</p>
            <p>Super</p>
            <p>Marvel</p>
            <p>Books</p>
            <p>Action</p>
            <p>Game</p>
            <p>Movies</p>
            <p>Anime</p>
            <p>Water Park</p>
            <p>Maharashtra</p>
            <p>Bharat</p>
          </div>
          <div className="container-right-sidebar">
            <h1>Bestsellers in Books</h1>
            <div className="container-cards">
              <Card data={info} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
