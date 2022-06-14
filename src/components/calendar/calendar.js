import React, { Fragment, useState, useEffect } from "react";
import calendarStyles from "./calendar.module.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdArrowDropDown, MdSmartphone } from "react-icons/md";
import { BsThreeDotsVertical, BsPerson } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Calendar() {
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
  const [inPerson, setInPerson] = useState("");
  const [typeALLCom, setTypeAllCom] = useState(false);
  const [month, setMonth] = useState(5);
  const [year, setYear] = useState(2022);
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

  let event = [
    {
      id: "1",
      eventName: "Meeting",
      interviewStatus: "Confirmed",
      interviewType: "In Person",
      dataStart: "Jun 12",
      startTime: "3:00PM",
    },
    {
      id: "2",
      eventName: "Stand Up",
      interviewStatus: "Pending",
      interviewType: "Phone",
      dataStart: "Jun 17",
      startTime: "3:00PM",
    },
    {
      id: "3",
      eventName: "Interview Chat",
      interviewStatus: "Rescheduled",
      interviewType: "Online",
      dataStart: "Jun 20",
      startTime: "3:00PM",
    },
    {
      id: "4",
      eventName: "Interview",
      interviewStatus: "Available",
      interviewType: "Online",
      dataStart: "Jun 20",
      startTime: "3:00PM",
    },
    {
      id: "5",
      eventName: "Meeting",
      interviewStatus: "Rescheduled",
      interviewType: "Online",
      dataStart: "Jun 15",
      startTime: "3:00PM",
    },
    {
      id: "6",
      eventName: "Meetings",
      interviewStatus: "Rescheduled",
      interviewType: "Online",
      dataStart: "Jul 15",
      startTime: "3:00PM",
    },
  ];

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
  };
  const monthMius = () => {
    setMonth(month - 1);
  };
  const todayMonth = () => {
    setMonth(localDate.getMonth());
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

  useEffect(() => {
    allCheck();
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
    setTypeAllCom(!typeALLCom);
    if (typeALLCom) {
      setInPerson("In Person");
    } else {
      setTypeAllCom("");
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
  const completeMonth = getDaysInMonthUTC(month, year);
  return (
    <div className={calendarStyles.holdAll}>
      <h2 className={calendarStyles.InterviewCalendar}>Interview Calendar</h2>
      <div className={calendarStyles.holdBox}>
        <div className={calendarStyles.holdSmall}>
          <div className={calendarStyles.create}>
            <div className={calendarStyles.createButin}>
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
                      onChange={allCheck}
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
                      value="allMobile"
                    />
                    <label htmlFor="allMobile">All</label>
                  </div>
                  <div className={calendarStyles.confirm}>
                    <input
                      type="checkbox"
                      name="Inperson"
                      className={calendarStyles.lager}
                      value="Inperson"
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
                      value="Phone"
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
                      value="Online"
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
                  <span
                    className={calendarStyles.greaterTwo}
                    onClick={monthMius}
                  >
                    {month === 0 || month < 0 ? "" : "<"}
                  </span>
                  <span
                    className={calendarStyles.greaterTwo2}
                    onClick={monthPlus}
                  >
                    {month === 11 || month > 11 ? "" : ">"}
                  </span>
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
                                type.interviewType === "In Person" ||
                                type.interviewType === "Phone" ||
                                type.interviewType === "Online"
                            )
                            .map((detail, i) => {
                              if (MonthFor.includes(detail.dataStart)) {
                                return (
                                  <div
                                    className={`${detail.interviewStatus}`}
                                    index={i}
                                  >
                                    {detail.interviewType.includes(
                                      "In Person"
                                    ) ? (
                                      <BsPerson />
                                    ) : (
                                      ""
                                    )}
                                    {detail.interviewType.includes("Phone") ? (
                                      <MdSmartphone />
                                    ) : (
                                      ""
                                    )}
                                    {detail.interviewType.includes("Online") ? (
                                      <RiComputerLine />
                                    ) : (
                                      ""
                                    )}
                                    {detail.eventName}
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
      </div>
    </div>
  );
}

export default Calendar;
