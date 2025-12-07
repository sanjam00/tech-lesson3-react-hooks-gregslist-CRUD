import { useState, useEffect } from "react";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";

function App() {
  //fetch and render list data here, pass down to ListCard thru ListContainer
  // there will be a serach function, so const [searchTerm, setSearchTerm] = useState(""). this use this in a in a search function (w the toLowerCase stuff)
  //update state of the search bar with this.

  //does the newItem live in ListingForm or here? I think here, because other components need access to it

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

  return (
    <div className="app">
      <Header />
      <ListingForm />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
