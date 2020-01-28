import React from 'react';

function withTrackingData(Component) {
  return class WithTrackingData extends React.Component {
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
