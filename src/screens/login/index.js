import React from 'react'
import css from './style.css'

import { Button } from 'react-toolbox/lib/button';

export default function Login () {
  return (
    <div className={css.login}>
      Ola <br />
      <Button label="click me well" />
    </div>
  )
}
