// Set current date in footer
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Project rendering
const container = document.getElementById("project-container");

projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "inner-card project";
  
  // Create tech tags
  const techTags = p.tech.map(tech => `<span>${tech}</span>`).join('');
  
  div.innerHTML = `
    <div class="project-header">
      <strong><i class="fas fa-code-branch"></i> ${p.title}</strong>
      <span class="project-badge"><i class="fab fa-github"></i></span>
    </div>
    <p>${p.description}</p>
    <div class="project-tech">
      ${techTags}
    </div>
    <a href="${p.github}" target="_blank">
      <i class="fab fa-github"></i> View Repository →
    </a>
  `;

  container.appendChild(div);
});

// Add hover effects
document.querySelectorAll('.glass').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Typewriter effect for header
const typewriter = document.querySelector('.typewriter');
const originalText = typewriter.textContent;
typewriter.textContent = '';

let i = 0;
function typeWriter() {
  if (i < originalText.length) {
    typewriter.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing after a short delay
setTimeout(typeWriter, 500);