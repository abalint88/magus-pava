import { makeStyles } from '@material-ui/core/styles';

import { magusData } from "../Data/data"
import MUIDataTable from 'mui-datatables';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { huHU } from '@material-ui/core/locale';

import green from '@material-ui/core/colors/green';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { createTheme } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const theme = createTheme({
  palette: {
    type: "light",
    primary: green,
    secondary: green,
  },
}, huHU);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const columns = [
  {
    label: 'Varázslat', name: 'spell'
  },
  {
    label: 'Mp', name: 'mp',
  },
  {
    label: 'E', name: 'e', options: {
      filter: true,
      display: 'false'
    }
  },
  {
    label: '+E/Mp', name: 'emp', options: {
      filter: true,
      display: 'false'
    }
  },
  {
    label: 'Varázslás Ideje', name: 'cast_time', options: {
      filter: true,
      display: 'false'
    }
  },
  {
    label: 'Időtartam', name: 'duration', options: {
      filter: true,
      display: 'false'
    }
  },
  {
    label: 'Hatótáv', name: 'range', options: {
      filter: true,
      display: 'false'
    }
  },
  {
    label: 'ME Típusa', name: 'me_type', options: {
      filter: true,
      display: 'false'
    }
  },
  { label: 'Arkánum', name: 'arcanum' },
  { label: 'Típus', name: 'type' },
  {
    label: 'Szféra',
    name: 'sphere',
    lookup: {
      "Általános": "Általános",
      "Halál": "Halál",
      "Élet": "Élet",
      "Lélek": "Lélek",
      "Természet": "Természet"
    },
  },
];

function Miu() {
  const classes = useStyles();

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'standard',
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    rowsPerPageOptions: [10, 15, 100, 1000],
    rowsPerPage: 1000,
    fixedHeader: true,
    tableBodyHeight: 'calc(100vh - 150px)',

    renderExpandableRow: (rowData) => {
      const colSpan = rowData.length + 1;
      console.log(rowData)
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
            <Grid container spacing={3}>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <table>
                    <tbody>
                      <tr>
                        <td className="title">E:</td>
                        <td>{rowData[2]}</td>
                      </tr>
                      <tr>
                        <td className="title">+E/Mp:</td>
                        <td>{rowData[3]}</td>
                      </tr>
                      <tr>
                        <td className="title">Varázslás Ideje:</td>
                        <td>{rowData[4]}</td>
                      </tr>
                      <tr>
                        <td className="title">Időtartam:</td>
                        <td>{rowData[5]}</td>
                      </tr>
                      <tr>
                        <td className="title">Hatótáv:</td>
                        <td>{rowData[6]}</td>
                      </tr>
                      <tr>
                        <td className="title">ME Típusa:</td>
                        <td>{rowData[7]}</td>
                      </tr>
                    </tbody>
                  </table>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illo deserunt recusandae nostrum ipsum! Quia qui nulla temporibus? Ipsum beatae facilis quisquam incidunt, culpa mollitia soluta ea velit nemo rerum.
                </Paper>
              </Grid>
            </Grid>
            <div></div>
          </TableCell>
        </TableRow>
      );
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MUIDataTable options={options} columns={columns} data={magusData} title='Papi varázslatok' />
    </ThemeProvider>
  );
}

export default Miu;
