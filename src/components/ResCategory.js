import ItemList from './ItemList';
import { useState } from 'react';



const ResCategory =({category,showItems,setShowIndex})=>{

    const [singleItem, setSingleItem] = useState(false);

    const handleClick = () => {
        // console.log("Clicked");
        setSingleItem(!singleItem);
        // console.log("singleItem", singleItem);

        setShowIndex();
        // console.log("showItems", showItems);

    };



    return(
        <div className="p-3 w-1/2 mx-auto my-4  bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            <div className='flex justify-between ' onClick={handleClick}>
                <span className="font-bold">{category.title} ({category.itemCards.length}) </span>
                <span className="justify-end"> ↓</span>
            </div>
     


    { singleItem && <ItemList items={category.itemCards} img={category.image} /> }


            {/* <ul>
                {category.itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}
                    </li>
                ))} 

            </ul> */}

        </div>
    )
}


export default ResCategory;