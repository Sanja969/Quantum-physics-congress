const speakersContainer = document.querySelector('.speakers');
const speakerBox = document.createElement('article');
const speakerImg = document.createElement('img');
const speakerText = document.createElement('div');
const speakerName = document.createElement('h6');
const speakerTitle = document.createElement('small');
const speakerDescription = document.createElement('small');
const speakerMore = document.createElement('small');
const moreBtn = document.createElement('button');
const arrowTxt = document.createElement('p');
const arrowTxtUp = document.createElement('p');
const moreTxt = document.createElement('p');
const lessBtn = moreBtn.cloneNode(true);

speakerImg.setAttribute('src', '');

speakersContainer.style.display = 'grid';

speakerText.style.display = 'flex';
speakerText.style.flexDirection = 'column';
speakerText.style.paddingLeft = '10px';

speakerBox.style.display = 'flex';
speakerBox.style.margin = '10px';
speakerBox.style.maxWidth = '400px';

speakerName.textContent = 'Name';
speakerTitle.textContent = 'We will introduce you to this';
speakerMore.textContent = '....';
speakerDescription.textContent = ' amasing limitless fielnd where all low of physics do not apply.';

speakerName.style.fontWeight = '700';
speakerTitle.style.color = '#ec5242';
speakerTitle.style.fontSize = '10px';
speakerTitle.style.paddingBottom = '0';

speakerDescription.style.paddingTop = '5px';
speakerDescription.style.fontSize = '10px';

moreTxt.textContent = 'MORE';
lessBtn.textContent = 'LESS';

arrowTxt.textContent = ' v';
arrowTxt.style.fontSize = '24px';
arrowTxt.style.marginLeft = '10px';
arrowTxt.style.color = '#ec5242';
arrowTxt.style.transform = 'scaleY(0.5)';
arrowTxt.style.fontWeight = '700';

arrowTxtUp.textContent = ' ^';
arrowTxtUp.style.fontSize = '24px';
arrowTxtUp.style.marginLeft = '10px';
arrowTxtUp.style.color = '#ec5242';
arrowTxtUp.style.fontWeight = '700';

arrowTxtUp.style.paddingTop = '20px';

moreBtn.style.border = '1px solid #272a31';
moreBtn.style.width = '100%';
moreBtn.style.height = '40px';
moreBtn.style.background = 'inherit';
moreBtn.style.borderRadius = '5px';
moreBtn.style.margin = '30px 0';
moreBtn.style.display = 'flex';
moreBtn.style.alignItems = 'center';
moreBtn.style.justifyContent = 'center';
moreBtn.style.paddingTop = '15px';

lessBtn.style.border = '1px solid #272a31';
lessBtn.style.width = '100%';
lessBtn.style.height = '40px';
lessBtn.style.background = 'inherit';
lessBtn.style.borderRadius = '5px';
lessBtn.style.margin = '30px 0';
lessBtn.style.display = 'flex';
lessBtn.style.alignItems = 'center';
lessBtn.style.justifyContent = 'center';

speakerBox.appendChild(speakerImg);
speakerBox.appendChild(speakerText);
speakerText.appendChild(speakerName);
speakerText.appendChild(speakerTitle);
speakerText.appendChild(speakerMore);
speakerText.appendChild(speakerDescription);
moreBtn.appendChild(moreTxt);
moreBtn.appendChild(arrowTxt);
lessBtn.appendChild(arrowTxtUp);

lessBtn.style.display = 'none';

const person1 = {
  image: 'images/spock.jpg',
  name: 'Mr. Spock',
  title: 'Science officer USS Enterprise.',
  description: 'Serve aboard the starship USS Enterprise as science officer and first officer and later as commanding officer of two iterations of the vessel.',
};

const person2 = {
  image: 'images/grace.webp',
  name: 'Grace Augustine',
  title: 'Legend to the scientific personnel as the author of a comprehensive book on Pandora\'s plants.',
  description: 'She helped Jake Sully on the Avatar Program until she died due to a gunshot wound inflicted by Colonel Quaritch.',
};

const person3 = {
  image: 'images/banner.jpeg',
  name: 'Bruce Banner',
  title: 'Ph.D. a.k.a. the Hulk is an American theoretical physicist, famed for his work into the studies of nuclear physics and gamma radiation',
  description: 'He was recruited by General Thaddeus "Thunderbolt" Ross and the US Army to develop the first Gamma Bomb.',
};

const person4 = {
  image: 'images/sheldon.webp',
  name: 'Sheldon Cooper',
  title: 'Former senior theoretical particle physicist at the California Institute of Technology',
  description: 'Originally from East Texas, Sheldon started college at the age of 11, receiving his first Ph.D. at the age of 16. As a kid, Sheldon was involved in numerous experiments as a "wunderkind.',
};

const person5 = {
  image: 'images/xavier.png',
  name: 'Professor Xavier',
  title: 'founder and sometimes leader of the X-Men',
  description: 'Xavier is a member of a subspecies of humans known as mutants, who are born with superhuman abilities.He is an exceptionally powerful telepath, who can read and control the minds of others.',
};

const person6 = {
  image: 'images/bernadette.webp',
  name: 'Bernadette Rostenkowski-Wolowitz',
  title: 'Ph.D. in microbiology',
  description: 'lucrative job at the pharmaceutical company ZanGen/.',
};

const presenters = [person1, person2, person3, person4, person5, person6];

