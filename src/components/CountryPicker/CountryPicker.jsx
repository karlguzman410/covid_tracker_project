import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl, FormLabel } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

function CountryPicker({ handleCountryChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <div className={styles.container}>
      <h5>Select a country</h5>
      <FormControl className={styles.formControl}>
        <NativeSelect
          default=""
          onChange={(event) => handleCountryChange(event.target.value)}
        >
          <option value="global">Global</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountryPicker;
