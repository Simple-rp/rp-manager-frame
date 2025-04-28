import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const sheetId = '17CSVjdgOhVpA5CO9xFhbJK9KEPXBg020rXxCkeK6bgg' // cabinet sheet
export const sheetApiKey = 'AIzaSyAmCHhq2lAkcY2AvL5JZlgU_8KROl9gdT8' // cabinet api sheet
export const sheetApiParams = `?key=${sheetApiKey}`

const url = `https://sheets.googleapis.com/v4/spreadsheets/`

export const sheetBaseQuery = fetchBaseQuery({ baseUrl: `${url}${sheetId}/values/` })
export const dynamicSheetBaseQuery = (sheetIdParam: string) =>
  fetchBaseQuery({ baseUrl: `${url}${sheetIdParam}/values/` })
