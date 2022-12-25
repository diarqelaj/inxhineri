// Select the navigation menu
const nav = document.querySelector('nav');

// Select the main content
const main = document.querySelector('main');

// Set the default page to display
let currentPage = 'home';

// Function to display a page
function showPage(page) {
  // Hide all pages
  main.querySelectorAll('div').forEach(div => div.style.display = 'none');
  
  // Show the selected page
  main.querySelector(`#${page}`).style.display = 'block';
  
  // Update the current page
  currentPage = page;
}

// Show the default page
showPage(currentPage);

// Add a click event listener to the navigation menu
nav.addEventListener('click', event => {
  // Check if the click was on a link
  if (event.target.tagName === 'A') {
    // Prevent the default action (following the link)
    event.preventDefault();
    
    // Get the page to display from the link's href attribute
    const page = event.target.getAttribute('href').slice(1);
    
    // Display the page
    showPage(page);
  }
});
