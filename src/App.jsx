import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import Card from './assets/components/Card';
import Target from './assets/components/Target';
import Ctarget from './assets/components/Ctarget';
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [arr,setArr]=useState([]);
  const [Targetarr,setTargetarr]=useState([]);
  const [ctargetarr,setCtargetarr]=useState([]);
   useEffect(()=>{
        fetch("Cards.json").then(res=>res.json()).then(data=>setArr(data));
        fetch("Target.json").then(res=>res.json()).then(data=>setTargetarr(data));
        fetch("Ctarget.json").then(res=>res.json()).then(data=>setCtargetarr(data));

   },[]);
  console.log(ctargetarr);
  const notify = () => toast("Bold of u to assume that I know more than this -,-!");
  const notify1 = () => toast("Wow new things to learn! Mendokusaiiiii -x-");
  const notify2 = () => toast("No don't!");
  return (
    <>
      <html lang='en' data-theme="light"></html>
      <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      </div>
    <a class="btn btn-ghost text-2xl font-bold ">Lamiya.RK</a>
  </div>
  <div class="navbar-end">
    <a class="btn bg-white border-black">Download Resume</a>
  </div>
</div>
<div
  class="hero  bg1 ">
  <div ></div>
  <div class="hero-content  text-center">
    <div className='lg:max-w-[60%]'>
   <div ><img src="https://i.ibb.co.com/wN9ZjkF2/vector-illustration-programmer-flat-design-style-844724-3931.jpg" className='h-[290px] mx-auto'></img></div> 
      <h1 class="mb-5 text-5xl font-bold">"In the near future, I hope to become a Developer."</h1>
      <p class="mb-5 text-gray-600">
      Passionate web developer skilled in building responsive, user-friendly websites using modern technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. Focused on clean code, smooth UX, and bringing creative ideas to life.
      </p>
    <a href="#contact"><button class="btn btn-neutral" onClick={notify2}>Contact with me</button></a>  
    </div>
  </div>
</div>
<div className='bg-[#0D132105] '>
<div className='text-center w-[90%] mx-auto p-[97px] bg-white'>
  <h1 className='text-4xl font-bold'>Why Web Development??</h1>
  <p className='text-xl text-gray-600 w-[70%] mx-auto my-6' >Web development lets me blend creativity with logic. I love turning ideas into interactive experiences, and the fast-paced evolution of web technologies keeps me constantly learning and growing.</p>
  <div >
    {
      arr.map(data=><Card data={data}></Card>)
    }
  </div>
</div>
</div>
<div className='w-[90%]  flex flex-col justify-center mt-[150px] gap-5 '>
  <h1 className='text-4xl font-bold text-center '>My Inspiration</h1>
  <p  className='text-center  mx-auto bg-white  text-gray-600 text-xl '> This image inspires me to keep growing and pushing my boundaries in tech.🌟</p>
  <img src='https://i.ibb.co.com/ZzPvFBBj/I-live-for-two-reasons-1-I-was-born-2-I-haven-t-d.jpg' className='w-[500px] h-[500px] mx-auto'></img>
  

</div>
<div>
<h1 className='text-4xl font-bold text-center mt-[150px] '>My Current Target</h1>
<p  className='text-center  mx-auto bg-white my-5 text-gray-600 text-xl '> I'm currently focused on building a strong foundation in HTML, CSS, and JavaScript — the core technologies of web development.</p>
<div className='w-[90%] mx-auto gap-10 flex' >
    {
      ctargetarr.map(data=><Ctarget data={data} notify={notify}></Ctarget>)
    }
  </div>
</div>
<div>
<h1 className='text-4xl font-bold text-center mt-[150px] '>My Next Target</h1>
<p  className='text-center  mx-auto bg-white my-5 text-gray-600 text-xl '> I'm now aiming to learn React.js,Next.js and MongoDB to become a full-stack MERN developer. Time to level up! 🚀</p>
<div className='w-[90%] mx-auto gap-10' >
    {
      Targetarr.map(data=><Target data={data} notify1={notify1}></Target>)
    }
  </div>
</div>
<div
  class="hero w-[90%] mx-auto bg2">
  <div class="hero-overlay"></div>
  <div class="hero-content text-neutral-content text-center">
    <div class="w-[70%]">
      <h1 class="mb-5 text-4xl font-bold ">I Need Support</h1>
      <p class="mb-5">
      m still learning and growing in my journey as a developer. Sometimes things get challenging, and that's okay — I'm not afraid to ask for help. Whether it's guidance, feedback, or just a little encouragement, your support means a lot and keeps me moving forward. 
      </p>
      <input type="text" placeholder="Suggest me any feedback for me" class="input text-gray-600"/>
      <button class="btn bg-white mx-4">Get Started</button>
    </div>
  </div>
</div>
<footer className='flex justify-between text-2xl font-bold p-3 bg-gray-50 mt-[100px] ' id="contact">
<p>An Open Commitment by Lamiya Rahman Khan</p>
<div className='flex gap-3'>
<FaGithub />
<BsFacebook color='blue' />
<FaLinkedin color='#2489BE'/>

</div>

</footer>
<ToastContainer />
    </>
  )

}
export default App
