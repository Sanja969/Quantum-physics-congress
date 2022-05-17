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

logo.setAttribute('href', 'index.html')
logoImg.setAttribute('src', 'https://cdn.pixabay.com/photo/2017/11/16/09/34/science-2953886_960_720.png');


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
mobileMenu.style.backgroundColor = '#3c3a39';
mobileMenu.style.height = '90%';
mobileMenu.style.width = '100%';

line.style.width = '33%';
line.style.borderBottom = '5px solid #3c3a39';
line.style.marginLeft = '33%';
line.style.paddingTop = '30px';
line.style.marginBottom= '30px';
list.style.height = '700px'

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