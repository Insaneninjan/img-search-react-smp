import { useState } from "react";
import axios from "axios";
import "./App.css";

import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";


function App() {
  const [word, setWord] = useState("");
  const [photo, setPhoto] = useState([]);
  const apiUrl = `https://api.unsplash.com/search/photos?query=${word}&client_id=GhZztYQezTRq_iGioJxu9TqYVuqBHrVHW09He8xOyA4`;
  const getUnsplashData = (event) => {
    event.preventDefault();
    axios.get(apiUrl).then((res) => {
      setPhoto(res.data.results)
    });
  };

  return (
    <div className="App">
      Hello!
      <Title />
      <Form setWord={setWord} getUnsplashData={getUnsplashData} />
      <Results photo={photo}/>
    </div>
  );
}

export default App;
