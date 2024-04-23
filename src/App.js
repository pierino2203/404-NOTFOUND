import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layouts';
import React from "react";
import img_p from './img/Scarecrow.png'

function App() {
  return (
    <div className="App">
      <Layout>
        <>
          <div>
            <img src={img_p} />
          </div>
          <div>
            <h1>
              I have bad news for you
            </h1>
            <p>
              The page you are looking for might be removed or is temporarily unavailable
            </p>
            <button>
              BACK TO HOMEPAGE
            </button>
          </div>
        </>
      </Layout>
    </div>
  );
}

export default App;
