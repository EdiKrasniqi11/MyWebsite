import './TechCommerce.css'
import Home from '../../../Images/TechCom/Home.png'
import Login from '../../../Images/TechCom/Login.png'
import Categories from '../../../Images/TechCom/Categories.png'
import Cart from '../../../Images/TechCom/Cart.png'
import Wishlist from '../../../Images/TechCom/Wishlist.png'
import ProductPage from '../../../Images/TechCom/ProductPage.png'
import Dashboard from '../../../Images/TechCom/Dashboard.png'

import React, { useState } from 'react'

const TechCommerce = () =>{
    const [slideIndex, setSlideIndex] = useState(0);
    const labSlides = [
        {Image: Home, Title:"Home Page",Description: "A page that shows the skill level of a new programmer, the design and look of the home page is very simple and to the point. Looking to show the user what the website offers and what it looks to accomplish; the home page gives the user a welcome and shows them a few products that may interest them as well as a the most popular companies products of which are offered. The point of the home page is simply to direct the user to other pages such as the login and register or if theyre loged in then the product pages where they can continue their shopping."},
        {Image: Login, Title:"Login Page",Description: "As far as login pages go I personally like this design the most compared to the Prishtina University example. A sleek and simple design that shows the user exactly what is needed and offers them a gateway to the register page that is very similar to it paried with the personal details of the user. The login button redirects the user to a login validation page, contents of which aren't shown to the user where We search the database for the email and password that match, if not the user gets redirected back to the login page and is alerted that there has been an issue with the proccess. If the login goes through with no issue the User is redirected back to the home page where they can access other pages of the website formerly blocked from visibility. There are 2 roles that are checked in the login validation where the user can be a normal customer or an administrator of the website which has the priviliges of adding, deleting or editing  Products and Users."},
        {Image: Dashboard, Title:"Dashboard",Description: "The dashboard is the central collection of data for the Users and Products that are stored within it. The administrator has the responsibility of fixing any issues with the insertion of data or any breaches of the rules by the users. The page is fairly simple; We have a sidebar that helps with organization of the table representation where the administrator can choose to toggle view between the Users and Products or view both at the same time. The administrator can edit, delete and insert new Products whereas for Users they can only make changes not create new ones."},
        {Image: Categories, Title:"Categories",Description: "The Categories page is my personal favorite part of the Project. The page is constructed of the sidebar which toggles between categories and the main Div containing the Products that represent those catgories. The Products are fetched from the database and shown using a wraper which gets updated everytime an administrator inserts a new product where the User can add said products to their Cart or their Wishlist for later purchases. This data is then stored by saving the product and the user that is logged in to it and same as all of my other projects the code is shown in my GitHub account."},
        {Image: ProductPage, Title:"Product Page",Description: "After finding the Perfect Product that you wanted to purchase you might find yourself doubting the quality, details and or the usability of them. The Product Page removes that doubt from any user whether they are knowledgable in the field of technology or not. The Product Page not only has detailed data on the products that are being sold but you can see the number of reviews and recommendations that are posted by other users of the Product. These reviews are completly unfiltered and cannot be removed by any administrator so the user can rest easy knowing that they are getting the 100% legitimate opinion of other users."},
        {Image: Cart, Title:"Cart",Description: "The cart page is fairly simple. The code is designed to display the data that is fetched from the cart table corresponding to the email that is stored in the login validation process. The products are then found in the products table and shown as objects that the user can see and remove from their cart in case of any regret or mistake in shopping. In case that the user doesn't have any products carted the view of the page is shown in the template picture and the user is presented with a few recommended products or with the option of redirecting themselves to the product page where they can continue their browsing."},
        {Image: Wishlist, Title:"Wishlist",Description: "Similar to the Cart page, the wishlist page is a display of products that the user has \"hearted\" or added to their future plans of purchase. the design and the functionality of the page is identical to the Cart page with very few details that distinguish one from the other. Using these two pages the user can purchase products in a much more simple way rather than purchasing each product one by one or having to remember that one product you set your eye on a long time ago."},
    ]
    function slideBack(){
        if(slideIndex>0){
            setSlideIndex(slideIndex-1)
        }else{
            setSlideIndex(labSlides.length - 1)
        }
    }
    function slideForward(){
        if(slideIndex<labSlides.length - 1){
            setSlideIndex(slideIndex+1)
        }else{
            setSlideIndex(0)
        }
    }
    return (
        <>
            <div id="projectsFotoDiv">
                <h2 className="web-view lab"><a href="../">Home</a> {'>'} <a href="../my-projects">My Projects</a> {'>'} TechCom</h2>

                <h2 className="mobile-view lab"><a href="../">Home</a></h2>
                <h2 className="mobile-view lab">v</h2>
                <h2 className="mobile-view lab"><a href="../my-projects">My Projects</a></h2>
                <h2 className="mobile-view lab">v</h2>
                <h2 className="mobile-view lab">TechCom</h2>
                <h3>My first "Big Project"</h3>
            </div>
            <div className="openingParagraph">
                <h3>What is TechCom?</h3>
                <p>
                    TechCom is my first Project that was Usable and served a Purpose. What TechCom represents is a simple E-Commerce that provides 
                    Technology Goods to it's Users. Coded almost entirely in PHP and JavaScript; TechCom was the first hands-on experience that i got 
                    working with Object Oriented Programming and it's use in the "Real World". The project was constructed with simple HTML, CSS and JavaScript 
                    to create a low level prototype and as I gained more confidence and ability in PHP, all of the files were transformed into PHP files.
                </p>
            </div>
            <div className="slider">
                <img src={labSlides[slideIndex].Image} alt=""/>
                <div className="slideText">
                    <h1>{labSlides[slideIndex].Title}</h1>
                    <p>{labSlides[slideIndex].Description}</p>
                </div>
                <div className="slideClick back" onClick={() => slideBack()}/>
                <div className="slideClick forward" onClick={() => slideForward()}/>
                <div className="slideCounter">
                    {labSlides.map((item,index) => (
                        <div key={index} className={slideIndex==index?"slideCircle active":"slideCircle"} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default TechCommerce