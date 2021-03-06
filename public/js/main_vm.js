import ChatMessage from './modules/ChatMessage.js';

const socket = io();

function logConnect({sID, message}){ //sID, message
    console.log(sID, message);
    vm.socketID = sID;

    var userConnect = new Object();
	socket.emit('chat message', { content: "New user has connected", object: userConnect});
}


function appendMessage(message){
    vm.messages.push(message);
}

//create vue instance
const vm = new Vue ({
    data : {
        socketID: "",
        nickname: "",
        message: "",
        messages: []
    },

    methods: {
        dispatchMessage(){
            //emit message event from the client side
            socket.emit('chat message', {content: this.message, name: this.nickname || "New User"});

            //reset the message
            this.message = "";
        }
    },

    components: {
        newmessage: ChatMessage
    }
}).$mount(`#app`);

socket.on('connected', logConnect);
socket.addEventListener('chat message', appendMessage);
socket.addEventListener('disconnect', appendMessage);

