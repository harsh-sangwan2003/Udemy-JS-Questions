// Create a promise function to be able to use callback function via promise approach

const asyncFunc = (callback) => {
  setTimeout(() => {
    callback(1);
  }, 3000);
};

const fn = () => {

  return new Promise(resolve => {

    asyncFunc((data) => {

      resolve(data);
    })
  })
}

fn().then(data => {
  console.log(data);
})
  .catch(err => {
    console.log(err);
  });
