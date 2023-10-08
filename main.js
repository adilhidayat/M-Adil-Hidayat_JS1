// Nama dan NPM
const nama = "Muhamad Adil Hidayat";
const npm = 2115061068;

// Menggunakan if-else dan nested if
if (npm >= 2115000000 && npm <= 2115999999) {
    console.log("Anda adalah mahasiswa prodi Informatika.");
} else if (npm >= 2116000000 && npm <= 2116999999) {
    console.log("Anda adalah mahasiswa prodi Sistem Informasi.");
} else {
    console.log("Anda bukan mahasiswa prodi Informatika atau Sistem Informasi.");
}

// Menggunakan switch-case
switch (npm % 10) {
    case 0:
        console.log("NPM Anda berakhiran angka 0.");
        break;
    case 8:
        console.log("NPM Anda berakhiran angka 8.");
        break;
    default:
        console.log("NPM Anda berakhiran dengan angka lain.");
}

// Menggunakan for loop
console.log("Menampilkan NPM secara terbalik:");
for (let i = npm.toString().length - 1; i >= 0; i--) {
    console.log(npm.toString()[i]);
}

// Menggunakan while loop
console.log("Menampilkan nama secara terbalik menggunakan while loop:");
let index = nama.length - 1;
while (index >= 0) {
    console.log(nama[index]);
    index--;
}

// Menggunakan do-while loop
console.log("Menampilkan nama menggunakan do-while loop:");
let currentIndex = 0;
do {
    console.log(nama[currentIndex]);
    currentIndex++;
} while (currentIndex < nama.length);

// Menggunakan function
function printInfo(nama, npm) {
    console.log(`Nama: ${nama}`);
    console.log(`NPM: ${npm}`);
}

// Memanggil function untuk mencetak info nama dan NPM
printInfo(nama, npm);
