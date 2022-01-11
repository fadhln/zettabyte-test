// Expected result : [
// { user_id: "1", name: "Bagas", department: "Frontend", school_id: "1", school: "PLMK" }
// { user_id: "2", name: "Faisal", department: "Frontend", school_id: "2", school: "PLMI" }
// { user_id: "3", name: "Surya", department: "Backend", school_id: "3", school: "PLN" }
// { user_id: "4", name: "Ari", department: "Backend", school_id: "4", school: "PTN" }
// ]

// Direction : Get array data from string below ("users" object) and make it object like "expected result"!! The conditions are :
// 1. Split data based on key (the key in brackets)
// 2. Each object of array in the "user" variable is separated by a comma ","
// 3. Make sure the data is sequential according to the user id

const users =
  "1(user_id) Bagas(name) Frontend(department) PLMK(school) 1(school_id), 2(user_id) Faisal(name) Frontend(department) PLMI(school) 2(school_id), 3(user_id) Surya(name) Backend(department) PLN(school) 3(school_id), 4(user_id) Ari(name) Backend(department) PTN(school) 4(school_id)";

function resultDev(data) {
  // Your Code Here
  const entry = data.split(",");
  return entry.map((entryString) => {
    const pairsList = entryString.split(" ");
    var jsonString = "{";
    console.log(jsonString);
    for (i = 0; i < pairsList.length; i++) {
      if (pairsList[i].length < 1) {
        continue;
      }
      var attr = pairsList[i].split("(")[1].slice(0, -1);
      var key = pairsList[i].split("(")[0];
      jsonString = jsonString + '"' + attr + '":"' + key + '", ';
    }
    jsonString = jsonString.slice(0, -2) + "}";

    return JSON.parse(jsonString);
  });
}

console.log(resultDev(users));
