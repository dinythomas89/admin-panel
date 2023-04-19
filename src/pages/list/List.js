import "./list.scss"
import SideBar from "../../components/sideBar/SideBar"
import NavBar from "../../components/navBar/NavBar"
import DataTable from "../../components/dataTable/DataTable"
import { Link } from "react-router-dom"

const List = () => {
  return (
    <div className="list">
      <SideBar/>
      <div className="listContainer">
        <NavBar/>
        <div>Add New User:
          <Link to="/users/new" style={{textDecoration:"none"}}>
            Add
          </Link>
        </div>
        <DataTable/>
      </div>
    </div>
  )
}  

export default List