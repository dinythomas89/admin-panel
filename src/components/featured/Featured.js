import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h2 className="title">Total Revenue</h2>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        <p className="title"> Total sales made today</p>
        <p className="amount">$245</p>
        <p className="description">
          Some description. sed do eiusmod tempor.
        </p>
        <div className="summary">
            <div>Target</div>
            <div>$12.4k</div>
            <div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
