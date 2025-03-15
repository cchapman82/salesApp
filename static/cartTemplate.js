
let cartP = [];

const loadCartProducts = (str) => {
        console.log(str);
        const newProductList = str.split("},");
	for(let i = 0; i < newProductList.length; i++) {
		if(newProductList[i].endsWith("}")) {
			cartP.push(JSON.parse(newProductList[i]))
		} else {
			cartP.push(JSON.parse(newProductList[i]+ "}"));
		}
        };
}

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

loadCartProducts();
