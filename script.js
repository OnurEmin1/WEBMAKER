// script.js

// Funkcija za prebacivanje između tabova
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Ukloni 'active' klasu sa svih tabova
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');  // Dodaj 'active' klasu na pritisnuti tab
        
        // Sakrij sve sekcije
        document.querySelectorAll('.container').forEach(container => container.classList.remove('active'));
        
        // Prikazuj odgovarajuću sekciju
        const tabName = button.getAttribute('data-tab');
        document.getElementById(tabName).classList.add('active');
    });
});
