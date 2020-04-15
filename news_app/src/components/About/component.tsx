import * as React from 'react';

import './style.css';

interface Iprops {
  opts?:string
}

interface IState{
  opts?:string
}

class About extends React.Component<Iprops, IState>{

public render(){
  return (
    <div>
      <div>
          <h2>About app:</h2>
          Application was developed especially for frontend developers to provide 
          them the most reliable and modern information about popular frameworks.
      </div>

      <div>
          <h2>Version:</h2>
          1.0.3
      </div>

      <div>
          <h2>App Creator:</h2>
          Dmyto Karpenko
      </div>

      <div className="Footer">
          ® All rights reserved
      </div>
    </div>
  )
}
}

export default About;