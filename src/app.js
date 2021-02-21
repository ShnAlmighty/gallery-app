import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Pictures from './components/pictures';
import PictureInfo from './components/PictureInfo';
import Loading from './components/Loading';
import './styles/style.scss';

class Gallery extends React.Component {
state = {
    pictures:[],
    showpic:undefined,
    loading:undefined
};
generateImages = () => {
        fetch(`https://api.unsplash.com/photos?client_id=cQ3X5ZdQwCuCdLxmPV3PPd7jiV44c61GOalNVjNBom0`)
        .then(response=>response.json())
        .then((data)=>{
            for(var i=0;i<data.length;i++){
            let pic = {
                likes:data[i].likes,
                user:data[i].user.name,
                social:data[i].user.instagram_username,
                url:data[i].links.download,
                selected:undefined
            };
            this.setState((prevState)=>({ pictures:prevState.pictures.concat(pic) }));
            }
        })
        .catch((e)=>{
            console.log(e);
        });
};
resetPictures = () => {
    this.setState(()=>({ pictures:[] }));
};
changePictures = (value) => {
    this.setState((prevState)=>({pictures:prevState.pictures.concat(value)}));
};
selectedPicture = (pic) => {
    this.setState(()=>({ showpic: pic }));
};
handleClearShowPic = () =>{
    this.setState(()=>({ showpic: undefined }));
}
componentDidMount(){
    this.generateImages();
};
componentWillUnmount(){
    this.setState(()=>({ loading: true }));
}
render(){
    return(
        <div>
            <Header
            searchQuery={this.searchQuery}
            changePictures={this.changePictures}
            resetPictures={this.resetPictures}
            generateImages={this.generateImages}
            />
            {this.state.loading && <h1>Loading</h1>}
            <Pictures 
            pictures={this.state.pictures}
            selectedPicture={this.selectedPicture}
            />
            <PictureInfo
            showpic={this.state.showpic}
            handleClearShowPic={this.handleClearShowPic}
            />   
        </div>
    );
};
};

ReactDOM.render(<Gallery/>, document.getElementById('app'));