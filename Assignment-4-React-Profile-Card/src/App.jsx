import ProfileCard from './ProfileCard.jsx'

function App() {
  return (
    <div>
      <h1>React Profile Card</h1>

      <ProfileCard
        name="Rahul Sharma"
        image="https://randomuser.me/api/portraits/men/32.jpg"
        description="MCA student who likes web development and cricket."
      />

      <ProfileCard
        name="Priya Patel"
        image="https://randomuser.me/api/portraits/women/44.jpg"
        description="MCA student interested in React and UI design."
      />
    </div>
  )
}

export default App
