import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function App() {
  
  return (
    <div className="">
      <Swiper
      navigation
      direction={"horizontal"}
      pagination = {{
        clickable: true,
        
    }}
      modules = {[Pagination]}
      className = "mySwiper pt-20 m-10"
      >
          <SwiperSlide className="flex justify-center align-middle items-center">
            <Personal />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center align-middle items-center">
            <Experience />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center align-middle items-center">
            <Education />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default App
