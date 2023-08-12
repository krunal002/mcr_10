import "./Product.css"
import React, { useContext } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { DataContext } from "../../App";
import Navigation from "../../Componets/Navigation/Navigation";

// import { Paper } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Products = () => {
  const { ProductData } = useContext(DataContext);
  // console.log(productData)

  return (
    <div className="departments_wrapper">
      <Navigation />
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Image</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="left">9 Stock</StyledTableCell>
              <StyledTableCell align="left">Supplier</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {ProductData.map((product) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell component="th" scope="row">
                  <img
                    className="product_img"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </StyledTableCell>
                <StyledTableCell align="left">{product.name}</StyledTableCell>
                <StyledTableCell align="left">
                  {product.description}
                </StyledTableCell>
                <StyledTableCell align="left">{product.price}</StyledTableCell>
                <StyledTableCell align="left">{product.stock}</StyledTableCell>
                <StyledTableCell align="left">
                  {product.supplier}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
