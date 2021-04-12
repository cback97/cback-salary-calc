console.log('This is JS');

let employees = [];

$(document).ready(function () {
    // console.log('Hi I\'m jQuery');
    // $('body').append();

    $('#uploadData').on('click', pushEmployeeInfo);
    $('#employeeOutput').on('click', '.delete', removeEmployee);
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
    monthlyCost();
}

function removeEmployee(){
    $(this).closest('tr').remove()
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
                <td>${new Intl.NumberFormat("en-US", { style:"currency", currency: "USD"}).format(member.annualSalary)}</td>
                <td>
                    <button class="delete">Delete</button>
                </td>
            </tr>
        `)
    }
    // new Intl.NumberFormat().format(member.annualSalary)
}

function monthlyCost() {
    let annualCost = 0;
    let monthlyCost = annualCost / 12;

    for (i in employees) {
        monthlyCost = annualCost += employees[i].annualSalary / 12;
    } 
    $('#monthlyCosts').empty().append(`<p id="cost"> Monthly Cost: ${Intl.NumberFormat("en-US", { style:"currency", currency: "USD"}).format(monthlyCost)}</p>`);
    console.log('Monthly Cost:',Intl.NumberFormat("en-US", { style:"currency", currency: "USD"}).format(monthlyCost));
    if (monthlyCost >= 20000) {
        $('#cost').css('background-color', 'red');
    }  else {
        $('#cost').css('background-color', 'rgb(236, 236, 236)');
    }
    
}