// FAJAR NURDIANSYAH - 227006077 PRESENT

// Clear event
document.getElementById("clearButton").addEventListener("click", function () {
  document.getElementById("pesan").value = "";
  document.getElementById("key").value = "";
  document.getElementById("hasil").value = "";
});

// Algoritma RC4
function algoritmaRC4() {
  let arrayBinary = [];
  // Ambil data
  let pesan = document.getElementById("pesan").value;
  let key = document.getElementById("key").value;
  // Konversi String To Biner
  for (let i = 0; i < pesan.length; i++) {
    // Konversi ke Desimal ASCII
    let ascii = pesan.charCodeAt(i);
    // Ubah ke Biner
    let binary = ascii.toString(2).padStart(8, "0");
    arrayBinary.push(binary);
  }

  // Inisialisasi S-Box dan Kunci
  let S = [];
  let K = [];
  for (let i = 0; i < pesan.length; i++) {
    S[i] = i;
    K.push(key.charCodeAt(i % key.length));
  }

  // Inisialisasi Random S-Box
  let j = 0;
  for (let i = 0; i < pesan.length; i++) {
    j = (j + S[i] + K[i]) % pesan.length;
    // Swap S[i] dan S[j]
    let temp = S[i];
    S[i] = S[j];
    S[j] = temp;
  }

  // Pseudorandom Generation Algorithm (PRGA)
  j = 0;
  let i = 0;
  let keyStream = [];
  for (let n = 0; n < pesan.length; n++) {
    i = (i + 1) % pesan.length;
    j = (j + S[i]) % pesan.length;
    // Swap
    let temp = S[i];
    S[i] = S[j];
    S[j] = temp;
    let t = (S[i] + S[j]) % pesan.length;
    keyStream[n] = S[t].toString(2).padStart(8, "0");
  }

  // Panggil fungsi enkripsi dekripsi
  enkripsiDekripsi(pesan, keyStream, arrayBinary);
}

// Fungsi enkripsi dekripsi
function enkripsiDekripsi(pesan, keyStream, arrayBinary) {
  let hasil = [];
  // Operasi XOR antara arrayBinary dan keyStream
  for (let i = 0; i < pesan.length; i++) {
    // Konversi string biner kembali ke angka desimal sebelum melakukan XOR
    let binaryToInt = parseInt(arrayBinary[i], 2);
    let keyStreamToInt = parseInt(keyStream[i], 2);
    // Operasi XOR
    let result = binaryToInt ^ keyStreamToInt;
    // Konversi hasil XOR kembali ke string
    hasil.push(String.fromCharCode(result));
  }
  document.getElementById("hasil").innerHTML = hasil.join("");
}
