window.onload = function(){
	SIGMA = $('#sigma');
	PI = $('#pi');
	let pi = []
	let sigma = []

	let final_html = ""

	$( "#SUBMIT" ).click(function(event) {
		final_html = ""
		
		pi_mda = HTML_to_MDA(PI.val())
		sigma_mda = HTML_to_MDA(SIGMA.val())

		pi = Permutation(pi_mda);
		sigma = Permutation(sigma_mda);

		console.log(`σπ = ${Format_HTML(Multiply(sigma,pi))}`);
		console.log(`πσ = ${Format_HTML(Multiply(pi,sigma))}`);

		final_html += `<b> σπ = ${Format_HTML(Multiply(sigma,pi))}</b>`
		final_html += `<br><b> πσ = ${Format_HTML(Multiply(pi,sigma))}</b>`
		$('.output-container').html(`${final_html}`);

		final_html = "<h2>σ</h2>"
		final_html += `<p>Inverse: ${Format_HTML(Invert(sigma_mda))}</p>`
		final_html += `<p>Order: ${quantify(sigma_mda).reduce(lcm)}</p>`
		$('.infobox.a').html(`${final_html}`);

		final_html = "<h2>π</h2>"
		final_html += `<p>Inverse: ${Format_HTML(Invert(pi_mda))}</p>`
		final_html += `<p>Order: ${quantify(pi_mda).reduce(lcm)}</p>`

		$('.infobox.b').html(`${final_html}`);

	});

};