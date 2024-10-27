function addRecommendation() {
    // Show the popup dialog box
    document.getElementById('popup').classList.remove('hidden');
}

function submitRecommendation(event) {
    event.preventDefault();

    // Hide the form and show a confirmation message
    document.getElementById('recommendationForm').classList.add('hidden');
    document.getElementById('confirmationMessage').classList.remove('hidden');

    // Close the popup after a short delay
    setTimeout(() => {
        document.getElementById('popup').classList.add('hidden');
        document.getElementById('recommendationForm').classList.remove('hidden');
        document.getElementById('confirmationMessage').classList.add('hidden');
    }, 2000);
}

function closePopup() {
    // Close the popup
    document.getElementById('popup').classList.add('hidden');
}