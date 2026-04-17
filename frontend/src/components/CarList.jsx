const CarList = ({ cars }) => {
      if (!cars || cars.length === 0) {
            return <p style={{ textAlign: "center" }}>No cars available</p>;
      }

      return (
            <div id="cars" className="section container">
                  <h2>Our Models</h2>

                  <div className="grid">
                        {cars.map((car) => (
                              <div key={car.id} className="card">
                                    <img src={car.image} alt={car.name} />

                                    <div className="card-content">
                                          <h4 className="car-id">ID: {car.id}</h4>
                                          <h3>{car.name}</h3>

                                          <p><b>Brand:</b> {car.brand}</p>
                                          <p><b>Type:</b> {car.type}</p>
                                          <p><b>Price:</b> ₹ {car.priceINR.toLocaleString()}</p>
                                          <p><b>Seats:</b> {car.seats}</p>
                                          <p><b>Fuel:</b> {car.fuel}</p>
                                          <p><b>Mileage:</b> {car.mileage}</p>
                                          <p><b>Transmission:</b> {car.transmission}</p>

                                          <p>
                                                <b>Features:</b> {car.features.join(", ")}
                                          </p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default CarList;