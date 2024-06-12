import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { WiDayCloudy } from 'react-icons/wi';

export default function splide() {

    return (
        <>

            <div className="head-splide">
                <Splide
                    options={{
                        type: 'loop',
                        autoplay: 'play',
                        pauseOnHover: false,
                        interval: 1300,
                        perPage: 1,
                        perMove: 1,
                        heightRatio: '0.5',
                        pagination: false
                    }}

                >
                    <SplideSlide>
                        <img src="1.jpg" alt="Image 1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="2.jpg" alt="Image 2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="3.jpg" alt="Image 3" />
                    </SplideSlide>


                </Splide >

                <div className="image-polygon">

                </div>
            </div>







        </>
    )
}
