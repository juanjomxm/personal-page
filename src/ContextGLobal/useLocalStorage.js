import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (localStorageItem) {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      } else {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.error("Error reading from localStorage:", error);
    }
  }, []);

  const saveItem = (newItem) => {
    if (newItem !== item) {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage }