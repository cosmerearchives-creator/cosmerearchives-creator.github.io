const button = document.getElementById('demo-fullscreen');
const container = document.getElementById('demo-container');
const status = document.getElementById('demo-status');
if (button && container) {
  if (!document.fullscreenEnabled) button.hidden = true;
  button.addEventListener('click', async () => {
    try {
      await container.requestFullscreen();
      status.textContent = '';
    } catch {
      status.textContent = 'Full screen is unavailable here. Use Open larger view instead.';
    }
  });
}
