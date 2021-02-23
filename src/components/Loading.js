import React from 'react';

const ShowDetail = (props) => (
    <div className="loader center">
    <h3 className="loadingDiv"> Loading....</h3>
    { props.loading && 
      <i id="loadingIcon" className="fa fa-sync fa-spin" />
    }
    </div>
);

export default ShowDetail;