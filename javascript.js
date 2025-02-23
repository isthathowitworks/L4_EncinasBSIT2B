function check() {
    let num = document.getElementById("num").value;
    document.getElementById("result").innerText = num % 2 === 0 ? "Even" : "Odd";
}

// Print numbers from 1 to 10 in console
for (let i = 1; i <= 10; i++) console.log(i);
