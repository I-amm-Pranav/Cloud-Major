document.addEventListener('DOMContentLoaded', function() {
  var employees = [];

  // Function to generate random names
  function generateRandomName() {
    var firstNames = ['John', 'Jane', 'Michael', 'Emily', 'Robert', 'William', 'David', 'Sarah', 'Jennifer', 'James'];
    var lastNames = ['Smith', 'Doe', 'Johnson', 'Brown', 'Williams', 'Jones', 'Miller', 'Davis', 'Garcia', 'Martinez'];
    var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  }

  // Function to generate random cities
  function generateRandomCity() {
    var cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
    return cities[Math.floor(Math.random() * cities.length)];
  }

  // Function to generate random phone numbers
  function generateRandomPhoneNumber() {
    var phoneNumber = '+1 ';
    for (var i = 0; i < 10; i++) {
      phoneNumber += Math.floor(Math.random() * 10);
      if (i === 2 || i === 5) phoneNumber += '-';
    }
    return phoneNumber;
  }

  // Generate 500 employees
  for (var i = 0; i < 500; i++) {
    var employee = {
      name: generateRandomName(),
      city: generateRandomCity(),
      phoneNumber: generateRandomPhoneNumber()
    };
    employees.push(employee);
  }

  var tableBody = document.querySelector('#employeeTable tbody');

  employees.forEach(function(employee) {
    var row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.city}</td>
      <td>${employee.phoneNumber}</td>
    `;
    tableBody.appendChild(row);
  });
});
