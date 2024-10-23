import React, { useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const wishlistArray = useSelector((state)=>state.wishlist)
  console.log(wishlistArray);
  
  const cartArray = useSelector((state)=>state.cartItem)
  console.log(cartArray);
  


  const [show, setShow] = useState(false);

  const change = () => {
    setShow(!show);
  }

  return (
    <>
      <div className='min-h-20 bg-violet-900 w-100 text-white flex items-center '>
        <div className='flex w-full px-5'>
          <Link to={'/'}>
            <h4 className='text-3xl w-60px py-3'>
              <FontAwesomeIcon icon={faCartShopping} />
              E-cart
            </h4>
          </Link>
          <button onClick={change} className='border border-white p-2 rounded ms-auto md:hidden'>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {show &&    
          <div className='mt-4 flex md:hidden'>
            <Link to={'/wishlist'}>
              <button className='flex items-center p-4 border border-white rounded me-4 hover:bg-white hover:text-violet-900'>
                <FontAwesomeIcon icon={faHeart} className='me-2' style={{color:'red'}} />
                Wishlist 
                <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>8</span>
              </button>
            </Link>
            <Link to={'/cart'}>
              <button className='flex items-center p-4 border border-white rounded me-4 hover:bg-white hover:text-violet-900'>
                <FontAwesomeIcon icon={faCartShopping} className='me-2' style={{color:'green'}} />
                Cart 
                <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>3</span>
              </button>
            </Link>
          </div>
        }

        <div className='md:flex ms-auto hidden'>
         <Link to={'/wishlist'}>
            <button className='flex items-center p-4 border border-white rounded me-4 hover:bg-white hover:text-violet-900'>
              <FontAwesomeIcon icon={faHeart} className='me-2' style={{color:'red'}} />
              Wishlist 
              <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{wishlistArray?.length}</span>
            </button>
         </Link>
          <Link to={'/cart'}>
            <button className='flex items-center p-4  border border-white rounded me-4 hover:bg-white hover:text-violet-900'>
              <FontAwesomeIcon icon={faCartShopping} className='me-2' style={{color:'green'}} />
              Cart 
              <span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{cartArray?.length}</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
