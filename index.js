function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    console.log("Invalid Number,(you can give your own string error message)");
  } else {
    return ticketSale * 120 - (500 + 8 * 50);
  }
}

function checkName(name) {
  const nameEnd = ["a", "y", "i", "e", "o", "u", "w"];

  if (typeof name !== "string") {
    return "invalid";
  } else if (nameEnd.includes(name.toLowerCase()[name.length - 1])) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  if (Array.isArray(array)) {
    return array.filter((arr) => typeof arr === "number");
  } else {
    return "Invalid Array,only input Array";
  }
}

function password(obj) {
  if (
    !obj.hasOwnProperty("name") ||
    !obj.hasOwnProperty("birthYear") ||
    !obj.hasOwnProperty("siteName")
  ) {
    return "invalid";
  }

  if (isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
    return "invalid";
  }

  const firstCharToupperCase = obj.siteName.at(0).toUpperCase();
  const password = `${firstCharToupperCase}${obj.siteName.slice(1)}#${
    obj.name
  }@${obj.birthYear}`;
  return password;
}

function monthlySavings(payments, livingCost) {
  if (!Array.isArray(payments) || typeof livingCost !== "number") {
    return "invalid input";
  }

  const totalIncome = payments.reduce(
    (initialValue, payment) => initialValue + payment,
    0
  );

  const totalTax = payments.reduce((initialValue, payment) => {
    if (payment > 3000) {
      return initialValue + 0.2 * payment;
    } else {
      return initialValue;
    }
  }, 0);

  const savings = totalIncome - totalTax - livingCost;

  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
