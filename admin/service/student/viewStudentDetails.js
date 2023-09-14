$(document).ready(function () {
  loadUserDetails();
});

function loadUserDetails() {
    
    $('#dataTable').DataTable().destroy();

   $.ajax({
    url: 'https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1001',
    type: 'GET',
    dataType: 'json',
    success: function (result) {
        let employeesData = result;
        let employeesDetailsTbody = "";

        for (let i in employeesData) {

            employeesDetailsTbody = employeesDetailsTbody + '<tr>' +
                '<td>' + employeesData[i].id + '</td>' +    
                '<td><a href="editStudentDetails.js" ><img style="height:50px" class="img-profile rounded-circle" src="'+ employeesData[i].imageUrl +'" alt="Not found"/></a></td>' +
                '<td>' + employeesData[i].firstName + '</td>' +
                '<td>' + employeesData[i].lastName + '</td>' +
                '<td>' + employeesData[i].email + '</td>' +
                '<td>' + employeesData[i].contactNumber + '</td>' +
                '<td>' + employeesData[i].age + '</td>' +
                '<td>' + employeesData[i].dob + '</td>' +
                '<td>' + employeesData[i].salary + '</td>' +
                '<td>' + employeesData[i].address + '</td>' +
                '<td><i class="fa fa-edit" data-toggle="modal" data-target=".bd-example-modal-lg">Edit</i></td>' +
                '</tr>';
        }
        $("#userDetailsTbody").html(employeesDetailsTbody);

        $('#dataTable').DataTable();

    },
    error: function (xhr, textStatus, errorThrown) {
        console.log('Error in Operation');
    }
});
}
