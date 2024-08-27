document.addEventListener('DOMContentLoaded', function () {
    const ctx1 = document.getElementById('visitorsChart').getContext('2d');
    const visitorsChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Organic', 'Social', 'Direct'],
            datasets: [{
                data: [60, 30, 10],
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });

    const ctx2 = document.getElementById('revenueChart').getContext('2d');
    const revenueChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Data Visualization',
                data: [1000, 2000, 6000, 5000, 4000, 8000, 4000, .1000, .10000, .1000, .1000, .10000],
                backgroundColor: '#4caf50'
            }, {
                label: 'Custom Reports',
                data: [8000, 7000, 6000, 9000, 10000, 12000, 11000, .1000, .1000, .1000, .1000, .1000],
                backgroundColor: '#2196f3'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });

    const ctx3 = document.getElementById('tasksChart').getContext('2d');
    const tasksChart = new Chart(ctx3, {
        type: 'line',
        data: {
            labels: ['Jan 1', 'Jan 8', 'Jan 16', 'Jan 24', 'Jan 31', 'Feb 1', 'Feb 8', 'Feb 16', 'Feb 24'],
            datasets: [{
                label: 'Site Performance',
                data: [50, 75, 150, 100, 200, 150, 175, 225, 257],
                backgroundColor: 'rgba(33, 150, 243, 0.2)',
                borderColor: '#2196f3',
                borderWidth: 2,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });



    // Modal logic
    const modal = document.getElementById('loginModal');
    const span = document.getElementsByClassName('close')[0];

    document.body.addEventListener('click', function(event) {
        modal.style.display = 'block';
    });

    span.onclick = function() {
        modal.style.display = 'none';
    }

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Dummy check for correct username and password
        if (username === 'user' && password === 'password') {
            alert('Thank you for joining!');
            modal.style.display = 'none';
        } else {
            alert('Invalid username or password');
        }
    });
});





document.addEventListener('DOMContentLoaded', function () {
    // GSAP Animations
    gsap.from(".sidebar", { duration: 1, x: -200, opacity: 0 });
   
    gsap.from(".card", { duration: 1, y: 50, opacity: 0, stagger: 0.2, delay: 1 });
    
    // Charts initialization code...
});


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('keydown', function(e) {
  // Disable Print Screen
  if (e.key === 'PrintScreen') {
    navigator.clipboard.writeText('');
    alert('Screenshots are disabled on this website.');
  }

  // Disable common screenshot shortcuts
  if ((e.ctrlKey && e.key === 'p') || // Ctrl + P
      (e.key === 'F12') ||            // F12
      (e.ctrlKey && e.shiftKey && e.key === 'i') || // Ctrl + Shift + I
      (e.ctrlKey && e.shiftKey && e.key === 'j') || // Ctrl + Shift + J
      (e.ctrlKey && e.shiftKey && e.key === 'c') || // Ctrl + Shift + C
      (e.ctrlKey && e.key === 'u') || // Ctrl + U
      (e.metaKey && e.shiftKey && e.key === '4') || // Cmd + Shift + 4 (Mac)
      (e.metaKey && e.shiftKey && e.key === '3') || // Cmd + Shift + 3 (Mac)
      (e.metaKey && e.key === 'p') || // Cmd + P (Mac)
      (e.metaKey && e.shiftKey && e.key === 's') || // Windows + Shift + S
      (e.metaKey && e.key === 'w') || // Windows + W
      (e.metaKey && e.key === 's')) { // Windows + S
    e.preventDefault();
    alert('Screenshots are disabled on this website.');
  }
});

document.addEventListener('keyup', function(e) {
  // Clear clipboard on key up (useful for PrintScreen key)
  if (e.key === 'PrintScreen') {
    navigator.clipboard.writeText('');
    alert('Screenshots are disabled on this website.');
  }
});



// Disable right-click context menu on the whole document
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Disable dragging of images
document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

// Additional protection: Disable certain keyboard shortcuts
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey && e.key === 's') || // Ctrl + S
      (e.ctrlKey && e.key === 'u') || // Ctrl + U
      (e.ctrlKey && e.key === 'p')) { // Ctrl + P
    e.preventDefault();
    alert('Downloading images is disabled on this website.');
  }
});
