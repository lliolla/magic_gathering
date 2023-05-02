import axios from "axios";
import {useEffect, useState} from "react"
import Card from "./Card";

const Gird = () => {
const [cardsData, setcardsData] = useState([])
useEffect(() => {
   axios.get("https://api.magicthegathering.io/v1/cards")
   .then((res)=>setcardsData(res.data.cards))
   .catch()
}, [])

    return (
        <div className="container">
      <div className="gird_container">
            {
               cardsData.map((card)=>
               
                <Card key={card.id}  card={card} />
               ) 
            }
    </div>

           
         </div>     
    )
}


export default Gird;