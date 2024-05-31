// -----------------------------------
// Create new dog for Adoption
export function addNewAdoption(adoptData) {
    return fetch("http://localhost:5000/adopt/addAdoption", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(adoptData)
    })
    .then((response) => response.json())
    .then((data) => console.log("Adoption created:", data))
    .catch((error) => console.error("Error:", error));
}
