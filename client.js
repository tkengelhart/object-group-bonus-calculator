const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

/*

- Those who have a rating of a 2 or below should not receive a bonus.
- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
- Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
- Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.

- If their employee number is 4 digits long, this means they have been with the company for longer than 15 years,
and should receive an additional 5%.

- However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.

- No bonus can be above 13% or below 0% total.
*/

let newArray = [];

function createBonus( employee ){
    if (employee.reviewRating <= 2 && employee.employeeNumber.length > 4 ) {
      if (employee.annualSalary <= 65000) {
        return 0;
      }
      else {
        return 0;
      }
    }
    else if ( employee.reviewRating === 3 && employee.employeeNumber.length > 4 ) { 
     if (employee.annualSalary <= 65000) {
      return .04;
     }
     else {
       return .03;
     }
    }
    else if ( employee.reviewRating === 4 && employee.employeeNumber.length > 4) {
     if (employee.annualSalary <= 65000) {
      return .06;
    }
    else {
      return .05;
    }
  }
    else if ( employee.reviewRating === 5 && employee.employeeNumber.length > 4) {
    if ( employee.annualSalary <= 65000) {
      return .1;
    }
    else {
      return .09;
    }
  }
    else if (employee.reviewRating <= 2 && employee.employeeNumber.length <= 4) { 
    if (employee.annualSalary <= 65000) {
      return .05;
    }
    else {
      return .05;
    }
  }
    else if ( employee.reviewRating === 3 && employee.employeeNumber.length <= 4) {
      if (employee.annualSalary <= 65000) {
      return .09;
    }
    else {
      return .08;
    }
  }
    else if ( employee.reviewRating === 4 && employee.employeeNumber.length <= 4) {
      if( employee.annualSalary <= 65000) {
      return .11;
    }
    else {
      return .10;
    }
  }
    else if ( employee.reviewRating === 5 && employee.employeeNumber.length <= 4) {
      if ( employee.annualSalary <= 65000) {
      return .13;
    }
    else {
      return .13;
    }
}
}




function creatNewEmployee(employee) {
  let newBonus = createBonus( employee );
  let newComp = parseFloat(employee.annualSalary) + parseFloat(employee.annualSalary) * createBonus( employee );
  let newTotal = Math.round(employee.annualSalary * createBonus( employee ));


  let newEmplyObj = {
    name: employee.name, // keep
    bonusPercent: newBonus,// create function
    totalCompensation: newComp,//create function
    totalBonus: newTotal,//create function

  }
  newArray.push(newEmplyObj);
}

for (employee of employees) {


  creatNewEmployee(employee);
}

console.table(newArray);
