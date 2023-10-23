import './App.css';
import UserProfile from './components/UserProfile.js';

function App() {
  return (
    <>
      <h2>
        Hello World
      </h2>
      <p>
        Hello World but small
      </p>
      <UserProfile firstName="Olle" lastName="Brundin" description="Jag bor i Kalmar o så" />
    </>
  );
}

export default App;