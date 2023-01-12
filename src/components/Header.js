import React from 'react'

function Header(props){
    console.warn("header",props.data)
    return(
        <div>
        <div className='add'>
        <span className='mine'>{props.data.length}</span>
            <img className='cart' src='https://static.vecteezy.com/system/resources/previews/000/500/163/non_2x/vector-add-to-cart-icon-design.jpg'  />
        </div>
     </div>   

    )
};

export default Header;