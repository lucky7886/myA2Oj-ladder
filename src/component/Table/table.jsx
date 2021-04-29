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
        <>
          <Table>
            <TableHead>
              <TableRow >
                <StyledTableCell style={{   align:"right", color: "red", }}>Problems of {Type}</StyledTableCell>
                <StyledTableCell style={{   align:"right", color: "Red", }}>Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {problemList.map((problems, index) => {
                return (
                  <>
                    <StyledTableRow>
                      <StyledTableCell align="left">
                        <a href={problems}> <Typography style={{ fontSize: "19px", color: "white" }}>Problem No {index} </Typography></a>
                      </StyledTableCell>
                      <StyledTableCell style={{marginRight:"auto"}}>
                      <button  id={index} className={classes.buttons}>Done Sencierly ?</button>
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
}

export default table;