import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    marginTop: 40,
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  memeText: {
    fontFamily: 'impact',
    fontSize: '2.5em',
    textTransform: 'uppercase',
    color: 'white',
    letterSpacing: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 12,
    textShadow: '2px 2px 0 #000,  -2px -2px 0 #000, 2px -2px 0 #000,  -2px 2px 0 #000, 0px 2px 0 #000, 2px 0px 0 #000, 0px -2px 0 #000,  -2px 0px 0 #000, 2px 2px 5px #000'
  }
});

export default function MemeGeneratorComponent(props) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>

        <form noValidate autoComplete="off" style={{display: 'flex', flexWrap: 'wrap',}}>

          <TextField id="topText" name="topText" label="Top Text"
                     fullWidth style={{margin: 12}}
                     value={props.topText} onChange={props.onChange}/>

          <TextField id="bottomText" name="bottomText" label="Bottom Text"
                     fullWidth style={{margin: 12}}
                     value={props.bottomText} onChange={props.onChange}/>
        </form>

        <div style={{margin: 12, textAlign: 'center', position: 'relative'}}>
          <img src={props.randomImage} alt="" style={{maxHeight: 400}}/>
          <h3 className={classes.memeText} style={{top: 0}}>{props.topText}</h3>
          <h3 className={classes.memeText} style={{bottom: 0}}>{props.bottomText}</h3>
        </div>

      </CardContent>

      <CardActions>
        <Button variant="contained" color="secondary" onClick={props.onClick}>Get Random Image</Button>
      </CardActions>
    </Card>
  )
}
