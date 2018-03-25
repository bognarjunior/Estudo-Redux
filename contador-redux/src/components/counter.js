import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, decrement, stepChanged } from './../actions/counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input  onChange={props.stepChanged} value={props.counter.step} type="number"/>
        <button onClick={props.increment}> Incrementar </button>
        <button onClick={props.decrement}> Decrementar </button>
    </div>
)

const mapStateToProps = state => ({counter: state.counter})
const mapDispatchToProps = dispatch => bindActionCreators({ increment, decrement, stepChanged} , dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
