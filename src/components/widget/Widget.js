import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./widget.scss";

const Widget = ({ type }) => {
  let data;
  const amount = 100;
  const percentage = 20;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "violet" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "View all orders",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "maroon" }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View total earnings",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "blue" }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">{percentage}%</div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
