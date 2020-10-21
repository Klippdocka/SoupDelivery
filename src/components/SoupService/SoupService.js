
import Soup from '../Soup/Soup';
import Soup4 from '../Images/Soup4.jpg';
import Soup5 from '../Images/Soup5.jpg';
import Soup2 from '../Images/Soup2.jpg';
import Soup6 from '../Images/Soup6.jpg';
import LaktosIcone from '../Icone/LaktosIcone';




const Items = [

    {   id:1,
        image: Soup6,
        title: "Roasted tomato & Quinoa",
        description: "Tomatsoppa med quinoa, vitlök och lök toppas med färsk basilika och krispiga krutonger",
        price: 79,
        allergy: "Laktosfri"
    },
    {   id:2,
        image: Soup4,
        title: "Sweet potato & coconut",
        description: "Sötpotatis, kokosnötmjölk, jordnötssmör toppas med jordnötter, koriander och chili flakes",
        price: 79,
        allergy:LaktosIcone
    },

    {   id:3,
        image: Soup5,
        title: "Green goddess soup",
        description: "Grönkål, spenat, ärtor, broccoli, potatis, vitlök toppat med pumpakärnor och havregrädde.",
        price: 99,
        allergy: "Laktosfri"
    },

    {   id:4,
        image: Soup2,
        title: "Green goddess soup",
        description: "Grönkål, spenat, ärtor, broccoli, potatis, vitlök toppat med pumpakärnor och havregrädde.",
        price: 99,
        allergy: "Laktosfri"
    },

    {
        id:5,
        image:"",
        title:"Thai coconut noodle",
        description:"Röd curry, kokosnötmjölk,risnudlar,paprika toppat med koriander och sesamfrön",
        price:79,
    },
    {
        id:6,
        image:"",
        title:"Thai noodle soup",
        description:"Nudlar, ägg och grönsaker i härlig buljong. Toppat med salladslök och sesamfrön",
        price:89,
    },

    {
        id:7,
        image:"",
        title:"Thai dumplings soup",
        description:"Svampfyllda dumplints i smakrik buljong, toppat med salladslök och sesamfrön",
        price:99,
    },

    {
        id:8,
        image:"",
        title:"Thai dumplings soup",
        description:"Svampfyllda dumplints i smakrik buljong, toppat med salladslök och sesamfrön",
        price:99,
    },

    

  

    

]


const accesssories = [

    {
        id:1,
        title: "Surdegsbröd",
        price: 0

    },
    {
        id:2,
        title: "Mörkt bröd",
        price: 0
    },

    {
        id:3,
        title: "Focaccia",
        price: 0
    },

]

const drinks = [
    {
        id:1,
        title:"San pellegrino",
        price: 25
    },
    {
        id:2,
        title:"Citronvatten",
        price: 10
    },
    {
        id:1,
        title:"Cola zero",
        price: 25
    },
]



export {Items, accesssories, drinks };

