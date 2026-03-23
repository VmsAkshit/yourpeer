// Sample Data: You can add your friends' projects here!
const projects = [
    {
        title: "Eco-Friendly Smart Bin",
        author: "Class 10 Science Team",
        description: "An Arduino-based trash can that automatically sorts recycling from waste.",
        tags: ["Arduino", "Science", "Hardware"]
    },
    {
        title: "Math Formula Cheatsheet App",
        author: "Rahul M.",
        description: "A simple Android app containing all the formulas for the 12th-grade boards.",
        tags: ["Java", "Math", "Android"]
    },
    {
        title: "History Timeline Generator",
        author: "Priya S.",
        description: "A Python script that generates visual timelines from Wikipedia articles.",
        tags: ["Python", "History", "Data"]
    }
];

const gallery = document.getElementById('projectGallery');
const searchInput = document.getElementById('searchInput');

// Function to display projects
function displayProjects(projectList) {
    gallery.innerHTML = ''; // Clear current projects
    projectList.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p><strong>By:</strong> ${project.author}</p>
            <p>${project.description}</p>
            <div>
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Search Functionality
searchInput.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredProjects = projects.filter(project => {
        return project.title.toLowerCase().includes(searchString) || 
               project.tags.some(tag => tag.toLowerCase().includes(searchString));
    });
    displayProjects(filteredProjects);
});

// Load projects when the page starts
displayProjects(projects);
