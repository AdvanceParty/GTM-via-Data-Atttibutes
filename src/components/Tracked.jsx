import React from 'react';

class Tracked extends React.Component {
    constructor (type, value) {
        this.container = <div></div>
        this.container.dataset['data-gtm-' + type] = value;
    };

    render() {
      return (
        <div data-gtm-trackme>
          <Component className='wrapped' />>
        </div>
      );
    }
  };
}
export default withTrackingData;
