import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ProductionQuantityLimitsSharpIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import { Link } from "react-router-dom";
import "./sideBar.scss";

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="logo" src="https://www.yiiframework.com/image/design/logo/yii3_sign.png" alt="" style={{width:"32px", height:"32px"}}/>
        </Link>
      </div>
      <hr />
      <div className="middle">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon />
            <span>Dasboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
          <li>
            <Person2OutlinedIcon />
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
          <li>
            <ProductionQuantityLimitsSharpIcon />
            <span>Products</span>
          </li></Link>
          <li>
            <CreditCardIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <li>
            <NotificationsIcon />
            <span>Notifications</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxIcon />
            <span>Profile</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <li>
            <LogoutIcon />
            <span>Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color</div>
    </div>
  );
};

export default SideBar;
