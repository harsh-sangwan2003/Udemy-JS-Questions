const asyncFn = (callBack)=>{

    setTimeout(() => {
        callBack("done");
    }, 3000);
}

asyncFn((message)=>{
    console.log("callback",message);
})