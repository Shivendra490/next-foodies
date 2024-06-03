"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidField(field) {
  return !field || field.trim() === "";
}

//Its recommended make server action file separately, so that it can be use in client components as well
export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };
  console.log(meal.image)

  if (
    isInvalidField(meal.title) ||
    isInvalidField(meal.summary) ||
    isInvalidField(meal.instructions) ||
    isInvalidField(meal.creator) ||
    isInvalidField(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image || 
    meal.image.size===0 
  ){
    throw new Error("Please fill valid details")
  }
    console.log("formData", meal);
  await saveMeal(meal);
  redirect("/meals");
}
