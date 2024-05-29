import MealItem from "./MealItem"
import styles from "./MealsGrid.module.css"

export default function MealsGrid({meals}){
    console.log('mealsgridd',meals)
    return ( <>
    <h2>GRIDMEALS</h2>
    <ul className={styles.meals}>
        {meals?.map((meal)=>{
           return <li key={meal.id}>
                <MealItem {...meal}/>
            </li>
        })}
    </ul>
    </>
    )
    
}