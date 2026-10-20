export type AvailabilityStatus = "available" | "soon"

export interface Airport {
  name: string
  code?: string
}

export interface EntryImage {
  src: string
  alt: string
}

export interface Entry {
  id: number
  title: string
  country: string
  img: EntryImage
  googleMapsLink: string
  best_time_to_visit: string
  text: string
  opening_hours: string
  visit_duration: string
  distance: string
  ticketInfo: string
  ticketUrl?: string
  airport?: Airport
}

export interface Region {
  id: string
  name: string
  status: AvailabilityStatus
  airport?: Airport
  entries?: Entry[]
}

export interface SvgMapLocation {
  id: string
  name: string
  path: string
}

export interface SvgMap {
  viewBox: string
  label: string
  locations: SvgMapLocation[]
}

export interface Country {
  id: string
  name: string
  status: AvailabilityStatus
  mapData: SvgMap
  getRegion: (id: string | undefined) => Region | undefined
  getAllRegions: () => Region[]
}
