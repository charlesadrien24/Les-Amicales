// Sélectionnez l'icône du menu et le menu lui-même
const menuIcon = document.getElementById('menu-toggle');
const menuItems = document.querySelector('.menu-items');

// Ajoutez un gestionnaire d'événement pour le clic sur l'icône du menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active'); // Ajoute ou supprime la classe "active" sur l'icône
    menuItems.classList.toggle('active'); // Ajoute ou supprime la classe "active" sur le menu
});

// Ajoutez un gestionnaire d'événement pour fermer le menu lorsque l'on clique en dehors
document.addEventListener('click', (event) => {
    if (!menuItems.contains(event.target) && event.target !== menuIcon) {
        menuItems.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});
