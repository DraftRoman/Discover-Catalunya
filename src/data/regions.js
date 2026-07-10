import catalunya from "./catalunya"
import madrid from "./madrid"
import andalucia from "./andalucia"
import valencia from "./valencia"
import basqueCountry from "./basque-country"
import galicia from "./galicia"
import castileAndLeon from "./castile-and-leon"
import balearicIslands from "./balearic-islands"



const regionList = [
  { id: "andalusia", name: "Andalucía", status: "available" },
  { id: "aragon", name: "Aragón", status: "soon" },
  { id: "asturias", name: "Asturias", status: "soon" },
  { id: "balearic-islands", name: "Illes Balears", status: "available" },
  { id: "basque-country", name: "Euskadi", status: "available" },
  { id: "canary-islands", name: "Islas Canarias", status: "soon" },
  { id: "cantabria", name: "Cantabria", status: "soon" },
  { id: "castile-and-leon", name: "Castilla y León", status: "available" },
  { id: "castile-la-mancha", name: "Castilla-La Mancha", status: "soon" },
  { id: "catalonia", name: "Catalunya", status: "available" },
  { id: "extremadura", name: "Extremadura", status: "soon" },
  { id: "galicia", name: "Galicia", status: "available" },
  { id: "la-rioja", name: "La Rioja", status: "soon" },
  { id: "madrid", name: "Madrid", status: "available" },
  { id: "murcia", name: "Murcia", status: "soon" },
  { id: "navarre", name: "Navarra", status: "soon" },
  { id: "valencia", name: "Comunitat Valenciana", status: "available" },
]



const regionExtras = {
  andalusia: {
    airport: { name: "Málaga-Costa del Sol Airport", code: "AGP" },
    entries: andalucia,
  },
  catalonia: {
    airport: { name: "Barcelona-El Prat Airport", code: "BCN" },
    entries: catalunya,
  },
  madrid: {
    airport: { name: "Adolfo Suárez Madrid-Barajas Airport", code: "MAD" },
    entries: madrid,
  },
  valencia: {
    airport: { name: "Valencia Airport", code: "VLC" },
    entries: valencia,
  },
  "basque-country": {
    airport: { name: "Bilbao Airport", code: "BIO" },
    entries: basqueCountry,
  },
  galicia: {
    airport: { name: "Santiago-Rosalía de Castro Airport", code: "SCQ" },
    entries: galicia,
  },
  "castile-and-leon": {
    airport: { name: "Adolfo Suárez Madrid-Barajas Airport", code: "MAD" },
    entries: castileAndLeon,
  },
  "balearic-islands": {
    airport: { name: "Palma de Mallorca Airport", code: "PMI" },
    entries: balearicIslands,
  },
}

const regionsById = Object.fromEntries(
  regionList.map((region) => [region.id, { ...region, ...regionExtras[region.id] }])
)

export function getRegion(id) {
  return regionsById[id]
}

export function getAllRegions() {
  return regionList.map((region) => regionsById[region.id])
}

export default regionsById
