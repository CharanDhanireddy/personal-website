// Theme toggle functionality
(function() {
  // Check for saved theme preference or default to dark mode
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply the theme on page load (before DOM ready to avoid flash)
  if (currentTheme === 'light') {
    document.documentElement.classList.add('light-mode-init');
  }

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    // Transfer the class to body if it was set on documentElement
    if (document.documentElement.classList.contains('light-mode-init')) {
      document.body.classList.add('light-mode');
      document.documentElement.classList.remove('light-mode-init');
    }
    
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
      // Update icon based on current theme
      updateThemeIcon();
      
      // Add click event listener
      themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        // Save preference
        const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', theme);
        
        // Update icon
        updateThemeIcon();
      });
    }
  });

  function updateThemeIcon() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    const isLightMode = document.body.classList.contains('light-mode');
    const icon = themeToggle.querySelector('.icon');
    
    if (icon) {
      icon.innerHTML = isLightMode ? '🌙' : '☀️';
    }
  }
})();
