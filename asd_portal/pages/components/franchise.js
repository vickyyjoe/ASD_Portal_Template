import { Component } from "react";
import Link from "next/link";
import Header from "./Header";
import { Accordion, AccordionItem } from 'react-sanfona';
import Counter from "./element/Counter";
import Footer from "./Footer";

var bg1 = "/images/background/bg1.jpg";

const faqContent=[
    {
        question:"1. Web design aorem apsum dolor sit amet?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"2. Graphic design aorem apsum dolor ?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"3. Developement aorem apsum dolor sit amet ? ",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"4. True Responsiveness consectetuer adipiscing ? ",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
    {
        question:"5. Claritas est etiam processus ?",
        answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ratione natus, reiciendis at debitis aliquid. Tenetur sunt id voluptatibus vitae "
    },
]

export class franchise extends Component {
    render() {
      return (
        <div className="skin-1">
        <Header></Header>
            <div class="section-full content-inner bg-white">
                <div class="container">
                    <div class="section-head text-center">
                        <h2 class="title">Procedure</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                <div class="icon-bx-sm bg-primary m-b20"><span class="icon-cell"><i class="flaticon-robot-arm"></i></span> </div>
                                <div class="icon-content p-l40">
                                    <h5 class="dlab-tilte">lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                <div class="icon-bx-sm bg-primary m-b20"><Link href="#" class="icon-cell"><i class="flaticon-factory-1"></i></Link> </div>
                                <div class="icon-content p-l40">
                                    <h5 class="dlab-tilte">lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                <div class="icon-bx-sm bg-primary m-b20"><Link href="#" class="icon-cell"><i class="flaticon-fuel-station"></i></Link> </div>
                                <div class="icon-content p-l40">
                                    <h5 class="dlab-tilte">lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                <div class="icon-bx-sm bg-primary m-b20"><Link href="#" class="icon-cell"><i class="flaticon-conveyor-1"></i></Link> </div>
                                <div class="icon-content p-l40">
                                    <h5 class="dlab-tilte">lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                <div class="icon-bx-sm bg-primary m-b20"><Link href="#" class="icon-cell"><i class="flaticon-engineer-1"></i></Link> </div>
                                <div class="icon-content p-l40">
                                    <h5 class="dlab-tilte">lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.3s">
                            <div class="icon-bx-wraper bx-style-2 m-l40 p-a30 left bg-gray icon-bx-ho">
                                <div class="icon-bx-sm bg-primary m-b20"><Link href="#" class="icon-cell"><i class="flaticon-robot-arm"></i></Link> </div>
                                <div class="icon-content p-l40">
                                    <h5 class="dlab-tilte">lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing  sed diam nibh euismod..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-full overlay-black-dark bg-img-fix text-white content-inner" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                <div class="container">
                    <div class="section-content">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                <div class="m-b30 dlab-box text-center counter-style-2">
                                    <div class="icon-lg ">
                                        <i class="flaticon-factory"></i>
                                    </div>
                                    <div class="text-blue">
                                        <Counter count={7652} />
                                    </div>
                                    <span class="counter-text">Completed Projects</span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                <div class="m-b30 dlab-box text-center counter-style-2">
                                    <div class="icon-lg ">
                                        <i class="flaticon-worker"></i>
                                    </div>
                                    <div class="text-blue">
                                        <Counter count={4562} />
                                    </div>
                                    <span class="counter-text">Happy Clients</span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                <div class="m-b30 dlab-box text-center counter-style-2">
                                    <div class="icon-lg ">
                                        <i class="flaticon-settings"></i>
                                    </div>
                                    <div class="text-blue">
                                        <Counter count={3569} />
                                    </div>
                                    <span class="counter-text">Questions Answered</span>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
                                <div class="m-b10 dlab-box text-center counter-style-2">
                                    <div class="icon-lg ">
                                        <i class="flaticon-conveyor"></i>
                                    </div>
                                    <div class="text-blue">
                                        <Counter count={2089} />
                                    </div>
                                    <span class="counter-text">Ordered Coffee's</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dlab-divider bg-gray-dark tb10"><i class="icon-dot c-square"></i></div>
            <div class="section-full bg-white content-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center">
                                <h2 class="title">Pricing   </h2>
                            </div>
                            <div class="section-content box-sort-in button-example p-tb50">
                                <div class="pricingtable-row">
                                    <div class="row">
                                        <div class="col-sm-12 col-md-4 col-lg-4">
                                            <div class="pricingtable-wrapper">
                                                <div class="pricingtable-inner">
                                                    <div class="pricingtable-price"> <span class="pricingtable-bx">$10</span> <span class="pricingtable-type">Month</span> </div>
                                                    <div class="pricingtable-title bg-primary">
                                                        <h2>Basic</h2>
                                                    </div>
                                                    <ul class="pricingtable-features">
                                                        <li><i class="fa fa-check"></i> Full Responsive </li>
                                                        <li><i class="fa fa-check"></i> Multi color theme</li>
                                                        <li><i class="fa fa-check"></i> With Bootstrap</li>
                                                        <li><i class="fa fa-check"></i> Easy to customize</li>
                                                        <li><i class="fa fa-check"></i> Many Sortcodes</li>
                                                    </ul>
                                                    <div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-4 col-lg-4">
                                            <div class="pricingtable-wrapper">
                                                <div class="pricingtable-inner pricingtable-highlight">
                                                    <div class="pricingtable-price"> <span class="pricingtable-bx">$12</span> <span class="pricingtable-type">Month</span> </div>
                                                    <div class="pricingtable-title bg-primary">
                                                        <h2>Basic</h2>
                                                    </div>
                                                    <ul class="pricingtable-features">
                                                        <li><i class="fa fa-check"></i> Full Responsive </li>
                                                        <li><i class="fa fa-check"></i> Multi color theme</li>
                                                        <li><i class="fa fa-check"></i> With Bootstrap</li>
                                                        <li><i class="fa fa-check"></i> Easy to customize</li>
                                                        <li><i class="fa fa-check"></i> Many Sortcodes</li>
                                                    </ul>
                                                    <div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button ">Sign Up</a> </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-4 col-lg-4">
                                            <div class="pricingtable-wrapper">
                                                <div class="pricingtable-inner">
                                                    <div class="pricingtable-price"> <span class="pricingtable-bx">$18</span> <span class="pricingtable-type">Month</span> </div>
                                                    <div class="pricingtable-title bg-primary">
                                                        <h2>Basic</h2>
                                                    </div>
                                                    <ul class="pricingtable-features">
                                                        <li><i class="fa fa-check"></i> Full Responsive </li>
                                                        <li><i class="fa fa-check"></i> Multi color theme</li>
                                                        <li><i class="fa fa-check"></i> With Bootstrap</li>
                                                        <li><i class="fa fa-check"></i> Easy to customize</li>
                                                        <li><i class="fa fa-check"></i> Many Sortcodes</li>
                                                    </ul>
                                                    <div class="pricingtable-footer"> <a href="javascript:void(0);" class="site-button">Sign Up</a> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-block">
                <div class="section-full overlay-white-middle content-inner" >
                    <div class="container">
                        <div class="section-head text-black text-center">
                            <h3 class="title">Do you have Questions?</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-12 m-b30"> 
                                <div class="faq-video">
                                    <Link class="play-btn popup-youtube" href="/https://www.youtube.com/watch?v=_FRZVScwggM">
                                    <i class="flaticon-play-button text-white"></i></Link>
                                      <img src={"/images/about/pic5.jpg"} alt="" class="img-cover radius-sm"/> 
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 m-b30">
                                <Accordion className="accordian dlab-accordion faq-1 box-sort-in m-b30 faq">
                                    {
                                        faqContent.map(faq =>(
                                            <AccordionItem title={faq.question} className="accodion-title" titleTag="h6">
                                                {faq.answer}
                                            </AccordionItem>  
                                        ))
                                    }
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </div>
      )
    }
}

export default franchise;