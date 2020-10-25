const toggleBtn = document.querySelector('#navBtn');

const toggleHandler = () => {
  const toggleOpen = document.querySelector('.navId');
  // toggleOpen.style.display = 'block';
  toggleOpen.classList.toggle('visible');
};

toggleBtn.addEventListener('click', toggleHandler);

const pointerOne = document.getElementById('pointer-down-one');
const pointerTwo = document.getElementById('pointer-down-two');
const pointerThree = document.getElementById('pointer-down-three');

const productHandlerOne = () => {
  const prodItemOne = document.querySelector('#product-one');
  prodItemOne.classList.toggle('visible');
  if (pointerOne) {
    pointerOne.classList.toggle('hide');
  }
};

pointerOne.addEventListener('click', productHandlerOne);

const productHandlerTwo = () => {
  const prodItemTwo = document.querySelector('#product-two');
  prodItemTwo.classList.toggle('visible');
  if (pointerTwo) {
    pointerTwo.classList.toggle('hide');
  }
};

pointerTwo.addEventListener('click', productHandlerTwo);

const productHandlerThree = (help) => {
  const prodItemThree = document.querySelector('#product-three');
  prodItemThree.classList.toggle('visible');
  if (pointerThree) {
    pointerThree.classList.toggle('hide');
  }
};

pointerThree.addEventListener('click', productHandlerThree);

class Collection {
  imageUrl;
  title;
  text;

  constructor(title, image, text) {
    this.title = title;
    this.text = text;
    this.imageUrl = image;
  }
}

class CollectionList {
  collections = [
    new Collection(
      'EGGPLANT',
      '/images/updates/update-Eggplant.jpg',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasiit amet consectetur adipisicing elit. Pariatur quasi.'
    ),
    new Collection(
      'BROCCOLI',
      '/images/updates/update-broccoli-2.jpeg',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasiit amet consectetur adipisicing elit. Pariatur quasi.'
    ),
    new Collection(
      'BLACKBERRY',
      '/images/updates/update-blackberrySmall.jpg',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasiit amet consectetur adipisicing elit. Pariatur quasi.'
    ),
    new Collection(
      'GREEN BEANS',
      '/images/updates/update-green--beans.jpeg',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasiit amet consectetur adipisicing elit. Pariatur quasi.'
    ),
  ];
  constructor() {}
  render() {
    const renderHook = document.querySelector('.row.collection-row');
    for (const eachItems of this.collections) {
      const collItems = document.createElement('div');
      collItems.className = 'col-md-3 ';
      collItems.innerHTML = `
				<img class="img-fluid" src="${eachItems.imageUrl}" alt="${eachItems.title}">
					<div class="card-header">
					<svg class="card__icon float-right">
							<use xlink:href="images/icons.svg#icon-shopping-bag "></use>
						</svg>
						<h6 class="text-success">${eachItems.title}</h6>
						</div>
						<p class="card-text ml-2 mb-2 mt-1">${eachItems.text}.
					</p>
					`;
      renderHook.append(collItems);
    }
  }
}
const output = new CollectionList();
output.render();
// console.log(output);
