import React from 'react'
import "./index.css";

import Loading from "@/components/Loading";

function Categories ({imgUrl}){
    return <img className='card' src={imgUrl} alt="categoreis" /> 
};

const MenuItems = [
    {
        category: "Pizza",
        fooddescription: "Herbed Chicken, Schezwan Chicken Meatball, Chicken Tikka.",
        foodid: "eventscafe:0",
        foodname: "Chicken Supreme Pizza",
        imageurl: "https://storage.googleapis.com/smartqprdnz_pub/im/fi/compassevents/CS.jpg",
        price: 14,
        sessionlist: [
        "BREAKFAST",
        "LUNCH",
        "SNACKS",
        "DINNER"
        ],
        submenu: [
        "Onion",
        "Pepperoni",
        "Sausage"
        ]
    },{
        category: "Pizza",
        fooddescription: "Herbed Chicken, Schezwan Chicken Meatball, Chicken Tikka.",
        foodid: "eventscafe:0",
        foodname: "Chicken Supreme Pizza",
        imageurl: "https://storage.googleapis.com/smartqprdnz_pub/im/fi/compassevents/CS.jpg",
        price: 14,
        sessionlist: [
        "BREAKFAST",
        "LUNCH",
        "SNACKS",
        "DINNER"
        ],
        submenu: [
        "Onion",
        "Pepperoni",
        "Sausage"
        ]
    }
];

const MenuItem = ({item})=>{
    return (
        <div className='menu_item' >

            <div className='menu_item-heading'>
                <div className='menu_item-heading-img' >
                    <img src={item.imageurl} />
                </div>
                <div className='menu_item-heading-details' >
                    <div> { item.foodname } </div>
                    <div> { item.fooddescription } </div>
                    <button>Add-ons</button>
                </div>
                <div className='menu_item-heading-price' >
                    <div> $ {item.price} </div>
                </div>
            </div>
            <div className='menu_item-quantity' >
                <div>
                    <label>member 1</label>
                    <input />
                </div>

                <div>
                    <label>member 1</label>
                    <input />
                </div>

                <div>
                    <label>member 1</label>
                    <input />
                </div>

            </div>
        </div>
    )
};

function Menu() {
  return (
    <div className='menu' >
      <Categories imgUrl="https://storage.googleapis.com/smartqprdnz_pub/im/ci/compassevents/vector-italian-pizza-horizontal-banners.jpg" />
        {
            MenuItems.map((item, index)=> <MenuItem className="card" key={index} item={item} /> )
        }
    </div>
  )
};

export default Menu;