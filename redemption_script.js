// JavaScript can be used for handling redeem actions and showing additional information
document.querySelectorAll('.redeem-button').forEach(button => {
    button.addEventListener('click', function() {
        alert("Code redeemed! Voucher will be sent to your email.");
    });
});

document.querySelector('.how-to-redeem-button').addEventListener('click', function() {
    alert("To redeem your prize, please visit the locations listed and enter the corresponding code.");
});
