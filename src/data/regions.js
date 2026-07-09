import catalunya from "./catalunya"
import madrid from "./madrid"
import andalucia from "./andalucia"



const regionList = [
  { id: "andalusia", name: "Andalucía", status: "available" },
  { id: "aragon", name: "Aragón", status: "soon" },
  { id: "asturias", name: "Asturias", status: "soon" },
  { id: "balearic-islands", name: "Illes Balears", status: "soon" },
  { id: "basque-country", name: "Euskadi", status: "soon" },
  { id: "canary-islands", name: "Islas Canarias", status: "soon" },
  { id: "cantabria", name: "Cantabria", status: "soon" },
  { id: "castile-and-leon", name: "Castilla y León", status: "soon" },
  { id: "castile-la-mancha", name: "Castilla-La Mancha", status: "soon" },
  { id: "catalonia", name: "Catalunya", status: "available" },
  { id: "extremadura", name: "Extremadura", status: "soon" },
  { id: "galicia", name: "Galicia", status: "soon" },
  { id: "la-rioja", name: "La Rioja", status: "soon" },
  { id: "madrid", name: "Madrid", status: "available" },
  { id: "murcia", name: "Murcia", status: "soon" },
  { id: "navarre", name: "Navarra", status: "soon" },
  { id: "valencia", name: "Comunitat Valenciana", status: "soon" },
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
