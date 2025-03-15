let productList = [];
let cart = []
let numItems = 0;
const imgPath = "/static/raven.png";

const addToCart = (product) => {
	console.log(product.title);
	cart.push(product);
	numItems++;
	loadCartProduct(product);
};

const loadProducts = (str) => {
	const newProductList = str.split("},");
	for(let i = 0; i < newProductList.length; i++) {
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
	cartNum.innerHTML = "Items in cart : " + numItems;
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
	const cartList = document.getElementById("cartList")
	const pElement = document.createElement('p');
	pElement.innerHTML = product.title;
	cartList.appendChild(pElement);
};


const sendCart = () => {
	let result = "";
	cart.forEach(product => {
		result += product.title + ",";
	})

	result = result.slice(0, -1);
	console.log(result);
	$.ajax ({
		url: '/process',
		type : 'POST',
		contentType: 'application/json',
		data: JSON.stringify({result})
	})

};





