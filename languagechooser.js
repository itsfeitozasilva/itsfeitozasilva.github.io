/**
 * src/languagechooser.js
 * JavaScript code that detects the user's language and redirects to the appropriate page.
 * For use in index.html
 *
 * Copyright (C) 2022 R. Valentim Feitoza da Silva. All rights reserved.
 */

window.onload = () => {
	// Available languages
	const availableLanguages = ['en-us', 'pt-br'];

	// Browser language
	const browserLanguage = navigator.language.toLowerCase();
	
	// Language to use
	let languageToUse = 'en-US'; // default

	// Determine what language to use
	if (availableLanguages.includes(browserLanguage))
		languageToUse = browserLanguage;

	// Redirect to appropriate page
	window.location.replace(`/index.${languageToUse}.html`);
};
