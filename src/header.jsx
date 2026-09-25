import cluade from './chef-claude-icon.png';
import './index.css';

export default function Header(){
    return (
        <div className="header">
            <img src={cluade} className="image" />
            <p>Cheff Cluade</p>
        </div>
    );
}