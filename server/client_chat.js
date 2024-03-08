(() => {

    const history = document.getElementById('history');
    const userCount = document.getElementById('user-count');
    const renderEntry = (data) => {
        console.log({ data });
        const { time, text, user } = data;
        let color, nickname;
        if (user) {
            ({ color, nickname } = user);
        } else {
            color = "#000";
            nickname = 'System Bot';
        }
        history.innerHTML += `
        <div class="row">
        <span style="color: ${color ? color : '#333'}" class="nickname">${nickname}</span>
        <span class="time">${time}</span>
        <span class="message">${text}</span>
        </div>
        `;
    }

    // Set up socket connection
    let socket;
    const initSocket = () => {
        socket = io(location.origin);
        socket.emit('getHistory');
        socket.on('history', (messages) => {
            messages.forEach(entry => {
                renderEntry(entry);
            });
        });
        socket.on('msg', (data) => renderEntry(data));    
    
        socket.on('userCountChange', (data) => {
            const { currentUserCount } = data;
            userCount.innerHTML = `Online Users: ${currentUserCount}`;
        });
    }

    // Set up interactivity
    const triggerSendMessage = () => {
        console.log(`Msg: ${inputMsg.value}`);
        socket.emit('msg', { text: inputMsg.value });
        inputMsg.value = '';
    }
    const triggerSendNickname = () => {
        const { value } = nickname;
        console.log(`Nickname: ${value}`);
        initSocket();
        socket.emit('nickname', value);
        const nicknameModal = document.getElementById('nickname-modal');
        const nicknameValue = document.getElementById('nickname-value');
        nicknameModal.classList.add('hide');
        nicknameValue.innerHTML = value;
    }
    const nickname = document.getElementById('nickname');
    const inputMsg = document.getElementById('chatInput');  
    const sendButton = document.getElementById('chatSend');
    sendButton.addEventListener('click', triggerSendMessage );
    inputMsg.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          triggerSendMessage();
        }
    });
    nickname.focus();
    nickname.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            triggerSendNickname();
        }
    });

})();