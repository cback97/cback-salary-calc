console.log('This is JS');

let employees = [];

$(document).ready(function () {
    // console.log('Hi I\'m jQuery');
    // $('body').append();

$('#uploadData').on('click', pushEmployeeInfo);

});


function pushEmployeeInfo (){
    //Get Data from Input Fields
    employeeData = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        ID: $('#ID').val(),
        Position: $('#Position').val(),
        annualSalary: $('#annualSalary').val(),
    }
    //Move Objects into Global Array
    employees.push(employeeData);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#ID').val('');
    $('#Position').val('');
    $('#annualSalary').val('');

    console.log(employees);
}

