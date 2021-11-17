// import "./App.css";
import { Grid } from "@mui/material";
import Design from "./Design/Design";
// #ffbf48   #eb493d

function App() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={1} xl={2} >
          <p style={{margin:"0px",color:"white"}}>left</p>
        </Grid>
        <Grid item md={10} xl={8}>
          <Design />
        </Grid>
        <Grid item md={1} md={2}>
          <p style={{margin:"0px",color:"white"}}>right</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
