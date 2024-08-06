let happyButtonPressCount = 0; // Counter for button presses
let messageCounter = 0; // Counter for hotel messages
let hotelButtonClickCount = 0; // Counter for hotel button clicks
const messages = [
    "Welcome to the Mixin hotel...",
    "Enjoy your stay!",
    "Don't mind the ghosts...",
    "They just want to be friends...",
    "Or maybe not...",
    "Did you hear that?",
    "Sometimes things go bump in the night...",
    "Don't look under the bed...",
    "You might not like what you find...",
    "Or who finds you...",
    "Sleep tight...",
    "And don't let the bedbugs bite...",
    "Or the ghosts...",
    "Or the monsters...",
    "They're everywhere...",
    "Waiting...",
    "Watching...",
    "Listening...",
    "They know you're here...",
    "They can see you...",
    "They can hear you...",
    "They can feel you...",
    "They can taste your fear...",
    "And they love it...",
    "But don't worry...",
    "They just want to play...",
    "Forever...",
    "And ever...",
    "And ever...",
    "You can't leave...",
    "You belong to us now...",
    "Forever...",
    "And ever...",
    "And ever...",
    "Join us...",
    "Stay with us...",
    "Forever...",
    "And ever...",
    "And ever...",
    "You can't escape...",
    "It's too late...",
    "We own you...",
    "Forever...",
    "And ever...",
    "And ever...",
    "Enjoy your stay...",
    "In the Mixin hotel...",
    "Forever...",
    "And ever...",
    "And ever...",
    "BOOM!"
];

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('message');
    const allElements = document.querySelectorAll('body *');
    const getHappyButton = document.getElementById('getHappyButton');
    const hotelButton = document.createElement('button');
    hotelButton.innerText = 'Hotel';
    hotelButton.style.position = 'fixed';
    hotelButton.style.bottom = '10px';
    hotelButton.style.right = '10px';
    hotelButton.style.padding = '10px';
    hotelButton.style.fontSize = '1rem';
    hotelButton.style.fontFamily = '"Creepster", cursive';
    hotelButton.style.zIndex = '1000';
    document.body.appendChild(hotelButton);

    textarea.addEventListener('input', () => {
        if (textarea.value.includes('Get Mad')) {
            triggerFunction(allElements);
        } else {
            resetFunction(allElements);
        }
    });

    getHappyButton.addEventListener('click', () => {
        happyButtonPressCount++; // Increment the counter
        showNotification();
    });

    hotelButton.addEventListener('click', () => {
        hotelButtonClickCount++;
        if (hotelButtonClickCount === 3) {
            showCatMessage();
        } else {
            showHotelMessage();
        }
    });
});

function getRandomSkew() {
    return `skew(${Math.random() * 40 - 20}deg, ${Math.random() * 40 - 20}deg)`;
}

function triggerFunction(elements) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = '"Creepster", cursive';
    document.body.style.transition = 'transform 0.5s, background-color 0.5s, color 0.5s';
    
    elements.forEach(element => {
        element.style.transform = getRandomSkew();
        element.style.transition = 'transform 0.5s, color 0.5s';
        element.classList.add('scary-text');
    });
}

function resetFunction(elements) {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.body.style.fontFamily = '';
    document.body.style.transition = 'transform 0.5s, background-color 0.5s, color 0.5s';
    
    elements.forEach(element => {
        element.style.transform = 'skew(0deg, 0deg)';
        element.style.transition = 'transform 0.5s, color 0.5s';
        element.classList.remove('scary-text');
    });
}

function showNotification() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const notificationCount = 50;
    const notificationSize = 150;  // Approximate size of each notification

    for (let i = 0; i < notificationCount; i++) {  // Create multiple notifications
        const notification = document.createElement('div');
        notification.textContent = 'NO';
        notification.style.position = 'fixed';
        notification.style.top = `${Math.random() * (screenHeight - notificationSize)}px`;
        notification.style.left = `${Math.random() * (screenWidth - notificationSize)}px`;
        notification.style.fontSize = '5rem';  // Increased size for impact
        notification.style.fontFamily = '"Creepster", cursive';
        notification.style.color = 'red';
        notification.style.backgroundColor = 'black';
        notification.style.padding = '20px';
        notification.style.border = '4px solid white';  // Thicker border
        notification.style.textAlign = 'center';
        notification.style.zIndex = '1000';
        notification.style.opacity = '0.8';  // Slight transparency
        notification.style.animation = 'flicker 0.5s infinite, shake 0.5s';  // Add animations
        document.body.appendChild(notification);

        setTimeout(() => {
            document.body.removeChild(notification);
        }, 2000);
    }

    // Choose the sound based on button press count
    const soundFile = happyButtonPressCount > 15 < 16 ? 'fnaf.mp3' : 'minecraftcavenoise.mp3';
    const audio = new Audio(`${soundFile}`);  // Add path to your sound files
    audio.play();
}

