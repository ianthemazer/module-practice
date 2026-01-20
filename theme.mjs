function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

export function setLightTheme() {
    console.log("The theme has currently been set to 'Light Mode'");
    setTheme('light');
}

export function setDarkTheme() {
    console.log("The theme has currently been set to 'Dark Mode'");
    setTheme('dark')
}