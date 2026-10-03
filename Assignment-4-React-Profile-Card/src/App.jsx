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
          description="MCA student who likes web development and cricket."
        />

        <ProfileCard
          name="Priya Patel"
          image={priyaImg}
          description="MCA student interested in React and UI design."
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
