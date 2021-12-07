import {useState, useRef, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Hills from './Assets/pattern-hills.svg'
import Grid from "@material-ui/core/Grid"


function App() {

  const [countdownDate, setCountDate] = useState(new Date('August31,2022 00:00:00').getTime())
  const calculateTimeLeft = () => {
    let difference = +countdownDate - +new Date();
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeLeft;
    
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer=setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }

  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});

console.log('stop time',timerComponents)



const display = () => {
  let show = null;
  if (timerComponents.length > 0){
    show = <div>
      <div className="watchdiv"> 
    <div style={{textAlign:'center',padding:10}}>
      <h1>Countdown to Release!!!</h1>
    </div>
    <div className="counterdiv" style={{width:'70%',margin:'auto'}}>
      <Grid container spacing={4}>
      <Grid item xs={3} sm={3} md={3}>
        <p className="timer">{timeLeft.days}</p>
        </Grid>
      <Grid item xs={3} sm={3} md={3}>
        <p className="timer">{timeLeft.hours}</p>
        </Grid>
      <Grid item xs={3} sm={3} md={3}>
        <p className="timer">{timeLeft.minutes}</p>
        </Grid>
      <Grid item xs={3} sm={3} md={3}>
        <p className="timer">{timeLeft.seconds}</p>
        </Grid>
        </Grid>
      <Grid container spacing={4}>
        <Grid item xs={3} sm={3} md={3}>
         <p style={{color: 'white'}}>Days</p> 
         </Grid>
        <Grid item xs={3} sm={3} md={3}>
         <p style={{color: 'white'}}>Hours</p> 
         </Grid>
        <Grid item xs={3} sm={3} md={3}>
         <p style={{color: 'white'}}>Mins</p> 
         </Grid>
        <Grid item xs={3} sm={3} md={3}>
         <p style={{color: 'white'}}>Secs</p> 
         </Grid>
      </Grid>
        </div>   
        <div style={{height:70}}>
          <Grid continer spacing={1}>
          <Grid item xs={12} sm={12} md={12}>
            </Grid></Grid>
            </div>   
    <div style={{}} className="imgdiv">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12}>
    <img className= 'hills' src={Hills} alt='hills'/>
    </Grid>
    </Grid>
    </div>
    </div>
      <div>
    </div>
    </div>
  }else{
    show = <div className="msg">
      <h1 className="msg1">CONGRATULATIONS!!!!</h1>
      <h1 className="msg2">THE LORD HAS DONE US WELL!!!</h1>
      <h1 className="msg3">HALLELUJAH!!!!!!!!!!</h1>
      <h1 className="msg4">WELCOME TO YOUR NEW SEASON OF BREAKTHROUGH!!!!!</h1>
    </div>
  }
  return show
}

  return (
    <div className="App">
      {display()}
    </div>
  );
}

export default App;
