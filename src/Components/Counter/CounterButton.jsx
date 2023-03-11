import { PropTypes } from 'prop-types'

export default function CounterButton({ by, inc, dec }) {
    return (
        <div>
            <button className="Btn cBtn" onClick={() => inc(by)}>+{by}</button>
            <button className="Btn cBtn" onClick={() => dec(by)}>-{by}</button>
        </div>
    )
}

CounterButton.propTypes = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 1
}