import SideBar from "../../components/sideBar/SideBar";
import NavBar from "../../components/navBar/NavBar";
import Chart from "../../components/chart/Chart";
import List from "../../components/list/List"
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h2 className="title">Information</h2>
            <div className="item">
              <img
                className="itemImg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwZ2QmjlShNNeUuEVF-RNFZrwJo3Y9k-LRw&usqp=CAU"
                alt=""
              />
              <div className="details">
                <h2 className="itemTitle">Jane Doe</h2>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@email.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 1234 45 55</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Google Tower 22, New York</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title="Last 6 months expenditure:" />
          </div>
        </div>
        <div className="bottom">
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
