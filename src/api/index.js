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