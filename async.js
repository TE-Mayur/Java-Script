var arr = [];
// async function getData() {
//   await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => {
//       data
//         .json()
//         .then((info) => {
//           console.log("copying data");
//           arr = [...info];
//           console.log("successfully copied data");
//         })
//         .catch((err) => {
//           console.log("data not found");
//         });

//       //
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   console.log(arr); //100
// }

async function getData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log("data is extracted");
  console.log(data);
  let org = await data.json();
  console.log(org);
  console.log("Asynchronus Code");
}
getData();
