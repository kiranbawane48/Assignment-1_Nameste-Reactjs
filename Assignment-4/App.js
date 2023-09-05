import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="Logo-container">
                <img className="logo" src="https://th.bing.com/th/id/OIP.x9Rg6HSCP9xAM3YMSXLTkgHaFu?pid=ImgDet&rs=1.png" alt="Logo" />
            </div>
            <div className="Nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
// Destructuring on fly
const RestaurantCard =(props)=>{
    const {restoName ,item, rating, delTime} =props;
    return(
       <div className="resto-card" style={{backgroundColor : "#f0f0f0"}}>
       <img className="res-logo" alt="res-logo" src="https://th.bing.com/th/id/R.783ecca519ae0a9e6828595c7682a6bb?rik=1TysI%2flq4qz5hw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFast-food-backgrounds-free-download.jpg&ehk=VN0hGMNRFLcAvvFfp4ePGsV38KfupnWKf0jLzqcaS90%3d&risl=&pid=ImgRaw&r=0.png"/>
       <h3>{restoName}</h3>
       <h4>{item}</h4>
       <h4>{rating} stars</h4>
       <h4>{delTime} min</h4>
       </div>
    )
   }
   const Body =()=>{
    return(
    <div className="body">
    <div className="search">Search</div>
    <div className="Restaurant-Container">
     <RestaurantCard restoName="Meghana Food" item="Veggie Burger" rating="4.3" delTime="50"/> 
     <RestaurantCard restoName="KFC" item="Chiken Burger" rating="3.9" delTime="38"/> 
     <RestaurantCard restoName="Natasha Food" item="Veg cheese Burger" rating="4.0" delTime="25"/> 
     
    </div>
</div>
)}


// using Props
// const RestaurantCard =(props)=>{
//  return(
//     <div className="resto-card" style={{backgroundColor : "#f0f0f0"}}>
//     <img className="res-logo" alt="res-logo" src="https://th.bing.com/th/id/R.783ecca519ae0a9e6828595c7682a6bb?rik=1TysI%2flq4qz5hw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFast-food-backgrounds-free-download.jpg&ehk=VN0hGMNRFLcAvvFfp4ePGsV38KfupnWKf0jLzqcaS90%3d&risl=&pid=ImgRaw&r=0.png"/>
//     <h3>{props.restoName}</h3>
//     <h4>{props.item}</h4>
//     <h4>{props.rating} stars</h4>
//     <h4>{props.delTime} min</h4>
//     </div>
//  )
// }
// const Body =()=>{
//     return(
//     <div className="body">
//     <div className="search">Search</div>
//     <div className="Restaurant-Container">
//      <RestaurantCard restoName="Meghana Food" item="Veggie Burger" rating="4.3" delTime="50"/> 
//      <RestaurantCard restoName="KFC" item="Chiken Burger" rating="3.8" delTime="38"/> 
     
//     </div>
// </div>
// )}

const Footer =()=>{
    return(<div className="footer">
        <p>Kiran @ 2023 - All Rights Reserved</p>
        </div>
)}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body  />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
