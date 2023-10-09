// Convert time in 24 hours format
const convertTo24HrsFormat = (timeText)=>{

    const timeTextLower = timeText.toLowerCase();
    let [hours,minutes] = timeTextLower.split(":");

    if(timeTextLower.endsWith("am"))
    hours = hours==="12"?"0":hours;

    else if(timeTextLower.endsWith("pm"))
    hours = hours==="12"?hours:String(+hours+12);

    return hours.padStart(2,0)+":"+minutes.slice(0,-2).padStart(2,0);
}

console.log(convertTo24HrsFormat("12:10AM"));