import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./list.scss";

const rows = [
  {
    id: 1112,
    product: "Canon Lens",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WKwkd1VaOAEpPjE4W8-vS5Pd75chBmcLKg&usqp=CAU",
    customer: "John Smith",
    date: "1 March",
    amount: 935,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 1222,
    product: "Logitech Headset",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9hy7iizV-WbD4USWKkJvb2dsGei6hdeKVA&usqp=CAU",
    customer: "Michel Doe",
    date: "1 March",
    amount: 1235,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 2112,
    product: "Apple Airpods",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThV6Quf1e7Eu2ChUNe6ArLHxF46JeZB0TRJA&usqp=CAU",
    customer: "John Smith",
    date: "1 March",
    amount: 935,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2222,
    product: "Drone",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoedTBMta9g6ICxBnlitSSAQZgCNyVKKe6KA&usqp=CAU",
    customer: "Michel Doe",
    date: "1 March",
    amount: 1235,
    method: "Online Payment",
    status: "Pending",
  },
];

const List = () => {
  return (
    <div className="listComponent">
      <h2 className="title">Latest Transcations</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <img className="image" src={row.img} alt=""/><div>{row.product}</div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
