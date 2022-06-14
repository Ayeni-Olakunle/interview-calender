import React, { Fragment, useState, useEffect } from "react";
import calendarStyles from "./calendar.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdArrowDropDown, MdSmartphone } from "react-icons/md";
import { BsThreeDotsVertical, BsPerson } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

function Calendar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);
  const [currentDex, setCurrentDex] = useState(0);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (index) => {
    setShow1(true);
    setCurrentDex(index);
  };
  const [toogle1, setToogle1] = useState(false);
  const [toogle2, setToogle2] = useState(false);
  const [toogle3, setToogle3] = useState(false);
  const [allCon, setAllCon] = useState(true);
  const [all, setAll] = useState("All");
  const [confirCon, setConfirCon] = useState(false);
  const [com, setCom] = useState("");
  const [penCom, setPenCom] = useState(false);
  const [pen, setPen] = useState("");
  const [resCon, setResCon] = useState(false);
  const [res, setRes] = useState("");
  const [availCom, setAvailCom] = useState(false);
  const [avail, setAvail] = useState("");
  // Type Start
  const [allTypes, setAllTypes] = useState("");
  const [allTypeCom, setAllTypeCom] = useState(true);
  const [inPerson, setInPerson] = useState("");
  const [inPersonCom, setInPersonCom] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneCom, setPhoneCom] = useState(false);
  const [online, setOnline] = useState("");
  const [onlineCom, setOnlineCom] = useState(false);
  // Type End
  // Create Start
  const [EventForm, setEventForm] = useState();
  const [statusForm, setStatusForm] = useState();
  const [typeForm, setTypeForm] = useState();
  const [dateForm, setDateForm] = useState();
  const [timeForm, setTimeForm] = useState();
  // Create End
  const [month, setMonth] = useState(5);
  const [year, setYear] = useState(2022);
  const [event, setEvent] = useState([
    {
      eventName: "Meeting",
      interviewStatus: "Confirmed",
      interviewType: "In Person",
      dataStart: "Jun 12 2022",
      startTime: "3:00",
    },
    {
      eventName: "Available",
      interviewStatus: "Available",
      interviewType: "In Person",
      dataStart: "Jun 02 2022",
      startTime: "7:00",
    },
    {
      eventName: "Stand Up",
      interviewStatus: "Pending",
      interviewType: "Phone",
      dataStart: "Jun 17 2022",
      startTime: "3:00",
    },
    {
      eventName: "Conference Meeting",
      interviewStatus: "Pending",
      interviewType: "Phone",
      dataStart: "Jun 27 2022",
      startTime: "3:00",
    },
    {
      eventName: "Conference Chat",
      interviewStatus: "Pending",
      interviewType: "Online",
      dataStart: "Jun 23 2022",
      startTime: "3:00",
    },
    {
      eventName: "Interview Chat",
      interviewStatus: "Rescheduled",
      interviewType: "Online",
      dataStart: "Jun 20 2022",
      startTime: "3:00",
    },
    {
      eventName: "Tutorial Chat",
      interviewStatus: "Rescheduled",
      interviewType: "Online",
      dataStart: "Jun 07 2022",
      startTime: "3:00",
    },
    {
      eventName: "Interview",
      interviewStatus: "Available",
      interviewType: "Online",
      dataStart: "Jun 20 2022",
      startTime: "3:00",
    },
    {
      eventName: "Interview",
      interviewStatus: "Available",
      interviewType: "Online",
      dataStart: "Jun 19 2022",
      startTime: "3:00",
    },
    {
      eventName: "Interview",
      interviewStatus: "Confirmed",
      interviewType: "Phone",
      dataStart: "Jun 25 2022",
      startTime: "3:00",
    },
    {
      eventName: "Meeting",
      interviewStatus: "Rescheduled",
      interviewType: "Online",
      dataStart: "Jun 15 2022",
      startTime: "3:00",
    },
    {
      eventName: "standup up",
      interviewStatus: "Rescheduled",
      interviewType: "Online",
      dataStart: "Jun 11 2022",
      startTime: "3:00",
    },
    {
      eventName: "Meetings",
      interviewStatus: "Rescheduled",
      interviewType: "Online",
      dataStart: "Jun 15 2022",
      startTime: "3:00",
    },
    {
      eventName: "Instant Meeting",
      interviewStatus: "Confirmed",
      interviewType: "Online",
      dataStart: "Jun 05 2022",
      startTime: "3:00",
    },
    {
      eventName: "Fixing Bug",
      interviewStatus: "Confirmed",
      interviewType: "In Person",
      dataStart: "Jun 29 2022",
      startTime: "3:00",
    },
    {
      eventName: "Project Management Meeting",
      interviewStatus: "Confirmed",
      interviewType: "In Person",
      dataStart: "Jun 09 2022",
      startTime: "3:00",
    },
    {
      eventName: "Project Management Meeting",
      interviewStatus: "Confirmed",
      interviewType: "Phone",
      dataStart: "Jun 01 2022",
      startTime: "3:00",
    },
  ]);
  const localDate = new Date();
  let monthWords = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let weekWords = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let weekWordse = ["M", "T", "W", "T", "F", "S", "S"];

  const changeToogle = () => {
    setToogle1(!toogle1);
  };
  const changeToogle2 = () => {
    setToogle2(!toogle2);
  };
  const changeToogle3 = () => {
    setToogle3(!toogle3);
  };

  const monthPlus = () => {
    setMonth(month + 1);
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    }
  };
  const monthMius = () => {
    setMonth(month - 1);
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    }
  };
  const todayMonth = () => {
    setMonth(localDate.getMonth());
    setYear(localDate.getFullYear());
  };

  const allCheck = () => {
    setAllCon(!allCon);
    if (allCon) {
      setAll("All");
      setCom("Confirmed");
      setPen("Pending");
      setRes("Rescheduled");
      setAvail("Available");
      setInPerson("In Person");
    } else {
      setAll("");
      setCom("");
      setPen("");
      setRes("");
      setAvail("");
      setInPerson("");
    }
  };

  const allType = () => {
    setAllTypeCom(!allTypeCom);
    if (allTypeCom) {
      setAllTypes("All");
      setInPerson("In Person");
      setPhone("Phone");
      setOnline("Online");
    } else {
      setAllTypes("");
      setInPerson("");
      setPhone("");
      setOnline("");
    }
  };

  useEffect(() => {
    allCheck();
    allType();
  }, []);

  const confirmedCheck = () => {
    setConfirCon(!confirCon);
    if (confirCon) {
      setCom("Confirmed");
    } else {
      setCom("");
    }
  };

  const pendingCheck = () => {
    setPenCom(!penCom);
    if (penCom) {
      setPen("Pending");
    } else {
      setPen("");
    }
  };

  const rescheduledCheck = () => {
    setResCon(!resCon);
    if (resCon) {
      setRes("Rescheduled");
    } else {
      setRes("");
    }
  };

  const availableCheck = () => {
    setAvailCom(!availCom);
    if (availCom) {
      setAvail("Available");
    } else {
      setAvail("");
    }
  };

  const inPersonTypeCheck = () => {
    setInPersonCom(!inPersonCom);
    if (inPersonCom) {
      setInPerson("In Person");
    } else {
      setInPerson("");
    }
  };

  const phoneTypeCheck = () => {
    setPhoneCom(!phoneCom);
    if (phoneCom) {
      setPhone("Phone");
    } else {
      setPhone("");
    }
  };

  const onlineTypeCheck = () => {
    setOnlineCom(!onlineCom);
    if (onlineCom) {
      setOnline("Online");
    } else {
      setOnline("");
    }
  };

  function getDaysInMonthUTC(month, year) {
    var date = new Date(Date.UTC(year, month, 1));
    var days = [];
    while (date.getUTCMonth() === month) {
      days.push(new Date(date));
      date.setUTCDate(date.getUTCDate() + 1);
    }
    return days;
  }

  function addEvent(e) {
    e.preventDefault();
    let yyyy = dateForm.toString().slice(0, 4);
    let mmmm = monthWords[
      dateForm.toString().slice(5, 7).replace(/^0+/, "") - 1
    ]
      .toString()
      .slice(0, 3);
    let dddd = dateForm.toString().slice(8, 10);

    handleClose();
    const holdFormDetails = {
      eventName: EventForm,
      interviewStatus: statusForm,
      interviewType: typeForm,
      dataStart: `${mmmm} ${dddd} ${yyyy}`,
      startTime: timeForm,
    };
    setEvent([...event, holdFormDetails]);
    console.log(holdFormDetails);
    setEventForm("");
    setStatusForm("");
    setTypeForm("");
    setDateForm("");
    setTimeForm("");
  }
  const completeMonth = getDaysInMonthUTC(month, year);
  return (
    <div className={calendarStyles.holdAll}>
      <h2 className={calendarStyles.InterviewCalendar}>Interview Calendar</h2>
      <div className={calendarStyles.holdBox}>
        <div className={calendarStyles.holdSmall}>
          <div className={calendarStyles.create}>
            <div className={calendarStyles.createButin} onClick={handleShow}>
              <AiOutlinePlusCircle />
              Create
              <MdArrowDropDown style={{ fontSize: "20px" }} />
            </div>
            <div>
              <div className={calendarStyles.calendars} onClick={changeToogle}>
                Calendars
                <MdArrowDropDown style={{ fontSize: "20px" }} />
              </div>
              <div className={toogle1 ? calendarStyles.thuglu : ""}>
                <div className={calendarStyles.AdminCalendars}>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          className={calendarStyles.colo}
                        />
                      }
                      label="Admin's Calendar"
                    />
                  </FormGroup>
                  <BsThreeDotsVertical style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
            {/* Interview Status Start */}
            <div>
              <div className={calendarStyles.calendars} onClick={changeToogle2}>
                Interview Status
                <MdArrowDropDown style={{ fontSize: "20px" }} />
              </div>
              <div className={toogle2 ? calendarStyles.thuglu : ""}>
                <div className={calendarStyles.InterviewStatus}>
                  <div className={calendarStyles.confirm}>
                    <input
                      type="checkbox"
                      name="all"
                      className={calendarStyles.lager}
                      defaultChecked={allCon}
                      value={all}
                      onChange={() => {
                        allCheck();
                        alert(
                          "By unchecking this checkbox they well be anything to filter"
                        );
                      }}
                    />
                    <label htmlFor="all">All</label>
                  </div>
                  <div className={calendarStyles.confirm}>
                    <input
                      type="checkbox"
                      name="Confirmed"
                      className={calendarStyles.lager}
                      defaultChecked={allCon}
                      value={com}
                      disabled={allCon}
                      onChange={confirmedCheck}
                    />
                    <div className={calendarStyles.konkonlo}></div>
                    <label htmlFor="Confirmed">Confirmed (C)</label>
                  </div>
                  <div className={calendarStyles.confirm}>
                    <input
                      type="checkbox"
                      name="Pending"
                      className={calendarStyles.lager}
                      defaultChecked={allCon}
                      value={pen}
                      onChange={pendingCheck}
                    />
                    <div className={calendarStyles.pending}></div>
                    <label htmlFor="Confirmed">Pending (P)</label>
                  </div>
                  <div className={calendarStyles.confirm}>
                    <input
                      type="checkbox"
                      name="Rescheduled"
                      className={calendarStyles.lager}
                      defaultChecked={true}
                      value={res}
                      onChange={rescheduledCheck}
                    />
                    <div className={calendarStyles.rescheduled}></div>
                    <label htmlFor="Rescheduled">Rescheduled (R)</label>
                  </div>
                  <div className={calendarStyles.confirm}>
                    <input
                      type="checkbox"
                      name="Available"
                      className={calendarStyles.lager}
                      defaultChecked={true}
                      value={avail}
                      onChange={availableCheck}
                    />
                    <div className={calendarStyles.available}></div>
                    <label htmlFor="Available">Available (A)</label>
                  </div>
                </div>
              </div>
            </div>
            {/* Interview Status End */}

            {/* Interview Type Start */}
            <div>
              <div className={calendarStyles.calendars} onClick={changeToogle3}>
                Interview Type
                <MdArrowDropDown style={{ fontSize: "20px" }} />
              </div>
              <div className={toogle3 ? calendarStyles.thuglu : ""}>
                <div className={calendarStyles.InterviewStatus}>
                  <div className={calendarStyles.confirm}>
                    <input
                      type="checkbox"
                      name="allMobile"
                      className={calendarStyles.lager}
                      defaultChecked={true}
                      value={allTypes}
                      onChange={allType}
                    />
                    <label htmlFor="allMobile">All</label>
                  </div>
                  <div className={calendarStyles.confirm}>
                    <input
                      type="checkbox"
                      name="Inperson"
                      defaultChecked={true}
                      className={calendarStyles.lager}
                      value={inPerson}
                      onChange={inPersonTypeCheck}
                    />
                    <BsPerson
                      style={{ marginRight: "5px", fontSize: "20px" }}
                    />
                    <label htmlFor="Inperson">In person</label>
                  </div>
                  <div className={calendarStyles.confirm}>
                    <input
                      type="checkbox"
                      name="Phone"
                      className={calendarStyles.lager}
                      defaultChecked={true}
                      value={phone}
                      onChange={phoneTypeCheck}
                    />
                    <MdSmartphone
                      style={{ marginRight: "5px", fontSize: "20px" }}
                    />
                    <label htmlFor="Phone">Phone</label>
                  </div>
                  <div className={calendarStyles.confirm}>
                    <input
                      type="checkbox"
                      name="Online"
                      className={calendarStyles.lager}
                      defaultChecked={true}
                      value={online}
                      onChange={onlineTypeCheck}
                    />
                    <RiComputerLine
                      style={{ marginRight: "5px", fontSize: "20px" }}
                    />
                    <label htmlFor="Online">Online</label>
                  </div>
                </div>
              </div>
            </div>
            {/* Interview Type End */}
          </div>
        </div>
        {/* Calendar Start */}
        <div className={calendarStyles.holdBig}>
          <div className={calendarStyles.holdBig2}>
            <div className={calendarStyles.dateNext}>
              <div className={calendarStyles.today}>
                <button
                  className={calendarStyles.todayButin}
                  onClick={todayMonth}
                >
                  Today
                </button>
                <div className={calendarStyles.greaterThan}>
                  <button
                    className={calendarStyles.greaterTwo}
                    onClick={monthMius}
                  >
                    {"<"}
                  </button>
                  <button
                    className={calendarStyles.greaterTwo2}
                    onClick={monthPlus}
                  >
                    {">"}
                  </button>
                </div>
                <span
                  className={calendarStyles.calendarName}
                >{`${monthWords[month]} ${year}`}</span>
              </div>
              <div>
                <select className={calendarStyles.selecter}>
                  <option value="Day">Month</option>
                  <option value="Day">Week</option>
                  <option value="Day">Day</option>
                  <option value="Day">Show weekends</option>
                </select>
              </div>
            </div>
            <div>
              <div className={calendarStyles.gridcontainers}>
                {weekWordse.map((item, index) => {
                  return (
                    <Fragment>
                      <div className={calendarStyles.griditems} key={index}>
                        {item}
                      </div>
                    </Fragment>
                  );
                })}
              </div>
              <div className={calendarStyles.gridcontainer}>
                {weekWords.map((item, index) => {
                  const Week = completeMonth.toString().slice(0, 3);
                  if (Week === item) {
                    if (item === "Mon") {
                    } else if (item === "Tue") {
                      return (
                        <Fragment>
                          <div className={calendarStyles.griditem}></div>
                        </Fragment>
                      );
                    } else if (item === "Wed") {
                      return (
                        <Fragment>
                          <div className={calendarStyles.griditem}></div>
                          <div className={calendarStyles.griditem}></div>
                        </Fragment>
                      );
                    } else if (item === "Thu") {
                      return (
                        <Fragment>
                          <div className={calendarStyles.griditem}></div>
                          <div className={calendarStyles.griditem}></div>
                          <div className={calendarStyles.griditem}></div>
                        </Fragment>
                      );
                    } else if (item === "Fri") {
                      return (
                        <Fragment>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                        </Fragment>
                      );
                    } else if (item === "Sat") {
                      return (
                        <Fragment>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                        </Fragment>
                      );
                    } else if (item === "Sun") {
                      return (
                        <Fragment>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                          <div
                            className={calendarStyles.griditem}
                            key={index}
                          ></div>
                        </Fragment>
                      );
                    }
                  }
                })}
                {completeMonth.map((item, index) => {
                  const day = item.toString().slice(8, 10);
                  const MonthFor = item.toString().slice(4, 10);
                  const YearFor = item.toString().slice(11, 15);
                  const combine = MonthFor + " " + YearFor;
                  console.log(combine);
                  return (
                    <Fragment>
                      <div className={calendarStyles.griditem} key={index}>
                        <div className={calendarStyles.dayMe}>{day}</div>
                        <div>
                          {event
                            .filter(
                              (person) =>
                                person.interviewStatus === com ||
                                person.interviewStatus === pen ||
                                person.interviewStatus === res ||
                                person.interviewStatus === avail
                            )
                            .filter(
                              (type) =>
                                type.interviewType === inPerson ||
                                type.interviewType === phone ||
                                type.interviewType === online
                            )
                            .map((detail, i) => {
                              if (combine.includes(detail.dataStart)) {
                                return (
                                  <div
                                    className={`${detail.interviewStatus}`}
                                    index={i}
                                    onClick={() => {
                                      handleShow1(i);
                                    }}
                                  >
                                    {detail.interviewType.includes(
                                      "In Person"
                                    ) ? (
                                      <span>
                                        <BsPerson
                                          style={{
                                            fontSize: "20px",
                                            marginRight: "4px",
                                          }}
                                        />
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                    {detail.interviewType.includes("Phone") ? (
                                      <span>
                                        <MdSmartphone
                                          style={{
                                            fontSize: "20px",
                                            marginRight: "4px",
                                          }}
                                        />
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                    {detail.interviewType.includes("Online") ? (
                                      <span>
                                        <RiComputerLine
                                          style={{
                                            fontSize: "20px",
                                            marginRight: "4px",
                                          }}
                                        />
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                    {detail.eventName}
                                    <div>wewef</div>
                                  </div>
                                );
                              }
                            })}
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Calendar End */}
        {/* Create Eevent Start */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Interview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={addEvent}>
              <Form.Group className="mb-3" controlId="formBasicEvent">
                <Form.Label>Event</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Event"
                  onChange={(e) => setEventForm(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Event Status</Form.Label>
                <Form.Select
                  onChange={(e) => setStatusForm(e.target.value)}
                  required
                >
                  <option></option>
                  <option>Confirmed</option>
                  <option>Pendind</option>
                  <option>Rescheduled</option>
                  <option>Available</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Interview Type</Form.Label>
                <Form.Select
                  onChange={(e) => setTypeForm(e.target.value)}
                  required
                >
                  <option></option>
                  <option>In Person</option>
                  <option>Phone</option>
                  <option>Online</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicTime">
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicTime">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="Date"
                        placeholder="Date"
                        onChange={(e) => setDateForm(e.target.value)}
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicTime">
                      <Form.Label>Time</Form.Label>
                      <Form.Control
                        type="time"
                        placeholder="time"
                        onChange={(e) => setTimeForm(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        {/* Create Eevent End */}
        {/* Detail Start */}
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Interview Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p>Event Name: {event[currentDex].eventName}</p>
              <p>Event Status: {event[currentDex].interviewStatus}</p>
              <p>Event Type: {event[currentDex].interviewType}</p>
              <p>Event Date: {event[currentDex].dataStart}</p>
              <p>Event Time: {event[currentDex].startTime}</p>
            </div>
          </Modal.Body>
        </Modal>
        {/* Detail End */}
      </div>
    </div>
  );
}

export default Calendar;
