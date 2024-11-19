import React from 'react'
import TestGroup from './components/TestGroup'
import { Button } from 'primereact/button';
import Card from './components/Card';

import "primereact/resources/themes/lara-light-cyan/theme.css";


const myApp = () => {

  return (
    <>
      <Card />
      <Button label="Click" />
      <TestGroup />
    </>
  )
}

export default myApp
