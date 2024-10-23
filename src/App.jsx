import { useState } from "react"
function App() {
  const [items,setItems]=useState([{
    id:0,
    itemname:"jordan 4",
    price:12,
    src:"jordan4.jpg",
    quantity:0
  },
  {
    id:1,
    itemname:"jordan 11",
    price:15,
    src:"img1.jpg",
    quantity:0
  },
  {
    id:2,
    itemname:"jordan 4",
    price:19,
    src:"img2.jpg",
    quantity:0
  },
  {
    id:3,
    itemname:"airforce 1",
    price:11,
    src:"img3.jpg",
    quantity:0
  }
  ,
  {
    id:4,
    itemname:"airforce high",
    price:23,
    src:"img4.jpg",
    quantity:0
  }
  ,
  {
    id:5,
    itemname:"normal hoodie",
    price:34,
    src:"img5.jpg",
    quantity:0
  }
  ,
  {
    id:6,
    itemname:"dickies hoodie",
    price:45,
    src:"img6.jpg",
    quantity:0
  }
  ,
  {
    id:7,
    itemname:"dickies hoodie",
    price:43,
    src:"img7.jpg",
    quantity:0
  }
  ,
  {
    id:8,
    itemname:"champion hoodie",
    price:21,
    src:"img8.jpg",
    quantity:0
  }
  ,
  {
    id:9,
    itemname:"buggi jeans",
    price:42,
    src:"img9.jpg",
    quantity:0
  }])
  const [cartitem,setCartitem]=useState([])
   function handleaddtocart(item){
    setCartitem((prevcart)=>{
      const itemincart=prevcart.find(cart=>cart.id === item.id);
      if(itemincart){
        return prevcart.map(cart=>cart.id ===item.id ? {...cart,quantity:cart.quantity+1}:cart)
      }
      else {
        return [...prevcart ,{...item,quantity:1}]
      }
    })
   }
   const getItemCount = (itemId) => {
    const itemInCart = cartitem.find(cartItem => cartItem.id === itemId);
    return itemInCart ? itemInCart.quantity : 0; 
  };


   function handledeletecartitem(itemid){
    setCartitem(cartitem.filter((item)=>item.id !== itemid))
   }
    const calculateTotal = () => {
    return cartitem.reduce((total, item) => total + (item.price*item.quantity), 0).toFixed(2);
  };

  return (
    <div className="h-screen">
     <div className="fixed top-0  flex justify-between items-center w-full bg-orange-300 p-2">
      <h1 className="text-sm font-bold sm:text-xl">Brand shoping</h1>
       <div className="flex justify-around w-[20%] sm:w-[9%] items-center">
        <p className=" text-xs sm:text-lg font-semibold">Naol M</p>
        <img src="jordan4.jpg" alt="/" className="size-6 sm:size-10 rounded-full"/>

       </div>
     </div>
    <div className=" grid  sm:grid-cols-[80%,20%] h-screen mt-14">

      <div className="max-h-max ">
         <ul className="list-none flex flex-wrap items-center justify-center">
          {
           items.map((item)=><Itemlist item={item} key={item.id} handleaddtocart={handleaddtocart} /> )
          }
         </ul>
      </div>

      <div className=" p-2   overscroll-y-auto ">
       {calculateTotal()==0 ? <div className="bg-orange-200 p-2 text-sm text-center font-semibold rounded-md"> please add to cart </div> : <div className="flex justify-between items-center bg-orange-200 p-2 rounded-md">
        <div className="font-semibold text-lg">Total cost:</div>  <div className="text-lg font-bold">${calculateTotal()}</div>
       
        </div>}
         
      <ul className="list-none flex flex-wrap divide-y-2 ">
          {
            cartitem.map((item)=><Cartlist item={item} ondelete={handledeletecartitem} getItemCount={getItemCount} key={item.id} /> )
          }
            {/* <li className="absolute bottom-0 right-0 bg-white flex justify-center items-center ">Total price:{calculateTotal()}</li> */}
         </ul>
      
      </div>
    </div>
    </div>
  )
}
function Itemlist({item,handleaddtocart}){
  return (
    <li className=" flex justify-center items-center flex-col  h-1/4 m-4 ">
      <img src={item.src} alt="/" className="size-44 rounded-md" />
      <p className="text-lg font-semibold">{item.itemname}</p>
      <p className="text-sm">${item.price}</p>
      <button className="w-full bg-orange-400  rounded-md font-bold mt-3  p-1" onClick={()=>handleaddtocart(item)}>add to cart</button>
    </li>
  )
}
function Cartlist({item,ondelete,getItemCount}){
  return <li className="flex justify-between items-center w-full  mt-3">
    <div className="flex flex-row items-center justify-center">

    <img src={item.src} alt="" className="h-12 mr-2" />
    <p>${item.price}</p>

    <p className="ml-8">{getItemCount(item.id)}</p>
    </div>
    <button className="bg-red-500 px-3 rounded-md font-medium" onClick={()=>ondelete(item.id)}>Delete</button>
  </li>
}

export default App
