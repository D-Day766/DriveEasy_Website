// Show the Available Cars section when "View Available Cars" button is clicked
document.getElementById('viewCarsBtn').addEventListener('click', function() {
    document.getElementById('cars').classList.remove('hidden');
    window.location.href = "#cars"; // Scroll to the cars section
});

// Handle "Book Now" button clicks for each car
const bookButtons = document.querySelectorAll('.bookBtn');
bookButtons.forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('booking').classList.remove('hidden');
        window.location.href = "#booking"; // Scroll to the booking section
    });
});

// Handle form submission for booking
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const carType = document.getElementById('carSelect').value;
    const rentalDays = document.getElementById('rentalDays').value;
    const result = `You have successfully booked a ${carType} for ${rentalDays} day(s).`;
    document.getElementById('bookingResult').textContent = result;
});

// Handle Contact Form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const result = `Thank you, ${name}! We have received your message and will respond to ${email} shortly.`;
    document.getElementById('contactResult').textContent = result;

    // Optionally clear the form after submission
    document.getElementById('contactForm').reset();
});

