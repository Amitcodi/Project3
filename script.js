let employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
  employees.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}


function PrintDeveloperbyForEach() {
  employees.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(employees);
}

function removeAdmin() {
  employees = employees.filter((employee) => employee.profession !== "admin");
  console.log(employees);
}

function concatenateArray() {
  const newEmployees = [
    { id: 5, name: "michael", age: "22", profession: "designer" },
    { id: 6, name: "sara", age: "21", profession: "developer" },
    { id: 7, name: "chris", age: "23", profession: "manager" }
  ];

  const concatenatedArray = employees.concat(newEmployees);
  console.log(concatenatedArray);
}
