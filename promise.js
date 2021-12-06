function getData() {
    return null;
  }
  
  let myPromise = new Promise((resolve, reject) => {
    var res = getData();
    let isPromiseKept = false;
    if (res != null) {
      resolve(res);
    } else {
      reject("data not found");
    }
  });
  
  myPromise
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  
  console.log(myPromise);
  
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
      data
        .json()
        .then((info) => {
          console.log(info);
           //actual data
        })
        .catch((err) => {
          console.log("data not found");
        });
  
      //
    })
    .catch((err) => {
      console.log(err);
    });
  