import { Fragment } from "react";
import AvaialbleMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaialbleMeals />
    </Fragment>
  );
};

export default Meals;
