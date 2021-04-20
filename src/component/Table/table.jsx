/*eslint-disable*/
import { TableBody, Typography } from "@material-ui/core";
import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from '@material-ui/core/TablePagination';
import CenterStyles from "./centerStyle";
import { StyledTableCell, StyledTableRow } from "./style";
import { Link } from "react-router-dom";

const table = ({ problemList, Type }) => {
  const classes = CenterStyles();
  return (
    <div>
      <>
        <>
          <Table style={{ width: "95%", marginLeft: "25px" }}>
            <TableHead>
              <TableRow style={{ width: "90%" }}>
                <StyledTableCell style={{ color: "red", }}>Problems {Type}</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {problemList.map((problems, index) => {
                return (
                  <>
                    <StyledTableRow>
                      <StyledTableCell align="left" className={classes.tableStyle} component="th" scope="row">
                        <a href={problems}> <Typography style={{ fontSize: "19px", color: "white" }}>Problem No {index} </Typography></a>
                      </StyledTableCell>
                    </StyledTableRow>
                  </>
                )
              })
              }
            </TableBody>
          </Table>
          <br />
          <br />
        </>
          )
      </>
    </div>
  );
}

export default table;