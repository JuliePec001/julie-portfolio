const translations = {
  en: {
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
                            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "+
                            "when an unknown printer took a galley of type and scrambled it to make a type "+
                            "specimen book. It has survived not only five centuries, but also the leap into "+
                            "electronic typesetting, remaining essentially unchanged. It was popularised in "+
                            "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, "+
                            "and more recently with desktop publishing software like Aldus PageMaker including "+
                            "versions of Lorem Ipsum.",
    "nav-home": "Home",
    "nav-work": "Work",
    "nav-contact": "Contact",
    "nav-about": "About",
    "titre-me" : "About Me",
    "titre-video" : "Video Game Projects",
    "titre-theatre" : "Theatre Set & Costume Design",
    "titre-code" : "Programming Projects",
    "nav-Other" : "Other",
    "nav-video" : "Video Games"

  },
  fr: {
    "description": "Bienvenue dans mon portfolio de projets de jeux vidéo !",
    "nav-home": "Accueil",
    "nav-work": "Projet",
    "nav-contact": "Contact",
    "nav-about": "A Propos",
    "titre-me" : "À Propos de Moi",
    "titre-video" : "Projets de Jeu Vidéo",
    "titre-theatre" : "Conception de Décors et de Costumes de Théâtre",
    "titre-code" : "Projets de Programmation",
    "nav-Other" : "Autres",
    "nav-video" : "Jeux Vidéo"
  }
};

// Function to update page text
function updateLanguage(lang) {
  for (const id in translations[lang]) {
    const element = document.getElementById(id);
    if (element) element.textContent = translations[lang][id];
  }
}

// When the page loads
window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("language") || "en";
  const languageSelect = document.getElementById("language");

  // Set the dropdown value
  languageSelect.value = savedLang;

  // Update all text
  updateLanguage(savedLang);

  // Listen for changes
  languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;
    localStorage.setItem("language", lang);
    updateLanguage(lang);
  });
});

