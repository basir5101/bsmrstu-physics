import Link from 'next/link';
import Styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className = {Styles.main} >
            <div className={Styles.logo}>
                <p>PHYSICS <span>BSMRSTU</span> </p>
            </div> 
            <div className={Styles.menu}>
                <ul>
                    <li> <Link href="/"><a>Home</a></Link> </li>
                </ul>
                <ul>
                    <li> <Link href="/"><a>About Us</a></Link>  </li>
                </ul>
                <ul>
                    <li>  <Link href="/"><a>Sign Up</a></Link>  </li>
                </ul>
                <ul>
                    <li>  <Link href="/"><a>Log In</a></Link>  </li>
                </ul>
            </div>     
        </nav>
    );
};

export default Navbar;