/**
 *
 */
var index = 0;
var editableIndex;
var userName,
  userMobileNo,
  userEmailId,
  userDateOfBirth,
  userAge,
  userAbout,
  userPassword,
  userConfirmPassword;

function saveContents() {
  console.log(userAge);
  let details = new XMLHttpRequest();
  details.onreadystatechange = function () {
    if (details.readyState == 4 && this.status == 200) {
      let res = details.responseText;
      if (res == "Registered Successfully!!!") {
        window.location.href =
          "http://localhost:8085/ChatApp/LoginPageDesign.html";
        document.querySelector(".notificationDiv").style = "display:block";
        document.querySelector(".notification").innerHTML =
          "Registered Successfully!!!";
        let timeout = setTimeout(timeOutFunc, 3000);
      } else {
        document.querySelector(".notificationDiv").style = "display:block";
        document.querySelector(".notification").innerHTML =
          "Your Mobile No or Email id Already Exist!!!";
        let timeout = setTimeout(timeOutFunc, 3000);
      }
    }
  };
  details.open("Post", "http://localhost:8085/ChatApp/register", true);
  details.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  details.send(
    "userName=" +
      userName +
      "&userMobileNo=" +
      userMobileNo +
      "&userEmailId=" +
      userEmailId +
      "&userDateOfBirth=" +
      userDateOfBirth +
      "&userAge=" +
      userAge +
      "&userAbout=" +
      userAbout +
      "&userPassword=" +
      userPassword
  );
}

