import { useAppDispatch, useAppSelector } from '@redux/hooks'
import React from 'react'
import { Button } from '@mantine/core'
import { withTranslation } from 'react-i18next'
import { decrement, increment } from './slice'

export function Application() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      Application
      <div>Current count: {count}</div>
      <Button onClick={() => dispatch(increment())}>Plus 1</Button>
      <Button onClick={() => dispatch(decrement())}>Minor 1</Button>
    </div>
  )
}

export default withTranslation()(Application)
