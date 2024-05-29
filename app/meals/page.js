import { Suspense } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import MealsLoader from "./loading-out";

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}


export default function MealsPage() {
  

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favourit Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<MealsLoader/>}>
            <Meals/>
        </Suspense>
      </main>
    </>
  );
}
