const siteContent = {
  'nav': {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  'cta': {
    'h1': 'DOM<br>Is<br>Awesome',
    'button': 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'contact': {
    'contact-h4': 'Contact',
    'address': '123 Way 456 Street Somewhere, USA',
    'phone': '1 (888) 888-8888',
    'email': 'sales@greatidea.io',
  },
  'footer': {
    copyright: 'Copyright Great Idea! 2018',
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Functions
const query = selector => document.querySelector(selector);
const queryAll = selector => document.querySelectorAll(selector);
const setTextContent = (element, firstKey, secondKey) =>
  (element.textContent = siteContent[firstKey][secondKey]);
const setTextContentMulti = (arr, firstKey, ...secondKey) => {
  arr.forEach(
    (element, index) =>
      (element.textContent = siteContent[firstKey][secondKey[index]])
  );
};
const setImgSrc = (element, firstKey, secondKey) =>
  (element.src = siteContent[firstKey][secondKey]);

// =========================== TASK 2 ==================================

// Navigation
queryAll('nav a').forEach(
  (element, index) =>
    (element.textContent = siteContent['nav'][`nav-item-${index + 1}`])
);

// Header
query('.cta-text h1').innerHTML = siteContent['cta']['h1'];
setTextContent(query('.cta-text button'), 'cta', 'button');
setImgSrc(query('#cta-img'), 'cta', 'img-src');

// Main Content
setTextContentMulti(
  queryAll('.main-content h4'),
  'main-content',
  'features-h4',
  'about-h4',
  'services-h4',
  'product-h4',
  'vision-h4'
);
setTextContentMulti(
  queryAll('.main-content p'),
  'main-content',
  'features-content',
  'about-content',
  'services-content',
  'product-content',
  'vision-content'
);
setImgSrc(query('#middle-img'), 'main-content', 'middle-img-src');

// Contact
setTextContent(query('.contact h4'), 'contact', 'contact-h4');
setTextContentMulti(
  queryAll('.contact p'),
  'contact',
  'address',
  'phone',
  'email'
);

// Footer
setTextContent(query('footer p'), 'footer', 'copyright');

// =========================== TASK 3 ==================================
const newLink = text => {
  const link = document.createElement('a');
  link.textContent = text;
  return link;
};
const home = newLink('Home');
const partners = newLink('Partners');
const nav = query('nav');
nav.prepend(home);
nav.appendChild(partners);
queryAll('nav a').forEach(element => (element.style.color = 'green'));

// =========================== STRETCH ==================================
const styles = {
  DARK: 'dark',
  LIGHT: 'light',
};
const styleValues = {
  backgroundColor: {
    dark: '#121212',
    light: 'white',
  },
  color: {
    dark: '#d7d7d7',
    light: 'black',
  },
  border: {
    dark: '1px solid white',
    light: '1px solid black',
  },
  nav: {
    dark: 'white',
    light: 'green',
  },
  logo: {
    dark: 'img/logo-dark.png',
    light: 'img/logo.png',
  },
  borderContent: {
    dark: '2px solid white',
    light: '2px solid black',
  },
};

function toggleStyle() {
  let style = styles.LIGHT;
  const body = query('body');
  const button = query('button');
  const mainBody = query('.main-content');
  const nav = queryAll('nav a');
  const logo = query('#logo-img');
  return () => {
    style = style === styles.DARK ? styles.LIGHT : styles.DARK;

    // Body
    body.style.backgroundColor = styleValues['backgroundColor'][style];
    body.style.color = styleValues['color'][style];

    // Buttons
    button.style.backgroundColor = styleValues['backgroundColor'][style];
    button.style.color = styleValues['color'][style];
    button.style.border = styleValues['border'][style];

    // Navigation & Logo
    nav.forEach(element => (element.style.color = styleValues['nav'][style]));
    logo.src = styleValues['logo'][style];

    // Main-Content
    mainBody.style.borderTop = styleValues['borderContent'][style];
    mainBody.style.borderBottom = styleValues['borderContent'][style];
  };
}

const styleHandler = new toggleStyle();
query('button').addEventListener('click', () => styleHandler());

// =========================== SUPER STRETCH ==================================
// Initialize starting values
let count = 5;
const domHeader = query('.cta-text h1');

// Attached to the logo image
function startTimer() {
  domHeader.textContent = count;
  const timer = setInterval(() => {
    count--;
    domHeader.textContent = count;

    if (count < 0) {
      clearInterval(timer);
      count = 5;
      domHeader.innerHTML = siteContent['cta']['h1'];

      // Play a sound at the end of the countdown
      const audio = new Audio(
        'https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3'
      );
      audio.play();
    }
  }, 1000);
}

query('#logo-img').onclick = () => {
  if (count >= 5) {
    startTimer();
  }
};
