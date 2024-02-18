import React from 'react';
import Profile from '../assets/profile.jpg'
import handgraph from '../assets/handstand service.png'
import dumbbell from '../assets/dumbbell service.png'
import nutrition from '../assets/nutrition service.png'

const Cards = () => {
  return (
    <div name='service' className='w-full py-[10rem] px-4 bg-white'>
        <div className='text-center sm:text-center pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-black mt-10 mb-10'>Services I Offer</p>
                </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] border-black border-2 bg-white' src={handgraph} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Handstand Classes</h2>
              <p className='text-center text-4xl font-bold'>£15/hr</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Every saturday by 11am</p>
                  <p className='py-2 border-b mx-8'>Learn handstands with a group of other people at your level</p>
                  <p className='py-2 border-b mx-8'>Individual attempts and corrections by a qualified professional</p>
                  <p className='py-2 border-b mx-8'>Learn and grow with everyone in the group</p>
              </div>
              {/*<button className='bg-orange-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-200'>Book Now</button>*/}
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] border-black border-2 bg-white' src={nutrition} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Nutrition service</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Personalised dietary and lifestyle advice</p>
                  <p className='py-2 border-b mx-8'>Bespoke nutrition & lifestyle programme</p>
                  <p className='py-2 border-b mx-8'>Programmes to support your digestive system</p>
              </div>
              <button className='bg-orange-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-200'>
                    <a href="https://ancestralroots.co.uk" target="_blank" className="text-black block w-full h-full">Enquire</a>
              </button>
          </div>


          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] border-black border-2 bg-transparent' src={dumbbell} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Personal Trainer Services</h2>
              <p className='text-center text-4xl font-bold'>£40/hr</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Workouts to reach specific goals</p>
                  <p className='py-2 border-b mx-8'>Targeted skill training</p>
                  <p className='py-2 border-b mx-8'>Strength building training</p>
                  <p className='py-2 border-b mx-8'>Fitness goal training</p>
              </div>
              {/*<button className='bg-orange-600 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-200'>
                <a href="contact" className="text-white block w-full h-full">Book Now</a>
  </button>*/}
          </div>
          
      </div>
    </div>
  );
};

export default Cards;
