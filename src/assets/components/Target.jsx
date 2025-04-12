import React from 'react';

const Target = ({data,notify1}) => {
  
    return (
        <div>
          <div class="card card-border bg-base-100 ">
  <div className=" flex flex-col lg:flex-row  justify-around items-center gap-15 p-10">
     <div ><img src={data.image} className='h-[150px] w-[100px]'></img></div>
     <div className='space-y-5'>
        <h1 className='text-2xl font-extrabold'>{data.title}</h1>
        <p className='text-[#0D1321] opacity-70' >{data.description}</p>
        <button className='border-b border-black font-bold ' onClick={()=>notify1()}>Learn More</button>
     </div>
    </div>
  </div>

        </div>
    );
};

export default Target;