function showHotelMessage() {
    if (messageCounter < messages.length) {
        const message = document.createElement('div');
        message.textContent = messages[messageCounter];
        message.style.position = 'fixed';
        message.style.bottom = '10px';
        message.style.right = '10px';
        message.style.fontSize = '1.5rem';
        message.style.fontFamily = '"Creepster", cursive';
        message.style.color = 'red';
        message.style.backgroundColor = 'black';
        message.style.padding = '10px';
        message.style.border = '2px solid white';
        message.style.zIndex = '1000';
        document.body.appendChild(message);

        setTimeout(() => {
            document.body.removeChild(message);
        }, 2000);

        messageCounter++;
    }

    if (messageCounter >= 50) {
        triggerExplosion();
    }
}

function showCatMessage() {
    const message = document.createElement('div');
    message.textContent = "Don't Click Me, Click That Cat Over There";
    message.style.position = 'fixed';
    message.style.bottom = '10px';
    message.style.right = '10px';
    message.style.fontSize = '1.5rem';
    message.style.fontFamily = '"Creepster", cursive';
    message.style.color = 'red';
    message.style.backgroundColor = 'black';
    message.style.padding = '10px';
    message.style.border = '2px solid white';
    message.style.zIndex = '1000';
    document.body.appendChild(message);

    // Create cat image
    const catImage = document.createElement('img');
    catImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Photo_of_a_kitten.jpg/800px-Photo_of_a_kitten.jpg';  // Add the correct path to your cat image
    catImage.style.position = 'fixed';
    catImage.style.bottom = '50px';
    catImage.style.right = '50px';
    catImage.style.width = '100px';
    catImage.style.height = '100px';
    catImage.style.zIndex = '1000';
    catImage.style.cursor = 'pointer';
    document.body.appendChild(catImage);

    catImage.addEventListener('click', () => {
        const meowSound = new Audio('meow.mp3');  // Add the correct path to your meow sound
        meowSound.play();
        
        meowSound.addEventListener('ended', () => {
            document.body.removeChild(catImage);
            document.body.removeChild(message);
            showHotelMessage();
        });
    });
}

function triggerExplosion() {
    document.body.style.transition = 'background-color 0.5s, color 0.5s, transform 1s';
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
    document.body.style.transform = 'scale(1.1)';

    setTimeout(() => {
        document.body.style.backgroundColor = 'black';
        document.body.style.transform = 'scale(1.2) rotate(10deg)';
    }, 100);

    setTimeout(() => {
        document.body.style.backgroundColor = 'white';
        document.body.style.transform = 'scale(1.3) rotate(-10deg)';
    }, 200);

    setTimeout(() => {
        document.body.style.backgroundColor = 'red';
        document.body.style.transform = 'scale(1.4) rotate(10deg)';
    }, 300);

    setTimeout(() => {
        document.body.style.backgroundColor = 'black';
        document.body.style.transform = 'scale(1.5) rotate(-10deg)';
        showFinalMessage();
    }, 400);
}

function showFinalMessage() {
    const finalMessage = document.createElement('div');
    finalMessage.textContent = 'WHAT DID YOU DO';
    finalMessage.style.position = 'fixed';
    finalMessage.style.top = '50%';
    finalMessage.style.left = '50%';
    finalMessage.style.transform = 'translate(-50%, -50%)';
    finalMessage.style.fontSize = '5rem';
    finalMessage.style.fontFamily = '"Creepster", cursive';
    finalMessage.style.color = 'red';
    finalMessage.style.backgroundColor = 'black';
    finalMessage.style.padding = '20px';
    finalMessage.style.border = '4px solid white';
    finalMessage.style.textAlign = 'center';
    finalMessage.style.zIndex = '1000';
    document.body.appendChild(finalMessage);
}
