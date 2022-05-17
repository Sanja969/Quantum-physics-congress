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



speakerText.style.display = 'flex';
speakerText.style.flexDirection = 'column';
speakerText.style.paddingLeft = '10px';

speakerBox.style.display = 'flex';
speakerBox.style.margin = '10px';

speakerName.textContent = 'Name';
speakerTitle.textContent = 'We will introduce you to this';
speakerMore.textContent = '....';
speakerDescription.textContent = ' amasing limitless fielnd where all low of physics do not apply.';

speakerName.style.fontWeight = '700';
speakerTitle.style.color = '#ec5242';
speakerTitle.style.fontSize = '12px';
speakerTitle.style.paddingBottom = '0';

speakerDescription.style.paddingTop = '5px';
speakerDescription.style.fontSize = '12px';

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
moreBtn.style.justifyContent ='center';
moreBtn.style.paddingTop = '15px';

lessBtn.style.border = '1px solid #272a31';
lessBtn.style.width = '100%';
lessBtn.style.height = '40px';
lessBtn.style.background = 'inherit';
lessBtn.style.borderRadius = '5px';
lessBtn.style.margin = '30px 0';
lessBtn.style.display = 'flex';
lessBtn.style.alignItems = 'center';
lessBtn.style.justifyContent ='center';


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
  image: 'https://www.writeups.org/wp-content/uploads/Spock-Star-Trek-Leonard-Nimoy.jpg',
  name: 'Mr. Spock',
  title: 'Science officer USS Enterprise.',
  description: 'Serve aboard the starship USS Enterprise as science officer and first officer and later \
  as commanding officer of two iterations of the vessel.',
}

const person2 = {
  image: 'https://static.wikia.nocookie.net/jamescameronsavatar/images/1/1d/Grace_with_headphones.jpg/revision/latest/scale-to-width-down/250?cb=20100112235059',
  name: 'Grace Augustine',
  title: 'Legend to the scientific personnel as the author of a comprehensive book on Pandora\'s plants.',
  description: 'She helped Jake Sully on the Avatar Program until she died due to a gunshot wound inflicted by Colonel Quaritch.',
}

const person3 = {
  image: 'https://pbs.twimg.com/profile_images/2449430588/z3andqntvly42kwaqokw_400x400.jpeg',
  name: 'Bruce Banner',
  title: 'Ph.D. a.k.a. the Hulk is an American theoretical physicist, famed for his work into the studies of nuclear physics and gamma radiation',
  description: 'He was recruited by General Thaddeus "Thunderbolt" Ross and the US Army to develop the first Gamma Bomb.',
}

const person4 = {
  image: 'https://m.media-amazon.com/images/M/MV5BNTU4NjE3NDY3OF5BMl5BanBnXkFtZTYwMDA2MTQ3._V1_UY1200_CR84,0,630,1200_AL_.jpg',
  name: 'Sheldon Cooper',
  title: 'Former senior theoretical particle physicist at the California Institute of Technology',
  description: 'Originally from East Texas, Sheldon started college at the age of 11,\
   receiving his first Ph.D. at the age of 16. As a kid, Sheldon was involved in numerous experiments as a "wunderkind.',
}

const person5 = {
  image: 'https://www.personality-database.com/profile_images/522.png',
  name: 'Professor Xavier',
  title: 'founder and sometimes leader of the X-Men',
  description: 'Xavier is a member of a subspecies of humans known as mutants, who are born with superhuman abilities.\
   He is an exceptionally powerful telepath, who can read and control the minds of others.',
}

const person6 = {
  image: 'https://static.wikia.nocookie.net/characterpedia/images/8/8f/Bernadette_Rostenkowski.jpg/revision/latest?cb=20120616020603',
  name: 'Bernadette Rostenkowski-Wolowitz',
  title: 'Ph.D. in microbiology',
  description: 'lucrative job at the pharmaceutical company ZanGen/.',
}

const presenters = [person1, person2, person3, person4, person5, person6];

for (let i=0; i < 6; i += 1) {
  const speakerClone = speakerBox.cloneNode(true);
  speakerClone.children[0].setAttribute('src', presenters[i].image);
  speakerClone.children[1].children[0].textContent = presenters[i].name;
  speakerClone.children[1].children[1].textContent = presenters[i].title;
  speakerClone.children[1].children[3].textContent = presenters[i].description;

  speakerClone.children[0].style.width='150px';
  speakerClone.children[0].style.height='auto';

  speakersContainer.appendChild(speakerClone);

  moreBtn.addEventListener('click', () => {
    speakerClone.style.display = 'flex';
    moreBtn.style.display = 'none';
    lessBtn.style.display = 'flex';
    
});
  if (i >= 2 && window.screen.width <= 768) {
    speakerClone.style.display = 'none';
    speakersContainer.appendChild(moreBtn);
  }
  else if (i >= 2) {
    speakersContainer.appendChild(moreBtn);
    moreBtn.style.display = 'none';
  }
  window.addEventListener('resize', () => {
    if (i >= 2 && window.screen.width <= 768) {
      speakerClone.style.display = 'none';
      moreBtn.style.display = 'flex';
      }
    else {
      speakerClone.style.display = 'flex';
      moreBtn.style.display = 'none';
      lessBtn.style.display = 'none';
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


