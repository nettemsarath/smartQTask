import React, {useMemo, useState} from 'react'
import "./index.css";

import {selectAvailableOrders,} from "@/selectors";
import useStore from '@/store';
import Loading from "@/components/Loading";

function Categories ({imgUrl}){
    return <img className='card' src={imgUrl} alt="categoreis" /> 
};


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
                <div className='menu_item-heading-price text_left_align' >
                    <div> $ {item.price} </div>
                </div>
            </div>

            <div className='menu_item-quantity' >
                <div>
                    <label> Quantity </label>
                    <input />
                </div>

                <div>
                    <label>Session</label>
                    <select name="session" >
                        <option/>
                        {
                            item.sessionlist.map(session=>  <option value={session} > {session} </option> )
                        }
                        
                    </select>
                </div>

                <div className='text_left_align' >
                    <label> Sub Total </label>
                    <div> $20 </div>
                </div>

            </div>

            <div className='menu_item-note_kitchen' >
                <div>
                    <label>Notes to the kitchen</label>
                    <input />
                </div>
                
                <button> Add to Cart </button>
            </div>

        </div>
    )
};

function Menu() {
    const { loadingAvailableOrders, availableOrders: {
        menu: menuItems,
        extras: {categories: {Pizza}}
    } , error } = useStore(selectAvailableOrders);

    if(loadingAvailableOrders){
        return <Loading />;
    }
    if(error){
        return "something Went Wrong...";
    }
    return (
        <div className='menu' >
        <Categories imgUrl={Pizza.bannerImage} />
            {
                menuItems.map((item, index)=> <MenuItem className="card" key={index} item={item} /> )
            }
        </div>
    )
};

export default Menu;