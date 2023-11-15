import ClockHead from './components/ClockHead';
import ClockTitle from './components/ClockTitle';
import CurrentTime from './components/CurrentTime';
import './App.css'

function App() {
  return (
    <center>
      <ClockHead></ClockHead>
      <ClockTitle></ClockTitle>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App
