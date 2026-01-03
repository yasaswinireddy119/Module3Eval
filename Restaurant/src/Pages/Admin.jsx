import { useState } from "react";

function Admin(){
    const[restaurant,setRestaurant]=useState({
        "restaurantID": 26,
  "restaurantName": "1135 AD",
  "address": "Jaipur, Amber Fort, Rajasthan",
  "type": "Rajasthani",
  "parkingLot": true,
  "image": "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"


    })
    const handleSubmit =(e)=>{
        e.preventDefault
    }
    return(
        <h2>Admin Page</h2>


    )
}
export default Admin;