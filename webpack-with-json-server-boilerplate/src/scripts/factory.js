const renderPlaces = () => {
    return `
    <article id="places__container">
        <h1>The Ternary Traveler</h1>
        <div id="places--inputField">
        <input type="hidden" value="" id="entryId">
        <fieldset>
        <legend>Points of Interest</legend>
            <label for="point of interest">Name of Interest</label>
            <input type="text" name="point of interest" id="nameOfPointOfInterest">
        </fieldset>
        <fieldset>
            <label for="description of interest">Description</label>
            <input type="text" name="description" id="description" placeholder="Enter your description here">
        </fieldset>
        <fieldset>
            <label for="cost of visiting">Cost of Visiting</label>
            <input type="text" name="cost of visiting" id="cost" placeholder="Enter your amount here">
        </fieldset>
        <fieldset>
            <label for="review">Review</label>
            <input type="text" name="review" id="review" placeholder="Enter your review here">
        </fieldset>
        <label>Location</label>
        <select name="location" id="location">
            <option value="1">Italy</option>
            <option value="2">Switzerland</option>
            <option value="3">France</option>
        </select>
        <button id="submitButton">Save</button>
        </div>
        <div id="renderIteneraryContainer"></div>
        </article>
    `
}

const createPlacesHTML = (placesObject) => {
    return ` <section id="iteneraryContainer">
    <h1>Name: ${placesObject.name}</h1>
    <p>Description: ${placesObject.description}</p>
    <p>Cost: ${placesObject.cost}</p>
    <p>Review: ${placesObject.review}</p>
    <p>Country: ${placesObject.place.name}</p>
    <button id="deleteItinerary--${placesObject.id}">Delete</button>
    <button id="editItinerary--${placesObject.id}">Edit</button>
  </section>`
}

const renderItenerary = (entries) => {
    const renderIteneraryLocation = document.querySelector("#renderIteneraryContainer")
    renderIteneraryLocation.innerHTML = ""
    console.log("renderItenerary", entries)
    for (const entry of entries) {
    const iteneraryLocation = createPlacesHTML(entry)
    renderIteneraryLocation.innerHTML += iteneraryLocation
    }
}
export default {
    renderPlaces,
     createPlacesHTML,
     renderItenerary
}