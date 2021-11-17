import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import responsive from './slider-resonsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const content = [
    {
        image: ('.//images/testimonials/pic4.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        image: ('.//images/testimonials/pic5.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        image: ('.//images/testimonials/pic6.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
    {
        image: ('.//images/testimonials/pic5.jpg'),
        author: 'Alexer Valvin',
        designation: 'Student',
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an printer took a galley of type and scrambled it to make ',

    },
]


class Testmonial10 extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            responsive:responsive()
        };
        return (
            <>
                <Slider {...settings} className="testimonial-two-dotsl dots-long d-primary btn-style-1">
                    {content.map((item, id) => (
                        <div class="item p-a5 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="testimonial-9">
                                <div class="testimonial-pic radius style1">
                                <img src={item.image} width="100" height="100" alt=""/>
                                </div>
                                <div class="testimonial-text">
                                    <p>{item.description}</p>
                                </div>
                                <div class="testimonial-detail"> 
                                    <strong class="testimonial-name">{item.author}</strong> 
                                    <span class="testimonial-position">{item.designation}</span> 
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </>
        )
    }
}
export default Testmonial10;