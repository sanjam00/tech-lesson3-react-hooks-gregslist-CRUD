import ListingCard from "./ListingCard";

function ListingsContainer({ listings, updateListing, props }) {
  console.log("listings:", listings)

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard {...listing} key={listing.id} updateListing={updateListing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
