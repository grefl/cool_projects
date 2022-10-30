import './App.css'
import image1 from './assets/one.jpg';
import image2 from './assets/two.jpg';
import Slider from './slider.jsx';

function App() {
  const images = {image1, image2};
  const options = {};
  const props = {...images, options};
  return (
    <div className="App">
    <Slider {...images} />
    </div>
  )
}

export default App
