import Product1 from "../../images/pedigree1.jpg";
import Product2 from "../../images/pedigree2.jpg";
import Product3 from "../../images/pedigree3.jpg";
import Product4 from "../../images/pedigree4.jpg";
import Product5 from "../../images/pedigree5.jpg";
import { BsFillBagHeartFill} from "react-icons/bs";


const data=[
    {
        id:1,
        image: Product1,
        name:"Pedigree Chicken with Rice",
        star:4,
        price:"$12.19",
        category:"Food",
        icon:<BsFillBagHeartFill/>
    },
    {
        id:2,
        image: Product2,
        name:"Pedigree Chicken and Milk",
        star:3,
        price:"$18.28",
        category:"Food",
        icon:<BsFillBagHeartFill/>
    },
    {
        id:3,
        image: Product3,
        name:"Pedigree Chicken and Beef",
        star:5,
        price:"$13.71",
        category:"Food",
        icon:<BsFillBagHeartFill/>
    },
    {
        id:4,
        image: Product4,
        name:"Pedigree Chicken and Vegitables",
        star:2,
        price:"$12.19",
        category:"Food",
        icon:<BsFillBagHeartFill/>
    },
    {
        id:5,
        image: Product5,
        name:"Pedigree Roasted Chicken, Rice and Vegitable Flavor",
        star:3,
        price:"$15.85",
        category:"food",
        icon:<BsFillBagHeartFill/>
    },
    
];
export default data;