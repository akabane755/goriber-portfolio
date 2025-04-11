import React from 'react';

const Card = ({data}) => {
    console.log(data.id);
    return (
        <div class=" bg-base-100 shadow-sm mb-8 flex justify-around">
        <div class={` flex flex-col justify-center items-center space-y-4  ${data.id&1?"hidden":""}`}>
    <h2 class="card-title text-3xl text-[#0D1321B3]">{data.title}</h2>
    <p className='text-xl text-[#0D1321]'>{data.description}</p>
    <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Learn More</button>

  </div>
  <figure className='max-h-[300px] max-w-[300px] object-cover'>
    <img src={data.image}  alt="Album" />
  </figure>
  <div class={` flex flex-col justify-center items-center space-y-4  ${data.id&1?"":"hidden"}`}>
    <h2 class="card-title text-3xl text-[#0D1321B3]">{data.title}</h2>
    <p className='text-xl text-[#0D1321]'>{data.description}</p>
    <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Learn More</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Man how much more do you wanna learn!</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  </div>
</div>
    );
};

export default Card;