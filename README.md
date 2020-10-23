## Reactx-Select

The Select control for React.

Features include:

Flexible approach to data, with customisable functions
Extensible styling API

### Installation and usage

The easiest way to use reactx2-select is to install it from npm and build it into your app with Webpack.

`npm i reactx2-select`

Then use it in your app:

[Select Component Demo](https://karan95.github.io/)

``` 
import React from 'react';
import Select from 'reactx2-select';
 
class App extends React.Component {
  // select options data format
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'orange', label: 'Orange' }
  ];

  // optional callback function to be passed in
  function optionChanged(option) {
    console.log(option);
  }

  render() { 
    return (
      <Select defaultValue={options[0]} options={options} optionChanged={optionChanged}/>
    );
  }
}
```

## Props
`defaultValue`: set the initial value of the control
`options`: options the user can select from

## Controllable Props
`optionChanged`: callback when option is changed
