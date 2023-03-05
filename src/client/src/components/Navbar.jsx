import react, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { TransactionContext } from "../context/TransactionContext";

const Navbar = () => {

    const { connectWallet, currentAccount } = useContext(TransactionContext);

    return(
        <div className="navbar pl-5 bg-base-300 bg-opacity-80 ">
            <div className="flex-1 ">
                <img className='h-10' src={logo} alt="logo" />
            </div>

            <div>
                {!currentAccount&&(<button className='btn bg-primary' type='button' onClick={connectWallet}>CONNECT</button>)}
                {currentAccount&&(<button className='btn bg-primary hover:bg-primary-focus ' type='button' onClick={connectWallet}>CONNECTED</button>)}
            </div>
        
        </div>
    );
}

export default Navbar;