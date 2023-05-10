const butInstall = document.getElementById('buttonInstall');

// Add an event listener for the 'beforeinstallprompt' event
// This event is triggered when the browser is ready to show an installation prompt
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered event
    window.deferredPrompt = event;

    // Make the install button visible by removing the 'hidden' class
    butInstall.classList.toggle('hidden', false);
});

// Add a click event listener for the install button
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // Show the installation prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, as it can only be used once
    window.deferredPrompt = null;

    // Hide the install button by adding the 'hidden' class
    butInstall.classList.toggle('hidden', true);
});

// Add an event listener for the 'appinstalled' event
// This event is triggered when the app is successfully installed
window.addEventListener('appinstalled', (event) => {
    // Clear the deferred prompt variable
    window.deferredPrompt = null;
});
