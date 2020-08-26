import React from 'react'

export default function Button({ modifier, text }) {
  const STYLES = {
    base: {
      backgroundColor: 'lightgray',
      border: 'unset',
      color: 'dimgray',
      fontSize: '1.125rem',
      padding: '1rem 3rem',
      fontWeight: '700',
    },
    primary: {
      backgroundColor: 'green',
      border: 'unset',
      color: 'white',
      fontSize: '1.125rem',
      padding: '1rem 3rem',
      fontWeight: '700',
    },
    secondary: {
      backgroundColor: 'transparent',
      border: '1px solid green',
      color: 'green',
      fontSize: '1.125rem',
      padding: '1rem 3rem',
      fontWeight: '700',
    },
  }

  let style = {}

  const modifyStyle = () => {
    if (modifier === 'primary') {
      style = STYLES.primary
    } else if (modifier === 'secondary') {
      console.log('secondary')
      style = STYLES.secondary
    } else if (modifier === '') {
      style = STYLES.base
    } else {
      return false
    }
  }

  modifyStyle()

  return <button style={style}>{text}</button>
}
