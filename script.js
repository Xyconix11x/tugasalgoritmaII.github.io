
// Fungsi untuk mengubah warna latar belakang
function changeBackgroundImage(imageSrc) {
    const backgroundImage = document.querySelector('.background-image');
    backgroundImage.style.backgroundImage = `url('${imageSrc}')`;
}

// Fungsi untuk memeriksa angka dengan if else
function checkNumber() {
    const numberInput = document.getElementById('numberInput').value;
    const result = document.getElementById('result');

    // Menggunakan if else
    if (numberInput == '') {
        result.textContent = 'Mohon masukkan angka terlebih dahulu.';
    } else if (isNaN(numberInput)) {
        result.textContent = 'Input harus berupa angka.';
    } else if (numberInput % 2 === 0) {
        result.textContent = 'Angka ' + numberInput + ' adalah genap.';
    } else {
        result.textContent = 'Angka ' + numberInput + ' adalah ganjil.';
    }

    // Menggunakan switch case
    switch(true) {
        case numberInput < 0:
            result.textContent += ' Angka tersebut adalah bilangan negatif.';
            break;
        case numberInput > 0 && numberInput < 10:
            result.textContent += ' Angka tersebut adalah bilangan satuan.';
            break;
        case numberInput >= 10 && numberInput < 100:
            result.textContent += ' Angka tersebut adalah bilangan puluhan.';
            break;
        default:
            break;
    }
}