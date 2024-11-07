document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.querySelector('.close-button');

    // Handle Read More button functionality
    document.querySelectorAll('.item').forEach(item => {
        const description = item.querySelector('.description');
        const readMoreButton = item.querySelector('.read-more');

        readMoreButton.addEventListener('click', () => {
            modalDescription.textContent = description.textContent; // Set the modal content
            modal.style.display = 'block'; // Show the modal
        });
    });

    // Close modal when the close button is clicked
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });
});
