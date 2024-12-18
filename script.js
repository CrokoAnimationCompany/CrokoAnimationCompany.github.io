// Gestisce la visibilità dei campi in base alla scelta dell'utente
document.getElementById('requestType').addEventListener('change', function() {
    const requestType = this.value;
    const eventDetails = document.getElementById('eventDetails');
    const requestDetails = document.getElementById('requestDetails');

    if (requestType === 'proposta') {
        eventDetails.style.display = 'block';
        requestDetails.style.display = 'none';
    } else if (requestType === 'segnalazione') {
        eventDetails.style.display = 'none';
        requestDetails.style.display = 'block';
    }
});

// Gestisce l'invio del modulo
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const requestType = document.getElementById('requestType').value;
    let subject = '';
    let body = '';

    if (requestType === 'proposta') {
        const eventName = document.getElementById('eventName').value;
        const eventDescription = document.getElementById('eventDescription').value;
        subject = `Proposta di Nuovo Evento: ${eventName}`;
        body = `Nome: ${name}%0AEmail: ${email}%0A%0AProposta Evento:%0ANome: ${eventName}%0ADescrizione: ${eventDescription}`;
    } else if (requestType === 'segnalazione') {
        const eventRequest = document.getElementById('eventRequest').value;
        const message = document.getElementById('message').value;
        subject = `Segnalazione per Evento: ${eventRequest}`;
        body = `Nome: ${name}%0AEmail: ${email}%0A%0ASegnalazione per Evento:%0ANome Evento: ${eventRequest}%0ADescrizione della Segnalazione: ${message}`;
    }

    const mailtoLink = `mailto:crokoanimationcompany@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle team section visibility
function toggleTeamSection() {
    const teamSection = document.getElementById('team');

    if (teamSection.style.display === 'block') {
        teamSection.style.display = 'none';
    } else {
        teamSection.style.display = 'block';
    }
}