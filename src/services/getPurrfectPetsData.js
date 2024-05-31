// -----------------------------
// TOYS

// Get Array of all Toys
export function getAllToys() {
  return fetch("http://localhost:5000/toys")
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
}

// Get toy details by ID
export function getToyById(toyId) {
  return fetch(`http://localhost:5000/toys/${toyId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Failed to fetch specific toy details.");
    })
    .catch((err) => {
      throw err;
    });
}

// -----------------------------
// BEDS

// Get Array of all beds
export function getAllBeds() {
  return fetch("http://localhost:5000/beds") // Ensure this endpoint matches your backend API
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}

// Get bed details by ID
export function getBedById(bedId) {
  return fetch(`http://localhost:5000/beds/${bedId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Failed to fetch specific toy details.");
    })
    .catch((err) => {
      throw err;
    });
}

// -----------------------------
// DOGS UP FOR ADOPTION

// Get array of all adopts
export function getAllAdoptions() {
  return fetch("http://localhost:5000/adopt")
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
}
