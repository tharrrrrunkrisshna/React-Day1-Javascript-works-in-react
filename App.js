console.log("Message to Developer")
function AlertMessage(){
    const Hi=()=>{alert("Message")}
    return <div><button onClick={Hi}>Click here</button></div>
}
ReactDOM.render(<AlertMessage/>,document.getElementById('mydiv'))