// Aktiviranje sekcija na klik
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Uklanjanje aktivnih klasa sa svih sekcija
        document.querySelectorAll('.container').forEach(container => {
            container.classList.remove('active');
        });
        
        // Dodavanje aktivne klase na izabranu sekciju
        document.getElementById(tabName).classList.add('active');
        
        // Uklanjanje aktivne klase sa svih dugmića
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Dodavanje aktivne klase na kliknuto dugme
        this.classList.add('active');
    });
});

// Funkcija za kreiranje snežne pahulje
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄"; // Simbol snežne pahulje
    snowflake.style.left = Math.random() * 100 + "vw"; // Nasumična horizontalna pozicija
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Nasumična brzina pada
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Nasumična veličina pahulje
    document.body.appendChild(snowflake);

    // Uklanjanje pahulje nakon animacije
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Generisanje pahulja u redovnim intervalima
setInterval(createSnowflake, 200);

// Funkcija za prikaz/skrivanje dugmeta za skrol
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Povratak na vrh stranice
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
