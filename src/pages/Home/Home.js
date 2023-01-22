import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FormGroup } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Home.css";
import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import ListTimersPreview from "../../components/ListTimersPreview";

// refactor if needed in more components

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [idTimer, setIdTimer] = useState(1);
  const [titleTimer, setTitleTimer] = useState("");
  const [hoursTimer, setHoursTimer] = useState("");
  const [minutesTimer, setMinutesTimer] = useState("");
  const [secondsTimer, setSecondsTimer] = useState("");
  const [timers, setTimers] = useLocalStorage("timers", []);

  const saveTimer = (e) => {
    setIdTimer(idTimer + 1);
    const newTitleTimer = titleTimer || "Timer" + idTimer;
    const newHoursTimer = hoursTimer || 0;
    const newMinutesTimer = minutesTimer || 0;
    const newSecondsTimer = secondsTimer || 0;
    const newTimer = {
      id: idTimer,
      title: newTitleTimer,
      hours: newHoursTimer,
      minutes: newMinutesTimer,
      seconds: newSecondsTimer,
    };
    setTimers([...timers, newTimer]);
    
    handleClose();
    e.preventDefault();
  };

  return (
    <div className="main">
      <ListTimersPreview props={timers} />
      {/* Modal for configurate timers */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={saveTimer}>
          <Modal.Header closeButton className="headerModalTimerConfig">
            <Modal.Title className="modalTitle">
              <FormGroup role="form">
                <Form.Control
                  type="text"
                  autoFocus
                  plaintext
                  placeholder="Timer Title"
                  className="inputTimerTitle"
                  value={titleTimer}
                  onChange={(e) => setTitleTimer(e.target.value)}
                />
              </FormGroup>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bodyModalTimerConfig">
            <Form.Label className="subtitleTimerConfig">
              Here config your timer
            </Form.Label>
            <Row className="rowTimerInputs">
              <Col sm={12}>
                <FormGroup role="form">
                  <InputGroup>
                    <Form.Control
                      type="number"
                      max="9999"
                      placeholder="00"
                      aria-label="timerHours"
                      aria-describedby="timerHours"
                      value={hoursTimer}
                      onChange={(e) => setHoursTimer(e.target.value)}
                    />
                    <InputGroup.Text id="timerHours">Hrs</InputGroup.Text>
                    <Form.Control
                      type="number"
                      max="9999"
                      placeholder="00"
                      aria-label="timerMinutes"
                      aria-describedby="timerMinutes"
                      value={minutesTimer}
                      onChange={(e) => setMinutesTimer(e.target.value)}
                    />
                    <InputGroup.Text id="timerMinutes">Min</InputGroup.Text>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col sm={4} className="colSecondsInput">
                <FormGroup role="form">
                  <InputGroup>
                    <Form.Control
                      type="number"
                      max="9999"
                      placeholder="00"
                      aria-label="timerSeconds"
                      aria-describedby="timerSeconds"
                      value={secondsTimer}
                      onChange={(e) => setSecondsTimer(e.target.value)}
                    />
                    <InputGroup.Text id="timerSeconds">Sec</InputGroup.Text>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="footerModalTimerConfig">
            <Row className="rowFooter">
              <Col sm={10} className="colTextFooter">
                <p className="text-muted textFooter">
                  You can go back in this configuration
                </p>
              </Col>
              <Col sm={2} className="colSaveButtonFooter">
                <FormGroup role="form">
                  <Button
                    type="submit"
                    variant="success"
                    className="saveTimerButton"
                  >
                    Save
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* Button for create new timer */}
      <Button
        onClick={handleShow}
        className="createTimerButton"
        variant="success"
        size="lg"
      >
        <i className="bi bi-plus-lg"></i>
      </Button>
    </div>
  );
}

export default Home;


  /* Icons that when rotated 90 ° will be to modify the layout
  <Button className="changeLayout" variant="link" size="lg">
    <i className="bi bi-layout-three-columns"></i>
    <i className="bi bi-layout-split"></i>
    <i className="bi bi-grid-3x3"></i>
  </Button>
  
  estilos para posicionar el boton que cambiara el layout, pero falta crear las querys que roten y condicionen que icono y como mostrarlo
  .changeLayout{
  margin: 0% auto;
  padding: 0% auto;
  font-size: xx-large; 
  text-decoration: none;
  position: absolute;
  right: 3%;
  top: 3%;
}
  La manera de hacer el cambio de layout es cambiar la direccion del componente "ListGroup" de horizontal a vertical o crear varios para simular una grilla
  */