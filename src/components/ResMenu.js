import {useEffect,useState} from 'react'
import { useParams } from 'react-router';
import ResCategory from './ResCategory';






const ResMenu= ()=> {

const {resid} = useParams();
const [menu,setMenu] = useState();   

const [showIndex, setShowIndex] = useState(null);


const fetchMenu = async()=>{
    const data= await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId='+resid+'&catalog_qa=undefined&submitAction=ENTER#');
    const json = await data.json();
    console.log(json);

    setMenu(json.data);

    // const menu = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards[0].card.info;
}


 useEffect(()=>{
       fetchMenu();
    },[])

const value= menu?.cards[2]?.card?.card?.info;

console.log("value",value);

const itemCards = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card?.itemCards;

const categories = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

console.log("categories",categories);

  return (
    <div className='p-4 '>
        <div>
        <h1 className='text-center text-2xl font-bold mb-9'>{value?.name}</h1>
        <h4 className='text-center'>{value?.cuisines.join(",")} -{value?.costForTwoMessage} </h4>
         <h4 className='flex justify-baseline'>Delivery Time: {value?.sla?.deliveryTime} mins</h4>
        <h4 className='flex justify-end'> Rating: {value?.avgRating} ⭐</h4>

       

    </div>

        {/* {itemCards.map(item=>item.card.info.name)} */}

     <div className='text-center'>
       <h2 className=' text-xl font-bold'>Menu</h2>


        {categories && categories.map((c,index) => (
          <ResCategory key={c.card.card.categoryId} category={c.card.card} 
          
          showItems={index === showIndex ? true : false} // Show items for the first category only
            setShowIndex={(()=>setShowIndex(index))}
          />
        ))}

        {/* <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item.card.info.id}>
                {item.card.info.name}{" "} - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}
            </li>
          ))}
      </ul> */}
      </div>

    </div>
  )
}

export default ResMenu;