function textBoxtoLabelConvert() {
  switch (index) {
    case 0:
      userName = document.querySelector(".userName").value;
      if (userName != null && userName.length != 0) {
        document.querySelector(".userNameDiv").style = "display:none";
        document.querySelector(".setUserName").innerHTML =
          "  " +
          `  ${userName}<i onclick='hideLabels(${0})' class='fa fa-pencil editIcon'></i>`;
        document.querySelector(".userNameText").style = "display:block";
        console.log(userName);
        document.querySelector(".userMobileNoDiv").style = "display:block";
        index++;
        selectingButton();
      } else {
        document.querySelector(".notificationDiv").style = "display:block";
        document.querySelector(".notification").innerHTML =
          "Please!!! Enter Valid Name!!!";
        let timeout = setTimeout(timeOutFunc, 3000);
        // alert("please!! Enter Valid Name!!!");
      }
      break;
    case 1:
      //   document.querySelector(".userMobileNo").value = "";
      userMobileNo = document.querySelector(".userMobileNo").value;
      if (userMobileNo.length == 10) {
        document.querySelector(".userMobileNoDiv").style = "display:none";
        document.querySelector(".setUserMobileNo").innerHTML =
          "  " +
          `  ${userMobileNo}<i onclick='hideLabels(${1})' class='fa fa-pencil editIcon'></i>`;
        document.querySelector(".userMobileNoText").style = "display:block";
        document.querySelector(".userEmailIdDiv").style = "display:block";
        index++;
        selectingButton();
      } else {
        document.querySelector(".notificationDiv").style = "display:block";
        document.querySelector(".notification").innerHTML =
          "please!! Enter Correct Mobile Number!!!";
        let timeout = setTimeout(timeOutFunc, 3000);
        // alert("please!! Enter Correct Mobile Number!!!");
      }
      break;
    case 2:
      //   document.querySelector(".userEmailId").value = "";
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      userEmailId = document.querySelector(".userEmailId").value;
      if (userEmailId != null && userEmailId.match(emailPattern)) {
        document.querySelector(".userEmailIdDiv").style = "display:none";
        document.querySelector(".setUserEmailId").innerHTML =
          "  " +
          `  ${userEmailId}<i onclick='hideLabels(${2})' class='fa fa-pencil editIcon'></i>`;
        document.querySelector(".userEmailIdText").style = "display:block";
        document.querySelector(".userDateOfBirthDiv").style = "display:block";
        index++;
        selectingButton();
      } else {
        document.querySelector(".notificationDiv").style = "display:block";
        document.querySelector(".notification").innerHTML =
          "please!! Enter Email Id!!!";
        let timeout = setTimeout(timeOutFunc, 3000);
        // alert("please!! Enter Email Id!!!");
      }
      break;
    case 3:
      //   document.querySelector(".userDateOfBirth").value = "";
      userDateOfBirth = document.querySelector(".userDateOfBirth").value;
      console.log(userDateOfBirth);
      if (
        userDateOfBirth != null &&
        userDateOfBirth.length != 0 &&
        checkAge(userDateOfBirth)
      ) {
        document.querySelector(".userDateOfBirthDiv").style = "display:none";
        document.querySelector(".setUserDateOfBirth").innerHTML =
          "  " +
          `  ${userDateOfBirth}<i onclick='hideLabels(${3})' class='fa fa-pencil editIcon'></i>`;
        document.querySelector(".userDateOfBirthText").style = "display:block";
        document.querySelector(".userAboutDiv").style = "display:block";
        index++;
        selectingButton();
      } else {
        document.querySelector(".notificationDiv").style = "display:block";
        document.querySelector(".notification").innerHTML =
          "plss!! select your DOB!!!";
        let timeout = setTimeout(timeOutFunc, 3000);
        // alert("plss!! select your DOB!!!");
      }
      break;
    case 4:
      //   document.querySelector(".userAbout").value = "";
      userAbout = document.querySelector(".userAbout").value;
      if (userAbout != null && userAbout.length != 0) {
        document.querySelector(".userAboutDiv").style = "display:none";
        document.querySelector(".setUserAbout").innerHTML =
          "  " +
          `  ${userAbout}<i onclick='hideLabels(${4})' class='fa fa-pencil editIcon'></i>`;
        document.querySelector(".userAboutText").style = "display:block";
        document.querySelector(".userPasswordDiv").style = "display:block";
        index++;
        selectingButton();
      } else {
        document.querySelector(".notificationDiv").style = "display:block";
        document.querySelector(".notification").innerHTML =
          "please!! Enter About!!!";
        let timeout = setTimeout(timeOutFunc, 3000);
        // alert("please!! Enter About!!!");
      }
      break;
    case 5:
      //   document.querySelector(".userPassword").value = "";
      userPassword = document.querySelector(".userPassword").value;
      if (userPassword != null && userPassword.length > 7) {
        document.querySelector(".userPasswordDiv").style = "display:none";
        document.querySelector(".setUserPassword").innerHTML =
          "  " +
          `  ${userPassword}<i onclick='hideLabels(${5})' class='fa fa-pencil editIcon'></i>`;
        document.querySelector(".userPasswordText").style = "display:block";
        document.querySelector(".userConfirmPasswordDiv").style =
          "display:block";
        index++;
        selectingButton();
      } else {
        document.querySelector(".notificationDiv").style = "display:block";
        document.querySelector(".notification").innerHTML =
          "Password Length must be 8 Characters!!!";
        let timeout = setTimeout(timeOutFunc, 3000);
        // alert("Password Length must be 8 Characters!!!");
      }
      break;
    case 6:
      //   selectingButton();
      //   document.querySelector(".userConfirmPassword").value = "";
      userConfirmPassword = document.querySelector(
        ".userConfirmPassword"
      ).value;
      if (userConfirmPassword != null && userPassword == userConfirmPassword) {
        document.querySelector(".userConfirmPasswordDiv").style =
          "display:none";
        document.querySelector(".setUserName").innerHTML +=
          "  " +
          `  ${userConfirmPassword}<i onclick='hideLabels(${6})' class='fa fa-pencil editIcon'></i>`;
        document.querySelector(".userConfirmPasswordText").style =
          "display:block";
        // index++;
      } else {
        document.querySelector(".notificationDiv").style = "display:block";
        document.querySelector(".notification").innerHTML =
          "Wrong Confirm Password!!!";
        let timeout = setTimeout(timeOutFunc, 3000);
        // alert("Wrong Confirm Password!!!");
      }
      break;
  }
  //   console.log(index);
}

function selectingButton() {
  //   console.log(index);
  if (index == 6) {
    document.querySelector(".userNextButtonDiv").style = "display:none";
    document.querySelector(".userSignUpButtonDiv").style = "display:block";
  } else {
    document.querySelector(".userNextButtonDiv").style = "display:block";
    document.querySelector(".userSignUpButtonDiv").style = "display:none";
  }
}

