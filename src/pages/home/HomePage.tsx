import {HomeCarousel, CarouselProps} from "./components/HomeCarousel"

const HomePage : React.FC = () => {
  const carouselProps : CarouselProps = {
    images : [
      ["1", "Image 1"],
      ["2", "Image 2"]
    ]
  }

  return(
    <div className="HomePage w-screen flex flex-col justify-center items-center">
      <HomeCarousel images={carouselProps.images} />
    </div>
  )
}

export default HomePage