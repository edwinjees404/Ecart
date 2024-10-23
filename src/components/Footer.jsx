import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='min-h-80 bg-violet-900 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
      <div className="">
      <h1 className='text-white text-3xl'><FontAwesomeIcon icon={faCartShopping} shake />E-CART</h1>
      <p className='text-white mt-4 text-justify text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ut tempora beatae cupiditate eveniet distinctio consectetur odio! Iure alias temporibus at voluptas cupiditate nihil provident possimus mollitia. Provident, placeat explicabo.</p>
      </div>
      <div className="flex justify-center">
        <div>
          <h1 className='text-white text-3xl text-center'>Links</h1>
          <Link to={'/'}><p className='mt-2 text-white '>Home</p></Link>
          <Link to={'/wishlist'}><p className='mt-2 text-white r'>Wishlist</p></Link>
          <Link to={'/cart'}><p className='mt-2 text-white '>Cart</p></Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <h1 className='text-center text-white text-3xl'>Guides</h1>
          <p className='mt-2 text-white '>React</p>
          <p className='mt-2 text-white '>React-Bootstrap</p>
          <p className='mt-2 text-white '>Bootswatch</p>
        </div>
      </div>
      <div className="">
        <h1 className='text-white text-3xl'>Contact Us</h1>
        <input type="text" className='form-control w-1/2 p-2 rounded' placeholder='Email id' />
        <button className='bg-orange-500 text-white  p-2 rounded ms-2 mt-3'>
          Subscribe
        </button>
        <div className='flex justify-between mt-4 text-white text-3xl p-3'>
      <FontAwesomeIcon icon={faXTwitter} />
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      </div>
      </div>
      
    </div>
  )
}

export default Footer
