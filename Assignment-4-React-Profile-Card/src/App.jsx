import ProfileCard from './ProfileCard.jsx'
import rahulImg from './assets/rahul.jpg'
import priyaImg from './assets/priya.jpg'

function App() {
  return (
    <div className="container">
      <h1>React Profile Card</h1>

      <div className="cards-wrapper">
        <ProfileCard
          name="Rahul Sharma"
          image={rahulImg}
          description="Computer science student who enjoys building web apps, exploring new tech, and spending weekends playing cricket."
        />

        <ProfileCard
          name="Priya Patel"
          image={priyaImg}
          description="Computer science student who enjoys React, UI design, photography, and discovering new places around the city."
        />
      </div>

      <div className="nav-bottom">
        <a href="../index.html" className="nav-link">&larr; Home</a>
        <a href="../Assignment-5-React-Controlled-Form/index.html" className="nav-link">Assignment 5 &rarr;</a>
      </div>
    </div>
  )
}

export default App