function hideLabels(i) {
  switch (i) {
    case 0:
      document.querySelector(".userNameDiv").style = "display:none";
      document.querySelector(".userNameText").style = "display:none";
    case 1:
      document.querySelector(".userMobileNoDiv").style = "display:none";
      document.querySelector(".userMobileNoText").style = "display:none";
    case 2:
      document.querySelector(".userEmailIdDiv").style = "display:none";
      document.querySelector(".userEmailIdText").style = "display:none";
    case 3:
      document.querySelector(".userDateOfBirthDiv").style = "display:none";
      document.querySelector(".userDateOfBirthText").style = "display:none";
    case 4:
      document.querySelector(".userAboutDiv").style = "display:none";
      document.querySelector(".userAboutText").style = "display:none";
    case 5:
      document.querySelector(".userPasswordDiv").style = "display:none";
      document.querySelector(".userPasswordText").style = "display:none";
    case 6:
      document.querySelector(".userConfirmPasswordDiv").style = "display:none";
      document.querySelector(".userConfirmPasswordText").style = "display:none";
  }
  index = i;
  changeContent();
}

function changeContent() {
  selectingButton();
  switch (index) {
    case 0:
      document.querySelector(".userNameDiv").style = "display:block";
      document.querySelector(".userName").value = userName;
      break;
    case 1:
      document.querySelector(".userMobileNoDiv").style = "display:block";
      document.querySelector(".userMobileNo").value = userMobileNo;
      break;
    case 2:
      document.querySelector(".userEmailIdDiv").style = "display:block";
      document.querySelector(".userEmailId").value = userEmailId;
      break;
    case 3:
      document.querySelector(".userDateOfBirthDiv").style = "display:block";
      document.querySelector(".userDateOfBirth").value = userDateOfBirth;
      break;
    case 4:
      document.querySelector(".userAboutDiv").style = "display:block";
      document.querySelector(".userAbout").value = userAbout;
      break;
    case 5:
      document.querySelector(".userPasswordDiv").style = "display:block";
      document.querySelector(".userPassword").value = userPassword;
      break;
    case 6:
      document.querySelector(".userConfirmPasswordDiv").style = "display:block";
      document.querySelector(".userConfirmPassword").value =
        userConfirmPassword;
      break;
  }
}
function checkAge(userDateOfBirth) {
  let temp = [];

  let userDob = new Date(userDateOfBirth);
  let month_diff = Date.now() - userDob.getTime();
  let age_diff = new Date(month_diff);
  let year = age_diff.getUTCFullYear();
  userAge = Math.abs(year - 1970);
  if (userAge > 17) {
    return true;
  }
  return false;
  // temp = userDateOfBirth.split("-");
  // let date = new Date();
  // if (date.getFullYear() - 18 > temp[0]) {
  //   // userAge = subtractYear(date, temp[0]).split("-")[0]; //date.getFullYear - temp[0];
  //   console.log(userAge);
  //   return true;
  // } else if (date.getFullYear() - 18 == temp[0]) {
  //   if (date.getMonth() + 1 > temp[1]) {
  //     // userAge = subtractYear(date, temp[0]).split("-")[0];
  //     console.log(userAge);
  //     return true;
  //   } else if (date.getMonth() + 1 == temp[1]) {
  //     if (date.getDate >= temp[2]) {
  //       // userAge = subtractYear(date, temp[0]).split("-")[0];
  //       console.log(userAge);
  //       return true;
  //     }
  //   }
  // }
  // return false;
}
function subtractYear(date, years) {
  date.setFullYear(date.getFullYear() - years);
  return date;
}
function editUserName() {
  editableIndex = 0;
}
function editUserMobileNo() {
  editableIndex = 1;
}
function editUserEmailId() {
  editableIndex = 2;
}
function editUserDateOfBirth() {
  editableIndex = 3;
}
function editUserAbout() {
  editableIndex = 4;
}
function editUserPassword() {
  editableIndex = 5;
}
function editUserConfirmPassword() {
  editableIndex = 6;
}

function timeOutFunc() {
  document.querySelector(".notificationDiv").style = "display:none";
}
