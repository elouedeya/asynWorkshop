console.log("before");

getUser(10)
  .then((user) => {
    console.log(user);
    return getProduct(user.id);
  })
  .then((products) => {
    console.log("Products:", products);
  })

  .catch((error) => {
    console.warn(error);
  });

console.log("between");
console.log("after");

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
