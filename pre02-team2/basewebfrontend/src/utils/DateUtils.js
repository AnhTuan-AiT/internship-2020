import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";

export function toFormattedDateTime(rawTime) {

//   let date = new Date(rawTime);
//   return (
//     date.getFullYear() +
//     "-" +
//     addZeroBefore(date.getMonth() + 1, 2) +
//     "-" +
//     addZeroBefore(date.getDate(), 2) +
//     " " +
//     addZeroBefore(date.getHours(), 2) +
//     ":" +
//     addZeroBefore(date.getMinutes(), 2) +
//     ":" +
//     addZeroBefore(date.getSeconds(), 2)
//   );
    let date = new Date(rawTime);
    return addZeroBefore(date.getHours(), 2) +
        ":" +
        addZeroBefore(date.getMinutes(), 2) +
        ":" +
        addZeroBefore(date.getSeconds(), 2) +
        ' ' +
        addZeroBefore(date.getDate(), 2) +
        '/' +
        addZeroBefore(date.getMonth() + 1, 2) +
        '/' +
        date.getFullYear();

        
        
}

export function toFormattedDate(rawTime) {
  let date = new Date(rawTime);
  return (
    date.getFullYear() +
    "-" +
    addZeroBefore(date.getMonth() + 1, 2) +
    "-" +
    addZeroBefore(date.getDate(), 2)
  );
}
export function toFormattedDateVN(rawTime) {

  let date = new Date(rawTime);
  return (
    addZeroBefore(date.getDate(), 2) +
    "/" +
    addZeroBefore(date.getMonth() + 1, 2) +
    "/" +
    date.getFullYear()
  );
    // let date = new Date(rawTime);
    // return addZeroBefore(date.getDate(), 2) +
    //     '/' +
    //     addZeroBefore(date.getMonth() + 1, 2) +
        
    //     date.getFullYear();
}

export function toFormattedTime(numberSeconds) {
  if (numberSeconds < 0) {
    return "-" + toFormattedTime(-numberSeconds);
  }
  let hour = parseInt(numberSeconds / 3600);
  let minute = parseInt((numberSeconds / 60) % 60);
  let second = parseInt(numberSeconds % 60);
  return (
    addZeroBefore(hour, 2) +
    ":" +
    addZeroBefore(minute, 2) +
    ":" +
    addZeroBefore(second, 2)
  );
}

export function addZeroBefore(number, k) {
  return ("0" + number).slice(-k);
}

// <<<<<<< HEAD
export function datePicker(label, date, setDate, onChangeSelected = () => "") {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        label={label}
        value={date}
        onChange={(date) => {
          setDate(date);
          onChangeSelected(date);
        }}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />{" "}
      <p />
    </MuiPickersUtilsProvider>
  );
}

export function dateFromThru(
  fromDate,
  thruDate,
  setFromDate,
  setThruDate,
  onChangeSelected = () => ""
) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        label="Từ ngày: "
        value={fromDate}
        onChange={(date) => {
          setFromDate(date);
          onChangeSelected(date, thruDate).then((r) => r);
        }}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />{" "}
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        label="Đến ngày: "
        value={thruDate}
        onChange={(date) => {
          setThruDate(date);
          onChangeSelected(fromDate, date).then((r) => r);
        }}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />{" "}
    </MuiPickersUtilsProvider>
  );
}

export function getDateFromNowPlus(year, month, day) {
  let date = new Date();
  return new Date(
    date.getFullYear() + year,
    date.getMonth() + month,
    date.getDay() + day
  );
}
// =======
// export function datePicker(label, date, setDate, onChangeSelected = () => '') {
//     return <MuiPickersUtilsProvider utils={DateFnsUtils} >
//         <
//             KeyboardDatePicker
//             disableToolbar
//             variant="inline"
//             format="dd/MM/yyyy"
//             margin="normal"
//             label={label}
//             value={date}
//             onChange={
//                 date => {
//                     setDate(date);
//                     onChangeSelected(date);
//                 }
//             }
//             KeyboardButtonProps={
//                 {
//                     'aria-label': 'change date',
//                 }
//             }
//         /> <
//             p />
//         <
//         /MuiPickersUtilsProvider>
// }

// export function dateFromThru(fromDate, thruDate, setFromDate, setThruDate, onChangeSelected = () => '') {
//     return <MuiPickersUtilsProvider utils={DateFnsUtils} >
//             <
//                 KeyboardDatePicker
//                 disableToolbar
//                 variant="inline"
//                 format="dd/MM/yyyy"
//                 margin="normal"
//                 label="Từ ngày: "
//                 value={fromDate}
//                 onChange={
//                     date => {
//                         setFromDate(date);
//                         onChangeSelected(date, thruDate).then(r => r);
//                     }
//                 }
//                 KeyboardButtonProps={
//                     {
//                         'aria-label': 'change date',
//                     }
//                 }
//             /> <
//                 KeyboardDatePicker
//                 disableToolbar
//                 variant="inline"
//                 format="dd/MM/yyyy"
//                 margin="normal"
//                 label="Đến ngày: "
//                 value={thruDate}
//                 onChange={
//                     date => {
//                         setThruDate(date);
//                         onChangeSelected(fromDate, date).then(r => r);
//                     }
//                 }
//                 KeyboardButtonProps={
//                     {
//                         'aria-label': 'change date',
//                     }
//                 }
//             /> <
//     /MuiPickersUtilsProvider>;
// }

// export function getDateFromNowPlus(year, month, day) {
//                 let date = new Date();
//     return new Date(date.getFullYear() + year, date.getMonth() + month, date.getDay() + day);
// }
