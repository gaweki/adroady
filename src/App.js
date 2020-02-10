import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const data = [
  {
    id: 1,
    title : "Judul 1",
    description : "Description For Judul 1"
  },
  {
    id: 2,
    title : "Judul 2",
    description : "Description For Judul 2"
  },
  {
    id: 3,
    title : "Judul 3",
    description : "Description For Judul 3"
  }
]


const App = () => {

  const [isActive, setActive] = useState(1)

  return (
    <div className="App">
      <div>
        {
          data.map((val) => (
            <div className="row-container" key={val.id}>
              <div className="title">{val.title} <button onClick={() => setActive(val.id)}>Show</button></div>
              <div className={`desc ${isActive === val.id ? `show`: `hide`}`}>{val.description}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
