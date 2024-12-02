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

// Function to create a snowflake
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄"; // Snowflake symbol
    snowflake.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random fall speed
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px"; // Random snowflake size
    document.body.appendChild(snowflake);

    // Remove snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Generate snowflakes at regular intervals
setInterval(createSnowflake, 200);
