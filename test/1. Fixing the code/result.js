// Original
// service.fetchData(function (err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   data.owner = "Fluency";
//   service.parseData(data, function (err, data) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     service.saveData(function (err, data) {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log("finished");
//     });
//   });
// });


// Callback hell can be refactored e.g. into sequential execution  using async await
// And e.g. with promisify - internal node fs wich converts fn with err, value args to fn with a promise
// https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original
// Result - 3 sequential calls
const util = require("util");

const main = async function (service) {
  const fetchData = util.promisify(service.fetchData);
  const parseData = util.promisify(service.parseData);
  const saveData = util.promisify(service.saveData);

  let data;
  try {
    data = await fetchData();
  } catch (err) {
    console.log(err);
    return;
  }

  // data.owner = "Fluency"; // Would be better not change initial data and pass changed object as
  let parsedData;
  try {
    parsedData = parseData({ ...data, owner: "Fluency" });
  } catch (err) {
    console.log(err);
    return;
  }

  let savedData;
  try {
    savedData = saveData(parsedData);
  } catch (err) {
    console.log(err);
    return;
  }

  console.log("finished");
};
