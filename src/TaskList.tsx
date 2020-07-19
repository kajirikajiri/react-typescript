import React, { ReactElement, createElement } from 'react';

interface Tasks {
  name: String, description: String
}

export default function TaskList (): ReactElement {
  const result: ReactElement = list(tasks)
  return (
    result
  )
}

function list (tasks: Tasks[]): ReactElement {
  const result: ReactElement[] = tasks.map(element => {
    return (
      <div>{element.name}</div>
    )
  });
  return createElement(
    'div',
    '',
    result
  )
}

const tasks: Tasks[] = [
  {
    name: 'ほげ',
    description: ''
  },
  {
    name: 'ほげ',
    description: ''
  },
  {
    name: 'ほげ',
    description: ''
  },
  {
    name: 'ほげ',
    description: ''
  },
  {
    name: 'ほげ',
    description: ''
  },
]