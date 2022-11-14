let button = document.querySelector("button")
let input = document.querySelector("input")
let textArea = document.querySelector("textarea")
let list = document.querySelector(".result")
class Message {
    constructor(name, message, date) {
        this.name = name;
        this.message = message;
        this.date = date;
    }

    toHtml() {
        list.innerHTML += `
        <p>${this.date} ${this.name}: ${this.message}</ p>
        `;
    }
}

class Messanger {
    constructor() {
        this.messages = [];
    }

    send(author, text) {
        let message = new Message(author, text, gettime());
        this.messages.push(message);
    }
    show_history() {
        this.messages.map((message) => message.toHtml());
    }
}

function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}


button.addEventListener("click", handleInput)

function handleInput() {
    let Name = input.value.trim();
    let message = textArea.value.trim();
    if (Name && message) {
        let messenger = new Messanger();
        messenger.send(Name, message);
        messenger.show_history();

    } else {
        alert("boş qoymamayın!")
    }

    input.value = null;
    textArea.value = null;
}