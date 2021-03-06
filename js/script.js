const cats = [
	{
		name: 'Blob',
		age: 10,
	},
	{
		name: 'Harold',
	},
	{
		name: 'Blurt',
		age: 21,
	},
];

//Question 1

const cat = {
	complain: function () {
		console.log('Meow');
	},
};

console.log(cat);

//Question 2

let heading = document.querySelector('h3');

heading.innerHTML = 'Updated heading';

//Question 3

heading.style.fontSize = '2em';

//Question 4

heading.classList.add('subheading');

//Question 5

const paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.color = 'red';
}

//Question 6

const resultsContainer = document.querySelector('.results');

resultsContainer.innerHTML = '<p>New paragraph</p>';
resultsContainer.style.color = 'yellow';

//Question 7

const func = (list) => {
	for (let i = 0; i < list.length; i++) {
		console.log(list[i].name);
	}
};

func(cats);

//Question 8

const container = document.querySelector('.cat-container');

const createCats = (cats) => {
	let html = '';

	for (let i = 0; i < cats.length; i++) {
		let catAge = cats[i].age;

		if (catAge === undefined) {
			catAge = 'Age unknown';
		}

		html += `<div>
		<h5>${cats[i].name}</h5>
		<p>${catAge}</p>
		</div>`;
	}
	return html;
};
container.innerHTML = createCats(cats);
