import ProfileCard from './ProfileCard.jsx'
import rahulImg from './assets/rahul.jpg'
import priyaImg from './assets/priya.jpg'

function App() {
  return (
    <div>
      <h1>React Profile Card</h1>

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
  )
}

export default App
