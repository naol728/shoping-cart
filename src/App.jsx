import { useState } from "react"

const items=[
{
  id:0,
  itemname:"nike shirt",
  price:12,
  src:"jordan4.jpg"
},
{
  id:1,
  itemname:"nike shirt",
  price:12,
  src:"jordan4.jpg"
},
{
  id:2,
  itemname:"nike shirt",
  price:12,
  src:"jordan4.jpg"
},
{
  id:3,
  itemname:"nike shirt",
  price:12,
  src:"jordan4.jpg"
}
,
{
  id:4,
  itemname:"nike shirt",
  price:12,
  src:"jordan4.jpg"
}
,
{
  id:5,
  itemname:"nike shirt",
  price:12,
  src:"jordan4.jpg"
}
,
{
  id:6,
  itemname:"nike shirt",
  price:12,
  src:"jordan4.jpg"
}
,
{
  id:7,
  itemname:"nike shirt",
  price:12,
  src:"jordan4.jpg"
}
,
{
  id:8,
  itemname:"nike shirt",
  price:12,
  src:"jordan4.jpg"
}
,
{
  id:9,
  itemname:"nike shirt",
  price:12,
  src:"jordan4.jpg"
}
]

function App() {
  const [items,setItems]=useState([{
    id:0,
    itemname:"nike shirt",
    price:12,
    src:"jordan4.jpg"
  },
  {
    id:1,
    itemname:"nike shirt",
    price:12,
    src:"jordan4.jpg"
  },
  {
    id:2,
    itemname:"nike shirt",
    price:12,
    src:"jordan4.jpg"
  },
  {
    id:3,
    itemname:"nike shirt",
    price:12,
    src:"jordan4.jpg"
  }
  ,
  {
    id:4,
    itemname:"nike shirt",
    price:12,
    src:"jordan4.jpg"
  }
  ,
  {
    id:5,
    itemname:"nike shirt",
    price:12,
    src:"jordan4.jpg"
  }
  ,
  {
    id:6,
    itemname:"nike shirt",
    price:12,
    src:"jordan4.jpg"
  }
  ,
  {
    id:7,
    itemname:"nike shirt",
    price:12,
    src:"jordan4.jpg"
  }
  ,
  {
    id:8,
    itemname:"nike shirt",
    price:12,
    src:"jordan4.jpg"
  }
  ,
  {
    id:9,
    itemname:"nike shirt",
    price:12,
    src:"jordan4.jpg"
  }])
  const [cartitem,setCartitem]=useState([])
   function handleaddtocart(item){
    setCartitem([...cartitem,item])
   }
   function handledeletecartitem(itemid){
    setCartitem(cartitem.filter((item)=>item.id !== itemid))
   }
  return (
    <div>
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

      <div className="max-h-max p-2 ">
      <ul className="list-none flex flex-wrap divide-y-2">
          {
            cartitem.map((item)=><Cartlist item={item} ondelete={handledeletecartitem} key={item.id} /> )
          }
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
function Cartlist({item,ondelete}){
  return <li className="flex justify-between items-center w-full  mt-3">
    <div className="flex flex-row items-center justify-center">
    <img src={item.src} alt="" className="h-12 mr-2" />
    <p>${item.price}</p>
    </div>
    <button className="bg-red-500 px-3 rounded-md font-medium" onClick={()=>ondelete(item.id)}>Delete</button>
  </li>
}

export default App
