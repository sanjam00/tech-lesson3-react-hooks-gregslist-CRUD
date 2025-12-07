import ListingCard from "./ListingCard";

function ListingsContainer({ listings, props }) {
  console.log("listings:", listings)

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard {...listing} key={listing.id} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
