
const items=[
{
  id:1,
  itemname:"nike shirt",
  price:12,
  src:"jordan4.jpg"
}
]

function App() {
  

  return (
    <div>
      <div className="flex ">
         <ui className="list-none">
          {
           items.map((item)=><Itemlist item={item} key={item.id} /> )
          }
         </ui>
      </div>
    </div>
  )
}
function Itemlist({item}){
  return (
    <li className="flex justify-center items-center flex-row">
      <img src={item.src} alt="/" className="h-3/4" />
      <p>{item.itemname}</p>
      <p>{item.price}</p>
    </li>
  )
}

export default App
