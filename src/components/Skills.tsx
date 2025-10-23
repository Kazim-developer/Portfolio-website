import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div className="carousels w-[90%] max-w-[900px] mx-auto my-[3em]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
      >
        <SwiperSlide>
          <Skill skillName={"HTML"} path={"./images/html.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <Skill skillName={"CSS"} path={"./images/css.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <Skill skillName={"Javascript"} path={"./images/js.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <Skill skillName={"React"} path={"./images/react.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <Skill skillName={"Typescript"} path={"./images/typescript.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <Skill skillName={"Tailwind"} path={"./images/tailwind.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <Skill skillName={"SASS"} path={"./images/sass.webp"} />
        </SwiperSlide>
        <SwiperSlide>
          <Skill skillName={"Git"} path={"./images/git.webp"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
