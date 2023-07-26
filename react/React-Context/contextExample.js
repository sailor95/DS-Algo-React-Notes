// 

// Counter -> CounterCard -> CounterDisplay & CounterButton

//


import React from 'react'

const ctx = React.createContext()

export const { Provider, Consumer } = ctx

export const withCounter = Component => props => <Consumer>{value => <Component {...props} counter={value} />}</Consumer>

export default ctx

/////

import React from 'react'
import { Provider } from './context'

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: {
                value: 0,
                inc: this.inc,
                dec: this.dec
            }
        }
    }

    inc = () => {
        this.setState(({ counter }) => ({
            counter: {
                ...counter,
                value: counter.value + 1
            }
        }))
    }

    dec = () => {
        this.setState(({ counter }) => ({
            counter: {
                ...counter,
                value: counter.value - 1
            }
        }))
    }

    render() {
        return (
            <Provider value={this.state.counter}>
                <CounterCard />
            </Provider>
        )
    }

}

export default Counter

/////


import React from 'react'
import { withCounter } from './context'

const IncBtn = ({ counter }) => <button type='button' className='btn btn-primary btn-block' onClick={counter.inc}>+</button>
const CounterIncBtn = withCounter(IncBtn)

export default CounterIncBtn

/////

import React from 'react'
import { withCounter } from './context'

const Display = ({ counter }) => <h5 className="card-title text-center">{counter.value}</h5>
const CounterDisplay = withCounter(Display)

export default CounterDisplay

/////

import React from 'react'
import CounterDisplay from './CounterDisplay'
import CounterIncBtn from './CounterIncBtn'
import CounterDecBtn from './CounterDecBtn'

const CounterCard = () => (
    <div className='Counter card m-3'>
        <div className='card-body'>
            <CounterDisplay />
            <div className='row'>
                <div className='col'><CounterDecBtn /></div>
                <div className='col'><CounterIncBtn /></div>
            </div>
        </div>
    </div>
)

export default CounterCard