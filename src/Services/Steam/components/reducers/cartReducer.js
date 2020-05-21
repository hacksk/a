import Item1 from '../../images/serviceicons/service(3).svg'
import Item2 from '../../images/serviceicons/service(4).svg'
import Item3 from '../../images/serviceicons/service(5).svg'
import Item4 from '../../images/serviceicons/service(6).svg'
import Item5 from '../../images/serviceicons/service(7).svg'
import Item6 from '../../images/serviceicons/service(8).svg'
import Item7 from '../../images/serviceicons/service(9).svg'
import Item8 from '../../images/serviceicons/service(10).svg'
import Item9 from '../../images/serviceicons/service(11).svg'
import Item10 from '../../images/serviceicons/service(12).svg'
import Item11 from '../../images/serviceicons/service(13).svg'
import Item12 from '../../images/serviceicons/service(14).svg'
import Item13 from '../../images/serviceicons/service(15).svg'
import Item14 from '../../images/serviceicons/service(16).svg'
import Item15 from '../../images/serviceicons/service(17).svg'
import Item16 from '../../images/serviceicons/service(18).svg'
import Item17 from '../../images/serviceicons/service(19).svg'
import Item18 from '../../images/serviceicons/service(20).svg'
import Item19 from '../../images/serviceicons/service(21).svg'
import Item20 from '../../images/serviceicons/service(22).svg'
import Item21 from '../../images/serviceicons/service(23).svg'
import Item22 from '../../images/serviceicons/service(24).svg'
import Item23 from '../../images/serviceicons/service(25).svg'
import Item24 from '../../images/serviceicons/service(26).svg'
import Item25 from '../../images/serviceicons/service(27).svg'
import Item26 from '../../images/serviceicons/service(28).svg'
import Item27 from '../../images/serviceicons/service(29).svg'
import Item28 from '../../images/serviceicons/service(3).svg'
import Item29 from '../../images/serviceicons/service(3).svg'
import Item30 from '../../images/serviceicons/service(3).svg'
import Item31 from '../../images/serviceicons/service(3).svg'
import Item32 from '../../images/serviceicons/service(3).svg'
import Item33 from '../../images/serviceicons/service(3).svg'
import Item34 from '../../images/serviceicons/service(3).svg'
import Item35 from '../../images/serviceicons/service(3).svg'
import Item36 from '../../images/serviceicons/service(3).svg'
import Item37 from '../../images/serviceicons/service(3).svg'
import Item38 from '../../images/serviceicons/service(3).svg'
import Item39 from '../../images/serviceicons/service(3).svg'
import Item40 from '../../images/serviceicons/service(3).svg'
import Item41 from '../../images/serviceicons/service(3).svg'




import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Steam Radiator', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:130,img:Item1},
        {id:2,title:'Steam Brakes', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Desalt', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'Steam EngineBay', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Steam Rookleen', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img:Item5},
        {id:6,title:'360 Deep Clense', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item7},
        {id:8,title:'Steam Mat', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item8},
        {id:9,title:'Automoto Presale', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item9},
        {id:10,title:'Light Restore', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item10},
        {id:11,title:'Wheel Restore ', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item11},
        {id:12,title:'Steam Moto', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item12},
        {id:13,title:'Smart 360 Cam', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item13},   
        {id:14,title:'Smart Key Chain', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item14},
        {id:15,title:'TPMS', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:130,img:Item15},
        {id:16,title:'OBD2 GPS', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item16},
        {id:17,title:'Refrigent Check', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item17},
        {id:18,title:'Flat tyre Repair', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item18},
        {id:19,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img:Item19},
        {id:20,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item20},
        {id:21,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item21},
        {id:22,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item22},
        {id:23,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item23},
        {id:24,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item24},
        {id:25,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item25},
        {id:26,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item26},
        {id:27,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item27},   
        {id:28,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:130,img:Item28},
        {id:29,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item29},
        {id:30,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item30},
        {id:31,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item31},
        {id:32,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img:Item32},
        {id:33,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item33},
        {id:34,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item34},
        {id:35,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item35},
        {id:36,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item36},
        {id:37,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item37},
        {id:38,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item38},
        {id:39,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item39},
        {id:40,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item40},
        {id:41,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item41},

    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
