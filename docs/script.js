async function loadSocialColors() {
  try {
    const response = await fetch('https://cdn.jsdelivr.net/npm/simple-icons@latest/_data/simple-icons.json');
    const data = await response.json();

    const socialItems = document.querySelectorAll('.social-icons li');

    socialItems.forEach(item => {
      const brand = item.dataset.platform;
      const iconData = data.find(icon => icon.title.toLowerCase() === brand.toLowerCase());

      if (iconData) {
        const circleColor = `#${iconData.hex}`;
        const link = item.querySelector('a');

        // Setto la variabile CSS per il cerchio e l'icona
        link.style.setProperty('--circle-color', circleColor);
        link.style.setProperty('--icon-color', circleColor);

        // Assicuro posizione relativa al link
        link.style.position = 'relative';
      } else {
        console.warn(`Colore non trovato per: ${brand}`);
      }
    });
  } catch (err) {
    console.error('Errore caricamento colori social:', err);
  }
}

document.addEventListener('DOMContentLoaded', loadSocialColors);
