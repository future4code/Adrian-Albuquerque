import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"
import getCharacterById from "./endpoints/getCharacterById"

app.get("/character", getAllCharacters)
app.put("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)
app.get("/character/:id", getCharacterById)

// app.get("/movie/:id/characters")

// app.get("/movies")
// app.delete("/movies")