import React from 'react'

const message = "hi this is alert message on click";

export default class AlertEventhadle extends React.Component {
displaymessage(message){
  alert(message)
}
render() {
  return(
    <div>
    <button onClick = { () => this.displaymessage(message)}>Click Button </button>
    </div>
  )
}

}