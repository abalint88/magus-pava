import './scss/styles.scss';

import { makeStyles } from '@material-ui/core/styles';

import { magusData } from "./data/data"
import MUIDataTable from 'mui-datatables';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { huHU } from '@material-ui/core/locale';

import green from '@material-ui/core/colors/green';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const theme = createMuiTheme({
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

function App() {
  const classes = useStyles();

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'standard',
    expandableRows: true,
    expandableRowsHeader: false,
    rowsPerPageOptions: [10, 15, 100, 1000],
    rowsPerPage: 1000,
    fixedHeader: true,
    renderExpandableRow: (rowData) => {
      const colSpan = rowData.length + 1;
      console.log(rowData)
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
            <Grid container spacing={3}>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <span className="attr">
                    E: {rowData[2]}
                  </span>
                  <span className="attr">
                    +E/Mp: {rowData[3]}
                  </span>
                  <span className="attr">
                    Varázslás Ideje: {rowData[4]}
                  </span>
                  <span className="attr">
                    Időtartam: {rowData[5]}
                  </span>
                  <span className="attr">
                    Hatótáv: {rowData[6]}
                  </span>
                  <span className="attr">
                    ME Típusa: {rowData[7]}
                  </span>
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

export default App;
