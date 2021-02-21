import React from 'react';
import Modal from 'react-modal';

const PictureInfo = (props) => (
    <Modal
        isOpen={!!props.showpic}
        onRequestClose={props.handleClearShowPic}
        contentLabel="Picture Information"
        className="Modal"
    >
    <h1 className="picHeading">Information</h1>
    {
        props.showpic && <div className="ModalInfo"> <img src={props.showpic.url} 
        className="modalImage" />
        </div>
    }
    {
        props.showpic && 
        <div className="picInfo">
         <p>Likes: <br/> {props.showpic.likes}</p>
         <p>Username: <br/>{props.showpic.user}</p>
         <p>Instagram Account: <br/>{props.showpic.social}</p>
         <button onClick={props.handleClearShowPic}>Okay</button>
        </div>
    }
    </Modal>
);

export default PictureInfo;