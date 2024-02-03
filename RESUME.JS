var myResume={
    "Details": {
      "Name": "RAAMKUMAR",
      "Email": "RAAMKUMAR@gmail.com",
      "phone": "123456789",
      "degree": "M.sc",
    },
      "location": {
        "address": "1st street",
        "postalCode":" 6000000",
        "city": "karur",
        "state": "Tamilnadu",
        "country": "Inda",
    };
    console.log(myResume);


  var jsonObject = {
    "name": "RAAMKUMAR",
    "age": 27,
    "city": "KARUR"
  };
  
  // Using a for...in loop
  for (let key in jsonObject) {
    console.log(key + ": " + jsonObject[key]);
  }
  
  // Using a for...of loop
  const entries = Object.entries(jsonObject);
  for (let [key, value] of entries) {
    console.log(key + ": " + value);
  }
  
  // Using Array.forEach() method
  Object.entries(jsonObject).forEach(([key, value]) => {
    console.log(key + ": " + value);
  });