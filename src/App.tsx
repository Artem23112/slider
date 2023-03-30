import Slider from "./components/SliderParts/Slider/Slider";

export type slideType = {
  img: string
  text: string
  id: number
}

export type slidesType = Array<slideType>;

const slides = [
  {
    img: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
    text: 'Caption Text 1',
    id: 1,
  },
  {
    img: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
    text: 'Caption Text 2',
    id: 2,
  },
  {
    img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
    text: 'Caption Text 3',
    id: 3,
  },
];

function App() {

  return (
    <div className="App">
      <div className="container">
        <Slider
          slides={slides}
          maxItemSize={1000}
        />
      </div>
    </div>
  )
}

export default App
