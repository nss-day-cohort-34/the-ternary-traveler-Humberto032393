

const getPOI = () => {
    return fetch("http://localhost:8088/interests?_expand=place")
    .then(entries => entries.json())
}


const saveEntryData = (registerEntry) => {
    return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
                 "Content-Type": "application/json"
            },
        body: JSON.stringify(registerEntry)
        }).then(response => response.json())
    }

    const deleteEntryData = (entryId) => {
        return fetch(`http://localhost:8088/interests/${entryId}`, {
                method: "DELETE",
            }).then(response => response.json())
    }

    const editEntryData = (updatedObject, id) => {
        return fetch(`http://localhost:8088/interests/${id}`, {
                "method": "PUT",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify(updatedObject)
            })
            .then(response => response.json())
    }

    const updateEditFields = (entriesId) => {
        const hiddenEntryId = document.querySelector("#entryId")
        const hiddenName = document.querySelector("#nameOfPointOfInterest")
        const hiddenDescription = document.querySelector("#description")
        const hiddenCost = document.querySelector("#cost")
        const hiddenReview = document.querySelector("#review")
        const hiddenLocation = document.querySelector("#location")
        return fetch(`http://localhost:8088/interests/${entriesId}`)
            .then(response => response.json())
            .then(entry => {
                hiddenEntryId.value = entry.id
                hiddenName.value = entry.name
                hiddenDescription.value = entry.description
                hiddenCost.value = entry.cost
                hiddenReview.value = entry.review
                hiddenLocation.value = entry.placeId
            })
    }




export default {
    getPOI,
    saveEntryData,
    deleteEntryData,
    editEntryData,
    updateEditFields
}