// First version

for ( let i = 1; i <= 100; i++ ) {
	if ( i % 15 == 0 ) {
		console.log("SuchWow");
	} else if ( i % 3 == 0 ) {
		console.log("Such");
	} else if ( i % 5 == 0 ) {
		console.log("Wow");
	} else {
		console.log(i);
	}
}

// Second Version

for ( let i = 0; i <= 100; i++ ) {
	var text = "";

	if ( i % 3 == 0 ) text += "Such";

	if ( i % 5 == 0 ) text += "Wow";

	( text != "" ) ? console.log(text) : console.log(i);
}