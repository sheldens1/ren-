// Simpan password yang sudah ditentukan
const passwordBenar = "yahahaha"; 

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (password === passwordBenar) {
        alert("Login berhasil!");

        // Simpan user ke LocalStorage
        let users = JSON.parse(localStorage.getItem("loggedInUsers")) || [];
        if (!users.includes(username)) {
            users.push(username);
            localStorage.setItem("loggedInUsers", JSON.stringify(users));
        }

        // Perbarui daftar user yang login
        window.location.href = "lobi.html" ;
        updateUserList();
    } else {
        alert("Password salah!");
    }
}

// Fungsi untuk menampilkan daftar user yang login
function updateUserList() {
    let users = JSON.parse(localStorage.getItem("loggedInUsers")) || [];
    let userList = document.getElementById("user-list");
    userList.innerHTML = "";
    
    users.forEach(user => {
        let li = document.createElement("li");
        li.textContent = user;
        userList.appendChild(li);
    });
}

// Tampilkan daftar user saat halaman dibuka
updateUserList();

