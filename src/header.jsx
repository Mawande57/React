import cluade from './chef-claude-icon.png';
import './index.css';

export default function Header(){
    return (
            <header>
            <img src={cluade}/>
            <h1>Chef Claude</h1>
        </header>
    );
}