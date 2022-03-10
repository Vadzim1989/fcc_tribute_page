const itsMe = document.getElementById('its-me');
const imgCap = document.getElementById('img-caption');

imgCap.addEventListener('mouseover', () => {
    itsMe.textContent = 'Nice to meet you!';
});

imgCap.addEventListener('mouseleave', () => {
    itsMe.textContent = "Hello! It's me!";
});

