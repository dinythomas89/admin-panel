import SearchIcon from '@mui/icons-material/Search';
import "./navBar.scss";

const NavBar = () => {
  return <div className="navBar">
    <div className="search">
      <input type="search" placeholder="Search.."/>
      <SearchIcon/>
    </div>
    <div className='items'>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
      </ul>
    </div>
  </div>;
};

export default NavBar;
