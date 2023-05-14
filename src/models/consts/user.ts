import { ICity } from "./user/city"
import { ICounters } from "./user/counters"
import { ICountry } from "./user/country"

export interface IUser {
  id: number
  domain: string
  bdate: string
  city: ICity
  country: ICountry
  status: string
  followers_count: number
  home_town: string
  counters: ICounters
  sex: number
  photo_50: string
  photo_100: string
  online: number
  first_name: string
  last_name: string
  can_access_closed: boolean
  is_closed: boolean
}
