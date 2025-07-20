import { useDispatch } from "react-redux";
import { addItem } from "../utilies/CartSlice";


const ItemList =({items})=>{
 
console.log(items);
    const dispatch= useDispatch()
    
    const handleAddItem =(i)=>{
        dispatch(addItem(i))
    }



    return (
       <div>
      <ul>
        {items &&
          items.map((i) => (
            <div
              key={i.card.info.id}
              className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between items-center"
            >
              <div>
                {i.card.info.name}
                {" "} - ₹{i.card.info.price / 100 || i.card.info.defaultPrice / 100}
                <p className="text-xs">{i.card.info.description}</p>
              </div>
              {/* Flex container for image and Add+ button */}
              <div className="">
                <img
                  className="w-30"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    i.card.info.imageId
                  }
                  alt="RestaurantMenu"
                />
                <div
                  className="text-white bg-black rounded-lg cursor-pointer hover:bg-gray-600 w-10 flex justify-end mt-2" 
                  onClick={() => handleAddItem(i)}
                >
                  Add+
                </div>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ItemList;