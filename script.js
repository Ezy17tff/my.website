document.addEventListener("DOMContentLoaded", function() {
    // EZY logosi va ijtimoiy tarmoqlarni asta-sekin chiqarish
    const logo = document.querySelector(".logo");
    const links = document.querySelectorAll(".social-links a");

    // Logo chiqishi uchun
    logo.style.opacity = "0";
    logo.style.transform = "translateY(-50px)";
    setTimeout(() => {
        logo.style.transition = "opacity 1.5s ease-out, transform 1.5s ease-out";
        logo.style.opacity = "1";
        logo.style.transform = "translateY(0)";
    }, 500); // 0.5 sekunddan keyin logoni ko‘rsatish

    // Linklar ketma-ket chiqishi uchun
    links.forEach((link, index) => {
        link.style.opacity = "
