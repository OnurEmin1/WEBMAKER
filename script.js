// JavaScript to toggle between active sections on click
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Remove active class from all sections
        document.querySelectorAll('.container').forEach(container => {
            container.classList.remove('active');
        });
        
        // Add active class to the selected section
        document.getElementById(tabName).classList.add('active');
        
        // Remove active class from all buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to the clicked button
        this.classList.add('active');
    });
});
