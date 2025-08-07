document.addEventListener("DOMContentLoaded", function() {
    const newDiv = document.createElement("div");
    console.log(newDiv);

    newDiv.innerHTML = "Gaurav has manipulated the DOM";
    console.log(newDiv);

    document.body.appendChild(newDiv);

    

    // Select the <h1> element
    const h1Element = document.querySelector("h1");

    // Remove the <h1> element if it exists
    if (h1Element) {
        document.body.removeChild(h1Element);
    }
});


