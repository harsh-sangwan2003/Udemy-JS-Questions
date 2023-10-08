fetch("https://api.github.com/users/harsh-sangwan2003")
    .then(res => res.json())
    .then(data => {

        console.log(data);
    })
    .catch(err => {

        console.log(err);
    })