-- nuclide
-- language-babel
-- autoclosehtml
-- linter 2.0.0
-- ternjs
-- atom beautify
-- vim-jsx


https://orktes.github.io/atom-react/


//Connexion API :
https://omgvamp-hearthstone-v1.p.mashape.com/cards
	WOcB5NxA24mshbQ6vstOp5V42WPWp1d1toPjsnEc6mSXVWpNeC

// These code snippets use an open-source library. http://unirest.io/nodejs
	unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards")
	.header("X-Mashape-Key", "WOcB5NxA24mshbQ6vstOp5V42WPWp1d1toPjsnEc6mSXVWpNeC")
	.end(function (result) {
	  console.log(result.status, result.headers, result.body);
	});
