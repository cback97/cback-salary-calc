console.log('This is JS');

let employees = [];

$(document).ready(function () {
    // console.log('Hi I\'m jQuery');
    // $('body').append();

    $('#uploadData').on('click', pushEmployeeInfo);

});


function pushEmployeeInfo() {
    //Get Data from Input Fields
    employeeData = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#ID').val(),
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
    displayOutput();
}

function displayOutput() {
    // Clear everything out first
    $('#employeeOutput').empty();

    // Loop over array & add a row to the table on the DOM
    for (member of employees) {
        $('#employeeOutput').append(`
            <tr>
                <td>${member.firstName}</td>
                <td>${member.lastName}</td>
                <td>${member.id}</td>
                <td>${member.Position}</td>
                <td>${member.annualSalary}</td>
                <td>
                    <button class="delete">Delete</button>
                </td>
            </tr>
        `)
    }
}