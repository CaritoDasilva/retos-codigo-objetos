// addArrayProperty. 
function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
  return obj;
}

// Contador de propiedades

const objectPropertiesCounter = (obj) => {
  return Object.entries(obj).length;
};

// removeStringValuesLongerThan

function removeStringValuesLongerThan(num, obj) {
  for (let i in obj) {
    if (obj[i].length > num) {
      delete obj[i];
    }

  }
  return obj;
}

// greetCustomer

const customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Carrie: {
    visits: 4,
  },
};

function greetCustomer(firstName) {
  let greeting = "";

  if (customerData[firstName] === undefined) {
    greeting = "Welcome! Is this your first time?";
  } else if (customerData[firstName].visits === 1) {
    greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!";
  } else if (customerData[firstName].visits > 1) {
    greeting = "Welcome back, " + firstName + "! So glad to see you again!";
  }

  return greeting;

}

// getAllKeys


function getAllKeys(obj) {
  return Object.keys(obj);
}

// listAllValues

function listAllValues(obj) {
  return Object.values(obj);
}

// transformEmployeeData

function transformEmployeeData(array) {
  var retorno = [];
  for (let aTransformar of array) {
    var objetoARetornar = {};
    for (let llaveValor of aTransformar) {
      objetoARetornar[llaveValor[0]] = llaveValor[1];
    }
    retorno.push(objetoARetornar);
  }
  return retorno;
}

// convertObjectToList

function convertObjectToList(obj) {
  return Object.entries(obj);
}

// addObjectProperty

function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
  return obj1;
}