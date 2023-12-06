run();
async function run() {
  console.log("before");

  try {
    let user = await getUser(10);
    console.log("je suis là", user);

    let products = await getProduct(user.id);
    console.log(products);

    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    console.log(posts);
    displayData(posts);
  } catch (error) {
    console.log(error);
  }

  console.log("between");
  console.log("after");
}




function displayData(posts) {
  let tableBody = document.querySelector("#data-table tbody");

  posts.forEach(post => {
    let row = tableBody.insertRow();
    let userIdCell = row.insertCell(0);
    let idCell = row.insertCell(1);
    let titleCell = row.insertCell(2);
    let bodyCell = row.insertCell(3);

    userIdCell.textContent = post.userId;
    idCell.textContent = post.id;
    titleCell.textContent = post.title;
    bodyCell.textContent = post.body;
  });
}

// Appeler la fonction run après le chargement de la page


function getUser(id) {
  return new Promise((resolve, reject) => {
    let status = true;
    setTimeout(() => {
      console.log("retreive data from database");
      if (status) {
        return resolve({ id: id, name: "Mohamed romdhani" });
      } else {
        return reject("user not found");
      }
    }, 2000);
  });
}

function getProduct(userId) {
  return new Promise((resolve, reject) => {
    let status = true;

    setTimeout(() => {
      console.log("retreive products from database");
      if (status) {
        return resolve(["p1", "p2"]);
      } else {
        return reject("Product not found");
      }
    }, 2000);
  });
}

//  let p = new Promise((resolve, reject) =>{
//   let status = false;
//   if(status){
//     resolve('Ok')
//   }
//   else{
//     reject('Non')
//   }
// })
// p
// .then(res =>{console.log(res)})
// .catch(error =>{console.error(error)})
