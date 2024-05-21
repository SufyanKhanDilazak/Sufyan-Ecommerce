import React from 'react'
import Card from './Card'
import { Card2 } from './Card2'
import Image from 'next/image'
import acc from "../../../public/pics/acc.jpg"
import cloth from "../../../public/pics/cloth.jpg"

const Main = () => {
  return (
  <div className="main ">
    <div className='Container1 h-screen bg-black grid mobile:grid-cols-[1fr,1fr] mobile:grid-rows-[130px,280px,80px,140px] sm:grid-cols-[1fr,500px,1fr] sm:grid-rows-[140px,310px,80px,130px,] md:grid-cols-[1fr,500px,1fr] md:grid-rows-[140px,310px,80px,130px,] lg:grid-cols-[1fr,500px,1fr] lg:grid-rows-[140px,310px,80px,130px,] xl:grid-cols-[1fr,800px,1fr] xl:grid-rows-[120px,440px,80px,140px,] 2xl:grid-cols-[1fr,500px,1fr] 2xl:grid-rows-[140px,310px,60px,120px,]'>
        <div className="heading flex justify-center  sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 mt-6 mobile:col-start-1 mobile:col-end-3 mobile:row-start-1 mobile:row-end-2 mobile:mt-3 text-white">
<span className='text-red-900 text-8xl font-serif'>T</span><h1 className='mt-8 font-serif text-5xl mobile:text-3xl mobile:mt-9'>enderloin</h1> </div>
<div className="smallheading flex sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 mobile:col-start-1 mobile:col-end-3 mobile:row-start-1 mobile:row-end-2 text-white justify-center mt-24 mobile:mt-20 py-1 ml-12 font-thin "> <h6>Wear Premium</h6> </div>
<div className="card sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 mobile:col-start-1 mobile:col-end-3 mobile:row-start-2 mobile:row-end-3 "><Card/></div>
<div className="heading2 flex justify-center items-center text-4xl mobile:text-2xl font-bold font-serif text-gray-300 bg-red-950 rounded-md mobile:mt-4 h-14 sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4 mobile:col-start-1 mobile:col-end-3 mobile:row-start-3 mobile:row-end-4">Bag Collection</div>
<div className=" flex justify-center items-center card2 sm:col-start-2 sm:col-end-3 sm:row-start-4 sm:row-end-5 mobile:col-start-1 mobile:col-end-3 mobile:row-start-4 mobile:row-end-5"><Card2/></div></div>


    <div className="container2 h-screen grid mobile:grid-cols-[1fr,1fr] gap-2 mobile:grid-rows-[100px,320px,320px,] sm:grid-cols-[1fr,500px,1fr] sm:grid-rows-[60px,340px,340px,] md:grid-cols-[1fr,550px,1fr] md:grid-rows-[50px,350px,350px,] lg:grid-cols-[1fr,620px,1fr] lg:grid-rows-[50px,360px,360px,] xl:grid-cols-[1fr,600px,1fr] xl:grid-rows-[50px,350px,350px,] 2xl:grid-cols-[1fr,200px,1fr] 2xl:grid-rows-[80px,290px,200px,] bg-gray-400 py-1">
      <div className="flex items-center justify-center  mobile:col-start-1 mobile:col-end-3 mobile:row-start-1 mobile:row-end-2  sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-2 bg-orange-600 rounded-md  mobile:h-8 mobile:mt-3 "><h1 className=' text-gray-950 mobile:text-base text-2xl font-serif font-extrabold  '>Flat 40% Off On Summer Collection</h1> </div>
      <div className=" flex justify-center heading  mobile:col-start-1 mobile:col-end-3 mobile:row-start-2 mobile:row-end-3  sm:col-start-2 sm:col-end-3 sm:row-start-2 sm:row-end-3 mobile:text-2xl mobile:font-bold mobile:font-sans"><h1 className='mobile:font-bold mobile:font-sans bg-red-950 rounded-lg mobile:h-10 sm:h-10 md:h-10 lg:h-11 xl:h-10 2xl:h-10  w-96 flex items-center justify-center text-gray-300'>Accessories </h1></div>
      <div className="image flex justify-center items-center  mobile:col-start-1 mobile:col-end-3 mobile:row-start-2 mobile:row-end-3 sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-3"><Image className='mobile:h-64 sm:h-72 md:h-72 lg:h-72 xl:h-72 rounded-md mobile:mt-12' src={acc} width={500} height={500} alt='shoes'></Image></div>
      <div className=" flex justify-center heading  mobile:col-start-1 mobile:col-end-3 mobile:row-start-3 mobile:row-end-4  sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4"><h1 className='mobile:text-2xl mobile:font-bold mobile:font-sans bg-red-950 rounded-md h-10 w-96 text-gray-300 flex items-center justify-center mobile:h-10 sm:h-10 md:h-10 lg:h-11 xl:h-10 2xl:h-10  '>Clothing</h1></div>
      <div className="image2 flex justify-center items-center mobile:col-start-1 mobile:col-end-3 mobile:row-start-3 mobile:row-end-4 sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4"><Image className='mobile:h-64 sm:h-72 md:h-72 lg:h-72 xl:h-72   rounded-md mobile:mt-10' src={cloth} width={500} height={500} alt='clothes'></Image></div>
    </div>


    <div className="container3 h-screen bg-gray-500 grid gap-2  mobile:grid-cols-[1fr,1fr] mobile:grid-rows-[60px,130px,130px,130px,130px,40px] sm:grid-cols-[1fr,1fr,1fr,1fr] sm:grid-rows-[80px,130px,150px,150px,150px,150px,30px] md:grid-cols-[1fr,1fr,1fr,1fr] md:grid-rows-[80px,130px,150px,150px,150px,150px,30px] lg:grid-cols-[1fr,1fr,1fr,1fr] lg:grid-rows-[80px,130px,150px,150px,150px,150px,30px] xl:grid-cols-[1fr,1fr,1fr,1fr] xl:grid-rows-[80px,130px,150px,150px,150px,150px,30px] 2xl:grid-cols-[1fr,1fr,1fr,1fr] 2xl:grid-rows-[80px,130px,150px,150px,150px,150px,30px]  ">
    </div>
  

    </div>
    
  )
}

export default Main