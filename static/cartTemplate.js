
	const cart = JSON.parse(localStorage.getItem("cart"));
const loadCartProducts = () => {
	console.log("cart is " + cart);

        cart.forEach( product => {
                const body = document.getElementById("cartProductBody");
                const divElement = getProductCartBody(product)
		body.appendChild(divElement);
	});
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
        listColumn.innerHTML = product.title + " " + product.price;
        return divElement;
};

console.log("hello");
loadCartProducts();
