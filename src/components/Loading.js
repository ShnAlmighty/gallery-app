import React from 'react';

const ShowDetail = (props) => (
    <div className="loader center">
    { props.loading && 
      <i className="fa fa-sync fa-spin" />
    }
    </div>
);

export default ShowDetail;