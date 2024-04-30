"use strict"; // Strict mode that verificies if a variable has been defined

window.onload = init;// Assigning the init function to run when the page loads

function init() {
    LoadDataOfDropdown();
    greetUser();

}
function LoadDataOfDropdown() {
    // Array of names
    let names = ["John", "Alice", "Bob", "Emily", "Michael"];

    // Function to populate the select dropdown

        let select = document.getElementById("nameSelect");
        names.forEach(function(name) {
            var option = document.createElement("option");
            option.text = name;
            select.add(option);
        });
};
