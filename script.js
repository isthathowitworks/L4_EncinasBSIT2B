function check() {
    let num = document.getElementById("num").value;
    document.getElementById("result").innerText = num % 2 === 0 ? "Even" : "Odd";
}

// console of 1-10
for (let i = 1; i <= 10; i++) console.log(i);
