/*
<<  Group 1-32  >>
Jeremy Giddings 103925859
Benjamin Williams 103619739
James Cockram 103999949
*/
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Box,
} from "@mui/material";
import transaction from "../assets/DummyTransactions.json";

export default function TransactionTable() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent={"center"}>
        <Grid
          component={Paper}
          xl={6}
          sm={6}
          md={6}
          sx={{ marginTop: 5, marginBottom: 5 }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#a6a6a6", borderRight: 1 }}>
                <TableCell sx={{ borderRight: 1 }} align="left">
                  Date
                </TableCell>
                <TableCell sx={{ borderRight: 1 }} align="left">
                  Title
                </TableCell>
                <TableCell sx={{ borderRight: 1 }} align="left">
                  Price&nbsp;($)
                </TableCell>
                <TableCell sx={{ borderRight: 1 }} align="left">
                  Qty
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transaction.map((transactions) => (
                <TableRow key={transactions.title}>
                  <TableCell sx={{ borderRight: 1 }} align="right">
                    {transactions.date}
                  </TableCell>
                  <TableCell sx={{ borderRight: 1 }} align="right">
                    {transactions.title}
                  </TableCell>
                  <TableCell sx={{ borderRight: 1 }} align="right">
                    {transactions.price}
                  </TableCell>
                  <TableCell sx={{ borderRight: 1 }} align="right">
                    {transactions.qty}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Box>
  );
}
