// Tab Switching Functionality
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;

        // Deaktiviraj sve tabove i dugmadi
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.container').forEach(container => container.classList.remove('active'));

        // Aktiviraj odabrani tab i dugme
        button.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});
