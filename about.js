// Define any JavaScript functionality you need for the about page here
// For example, you can use this script to add interactivity or dynamic content to the page
// Here's a simple example:

const teamMembers = document.querySelectorAll('.team-members li');

teamMembers.forEach((member) => {
  member.addEventListener('click', () => {
    // Add functionality to display more information about the selected team member
    // For example, you could create a modal or a separate page with their bio and contact information
    alert(`You clicked on ${member.querySelector('h3').textContent}`);
  });
});
