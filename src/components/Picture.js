import React from 'react';

const Picture = (props) => (
        <div className="imgContainer" 
                    onClick={()=>props.selectedPicture(props.picture)}
                    >
                <img 
                key={props.picture.url}
                src={props.picture.url}
                className="images"
                >
                </img>
                </div>
);
export default Picture;