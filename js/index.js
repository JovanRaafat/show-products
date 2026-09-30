let $btn = document.querySelector("button");
let $products = document.querySelector("section");
let $loading = document.querySelector("#loading");

function $display(result) {
	$products.innerHTML = "";
	result.products.forEach((product) => {
		let card = `
					<div class="col-12 col-md-6 col-lg-3 py-3">
						<div class="card container my-3 shadow h-100">
							<img src="${product.images[0]}" class="card-img-top" alt="..." />
							<div class="card-body d-flex justify-content-between flex-column">
								<h5 class="card-title">${product.title}</h5>
								<p class="card-text">${product.category}</p>
								<p class="card-text">${product.description}</p>
								<p class="text-success fs-2">$${product.price}</p>
								<a href="#" class="btn btn-primary w-100">View Product</a>
							</div>
						</div>
					</div>
			`;
		$products.innerHTML += card;
	});
}

async function $getdata() {
	$loading.classList.remove("d-none");
	$products.classList.add("d-none");
	try {
		let res = await fetch("https://dummyjson.com/products");
		let data = await res.json();
		$display(data);
	} catch (er) {
		$products.innerHTML = `<p class=" fs-1 text-center" >${er.message}</p>`;
	}
	$products.classList.remove("d-none");
	$loading.classList.add("d-none");
}

$btn.addEventListener("click", () => $getdata());
