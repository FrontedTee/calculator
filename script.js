let num1 = prompt("Enter NUMBER 1");
    let operation = prompt(
      "Enter operator: These are the allowed operators \n '*',  '/',  '-',  '+'"
    );
    let num2 = prompt(`${num1} ${operation}   Enter NUMBER 2`);

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    function performMath() {
      if (operation == "-") return num1 - num2;
      else if (operation == "+") return num1 + num2;
      else if (operation == "*") return num1 * num2;
      else if (operation == "/") return num1 / num2;
      else return "INVALID,PLEASE TRY AGAIN";
    }

    document.write(performMath());