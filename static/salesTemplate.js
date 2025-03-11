/*
class Product {
	constructor(title, type, price, description) {
		this.title=title;
		this.type= type;
		this.price= price;
		this.description= description;
	}
}
*/
let numItems = 0;
const imgPath = "/static/raven.png";
/*
productList.push(
	new Product("Bed", "bedroom", 300.00, "A bed."),
	new Product("Glasses", "kitchen", 25.00, "Set of 4 glasses."),
	new Product("Soap Dish", "bathroom", 10.00, "A soap dish"),
	new Product("Computer", "computers", 1000.00, "A computer."),
	new Product("Tablet", "tables", 500.00, "A tablet."),
	new Product("Television", "televisions", 190.00, "A television."),
	new Product("Meat", "meat", 25.00, "Beef"),
	new Product("Vegetables", "vegetables", 5.00, "Some vegetables."),
	new Product("Milk", "dairy", 6.00, "Some milk.")
);
*/
/*
const addToCart = (title) => {
//	const product = productList.find(product => product.title === title);
//	cart.push(product);
//	numItems = cart.length;
//	localStorage.setItem("cart", JSON.stringify(cart));
	const xhttp = new XMLHttpRequest();
	xttp.send(title);
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const line = document.getElementById("cartNum");
			line.innerHTML = "Cart " + xhttp.response ;
		}
	}
//	loadCartProducts();
//	sendCart();
};
*/
const loadProducts = () => {
	console.log("loading");
	const body = document.getElementById("bodyColumn");
	productList.forEach( product => {
		const divElement = getProductBody(product);
		body.appendChild(divElement);
	});

};

const loadCartProducts = () => {
	
	cart.forEach( product => {
		const body = document.getElementById("bodyColumnC");
		const divElement = getProductCartBody(product);
		body.appendChild(divElement);
	});
};


const getProductBody = (product) => {
	
	const divElement = document.createElement('div');
	divElement.classList.add('productBody');
	divElement.classList.add('grid');
	const rowElement = document.createElement('div');
	rowElement.classList.add('row');
	divElement.appendChild(rowElement);
	const picColumn = document.createElement('div');
	picColumn.classList.add('col-2');
	const listColumn = document.createElement('div');
	listColumn.classList.add('col-10');
	rowElement.appendChild(picColumn);
	rowElement.appendChild(listColumn);
	const buttonElement = document.createElement('button');
	buttonElement.classList.add('buyBtn');
	buttonElement.onclick = function(){ addToCart(product.title) };
	buttonElement.innerHTML = "Add to Cart"; 
	const imgElement = document.createElement('img'); 
	imgElement.classList.add('productImg');
	imgElement.src = imgPath;
	picColumn.appendChild(imgElement);
	listColumn.innerHTML = (
			 "<p>Title: " + product.title + "</p><p>Price: " + product.price + "</p><p>" + product.description + "</p>"
		);
	listColumn.appendChild(buttonElement);
	return divElement;
};


const getProductCartBody = (product) => {
	
	const divElement = document.createElement('div');
	divElement.classList.add('productBody');
	divElement.classList.add('grid');
	const rowElement = document.createElement('div');
	rowElement.classList.add('row');
	divElement.appendChild(rowElement);
	const picColumn = document.createElement('div');
	picColumn.classList.add('col-2');
	const listColumn = document.createElement('div');
	listColumn.classList.add('col-10');
	rowElement.appendChild(picColumn);
	rowElement.appendChild(listColumn);
	const imgElement = document.createElement('img'); 
	imgElement.classList.add('productImg');
	imgElement.src = imgPath;
	picColumn.appendChild(imgElement);
	listColumn.innerHTML = "<p>"  +  "</p>";
	return divElement;
};


const sendCart = () => {
	console.log("sending cart ");
	localStorage.setItem("cart", JSON.stringify(cart));
	window.location.href = "cartTemplate.html";
	for(let i = 0; i < localStorage.length; i++) {
		console.log(localStorage.getItem(localStorage.key(i)));
	};
};

const getArray = (stringList) => {
	console.log(stringList);
	return stringList;
};




