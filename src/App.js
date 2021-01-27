//class based component from the video

import React, { Component } from 'react'
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api'
import styles from './App.module.css'

class App extends Component {

    async componentDidMount() {
        const data = await fetchData()
        console.log(data)
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App