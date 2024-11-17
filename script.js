document.getElementById('phone-btn').addEventListener('click', () => {
    document.getElementById('phone-btn').classList.add('active');
    document.getElementById('email-btn').classList.remove('active');
    document.getElementById('phone-input').setAttribute('placeholder', 'Phone');
});

document.getElementById('email-btn').addEventListener('click', () => {
    document.getElementById('email-btn').classList.add('active');
    document.getElementById('phone-btn').classList.remove('active');
    document.getElementById('phone-input').setAttribute('placeholder', 'Email');
});
