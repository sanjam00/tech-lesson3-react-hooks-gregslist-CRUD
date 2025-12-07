import { useState, useEffect } from "react";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";

function App() {
  //fetch and render list data here, pass down to ListCard thru ListContainer
  // there will be a serach function, so const [searchTerm, setSearchTerm] = useState(""). this use this in a in a search function (w the toLowerCase stuff)
  //update state of the search bar with this.

  //does the newItem live in ListingForm or here? I think here, because other components need access to it. 
  // FALSE, it lives in ListingForm because it'll be POSTed anyways- other components will make a GET request if they need the data

  const [listings, setListings] = useState([])


  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => {
        if (!response.ok) {
          throw new Error("failed to get listings")
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setListings(data)
      })
      .catch(error => console.log("Error fetching data", error))
  }, [])

  function addListing(newListing) {
    setListings(prevListings => [...prevListings, newListing])
  }

  return (
    <div className="app">
      <Header />
      <ListingForm addListing={addListing} />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
