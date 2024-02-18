import React from 'react';
import { useSpring, animated } from 'react-spring';
import pic1 from '../assets/LukeHandstand.jpg';
import pic2 from '../assets/skillhold.jpg';
import pic3 from '../assets/lever.jpg';

const About = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 280, friction: 60 }, // Adjust these values for different transition effects
  });

  return (
    <animated.div name='about' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4' style={props}>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-6 object-cover w-full h-full p-2' src={pic1} alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={pic2} alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src={pic3} alt="/" />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>About Me</h3>
        <p className='text-2xl py-6'>Hi. My name is Luke</p>
        <p className='pb-6 '>I have a passion for bodyweight strength and advanced 
            callisthenics skills training. I have been training in this style for 10 
            years and have acquired a wealth of experience and knowledge which could 
            benefit others who want to progress towards similar goals. I am also adept 
            at using free weights and resistance machines for anyone looking to build 
            muscle and improve their physique. My interest and knowledge of nutritional
            science is used alongside my personal training to provide personalised dietary 
            advice. As a nutritional therapist I also have the qualifications and experience 
            to provide a more complete nutritional package for those who are dealing with 
            chronic disease and want to improve their health in general. If you would 
            like to discuss your goals and find out more, please contact me for a
              free 15-minute consultation.
          </p>
      </div>
    </animated.div>
  );
};

export default About;
