import { Component } from "react";
import { Parallax } from "react-parallax";
import Link from "next/link";
import Header from "./Header";
import CounterSection from "./element/CounterSection";
import Counter from "./element/Counter";
import Testimonial from "./element/Testimonial";
import Footer from "./Footer";
import ServicesSlider3 from './element/servicesSlider3';
import {projectContent1,serviceContent2,homeSliderContent4} from './element/SliderContent'

const bg = "/images/banner/bnr2.jpg";
const bg2 = "/images/background/bg4.jpg";
const bg3 = "/images/background/map-bg.png";
const bg4 = "/1.jpg";
var bg1 = "/images/background/bg1.jpg";


export class services extends Component {
    render() {
      return (
        <div className="skin-1">
        <Header></Header>
            <div class="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div class="container">
                    <div class="dlab-bnr-inr-entry">
                        <h1 class="text-white">Services</h1>
                        <div class="breadcrumb-row">
                            <ul class="list-inline">
                                <li><Link href="/">Home</Link></li>
                                <li>Services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-block">
                <div class="section-full content-inner bg-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-md-12">
                                <div class="section-head text-black">
                                    <h2 class="title">Our Services</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div class="section-content row">
                                    <div class="col-lg-6 col-md-6 service-box style3">
                                        <div class="icon-bx-wraper" data-name="01">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-robot-arm"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Mechanical Works</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 service-box style3">
                                        <div class="icon-bx-wraper" data-name="02">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-factory-1"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Power &amp; Energy</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 service-box style3">
                                        <div class="icon-bx-wraper" data-name="03">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-fuel-station"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Petroleum Refinery</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 service-box style3">
                                        <div class="icon-bx-wraper" data-name="04">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-fuel-truck"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Oil &amp; Gas Industry</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 service-box style3">
                                        <div class="icon-bx-wraper" data-name="05">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-conveyor-1"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Automative Manufacturing</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 service-box style3">
                                        <div class="icon-bx-wraper" data-name="06">
                                            <div class="icon-lg">
                                                <Link href="#" class="icon-cell"><i class="flaticon-engineer-1"></i></Link>
                                            </div>
                                            <div class="icon-content">
                                                <h2 class="dlab-tilte">Chemical Research</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12">
                                <div class="sticky-top m-b30">
                                    <form class="inquiry-form inner">
                                        <h3 class="title m-t0 m-b10">Let's Convert Your Idea into Reality</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                                        <button name="submit"  class="site-button button-lg"> Go to franchise </button>
                                    </form>	
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-full content-inner bg-gray wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                <div class="container">
                    <div class="section-head text-black text-center">
                        <h2 class="title">Tools</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <ServicesSlider3 
                            data={serviceContent2}
                            iconWrapperCls="icon-xl m-b20 text-primary radius"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
      )
    }
}

export default services;