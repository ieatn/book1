import React from 'react';
import './App.css';


function App() {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="App bg-purple-200">
      <header className='text-center max-w-4xl mx-auto py-6'>
        <h1 className="text-6xl font-bold pb-4">this bundle has made me into a self-care pro!</h1>
        <p className="text-lg max-w-3xl mx-auto">The Ultimate Digital Collection Of The Self-Care Tips, Tricks, And Tools To Nourish Your Mind, Body, And Soul</p>
      </header>
      <main className='text-center'>
        <div className="flex items-center justify-center mb-4">
          <img src="cover.jpg" alt="Ebook Cover" />
        </div>
        <div className="ebook-description mb-6">
          <a href="https://whop.com/eleanor-quinn/?pass=prod_1EyUnwLpoGKmZ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-full transition duration-300 ease-in-out">
              DOWNLOAD NOW
            </button>
          </a>
         <p className='text-sm mt-2'>Click the button above to get the book!</p>
        </div>
        <div className='flex max-w-3xl mx-auto justify-between mb-12'>
          <p className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            Overcome Anxiety
          </p>
          <p className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            Take Control of Life
          </p>
          <p className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            Live Your Life to the Fullest
          </p>
        </div>
        <header className='text-center max-w-4xl mx-auto py-6'>
          <h1 className="text-6xl font-bold pb-6">still stuck in the same place?</h1>
          <div className="space-y-4 mb-12">
            <p className="text-xl my-4">whether you've...</p>
            <p>-Read all the self help books in the library</p>
            <p>-Listened to all the podcasts on iTunes</p>
            <p>-Tried to convince yourself that everything's going great when in face you're on the verge of a meltdown</p>
            <p className='font-bold'>You're not a negative person. You've just got a lot of pressure on your shoulders right now.</p>
          </div>
          <p className="text-xl">for the price of a lunch...</p>
          <h2 className='text-xl font-bold my-6'>are you ready to be a self-care pro?</h2>
          <a href="https://whop.com/eleanor-quinn/?pass=prod_1EyUnwLpoGKmZ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-full transition duration-300 ease-in-out">
              GET THE BOOK
            </button>
          </a>
          <p className='text-sm mt-2'>Click the button above to get the book!</p>
          <div className="max-w-4xl mx-auto p-4">
            <div className="flex items-center justify-center space-x-2 mx-auto">
              {stars.map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  // fill-current fills in stars
                  className="w-6 h-6 text-yellow-500 fill-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.610l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              ))}
            </div>
            <p>Author Is Rated Excellent</p>
            <p>(4.8 out of 5 based on 642 reviews)</p>
            <div className="mt-8 space-y-4">
              <p className="text-2xl font-semibold">Testimonials</p>
              <p>
                "This bundle has made me into a self-care pro! I love it."
              </p>
              <p>
                "The self-care tips are amazing, and I feel so much better."
              </p>
              <p>
                "I highly recommend this bundle to everyone. It's life-changing!"
              </p>
            </div>
          </div>
        </header>
      </main>
      <footer className="text-center bg-pink-300 p-4">
        <div className="flex justify-center space-x-8">
          <div className="text-pink-200">
            <span className="text-4xl font-bold">SHAPE</span>
          </div>
          <div className="text-pink-200">
            <span className="text-4xl font-bold">Women'sHealth</span>
          </div>
          <div className="text-pink-200">
            <span className="text-4xl font-bold">ELLE</span>
          </div>
        </div>
        {/* <p>Contact us at email@example.com</p> */}
      </footer>
    </div>
  );
}

export default App;
