import API from "./data.js"
import factory from "./factory.js"
import { runInNewContext } from "vm";



const IteneraryContainer = document.querySelector("#iteneraryContainer")

IteneraryContainer.innerHTML = factory.renderPlaces()

        const name = document.querySelector("#nameOfPointOfInterest")
        const description = document.querySelector("#description")
        const cost = document.querySelector("#cost")
        const review = document.querySelector("#review")
        const placeId = document.querySelector("#location")

        const clearForm = () => {
            name.value = ""
            description.value = ""
            cost.value = ""
            review.value = "",
            placeId.value = ""
        }

IteneraryContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("submitButton")) {
        const name = document.querySelector("#nameOfPointOfInterest").value
        const description = document.querySelector("#description").value
        const cost = document.querySelector("#cost").value
        const review = document.querySelector("#review").value
        const placeId = document.querySelector("#location").value
        const hiddenEntryId = document.querySelector("#entryId")
        const newPlaceEntry = {
            name: name,
            description: description,
            cost: cost,
            review: review,
            placeId: placeId
        }
        console.log(hiddenEntryId)
     if (hiddenEntryId.value === "") {
         API.saveEntryData(newPlaceEntry).then(API.getPOI).then(factory.renderItenerary).then(clearForm)
    } else {
        API.editEntryData(newPlaceEntry, hiddenEntryId.value).then(API.getPOI).then(factory.renderItenerary)

         }
    }
})


IteneraryContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("deleteItinerary--")) {
        const deleteEntry = event.target.id.split("--")[1]
        API.deleteEntryData(deleteEntry).then(API.getPOI).then(factory.renderItenerary)

    }

})

IteneraryContainer.addEventListener("click", () => {
    if (event.target.id.startsWith("editItinerary--")) {
        const editEntry = event.target.id.split("--")[1]
        API.updateEditFields(editEntry)
        console.log(editEntry)
    }
})
