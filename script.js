let users = [];
let editingIndex = null;

function addData() {
  const name = document.getElementById("nama").value;
  const kelas = document.getElementById("Kelas").value;
  const nisn = document.getElementById("nisn").value;
  const jam = document.getElementById("jam").value;
  const barang = document.getElementById("barang").value;

  if (
    name &&
    kelas &&
    nisn &&
    jam &&
    (jam !== "pilih jam") !== "pilih barang"
  ) {
    if (editingIndex !== null) {
      users[editingIndex] = { name, kelas, nisn, jam, barang };
      editingIndex = null;
    } else {
      users.push({ name, kelas, nisn, jam, barang });
    }

    resetFields();
    displayData();
  } else {
    alert("Harap isi semua data dengan benar!");
  }
}

function displayData() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  users.forEach((user, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.kelas}</td>
        <td>${user.nisn}</td>
        <td>${user.jam}</td>
        <td>${user.barang}</td>
        <td>
          <button style="background-color: #FFEB3B; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;" onclick="editData(${index})">Edit</button>
          <button style="background-color: #f44336; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;" onclick="deleteData(${index})">Hapus</button>
          <button style="background-color: #3B71CA; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;" onclick="showStruk(${index})">Struk</button>
          <button 
          style="background-color: #4CAF50; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;"
          onmouseover="this.style.backgroundColor='#45a049'" 
          onmouseout="this.style.backgroundColor='#4CAF50'" 
          onclick="tambahData(${index})">
          Tambah Data
          </button>
        </td>
      </tr>
    `;
  });
}

function editData(index) {
  const user = users[index];

  document.getElementById("nama").value = user.name;
  document.getElementById("Kelas").value = user.kelas;
  document.getElementById("nisn").value = user.nisn;
  document.getElementById("jam").value = user.jam;
  document.getElementById("barang").value = user.barang;

  editingIndex = index;
}

function deleteData(index) {
  users.splice(index, 1);
  displayData();
}

function resetFields() {
  document.getElementById("nama").value = "";
  document.getElementById("Kelas").value = "";
  document.getElementById("nisn").value = "";
  document.getElementById("jam").value = "pilih jam";
  document.getElementById("barang").value = "pilih barang";
}

function showStruk(index) {
  const user = users[index];
  const strukContent = `
    <p><strong>Nama:</strong> ${user.name}</p>
    <p><strong>Kelas:</strong> ${user.kelas}</p>
    <p><strong>NISN:</strong> ${user.nisn}</p>
    <p><strong>Jam Peminjaman:</strong> ${user.jam}</p>
    <p><strong>Jenis Barang:</strong> ${user.barang}</p>
  `;
  document.getElementById("strukContent").innerHTML = strukContent;

  document.getElementById("strukModal").style.display = "block";
}

function closeStruk() {
  document.getElementById("strukModal").style.display = "none";
}

function printStruk() {
  const content = document.getElementById("strukContent").innerHTML;
  const printWindow = window.open("", "_blank", "width=800,height=600");
  printWindow.document.write(`
    <html>
      <head>
        <title>Struk Peminjaman</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          p { margin: 10px 0; }
        </style>
      </head>
      <body>
        ${content}
        <script>
          window.onload = function() {
            window.print();
            window.close();
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

window.onclick = function (event) {
  const modal = document.getElementById("strukModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function tambahData(index) {
  const user = users[index];

  document.getElementById("nama").value = user.name;
  document.getElementById("Kelas").value = user.kelas;
  document.getElementById("nisn").value = user.nisn;
  document.getElementById("jam").value = user.jam;
  document.getElementById("barang").value = user.barang;

  editingIndex = null;
}

function closeStruk() {
  document.getElementById("strukModal").style.display = "none";
}

function printStruk() {
  const content = document.getElementById("strukContent").innerHTML;
  const printWindow = window.open("", "_blank", "width=800,height=600");
  printWindow.document.write(`
    <html>
      <head>
        <title>Struk Peminjaman</title>
        <style>
          body { font-family: "Poppins", sans-serif; padding: 20px; }
          p { margin: 10px 0; }
        </style>z
      </head>
      <body>
        ${content}
        <script>
          window.onload = function() {
            window.print();
            window.close();
          };
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
}

window.onclick = function (event) {
  const modal = document.getElementById("strukModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxVgT3H3xqwXMLDkLtl31xwn5YrN4pkuu4PRTYFIu7B6gMifegyqrGXrFDK6QxDInxVhw/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Terimakasih. Pesanmu Sudah Terkirim! :)"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
