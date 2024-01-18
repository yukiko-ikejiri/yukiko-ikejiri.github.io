function toggleMenu() {
    var modal = document.getElementById('modal');
    if (modal.style.display === 'block') {
      modal.style.display = 'none';
    } else {
      modal.style.display = 'block';
      populateModal();
    }
}
  
function populateModal() {
    var modalContent = document.getElementById('modalContent');
    var navbar = document.getElementById('navbar');
  
    modalContent.innerHTML = navbar.innerHTML;
    
    // Attach click event to close modal on link click
    var links = modalContent.querySelectorAll('.bar-item');
    links.forEach(function(link) {
      link.onclick = function() {
        document.getElementById('modal').style.display = 'none';
      };
    });
}
  
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
  