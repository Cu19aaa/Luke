import React from 'react'
import { useSpring, animated } from 'react-spring';
import pic1 from '../assets/LukeHandstand.jpg';
import pic2 from '../assets/skillhold.jpg';
import pic3 from '../assets/lever.jpg';
import badge from '../assets/badge.png';

const Qualifications = () => {
    const props = useSpring({
        opacity: 1,
        transform: 'translateY(0)',
        from: { opacity: 0, transform: 'translateY(50px)' },
      });
    
      return (
        <animated.div name='about' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4' style={props}>
          {/* Left Side */}
          <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Qualifications & Skills</h3>
            <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-2 border-b-2 border-gray-600 py-8 px-4'>
        <div>
            <h6 className='font-bold uppercase pt-2'>Qualifications</h6>
            <ul>
                <li className ='py-1 hover:text-xl'>Level 3 Personal Trainer</li>
                <li className ='py-1 hover:text-xl'>BSc in Biomedical Sciences</li>
                <li className ='py-1 hover:text-xl'>MSc in Personalised Nutrition</li>
                <li className ='py-1 hover:text-xl'>Nutritional Therapist & Health Coach</li>
                <li className ='py-1 hover:text-xl'>NLP Coach</li>
                <li className ='py-1 hover:text-xl'>BANT & CNHC registered</li>
            </ul>
        </div>
        <div>
            <h6 className='font-bold uppercase pt-2'>Specialist Skills</h6>
            <ul>
                <li className ='py-1 hover:text-xl'>Advanced callisthenics skills</li>
                <li className ='py-1 hover:text-xl'>Handstands</li>
                <li className ='py-1 hover:text-xl'>Bodyweight and free weight training</li>
                <li className ='py-1 hover:text-xl'>Personalised dietary and lifestyle advice for health problems and weight loss</li>
                <li className ='py-1 hover:text-xl'>Advanced laboratory testing and nutraceutical support</li>
            </ul>
        </div>
      </div>
    </div>
  {/* Right Side */}
  <div className='py-10 mb-10 flex justify-center items-center'>
        <img className='row-span-4 object-cover w-full h-full p-2' src={badge} alt="/" style={{width:'450px'}} />
      </div>


          
          
        </animated.div>
      );
}

export default Qualifications
