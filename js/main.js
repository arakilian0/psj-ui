const contact = document.querySelector('aside');
const contact0 = document.querySelector('#contact0');
const contact1 = document.querySelector('#contact1');

const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
const navItem = document.querySelector('a.toggle-nav');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  // Check if working...
  console.log(count);
}

function toggleNavigation(){
  this.nextElementSibling.classList.toggle('active');
}

function keyPress(e) {
  e = e || window.event;

  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);
navItem.addEventListener('click', toggleNavigation);

// added by me
function openContact(i) {
  if( !i ) { contact.style.display = "flex"; }
  else {
    if( i === 1 ) {
      contact0.style.display = "none";
      contact1.style.display = "block";
    }
    if( i === 2 ) {
      console.log('coming soon...');
    }
  }
}

function closeContact(i) {
  if(!i) { contact.style.display = "none"; }
  else {
    if( i === 1 ) {
      contact0.style.display = "block";
      contact1.style.display = "none";
    }
  }
}
