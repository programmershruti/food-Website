
import React, { useState } from 'react';
import Menu from './menuApi.js';
import "./style.css"
import MenuCard from './MenuCard';
import Navbar from './Navbar.js';

const uniqueList = [
    ...new Set(
        Menu.map((currElem) => {
            return currElem.category;
        })
    ),
    "All",
];
console.log(uniqueList);
const Restau = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if(category==="All")
        {
        setMenuData(Menu);
        return;
        }
        const updatedlist = Menu.filter((currElem) => {
            return currElem.category === category;
        });
        setMenuData(updatedlist);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restau; 