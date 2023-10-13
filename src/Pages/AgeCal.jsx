import React from "react";

function AgeCal(){
    const [age, setAge] = React.useState(9);
    const [date, setDate] = React.useState(new Date());
    console.log(date)
    return(
        <>
        <h1>Age Calculator</h1>
        <p>Enter your date of birth</p>
        <textarea></textarea>
        <button>Calculate Age</button>
        <h3>You are {age} years old</h3>
        </>
    );
}

export default AgeCal;