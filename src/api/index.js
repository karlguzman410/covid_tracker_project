import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

//function to fetch data
//asynchronous function
export const fetchData = async (country) => {
    let dynamicUrl = url
    if (country) {
        dynamicUrl = `${url}/countries/${country}`
    }

    if (country === "global") {
        dynamicUrl = url
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(dynamicUrl)
        //return only the data we are needing
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {

    }
}

//daily data for US
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json')
        const modifiedData = data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
        return modifiedData
    } catch (error) {
        console.log("Error in fetching data")
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name)
    } catch (error) {
    }
}