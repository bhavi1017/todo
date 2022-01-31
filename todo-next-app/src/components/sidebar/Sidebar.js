import {React,  useState } from "react";

export function Sidebar() {

    const [categoryList, setCategoryList] = useState([
        "Category1", "Category2"
    ]);

    return (<div className=" flex h-full bg-purple-300">
        
        {categoryList.map((category) => {
            return(<p>{category}</p>)
        })}
    </div>)
}