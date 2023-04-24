import React from "react"

console.log('DemoOutput running');

const DemoOutput = (props) => {
  return <p>{props.show ? 'This is new!': ''}</p>
};

//React.memo only works for functional components
// .memo tells that only if props changed, only then
// the component should be re-executed and re-evaluated

//If parent component changed but this component's props
// did not, execution will be skipped for this one.

//We're switching the cost of re-evaluating the component
//by the cost of re-evaluating props.

//This skip carries over to child components.
export default React.memo(DemoOutput);
