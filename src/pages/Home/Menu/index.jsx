import React, {useCallback, useMemo, useState} from 'react'
import "./index.css";

import useStore from '@/store';
import {selectAddItemsToCart} from "@/selectors";
import {selectAvailableOrders,} from "@/selectors";
import Loading from "@/components/Loading";


function Categories ({imgUrl}){
    return <img className='card_img' src={imgUrl} alt="categoreis" /> 
};


const MenuItem = ({item, handleCart})=>{
    const [newOrder, setNewOrder] = useState({
        id: item.id,
        foodid: item.foodid,
        category: item.category,
        foodname: item.foodname,
        fooddescription: item.fooddescription,
        price: item.price,
        quantity: 0,
        kitchen_note: "",
        session: ""
    });

    const handleChange = (event) => {
        console.log("event.target", event.target.name, event.target.value);
        setNewOrder( (prevOrder) =>  {
            return {
                ...prevOrder,
                [event.target.name]: event.target.value
            }
        })
    };
    const handleSubmit = ()=>{
        handleCart(newOrder);
        setNewOrder({
            id: item.id,
            foodid: item.foodid,
            category: item.category,
            foodname: item.foodname,
            fooddescription: item.fooddescription,
            price: item.price,
            quantity: 0,
            kitchen_note: "",
            session: ""
        })
    };
    return (
        <div className='menu_item card' >

            <div className='menu_item-heading'>
                <div className='menu_item-heading-img' >
                    <img src={item.imageurl} alt="" />
                </div>
                <div className='menu_item-heading-details' >
                    <div> { item.foodname } </div>
                    <div> { item.fooddescription } </div>
                    <button>Add-ons</button>
                </div>
                <div className='menu_item-heading-price text_left_align' >
                    <div> $ {item.price} </div>
                </div>
            </div>

            <div className='menu_item-quantity' >
                <div>
                    <label> Quantity </label>
                    <input  type="number" onChange={handleChange} name="quantity" value={newOrder.quantity} />
                </div>

                <div>
                    <label>Session</label>
                    <select name="session" value={newOrder.session} onChange={handleChange} >
                        <option/>
                        {
                            item.sessionlist.map(session=>  <option value={session} > {session} </option> )
                        }
                        
                    </select>
                </div>

                <div className='text_left_align' >
                    <label> Sub Total </label>
                    <div> $ {item.price * newOrder.quantity } </div>
                </div>

            </div>

            <div className='menu_item-note_kitchen' >
                <div>
                    <label>Notes to the kitchen</label>
                    <input onChange={handleChange} name="kitchen_note" value={newOrder.kitchen_note}  />
                </div>
                
                <button onClick={handleSubmit} > Add to Cart </button>
            </div>

        </div>
    )
};

function Menu() {
    const { loadingAvailableOrders, availableOrders: {
        menu: menuItems,
        extras: {categories}
    } , error } = useStore(selectAvailableOrders);
    const addItemsToCart = useStore(selectAddItemsToCart);

    const handleCart = useCallback((orderDetails)=>{
        console.log("handleCart...", orderDetails);
        addItemsToCart(orderDetails);
    },[menuItems]);

    if(loadingAvailableOrders){
        return <Loading />;
    }
    if(error){
        return "something Went Wrong...";
    }
    return (
        <div className='menu' >
        <Categories imgUrl={categories.Pizza.bannerImage} />
            {
                menuItems.map((item)=> <MenuItem key={item.id} item={item} handleCart={handleCart} /> )
            }
        </div>
    )
};

export default Menu;