
const sendMessage = () => {
    let msg = prompt('Enter your message')
    console.log(msg)
}

const MessageButton = () => {
    return <button onClick={sendMessage}>Click Me!</button>
    
}


export {MessageButton}