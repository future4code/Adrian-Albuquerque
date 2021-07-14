import { app } from "./app";
import { deleteCountryById } from "./endpoints/deleteCountryById";
import { getAllCountries } from "./endpoints/getAllCountries";
import { getCountryById } from "./endpoints/getCountryById";
import { getFilteredCountry } from "./endpoints/getFilteredCountry";
import { postChangeCountry } from "./endpoints/postChangeCountry";

app.get("/countries", getAllCountries);
app.get("/countries/search", getFilteredCountry);
app.get("/countries/:id", getCountryById);
app.delete("countries/:id", deleteCountryById);
app.post("/countries/:id", postChangeCountry)
