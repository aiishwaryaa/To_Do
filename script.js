let cardParent = document.querySelector(".box");
let getData = JSON.parse(localStorage.getItem("list")) || [];

// Show first-time data.
if (getData.length > 0) {
    cardParent.style.display = "flex";
    getData.forEach((e) => {
        cardParent.insertAdjacentHTML("beforeend", createCard(e));
    });
}

// Create a new card
function createCard(e) {
    const card = `
        <div class="card">
            <h1 class="card-title">${e.title}</h1>    
            <h4 class="card-description">${e.description}</h4>
        </div>`;
    return card;
}

const clickHandle = () => {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    if (!title || !description) {
        alert("Please enter both title and description.");
        return;
    }

    let todo = {
        title: title,
        description: description
    };

    // Update the list in localStorage
    let localdata = [...getData, todo];
    localStorage.setItem("list", JSON.stringify(localdata));

    // Show the new task in the UI
    cardParent.style.display = "flex";
    cardParent.insertAdjacentHTML("beforeend", createCard(todo));

    // Clear input fields after adding the task
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
};
