import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='text-center'>
        <h1 className="text-4xl">Ebook Title</h1>
        <p className="text-lg">Author Name</p>
      </header>
      <main className='text-center'>
        <div className="flex items-center justify-center">
          <img src="cover.jpg" alt="Ebook Cover" />
        </div>
        <div className="ebook-description">
          <p className="text-xl">Ebook Description</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            interdum eleifend felis eget rutrum.
          </p>
          <p>
            <strong>Price: $19.99</strong>
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            Buy Now
          </button>

        </div>
      </main>
      <footer className='text-center'>
        <p>Contact us at email@example.com</p>
      </footer>
    </div>
  );
}

export default App;
