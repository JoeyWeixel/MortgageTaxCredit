import { Separator } from "@radix-ui/react-separator"
import {HomeCarousel, CarouselProps} from "./components/HomeCarousel"
import HomeTextInfo from "./components/HomeTextInfo"

const HomePage : React.FC = () => {
  const carouselProps : CarouselProps = {
    images : [
      ["1", "Image 1"],
      ["2", "Image 2"]
    ]
  }

  return(
    <div className="HomePage w-screen flex flex-col justify-center items-center gap-4">
      <HomeCarousel images={carouselProps.images} />
      <Separator className="w-11/12 bg-secondary border-[0.5px]" />
      <HomeTextInfo />
      <Separator className="w-11/12 bg-secondary border-[0.5px]" />
    </div>
  )
}

export default HomePage