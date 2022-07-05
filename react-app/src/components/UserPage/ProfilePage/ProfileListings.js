import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


function ProfileListings() {
  const user = useSelector(state => state.session.user);
  const spots = useSelector(state => state.spot);
  const spotsArr = Object.values(spots)
  const userSpots = spotsArr.filter(spot => user.id === spot.host.id)
  console.log(userSpots)
  return (
    <div className="profile-listings-page profile-section">
      {userSpots.length ? userSpots.map(spot => {
        return (
          <Link key={spot.id} className='spot-detail-link' to={`/spots/${spot.id}`}>
            <div className='spotDetailBody'>
              <h2>{spot.title}</h2>
              <h3>${spot.price_per_day}/night</h3>
              <img className="listingSpotImage" src={spot.images[0].url} />
            </div>
          </Link>
        )
      }) : <h1 className="noListingsMessage">You currently have no listings. Click on Create New Listing to add a Listing</h1>}
    </div>

  )
}

export default ProfileListings;
