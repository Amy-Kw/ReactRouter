import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home"
import './App.css';

export default function App() {

  return (
    <>
      <div id="container">
        <h1></h1>
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue/>} />
            <Route path="/red" element={<Red/>} />
            <Route path="/" element={<Home/>}>
            </Route>
          </Routes>
        </div>
    </div>
    </>
  )
}


















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
