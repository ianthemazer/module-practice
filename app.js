const time = new Date().getHours();

async function loadConfig(time) {
    if (time >= 6 && time < 18) {
        const { setLightTheme } = await import('./theme.mjs');
        setLightTheme();
    } else {
        const { setDarkTheme } = await import('./theme.mjs');
        setDarkTheme();
    }
}

loadConfig(time);