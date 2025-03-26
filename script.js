let currentPage = 1;

// Show the next page based on the player's choice
function choosePath(page) {
  // Hide the current page
  document.getElementById(`page-${currentPage}`).classList.remove('visible');

  // Update the current page
  currentPage = page;

  // Show the new page
  document.getElementById(`page-${currentPage}`).classList.add('visible');
}

//Typing sfx

function play() {
    var audio = document.getElementById('audio');
    audio.play();
}

function nextPage() {
    // Hide current page
    document.getElementById('page-1').style.display = 'none';
    // Show next page
    document.getElementById('page-2').style.display = 'block';
}