// DOM element selections for speakers list, navigation buttons and modal
const speakers__list= document.querySelector('.speakers__list');
const prevBtn= document.querySelector('.speakers__arrow--left');
const nextBtn= document.querySelector('.speakers__arrow--right');
const modal= document.querySelector('.modal');

// Array of speaker objects containing all speaker information

const allSpeakers= [{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24 (1).png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24 (2).png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24 (3).png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24.png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24 (3).png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24.png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24 (1).png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24 (2).png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24.png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24 (1).png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24 (2).png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
{
    name: 'John Doe',
    company: 'Specbee',
    position: 'Chief Marketing Officer',
    image: './assets/Ellipse 24 (3).png',
    description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.'
},
]


// Variables to track pagination
let count = 1;        // Current page number
let items=4;          // Number of items to display per page

// Main function to render speakers on the page
const renderSpeakers = () => {
    // Disable previous button if we're on first page
    if (count <= 1) {
        prevBtn.disabled = true;
    }
   
    // Clear current speakers list
    speakers__list.innerHTML = '';

    // Calculate which speakers to show based on current page
    let start = (count - 1) * items;
    let end = start + items;
    const current_speaker_list = allSpeakers.slice(start, end);

    // Create and append speaker cards for each speaker in current list
    current_speaker_list.forEach(speaker => {
        // Create DOM elements for speaker card
        let article = document.createElement('article');
        let img = document.createElement('img');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        // Add classes to elements
        article.className = "speaker__card";
        img.className = "speaker__card__photo";
        h2.className = "speaker__card__name";
        p1.className = "speaker__card__position";
        p2.className = "speaker__card__company";

        // Set content for speaker card
        img.src = speaker.image;
        h2.innerText = speaker.name;
        p1.innerText = speaker.position;
        p2.innerText = speaker.company;

        // Assemble speaker card
        article.append(img, h2, p1, p2);
        speakers__list.appendChild(article);

        // Add click event listener to show modal when card is clicked
        article.addEventListener('click', () => {
            modal.style.display = "flex";

            // Clear existing modal content
            modal.innerHTML = '';

            // Create modal container
            let container = document.createElement('div');
            container.className = "modal__container";

            // Create close button for modal
            let closeButton = document.createElement('button');
            closeButton.className = "modal__close";
            closeButton.innerHTML ='<i class="ri-close-line"></i>'
            closeButton.addEventListener('click', () => {
                modal.style.display = "none";
            });
            
            // Create modal content elements
            let profile = document.createElement('div');
            let content = document.createElement('div');
            let profilephoto = document.createElement('div');
            let details = document.createElement('div');
            let socialicon = document.createElement('div');
            
            // Create social media icons
            let icon1= document.createElement('span');
            let icon2= document.createElement('span');
            let icon3= document.createElement('span');
            icon1.innerHTML='<i class="fa-brands fa-drupal fa-sm" style="color: #1f2020;"></i>'
            icon2.innerHTML = '<i class="ri-twitter-x-line"></i>';
            icon3.innerHTML = '<i class="ri-linkedin-box-line"></i>';

            // Create elements for speaker details in modal
            let modalImg = document.createElement('img');
            let modalName = document.createElement('h2');
            let modalPosition = document.createElement('p');
            let modalCompany = document.createElement('p');
            let modalDescriptionContainer = document.createElement('div');
            let modalDescription = document.createElement('p');
            let line = document.createElement('hr');

            // Add classes and content to modal elements
            modalImg.className = "modal__photo";
            modalImg.src = speaker.image;
            modalName.className = "modal__name";
            modalName.innerText = speaker.name;
            modalPosition.className = "modal__position";
            modalPosition.innerText = speaker.position;
            modalCompany.className = "modal__company";
            modalCompany.innerText = speaker.company;
            modalDescriptionContainer.className = "modal__description";
            modalDescription.innerText = speaker.description;
            line.className = "modal__line";

            // Assemble profile section of modal
            profile.className = "modal__profile";
            profilephoto.className = "modal__profile__photo";
            profilephoto.appendChild(modalImg);
            socialicon.className = "modal__profile__socialicon";
            socialicon.append(icon1, icon2, icon3);
            details.className = "modal__details";
            details.append(modalName, modalPosition, modalCompany, socialicon);

            // Assemble final modal structure
            profile.append(profilephoto, details);
            content.className = "modal__content";
            modalDescriptionContainer.appendChild(modalDescription);
            content.appendChild(modalDescriptionContainer);

            container.append(closeButton, profile,line, content);
            modal.appendChild(container);
        });
    });
};

// Initial render of speakers
renderSpeakers();

// Function to update number of items per page based on screen size
function updateItems() {
    const screenWidth = window.innerWidth;
    // Desktop screens (>1400px)
    if(screenWidth>1400){
        items=4;
        renderSpeakers()
    }
    // Laptop screens (1240px-1400px)
    else if (screenWidth >= 1240) {
      items = 3;
      renderSpeakers()
    } 
    // Tablet screens (768px-1239px)
    else if (screenWidth >=768) {
      items = 2;
      renderSpeakers()
    } 
    // Mobile screens (<768px)
    else {
      items = 1;
      renderSpeakers()
    }
}
  
// Initial setup for responsive display
updateItems();
  
// Update items when window is resized
window.addEventListener('resize', updateItems);

// Function to handle next button click
const renderNext = () => {
    count++;
    // Disable next button if we're at the end
    if ((count - 1) * items + items >= allSpeakers.length) {
        nextBtn.disabled = true;
    }
    // Enable previous button when we move from first page
    if (count > 1) {
        prevBtn.disabled = false;
    }
    renderSpeakers();
};

// Function to handle previous button click
const renderPrev = () => {
    count--;
    // Disable previous button if we're on first page
    if (count <= 1) {
        prevBtn.disabled = true;
    }
    // Enable next button if we're not at the end
    if ((count - 1) * items + items <= allSpeakers.length) {
        nextBtn.disabled = false;
    }
    renderSpeakers();
};

// Add click event listeners to navigation buttons
prevBtn.addEventListener('click', renderPrev);
nextBtn.addEventListener('click', renderNext);