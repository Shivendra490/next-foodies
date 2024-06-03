"use client"
export default function Error({error}) {
    console.log('errrrrrrrrrr',error)
  return (
    <main className="error">
      <h1>An Error Occured</h1>
      <p>Please fill all and valid details to share meal</p>
    </main>
  );
}
