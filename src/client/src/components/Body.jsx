import { Navbar, Footer} from "./";
import { Link } from 'react-router-dom';

const Body = () => {
    return(   
        <div className="flex flex-col bg-base-300 h-full ml-3 rounded-xl justify-center items-center bg-opacity-80">

            <div className="text-4xl font-bold">
                Welcome to D-Ender!
            </div>
            <div className="text-xl text-center font-semibold w-[700px] mt-5">
            Welcome to our decentralized tender management platform!<br/> We're revolutionizing the traditional tender process with transparency and fairness. Our user-friendly interface, secure communication, and blockchain technology ensure an equitable and efficient bidding process. Join us today and experience the power of decentralized tender management!
            </div>

            <div className="flex flex-row mt-5">
                <Link to='/openTender' className="btn hover:bg-primary m-2 w-[160px]">OpenTenders</Link>
                <Link to='/selectiveTender' className="btn hover:bg-primary m-2 w-[160px]">SelectiveTenders</Link>
            </div>
            
        </div>  
    );
}

export default Body;