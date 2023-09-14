$(document).ready(function () {
  $("#addStudentDetailsForm").validate({
    rules: {
      firstName: {
        required: true,
      },
      middleName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      studentEmail: {
        required: true,
      },
      contactNumber: {
        required: true,
      },
      parentContactNumber: {
        required: true,
      },
      gender: {
        required: true,
      },
      semester: {
        required: true,
      },
      schoolcollege: {
        required: true,
      },
      permanentAddress: {
        required: true,
      },
      uploadFile: {
        required: true,
      },
    },
    messages: {
      firstName: {
        required: "Please enter your first name",
      },
      middleName: {
        required: "Please enter your middle name",
      },
      lastName: {
        required: "Please enter your last name",
      },
      studentEmail: {
        required: "Please enter studentEmail",
      },
      contactNumber: {
        required: "Please enter your contactNumber",
      },
      parentContactNumber: {
        required: "Please enter your parentContactNumber",
      },
      gender: {
        required: "Please select gender",
      },
      semester: {
        required: "Please enter your semester",
      },
      schoolcollege: {
        required: "Please enter your school/college",
      },
      permanentAddress: {
        required: "Please enter your permanent address",
      },
      uploadFile: {
        required: "Please select file",
      },
    },
  });
});

