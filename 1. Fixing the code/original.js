service.fetchData(function (err, data) {
  if (err) {
    console.log(err);
    return;
  }
  data.owner = "Fluency";
  service.parseData(data, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    service.saveData(function (err, data) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("finished");
    });
  });
});


