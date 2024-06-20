// Save data to local storage under a specific key
const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Retrieve data from local storage by key
  const getFromLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    if (data !== undefined) {
        return data ? JSON.parse(data) : null;
    }
  };

  const updateLocalStorage = (key, value) => {
    let existingArray = JSON.parse(localStorage.getItem(key)) || [];

    // Append new data to the array
    existingArray.push(value);

    // Store the updated array back into localStorage
    localStorage.setItem(key, JSON.stringify(existingArray));
  }
  
  export { saveToLocalStorage, getFromLocalStorage, updateLocalStorage };
  