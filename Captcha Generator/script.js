let captcha;
let alphabets = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";

let stat = document.getElementById('status');
stat.innerText = "Captcha Generator";

const generate = () => {
    let first = alphabets[Math.floor(Math.random() * alphabets.length)];
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);

    captcha =
      first.toString() +
      second.toString() +
      third.toString() +
      fourth.toString() +
      fifth.toString() +
      sixth.toString();

    document.getElementById('generated-captcha').value = captcha;
    document.getElementById("entered-captcha").value = '';
    stat.innerText = "Captcha Generator";
}

const check = () => {
    let userVal = document.getElementById("entered-captcha").value;

    if(userVal === captcha) {
        stat.innerText = "Correct!!";
    } else {
        stat.innerText = "Try Again!!";
        document.getElementById("entered-captcha").value = '';
    }
}