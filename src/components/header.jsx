import '../App.css';
import { useState } from 'react';

function Header(){

    const[open, setOpen] = useState(false);

    function handleOpen(){
        let toggle = !open;
        setOpen(toggle);
    }

    return(
        <>
        <div className="navbar">
            <div className="logo"><p></p></div>
            <div className="navitems">
                <p>Home</p>
                <p>About</p>
                <p>Shop</p>
                <p>Contact</p>
            </div>
            <div className="mobilenav">
            <i class="fa-solid fa-bars fa-2xl" onClick={handleOpen}></i>
            </div>
        </div>
        {open &&
        <div className="mobilemenu">
            <div className="closebtn" onClick={handleOpen}><p>X</p></div>
                <p>Home</p>
                <p>About</p>
                <p>Shop</p>
                <p>Contact</p>
        </div>
}
        </>
    )
}

export default Header;