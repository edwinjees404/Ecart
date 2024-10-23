import { faBackward, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem } from '../redux/slices/cartSlice'



function Cart() {
  const[total ,setTotal]=useState(0)

  const cartArray = useSelector((state)=>state.cartItem)
  console.log(cartArray);

  const dispatch = useDispatch()
  const navigate =useNavigate()

  


  
  const getTotal = ()=>{
    if(cartArray.length>0)
    {setTotal(cartArray?.map((item)=>item.price)?.reduce((n1,n2)=>n1+n2))}
  }
  console.log(total);
  

  const handleCheckout =()=>{
    alert('order placed successfully')
    dispatch(emptyCart())
    navigate('/')

  }

  useEffect(()=>{
    getTotal()

  },[cartArray])

  return (
    <>
    <div className='pt-32'>
      <h1 className='text-center text-4xl text-violet-900' >Cart</h1>

      {cartArray?.length>0?
        
        <div className='md:grid grid-cols-[2fr_1fr] my-10'>
        <div className='md:py-5 md:px-20'>
          <table className='w-full border border-gray-400'>
            <thead>
              <tr>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>#</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Title</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Image</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Price</th>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray?.map((item, index)=>(
                <tr>
                <td className='border border-gray-100 p-3'>{index+1}</td>
                <td className='border border-gray-100 p-3'>{item?.title}</td>
                <td className='border border-gray-100 p-3 flex justify-center'><img src={item?.image} alt="noimage" style={{width:"150px", height:"150px"}} /></td>
                <td className='border border-gray-100 p-3'> ${item?.price}</td>
                <td className='border border-gray-100 p-3'><button onClick={()=>dispatch(removeCartItem(item?.id))} className='bg-red-700 p-3 text-white rounded'><FontAwesomeIcon icon={faTrashCan} /></button></td>
              </tr>
              ))
                }

            </tbody>
          </table>
        </div>
        <div  className=' pt-5 px-10' >
          <div className='p-3 shadow-lg '>
            <h1 className='text-center text-3xl'>Cart Summary</h1>
            <p className='mt-4 text-xl '>Total number of products : {cartArray?.length}</p>
            <p className='mt-4 text-xl '>Grand Total : ${total}</p>
            <button onClick={handleCheckout} className='w-full bg-green-500 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600'>Checkout</button>





          </div>

        </div>

      </div>

      :

      <div className='w-full mt-10 md:grid grid-cols-3'>
        <div></div>
        <div className='flex justify-center items-center flex-col my-10'>
          <img src="https://evyapari.com/static/media/empty_cart.45e2dadaaca71284eb3a.jpg" className='w-full h-80' alt="" />
          <p className='text-center text-violet-800 text-3xl'>Your cart is empty</p>
          <Link to={'/'}><button  className='bg-green-500 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} className='me-2'/>Back home</button></Link>
        </div>
        <div></div>
      </div>}

    </div>
    
    </>
  )
}

export default Cart