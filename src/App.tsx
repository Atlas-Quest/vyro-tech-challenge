import React, { useEffect, useState } from "react";
import vyroSquareLogo from "./vyroSquareLogo.svg";
import styles from "./App.module.scss";
import VehicleComponent from "./components/Vehicle";
import {Vehicle} from './vehicle.types';

// TODO
// Load the mockedVehicles from the GraphQL API
// See ./mockedVehicles.ts for API details
import { getStockedVehicles } from "./vehicles.service";

function App() {
  const [stocked_vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        setVehicles(await getStockedVehicles());
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    })();
  }, []);

  return (
    <div className={styles.app}>
      <img src={vyroSquareLogo} className={styles.logo} alt="Vyro logo" />
      <h1>Welcome to Vyro</h1>
      <div className={styles.grid}>
        { loading ? 'loading' : stocked_vehicles.map((vehicle, index) => (
          <VehicleComponent key={index} {...vehicle} />
        ))}
      </div>
    </div>
  );
}

export default App;
