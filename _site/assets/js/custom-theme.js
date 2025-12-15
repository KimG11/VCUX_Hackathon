// Custom Theme Switcher Logic
// Bypasses the need for npm build by running alongside main.min.js

(function () {
    const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // Set the theme on page load or when explicitly called
    const setTheme = (theme) => {
        const use_theme =
            theme ||
            localStorage.getItem("theme") ||
            document.documentElement.getAttribute("data-theme") ||
            browserPref;

        document.documentElement.setAttribute("data-theme", use_theme);

        // Update icon class
        const icon = document.getElementById("theme-icon");
        if (icon) {
            icon.classList.remove("fa-sun", "fa-moon", "fa-palette");

            if (use_theme === "dark") {
                icon.classList.add("fa-moon");
            } else if (use_theme === "blue-pink") {
                icon.classList.add("fa-palette");
            } else {
                icon.classList.add("fa-sun");
                // For light theme, we can optionally remove the attribute if that's the default,
                // but keeping it explicit is often safer for CSS variables.
                if (use_theme === "light") {
                    // Check if existing CSS relies on attribute absence for default
                    // The scss says :root {...} for default light.
                    // But let's leave it explicit if possible, or matches _main.js logic
                    document.documentElement.removeAttribute("data-theme");
                }
            }
        }
    };

    // Set specific theme from dropdown
    const setSpecificTheme = (themeName) => {
        localStorage.setItem("theme", themeName);
        setTheme(themeName);
    }

    // Bind events when DOM is ready
    document.addEventListener("DOMContentLoaded", () => {
        // Create listener for dropdown items
        const dropdownLinks = document.querySelectorAll('.theme-dropdown-content a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const theme = link.getAttribute('data-theme');
                setSpecificTheme(theme);
            });
        });

        // Initialize theme (in case main.min.js missed it or we need to override)
        setTheme();

        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", (e) => {
            if (!localStorage.getItem("theme")) {
                setTheme(e.matches ? "dark" : "light");
            }
        });
    });

    // Also run immediately to prevent flash if possible (though DOMContentLoaded is safer for event binding)
    // We can try setting the attribute immediately if body is available, but documentElement is always available.
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        document.documentElement.setAttribute("data-theme", storedTheme);
    }

})();
