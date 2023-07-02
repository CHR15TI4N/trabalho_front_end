import './Header.css';
import digimonImage from '../image/Digimon-Logo-Transparent.png';

const Header = () => {

    return (
        <header>
            <div className='headerContainer'>
                <img className='imageContainer' src={digimonImage}/>
            </div>
        </header>
    );
}

export default Header;