document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "abduaziz@gmail.com" && password === "123456") {
      window.location.href = "index.html";
    } else {
      alert("Email yoki parol noto'g'ri!");
    }
  });
  