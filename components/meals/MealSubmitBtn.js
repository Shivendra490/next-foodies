"use client";
import { useFormStatus } from "react-dom";

export default function MealSubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "submitting..." : "Share Meal"}
    </button>
  );
}
