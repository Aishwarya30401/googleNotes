import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom/client";

import {Button, SubmitButton} from './Buttons';

// function App() {

//   return (
//     <div>
//       <Button />

//       <SubmitButton />
//     </div>
//   );

// }



function App() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");
  
  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
