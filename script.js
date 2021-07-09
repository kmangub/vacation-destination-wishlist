



let form = document.getElementById("destinations-form");

var numberOfCards = 0;



form.addEventListener('submit', (event) => {
    event.preventDefault();

    
    // ---------------- API Call -------------------------------
    
    let clientId = "uQR4VEwqnXctGXvwmc2Biei-SgT7PtDin5jv1Wx0J8w";
    let URL = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=" + event.target.destination.value;
    
    fetch(URL)
    .then(function(data) {
        return data.json();
    })
    .then(function(data) {
        var newCard = document.createElement("div");
        newCard.setAttribute("class", "card");
        newCard.setAttribute("style", "width: 18rem;")
        newCard.setAttribute("id", numberOfCards)
        document.getElementById("destination-container").appendChild(newCard);

        let photo_url = data.results[0].urls.regular;
        let numberOfCards_2 = numberOfCards;
        var image = document.createElement("img");
        image.setAttribute("class", "card-img-top");
        image.setAttribute("alt", event.target.destination.value);
        image.setAttribute("src", photo_url);
        document.getElementsByClassName("card")[numberOfCards_2].appendChild(image);
        
            document.getElementById("title").innerHTML = "My WishList";
            
            var cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
            document.getElementsByClassName("card")[numberOfCards].appendChild(cardBody);
        
            
            var cardTitle = document.createElement("h5");
            cardTitle.setAttribute("class", "card-title");
            cardTitle.innerHTML = event.target.destination.value;
            document.getElementsByClassName("card-body")[numberOfCards].appendChild(cardTitle);
        
            var cardSubtitle = document.createElement("h6");
            cardSubtitle.setAttribute("class", "card-subtitle mb-2 text-muted");
            cardSubtitle.innerHTML = event.target.location.value;
            document.getElementsByClassName("card-body")[numberOfCards].appendChild(cardSubtitle);
        
            var cardText = document.createElement("p");
            cardText.setAttribute("class", "card-text");
            cardText.innerHTML = event.target.description.value;
            document.getElementsByClassName("card-body")[numberOfCards].appendChild(cardText);
        
            var buttonContainer = document.createElement("div");
            buttonContainer.setAttribute("class", "buttons_container");
            document.getElementsByClassName("card-body")[numberOfCards].appendChild(buttonContainer)
        
            var editButton = document.createElement("button");
            editButton.setAttribute("class", "btn btn-warning");
            editButton.setAttribute("value", numberOfCards);
            editButton.setAttribute("onclick", "editCard(this)");
            editButton.innerHTML = "Edit"
            document.getElementsByClassName("buttons_container")[numberOfCards].appendChild(editButton)
        
            var removeButton = document.createElement("button");
            removeButton.setAttribute("class", "btn btn-danger");
            removeButton.setAttribute("onclick", "removeButtonHandler(this)");
            removeButton.setAttribute("value", numberOfCards);
            removeButton.innerHTML = "Remove"
            document.getElementsByClassName("buttons_container")[numberOfCards].appendChild(removeButton)
        
        
            numberOfCards++;
        
            document.getElementById("destinations-form").reset()
    })
    
    //----------------------------------------------------------

})

function removeButtonHandler(buttonObject) {
    document.getElementsByClassName("card")[parseInt(buttonObject.value)].remove();
    numberOfCards--;

    for(i=0; i<numberOfCards; i++) {
        document.getElementsByClassName("btn-danger")[i].setAttribute("value", i)
        document.getElementsByClassName("btn-warning")[i].setAttribute("value", i)
    }
}

function editCard(buttonObject) {
    var new_destination = prompt("Enter a new Destination")
    var new_location = prompt("Enter new Location")
    document.getElementsByClassName("card-subtitle")[parseInt(buttonObject.value)].innerHTML = new_location;
    
    let clientId = "uQR4VEwqnXctGXvwmc2Biei-SgT7PtDin5jv1Wx0J8w";
    let URL = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=" + new_destination;
    
    document.getElementsByClassName("card-title")[parseInt(buttonObject.value)].innerHTML = new_destination;

    fetch(URL)
    .then(function(data) {
        return data.json();
    })
    .then(function(data) {
        let photo_url = data.results[0].urls.regular
        document.getElementsByClassName("card-img-top")[parseInt(buttonObject.value)].setAttribute("src", photo_url);
        document.getElementsByClassName("card-img-top")[parseInt(buttonObject.value)].setAttribute("alt", new_destination);
    })

}