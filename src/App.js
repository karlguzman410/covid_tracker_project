//class based component from the video

import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api'
import styles from './App.module.css'
import headerImg from './images/covid-19-tracker-img.jpg'

class App extends Component {
    state = {
        data: {},
        country: 'global'
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country)
        console.log("Country selected: " + country)
        console.log(fetchedData)
        this.setState({ data: fetchedData, country: country })

    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData })
    }


    render() {
        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={headerImg} alt="covid19" />
                <h1>Covid 19 Tracker - Project</h1>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App