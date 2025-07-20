// import { createContext } from "react";

// const MenuContext = createContext({
      

//     const fetchMenu = async()=>{
//         const data= await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId='+resid+'&catalog_qa=undefined&submitAction=ENTER#');
//         const json = await data.json();
//         console.log(json);
    
//         setMenu(json.data);
    
//         // const menu = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards[0].card.info;
//     }
    
    
//      useEffect(()=>{
//            fetchMenu();
//         },[])
// })


// export default MenuContext;



import { createContext, useState, useEffect } from "react";

const MenuContext = createContext();

export const MenuProvider = ({children }) => {
  const [menu, setMenu] = useState();

  const fetchMenu = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5904779&lng=73.7271909&restaurantId=' +
        resid +
        '&catalog_qa=undefined&submitAction=ENTER#'
    );
    const json = await data.json();
    setMenu(json.data);
  };

  useEffect(() => {
        fetchMenu();
    
  }, []);

  return (
    <MenuContext.Provider value={{ menu, fetchMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;