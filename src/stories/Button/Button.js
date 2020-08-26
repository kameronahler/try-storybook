import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

export const BUTTON_TYPES = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
}

/**
 * Modified boilerplate button
 */
export const Button = ({ ariaLabel, type, text, ...props }) => {
  let classes = ['button']

  const addModifierClasses = () => {
    switch (type) {
      case BUTTON_TYPES.primary:
        classes.push(`button--${BUTTON_TYPES.primary}`)
        break
      case BUTTON_TYPES.secondary:
        classes.push(`button--${BUTTON_TYPES.secondary}`)
        break
    }
  }

  addModifierClasses()

  return (
    <button
      aria-label={ariaLabel}
      type='button'
      className={classes.join(' ')}
      {...props}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  /**
   * Matches against options in const `BUTTON_TYPES` and adds appropriate modifier classes
   */
  type: PropTypes.string,
}

Button.defaultProps = {
  ariaLabel: undefined,
  onClick: undefined,
  text: null,
  type: undefined,
}
