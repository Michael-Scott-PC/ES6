// Default Function Parameters
// new ES6 feature allowing us to provide
// default values for function parameters

function sendMessage(email, subject, message='yayyyy') {
    if(!email || !subject) {
        return false;
    }
    // message = message || 'yayyyyy';
    // send the message
    message = message.toUpperCase();
    console.log(message);
    console.log(subject, '\n');
    return true;
}

sendMessage('fry@planetexpress.org', 'Good news!', 'you\'ve got free tickets!');

sendMessage('fry@planetexpress.org', 'Bad news!');