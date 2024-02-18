import React from 'react'
import Slider from "react-slick";
import Profile from '../assets/profile.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
    {
        id:1,
        name:"RAJESHREE BORKHATRIA",
        text: "Luke, i found to be very committed and dedicated to my goals. Luke’s many disciplined attributes include: 1) Luke encourages on me focusing on my techniques within my bespoke exercise program…..so minimum talking whilst exercising 💪💪, 2) Luke adapts my exercise plan to my well- being🙏 Greatly appreciated as not all days are the same., 3) We review my exercise plan regularly., 4) Luke listens well and is supportive when for example my strength goal in weights becomes reduced. Luke will provide supportive, professional advice and explanation. Thank you, Luke. I highly recommend Luke if you want to achieve personal targets, smartly💪💪",
        img:Profile,
    },
    {
        id:2,
        name:"S R",
        text: "As a 55 year old regular gym goer, I started with Luke back in August of 2023 with the goal of shedding body fat and increasing strength, flexibility and muscle mass. My workouts up to this point were becoming less and less effective.  Luke took time in his initial consultation to get as much information as possible from me regarding my goals and current activity levels and designed a program for me to challenge me beyond my comfort zone and to stretch my limits. The program focused mainly on free weights and body weight exercises, although there was some machine work interspersed with some very effective stretching exercises. Luke would take me through a mixture of known exercises and new exercises each week during our session, which I would then repeat during my alone sessions during the week. I also engaged Luke separately to draw up a nutrition plan for me alongside my PT regime to help me shed the fat and gain muscle. After four months of regular sessions, my whole family noticed a difference in my body composition and I felt more energetic and stronger.  I would recommend Luke to anybody looking to fulfil specific fitness (and nutrition) goals and who needs an expert accountability partner to keep them on track.",
        img:Profile,
    },
    {
        id:3,
        name:"Vinay Krishna CA",
        text: "He is a fantastic trainer. I went to him as I was suffering with knee issues. It required strengthening of quads, glutes, calf muscles and overall strength of my lower half. It needed specific focus and customised training to suit my needs. Luke is great trainer and helped me over several weeks and now I am able to go about my normal life. Luke changed types of exercises regularly to ensure overall strength improves, not just specific problem areas. After initial weeks of building flexibility and strength, he pushed me to increase weights to continue building strength. I never realised, I could do such things. It has changed my overall outlook.",
        img:Profile,
    },
    {
        id:4,
        name:"Donna Whitney",
        text: "I have completed a 6 month personal training programme with Luke and really enjoyed gaining confidence in the gym. He was able to help me achieve my goal of strength building whilst protecting an old back injury.",
        img:Profile,
    },
    {
        id:5,
        name:"Artur Filip Lezny",
        text: "I have never before used any PT services in my life. And I regret it thoroughly after working with Luke. It feels like my distance to achieving my goals has shrunk immensely. I'm saving time, frustration, gaining skills and to some extent a new friend. I can't recommend Luke enough. Why? He listens, cares about me, my health and my targets, in a way, they become his targets; and it's way easier to have someone along the way that I can depend on, than taking this journey on your own! Ps. He's the real reason why I'm not changing a gym right now even though there is a handful of cheaper ones around. You can't replace a great PT like him easily.",
        img:Profile,
    },
    {
        id:6,
        name:"Maria Fernanda Escalante Lozano",
        text: "Luke is a very good trainer!, he explains all the exercises patiently and you can tell that he is well prepared",
        img:Profile,
    },
];

const Testimonial = () => {

    var settings = {
        dots:true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        SlidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    SlidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 2,
                    SlidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    SlidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <div name='testimonial' className='py-10 mb-10 flex justify-center items-center'>
        <div className='container'>
            {/* Header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>

                <h1 className='text-3xl font-bold'>
                   Testimonials
                </h1>
                
                <p className='text-l text-black'>
                    Here is what some of my clients have had to say
                </p>
                
            </div>

            {/* Testimonnial Cards */}
            <div className='text-center'>
                <Slider {...settings}>{
                    TestimonialData.map((data) => (
                        <div className='my-6'>
                        <div
                        key={data.id}
                        className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-black bg-black/10 relative'
                        >
                            <div className='mb-4'>
                                <img src={data.img} alt="" 
                                className='rounded-full w-20 h-20'
                                />
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-3'>
                                    <p className='text-xs text-white'>{data.text}</p>
                                    <h1 className='text-xl font-bold text-orange-400 dark:text-light'>{data.name}</h1>
                                </div>
                            </div>
                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                        </div>
                        </div>
                    ) )
                }
                </Slider>


            </div>
        </div>
    </div>
  )
}

export default Testimonial
