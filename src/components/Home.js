import React from 'react'

function Home(props){
    console.warn("home",props.data)
    return(
        <div>

           <h1> My Shopping Hub </h1>
           <div className='cart-wrapper'>
            <div className='img-wrapper item'>
            <img className='image' src="https://www.flinto.com/assets/strike/device_2x-628ca5b34254a7548eb7ad731b2c3b56eb62695aa7d18e532da4b4902f7835fc.png"/>
            </div>

            <div className='text-wrapper item'>
              <span> I-phone </span>
              <span> Price: $1000.00 </span>
            </div>

            <div className='btn-wrapper item'>
            <button type="button" onClick={()=>props.addToCartHandler({price:1000, name:'i-phone 11'})} className="btn btn-danger"> Add To Cart 
            </button>

            <button type="button" onClick={()=>props.removeToCartHandler({price:1000, name:'i-phone 11'})} className="btn btn-primary butt"> Remove To Cart 
            </button>

            </div>

           </div>
        </div>   

    )
};

export default Home;