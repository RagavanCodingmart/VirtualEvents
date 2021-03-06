import './App.css';
import EcoTwoToneIcon from '@material-ui/icons/EcoTwoTone';
import Video from './components/chat/video/video';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Virtual Event<span><EcoTwoToneIcon /></span>
      </header>
      <Video />
    </div>
  );
}

export default App;
