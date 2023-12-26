/* eslint-disable react/prop-types */
import Spinner from './Spinner';
import styles from './CountryList.module.css';
import Message from './Message';
import CountryItem from './CountryItem';
import { useCities } from '../contexts/CitiesContexts';
function CountryList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  // const countries = cities.filter((city, index, arr) => {
  //   return arr.findIndex((el) => el.country === city.country) === index;
  // });

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
