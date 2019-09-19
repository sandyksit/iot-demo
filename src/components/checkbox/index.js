import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import classNames from 'classnames'

class Checkbox extends Component {
  renderCheckbox() {
    const {
      name,
      type,
      value,
      disabled,
      checked,
      ariaLabel,
      handleCheckBoxChange,
      colorCode  
    } = this.props

    const classes = classNames({
      [`ss-checkbox ss-chk-background-color_${colorCode}`]: Boolean(!type),
      [`ss-input-${type}`]: Boolean(type)
    })

    return (
      <input
        type="checkbox"
        id={name}
        aria-label={ariaLabel}
        name={name}
        value={value}
        className={classes}
        onClick={handleCheckBoxChange}
        disabled={disabled}
        defaultChecked={checked}
      />
    )
  }
  render() {
    const { label, name, type } = this.props

    return (
      <Fragment>
        {!type && (
          <label htmlFor={name} className="ss-label--checkbox">
            {this.renderCheckbox()}
            <span>{label}</span>
          </label>
        )}
        {type && (
            <label htmlFor={name}>
              {this.renderCheckbox()}
              <span />
            </label>
          )}
      </Fragment>
    )
  }

  static propTypes = {
    label: PropTypes.string,
    handleCheckBoxChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    checked: PropTypes.bool,
    ariaLabel: PropTypes.string,
    backgroundColor: PropTypes.string
  }
}

export default Checkbox
