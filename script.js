// Ganti teks sambutan dengan nama input user (contoh sederhana)
document.getElementById("userName").textContent = "Said Imtiyaz";

// Validasi form
document.getElementById("messageForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name  = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const msg   = document.getElementById("msg").value.trim();

  if(!name || !email || !phone || !msg){
    alert("Semua field harus diisi!");
    return;
  }
  alert("Pesan berhasil dikirim ke Muhammad Said Imtiyaz!");
  this.reset();
});
