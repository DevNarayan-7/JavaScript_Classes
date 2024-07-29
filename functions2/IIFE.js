function downloadScriptFromIdeoneAndPopulateDatabase(params) {
    // this was an old function

    console.log("Old function Implementation");
}


// more core of 8000 lines

downloadScriptFromIdeoneAndPopulateDatabase();
// somewhere between



// intern by mistake makes the smae function
// To solve this, we can wrap the whole intern's code that can break, into an IIFE
// Docs: https://developer.mozilla.org/en-Us/docs/Glossary/IIFE

(function () {
    function downloadScriptFromIdeoneAndPopulateDatabase() {
        console.log("New function created");
    }
    console.log("Calling intern code");
    downloadScriptFromIdeoneAndPopulateDatabase();
})();


downloadScriptFromIdeoneAndPopulateDatabase();