const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');
const cancelBtn = document.getElementById('cancelBtn');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

cancelBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});