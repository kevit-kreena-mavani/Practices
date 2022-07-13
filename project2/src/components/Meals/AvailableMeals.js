import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [httpError , setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://addtasks-b08a2-default-rtdb.firebaseio.com/meals.json"
      );

      if(!response.ok){
        throw new Error("Something went Wrong!")
      }

      const mealsData = await response.json();

      const loadedMeals = [];

      for (const key in mealsData) {
        loadedMeals.push({
          id: key,
          name: mealsData[key].name,
          description: mealsData[key].description,
          price: mealsData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message)

    });
  }, []);
  if (IsLoading) {
    return (
      <section className={styles.loadingText}>
        <p>Loading...</p>
      </section>
    );
  }
  if(httpError){
    return<section className={styles.errorText}>
      <p>{httpError}</p>
    </section>
  }
  const mapList = meals.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mapList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
