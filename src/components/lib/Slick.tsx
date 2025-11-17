import React from "react";
import Slider from "react-slick";

interface IData {
    day: string;
    title: string;
    content: string;
    images: string[];
}

const Slick = (data: IData) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2200,
        autoplaySpeed: 1000,
        cssEase: "linear",
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {data?.images.map((image, index) => (
                    <div className="mt-4 w-full h-full d-flex justify-center items-center md:w-3/4" key={index} >
                        <img
                            src={image}
                            alt={`Hình ảnh ${data.day}`}
                            className="rounded-lg shadow-md w-full h-[200px]  md:h-[380px] object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slick;
