const Comparison = ({ cars }) => {
      if (!cars || cars.length === 0) return null;

      return (
            <div id="compare" className="section container">
                  <h2>Car Comparison</h2>

                  <div className="comparison-table">
                        <table>
                              <thead>
                                    <tr>
                                          <th>Feature</th>
                                          {cars.map((car) => (
                                                <th key={car.id}>{car.name}</th>
                                          ))}
                                    </tr>
                              </thead>

                              <tbody>
                                    <tr>
                                          <td>Price</td>
                                          {cars.map((car) => (
                                                <td key={car.id}>₹ {car.priceINR.toLocaleString()}</td>
                                          ))}
                                    </tr>

                                    <tr>
                                          <td>Fuel</td>
                                          {cars.map((car) => (
                                                <td key={car.id}>{car.fuel}</td>
                                          ))}
                                    </tr>

                                    <tr>
                                          <td>Seats</td>
                                          {cars.map((car) => (
                                                <td key={car.id}>{car.seats}</td>
                                          ))}
                                    </tr>

                                    <tr>
                                          <td>Transmission</td>
                                          {cars.map((car) => (
                                                <td key={car.id}>{car.transmission}</td>
                                          ))}
                                    </tr>

                                    <tr>
                                          <td>Mileage</td>
                                          {cars.map((car) => (
                                                <td key={car.id}>{car.mileage}</td>
                                          ))}
                                    </tr>

                                    <tr>
                                          <td>Features</td>
                                          {cars.map((car) => (
                                                <td key={car.id}>{car.features.join(", ")}</td>
                                          ))}
                                    </tr>
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Comparison;