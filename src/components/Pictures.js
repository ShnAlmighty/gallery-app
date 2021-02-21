import React from 'react';

const Pictures = (props)=>(
    <div className="pictures">
    { props.pictures.length>0 && props.pictures
     .map((pic) => <div className="imgContainer" 
                    onClick={()=>props.selectedPicture(pic)}
                    >
                <img 
                key={pic.url}
                src={pic.url}
                className="images"
                >
                </img>
                </div>
                )}
    </div>
);

export default Pictures;