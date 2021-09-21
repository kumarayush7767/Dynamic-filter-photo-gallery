import React, { useState } from "react";
import "../tab.css";
import Menu from "./menu";
import MenuItems from "./MenuItems";
import CatMenu from "./CatMenu";

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category )) , "all"];


const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems,setCatItems] = useState(allCatValues);


  const filterItem = (categItem) => {

    if(categItem === "all")
    {
      setItems(Menu);
      return;
    }

     const updatedItems = Menu.filter((curElem) => {
         return curElem.category===categItem ;
     });

     setItems(updatedItems);
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />
      {/* Our menu list will come here */}
      <CatMenu filterItem={filterItem} catItems={catItems}/>
      
      {/* my main items */}
      <MenuItems items={items}/>
    </>
  );
};

export default GalleryReact;
