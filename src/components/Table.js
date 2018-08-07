import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(name, type, lastname, catagory, createdAt) {
  id += 1;
  return { id, name, type, lastname, catagory, createdAt };
}

const data = [
  createData("1", "Day", "01:30:05", "TEST_MOVIE", "06/09/2018"),
  createData("2", "Day", "03:20:05", "TEST_MOVIE", "06/09/2018"),
  createData("3", "Day", "00:30:05", "TEST_MOVIE", "06/09/2018")
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell numeric>Type</TableCell>
            <TableCell numeric>Last Name</TableCell>
            <TableCell numeric>catagory</TableCell>
            <TableCell numeric>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell numeric>{n.type}</TableCell>
                <TableCell numeric>{n.lastname}</TableCell>
                <TableCell numeric>{n.catagory}</TableCell>
                <TableCell numeric>{n.createdAt}</TableCell>
                <TableCell>
                  <Icon>file_download</Icon>
                  <Icon>info</Icon>
                  <Icon>play_arrow</Icon>
                  <Icon>delete</Icon>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTable);
