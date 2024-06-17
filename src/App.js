import './App.css';

function App() {
  return (
    <>
      <div className='main-component'>
        <div className='header-section'>
          <h2>Join our community</h2>
          <h3>30-day, hassle-free money back guarantee</h3>
          <p>Gain access to our full library of tutorials along with expert code reviews. 
            Perfect for any developers who are serious about honing their skills.</p>
        </div>

        <div className='community-info'>
          <div className='subscription'>
            <h2>Monthly Subscription</h2>
            <div className='price'>
              <h2>$29</h2>
              <p>per month</p>
            </div>
            <p className='description'>Full access for less that $1 a day</p>
            <button className='btn' type="submit">Sign Up</button>
          </div>
          
          <div className='about'>
            <h2>Why us</h2>
            <ul>
              <li>Tutorials by industry experts</li>
              <li>Peer & expert review</li>
              <li>Coding exercises</li>
              <li>Access to our Github repos</li>
              <li>Community forum</li>
              <li>Flashcard decks</li>
              <li>New videos every week</li>
            </ul>
          </div>
        </div>   
      </div>
    </>
  );
}

export default App;
