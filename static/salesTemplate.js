let productList = [];
let cart = []
let numItems = 0;
const imgPath = "/static/raven.png";

const addToCart = (product) => {
	cart.push(product);
	numItems++;
};

const loadProducts = (str) => {
	const newProductList = str.split("},");
	for(let i = 0; i<newProductList.length; i++) {
		if(newProductList[i].endsWith("}")) {
			productList.push(JSON.parse(newProductList[i]))
		} else {
			productList.push(JSON.parse(newProductList[i]+ "}"));
		}
	}
	let cartNum = document.getElementById('cartNum');
	cartNum.innerHTML = numItems;
	const body = document.getElementById("bodyColumn");
	productList.forEach( product => {
		const divElement = getProductBody(product);
		body.appendChild(divElement);
	});

};

const loadCartProduct = (product) => {
	const body = document.getElementById("cartColumn");
	const divElement = getCartBody(product);
	const cartNum = document.getElementById('cartNum');
	cartNum.innerHTML = numItems;
	body.appendChild(divElement);
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
	buttonElement.onclick = function(){ addToCart(product) };
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


const getCartBody = (product) => {
	
	const divElement = document.createElement('div');
	divElement.classList.add('cartColumn');
	const pElement = document.createElement('p');
	pElement.innerHTML = product.title;
	divElement.appendChild(pElement);
	const buttonElement = document.createElement('a');
	buttonElement.href = "cartTemplate.html";
	const btn = document.createElement('button');
	btn.innerHTML("Go to Cart");
	buttonElement.appendChild(btn);
	divElement.appendChild(buttonElement);
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




