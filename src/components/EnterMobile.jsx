import React from "react";

function EnterMobile() {
  const alertOtp = (e) => {
    e.preventDefault();
    const number = e.target.childNodes[1].value;
    if (number.length !== 10) {
      alert("Invalid mobile number");
    } else {
      alert(`Otp has been sent to Mobile number : ${number}`);
      var otp = "";
      while (otp === "") {
        otp = prompt("Enter Otp");
      }
      if (otp === "1234") {
        alert("Success");
      } else {
        alert("Wrong Otp");
      }
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={alertOtp}>
        <h1>Enter Mobile Number</h1>
        <input type="number" name="ph_no" />
        <br />
        <br />
        <button type="submit">Send Otp</button>
      </form>
    </React.Fragment>
  );
}

export default EnterMobile;