for (let i = 0; i < 6; i += 1) {
  const speakerClone = speakerBox.cloneNode(true);
  speakerClone.children[0].setAttribute('src', presenters[i].image);
  speakerClone.children[1].children[0].textContent = presenters[i].name;
  speakerClone.children[1].children[1].textContent = presenters[i].title;
  speakerClone.children[1].children[3].textContent = presenters[i].description;

  speakerClone.children[0].style.maxWidth = '100px';
  speakerClone.children[0].style.height = 'auto';

  speakerClone.addEventListener('mouseover', () => {
    speakerClone.style.border = '1px solid green';
    speakerClone.style.background = '#77c94746';
  });

  speakerClone.addEventListener('mouseout', () => {
    speakerClone.style.border = 'none';
    speakerClone.style.background = 'inherit';
  });

  speakersContainer.appendChild(speakerClone);

  moreBtn.addEventListener('click', () => {
    speakerClone.style.display = 'flex';
    moreBtn.style.display = 'none';
    lessBtn.style.display = 'flex';
  });

  if (i >= 2 && window.screen.width <= 768) {
    speakerClone.style.display = 'none';
    speakersContainer.appendChild(moreBtn);
    speakersContainer.style.gridTemplateColumns = 'repeat(1,auto)';
  } else if (i >= 2) {
    speakersContainer.appendChild(moreBtn);
    moreBtn.style.display = 'none';
    speakersContainer.style.gridTemplateColumns = 'repeat(2,auto)';
  } else {
    speakersContainer.style.gridTemplateColumns = 'repeat(2,auto)';
  }

  window.addEventListener('resize', () => {
    if (i >= 2 && window.screen.width <= 768) {
      speakerClone.style.display = 'none';
      moreBtn.style.display = 'flex';
      speakersContainer.style.gridTemplateColumns = 'repeat(1,auto)';
    } else {
      speakerClone.style.display = 'flex';
      moreBtn.style.display = 'none';
      lessBtn.style.display = 'none';
      speakersContainer.style.gridTemplateColumns = 'repeat(2,auto)';
    }
  });

  lessBtn.addEventListener('click', () => {
    if (i >= 2) {
      speakerClone.style.display = 'none';
      moreBtn.style.display = 'flex';
      lessBtn.style.display = 'none';
    }
  });
}

speakersContainer.appendChild(lessBtn);

const list = document.querySelector('.nav-menu').children[0].cloneNode('true');
const hanburger = document.querySelector('.hamburger');
const containerMobiMenu = document.createElement('div');
const mobileMenu = document.createElement('div');
const line = document.createElement('div');
const cencelImg = document.createElement('img');
const logo = document.createElement('a');
const logoImg = document.createElement('img');

mobileMenu.appendChild(cencelImg);
mobileMenu.appendChild(logo);
mobileMenu.appendChild(list);
logo.appendChild(logoImg);

logoImg.style.width = '40px';
logoImg.style.height = '80px';
logoImg.style.paddingTop = '40px';

logo.setAttribute('href', 'index.html');
logoImg.setAttribute('src', 'images/logo.png');

function hideMobileMenu() {
  containerMobiMenu.style.display = 'none';
}

function showMobileMenu() {
  containerMobiMenu.style.display = 'block';
}

mobileMenu.className = 'mobile-menu';

document.body.appendChild(containerMobiMenu);
containerMobiMenu.appendChild(mobileMenu);
containerMobiMenu.appendChild(line);

containerMobiMenu.style.display = 'none';
containerMobiMenu.style.position = 'absolute';
containerMobiMenu.style.top = '0';
containerMobiMenu.style.left = '0';
containerMobiMenu.style.width = '100%';
containerMobiMenu.style.background = '#fff5e1';

mobileMenu.style.paddingTop = '34px';
mobileMenu.style.background = '#3c3a39 url("images/quantum2.jpg")';
mobileMenu.style.height = '90%';
mobileMenu.style.width = '100%';

line.style.width = '33%';
line.style.borderBottom = '5px solid #3c3a39';
line.style.marginLeft = '33%';
line.style.paddingTop = '30px';
line.style.marginBottom = '30px';
list.style.height = '700px';

mobileMenu.children[0].src = 'images/cencel.png';
mobileMenu.children[0].style.float = 'right';
mobileMenu.children[0].style.marginRight = '38px';

mobileMenu.children[1].style.width = '80px';
mobileMenu.children[1].style.height = '80px';
mobileMenu.children[1].style.paddingLeft = '40px';
mobileMenu.children[1].style.paddingTop = '40px';

mobileMenu.children[2].style.display = 'flex';
mobileMenu.children[2].style.flexDirection = 'column';
mobileMenu.children[2].style.alignItems = 'center';
mobileMenu.children[2].style.padding = '0';

for (let i = 0; i < 6; i += 1) {
  mobileMenu.children[2].children[i].style.listStyle = 'none';
  mobileMenu.children[2].children[i].children[0].style.fontSize = '32px';
  mobileMenu.children[2].children[i].children[0].style.fontWeight = '700';
  mobileMenu.children[2].children[i].children[0].style.color = '#fff5e1';
  mobileMenu.children[2].children[i].children[0].style.textDecoration = 'none';
  mobileMenu.children[2].children[i].style.padding = '15px';
  mobileMenu.children[2].children[i].style.marginTop = '9px';
  mobileMenu.children[2].children[i].style.borderBottom = '1px solid white';
  mobileMenu.children[2].children[i].style.width = '80%';
  mobileMenu.children[2].children[i].addEventListener('click', hideMobileMenu);
}

mobileMenu.children[0].addEventListener('click', hideMobileMenu);

hanburger.addEventListener('click', showMobileMenu);