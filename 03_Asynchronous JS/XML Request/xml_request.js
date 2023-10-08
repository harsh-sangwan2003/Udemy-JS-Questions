const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/harsh-sangwan2003');

xhr.send();

xhr.onload = function () {

    if (xhr.status !== 200)
        console.log("Error" + xhr.status + xhr.statusText);

    else
        console.log("Suceess: ", xhr.response);
}

xhr.onerror = function () {

    console.log("xhr request failed");
}