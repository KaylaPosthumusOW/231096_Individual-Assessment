export function getAllToys() {
    return fetch("http://localhost:5000/toys")
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        throw err;
      });
  }