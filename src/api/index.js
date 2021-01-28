import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

//function to fetch data
//asynchronous function
export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)
        //return only the data we are needing
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {

    }
}

//daily data for US
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json')
        // const modifiedData = data.map(dailyData => ({
        //     confirmed: dailyData.confirmed.total,
        //     deaths: dailyData.deaths.total,
        //     date: dailyData.reportDate
        // }))
        const modifiedData = data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
        console.log(modifiedData)
        return modifiedData
    } catch (error) {
        console.log("Error in fetching data")
    }
}