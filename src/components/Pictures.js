import React from 'react';
import Picture from'./Picture';

const Pictures = (props)=>(
    <div className="pictures">
    { props.pictures.length>0 && props.pictures
     .map((pic) => <Picture
                    picture={pic}
                    selectedPicture={props.selectedPicture}
                    />
            )}
    </div>
);

export default Pictures;