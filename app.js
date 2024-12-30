function openPage(pageName, elmnt) {
  // Hide all elements with class="tabcontent" by default
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"; // Hide all tab content
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "#000000"; // Reset background to default grey for all buttons
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the grey background color to the button used to open the tab content
  elmnt.style.backgroundColor = "#777"; // Set the active button to grey (or any grey you prefer)
}

// Automatically open the "Types" tab when the page loads
document.addEventListener("DOMContentLoaded", function() {
  // Trigger the click on the "defaultOpen" tab (first tab)
  document.getElementById("defaultOpen").click(); // Simulate a click on the "Types" tab
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide
  slides[slideIndex-1].style.display = "block";
  
  // Add the "active" class to the current dot
  dots[slideIndex-1].className += " active";
}

// Function to toggle video play/pause
function toggleVideo(button) {
  // Find the parent video element
  var video = button.closest('.video-box').querySelector('.myVideo');
  
  // Pause or play the video and update button text
  if (video.paused) {
    video.play();
    button.innerHTML = "Pause";
  } else {
    video.pause();
    button.innerHTML = "Play";
  }
}

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get the values from the form fields
  const name = document.getElementById('name').value;
  const feedback = document.getElementById('feedback').value;

  // Check if both fields are filled out
  if (name && feedback) {
      // Display a thank you message
      document.getElementById('responseMessage').textContent = `Thank you, ${name}, for your feedback!`;
      
      // Optionally, clear the form fields after submission
      document.getElementById('name').value = '';
      document.getElementById('feedback').value = '';
  } else {
      // Show an error if the form is not properly filled out
      document.getElementById('responseMessage').textContent = 'Please fill out both fields.';
      document.getElementById('responseMessage').style.color = 'red';
  }
});

