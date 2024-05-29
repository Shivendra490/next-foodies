import sql from "better-sqlite3"
const db=sql('meals.db')

export async function getMeals(){
    await new Promise((resolve)=>setTimeout(resolve,4000));
    // throw new Error("Fetching meals failed")
    return db.prepare("SELECT * from meals").all()
}