"use client"
export default function Error({error}) {
    console.log('errrrrrrrrrr',error)
  return (
    <main className="error">
      <h1>An Error Occured</h1>
      <p>Failed to fetch Meal data, Please try again later</p>
    </main>
  );
}
