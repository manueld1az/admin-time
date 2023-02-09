import "./TimersDetails.css";
import TopBarTimersDetails from "../../components/topBarTimersDetails/TopBarTimersDetails";
import MainTimer from "../../components/mainTimer/MainTimer";
import TimersTabs from "../../components/timersTabs/TimersTabs";
import Button from "react-bootstrap/Button";
import ResetButton from "../../components/resetButton/ResetButton";

const TimersDetails = () => {
  return (
    <div className="content">
      <TopBarTimersDetails />
      <div className="flex-container">
        <div className="flex-item"></div>
        <div className="timerContainer">
          <MainTimer />
          <ResetButton />
        </div>
      </div>
      <TimersTabs />
      <Button variant="success" size="lg" className="buttonPlayStop">
        <strong>PLAY / STOP</strong>
      </Button>
    </div>
  );
};

export default TimersDetails;
