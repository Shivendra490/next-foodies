"use server";

import { saveMeal } from "./meals";

//Its recommended make server action file separately, so that it can be use in client components as well
export async function shareMeal(formData){


    const meal={
      title:formData.get('title'),
      summary:formData.get('summary'),
      instructions:formData.get('instructions'),
      creator:formData.get('name'),
      creator_email:formData.get('email'),
      image:formData.get('image')
      
      

    }

    console.log('formData',meal)
    await saveMeal(meal)
  }