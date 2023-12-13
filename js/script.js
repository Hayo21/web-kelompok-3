const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

function showDescription(card) {
  card.querySelector(".description").style.transform = "translateY(0)";
}

function hideDescription(card) {
  card.querySelector(".description").style.transform = "translateY(100%)";
}

// komentar

function submitComment() {
  // Dapatkan nilai dari input nama dan komentar
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;

  // Buat elemen baru untuk menampilkan komentar
  var commentElement = document.createElement("div");
  commentElement.className = "comment";
  commentElement.innerHTML = "<strong>" + name + ":</strong> " + comment;

  // Tambahkan elemen komentar ke daftar komentar
  var commentsList = document.querySelector(".comments-list");
  commentsList.appendChild(commentElement);

  // Bersihkan nilai input setelah mengirim komentar
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}

// end komentar
