document.getElementById("submitName").addEventListener("click", function () {
  // Fungsi ini akan dieksekusi ketika tombol diklik

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const name = document.getElementById("enterName").value;

  const character = ["Hutao", "Furina", "Ayaka", "Keqing", "Navia", "Nilou", "Yoimiya", "YaeMiko", "Nahida", "Noelle", "Chevreuse", "Faruzan", "Klee"];
  const randomIndex = Math.floor(Math.random() * character.length);
  const selectedCharacter = character[randomIndex];

  const image = new Image();
  image.src = "image/sample.jpg";
  image.onload = function () {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    ctx.font = "40px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(`${selectedCharacter}`, canvas.width / 2, canvas.height / 2.8);
    ctx.fillText(`${name}`, canvas.width / 2, canvas.height / 4.0);

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    ctx.fillText(
      `${day}/${month}/${year}`,
      canvas.width / 2,
      canvas.height / 2.1
    );

    console.log(`${selectedCharacter}: Text berhasil dibuat.`);

    // Add overlay image
    const overlayImage = new Image();
    overlayImage.src = `image/characters/${selectedCharacter}.png`;
    overlayImage.onload = function () {
      const overlayWidth = 215;
      const overlayHeight = 215;
      const tinggi = 334; // 10px dari bawah
      const lebar = 230; // 10px dari kanan

      const xPos = canvas.width - overlayWidth - lebar;
      const yPos = canvas.height - overlayHeight - tinggi;

      ctx.drawImage(overlayImage, xPos, yPos, overlayWidth, overlayHeight);

      console.log(`${selectedCharacter}: Gambar berhasil dicetak.`);
    };
  };

  const outputElement = document.getElementById("output");
  outputElement.textContent =
    `${selectedCharacter}: Selesai mencetak` +
    " //Tinggal download dengan tombol diatas.";

  const button = document.getElementById("download");
  button.addEventListener("click", function() {
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "image.png";
    link.click();
  });
});

// Mengambil elemen berdasarkan ID
const myElement = document.getElementById("myElement");
const myButton = document.getElementById("submitName");

// Menambahkan event listener untuk tombol
myButton.addEventListener("click", function () {
  myElement.classList.remove("hidden");
});
