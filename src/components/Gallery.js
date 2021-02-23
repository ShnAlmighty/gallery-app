import React from 'react';
import Header from './Header';
import Pictures from './pictures';
import PictureInfo from './PictureInfo';
import Loading from './Loading';

export default class Gallery extends React.Component {
    state = {
        pictures:[],
        showpic:undefined,
        loading:true
    };
    sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      };
    generateImages = () => {
            fetch(`https://api.unsplash.com/photos?client_id=cQ3X5ZdQwCuCdLxmPV3PPd7jiV44c61GOalNVjNBom0&w=360`)
            .then(response=>response.json())
            .then((data)=>{
                for(var i=0;i<data.length;i++){
                    this.setState(()=>({loading:true}));
                let pic = {
                    likes:data[i].likes,
                    user:data[i].user.name,
                    social:data[i].user.instagram_username,
                    url:data[i].urls.small,
                    selected:undefined
                };
                this.setState((prevState)=>({ pictures:prevState.pictures.concat(pic) }));
                }
                this.setState(()=>({loading:false}));
            })
            .catch((e)=>{
                console.log(e);
            });
    };
    resetPictures = () => {
        this.setState(()=>({ pictures:[],loading:true }));
    };
    changePictures = (value) => {
        this.setState((prevState)=>({pictures:prevState.pictures.concat(value),loading:false}));
    };
    selectedPicture = (pic) => {
        this.setState(()=>({ showpic: pic }));
    };
    handleClearShowPic = () =>{
        this.setState(()=>({ showpic: undefined }));
    };
    componentDidMount(){
        this.generateImages();
    };
    handleLoadingStateFalse(){
        alert('false');
        this.setState(()=>({loading: false}));
        console.log('false...');
    }
    handleLoadingStateTrue(){
        this.setState(()=>({loading: true}));
        console.log('true...');
    }
    render(){
        return(
            <div>
                <Header
                searchQuery={this.searchQuery}
                changePictures={this.changePictures}
                resetPictures={this.resetPictures}
                generateImages={this.generateImages}
                handleLoadingStateTrue={this.handleLoadingStateTrue}
                handleLoadingStateFalse={this.handleLoadingStateFalse}
                />
                {this.state.loading && <Loading loading={this.state.loading}/>}
                <Pictures 
                pictures={this.state.pictures}
                selectedPicture={this.selectedPicture}
                className="picture-container"
                />
                <PictureInfo
                showpic={this.state.showpic}
                handleClearShowPic={this.handleClearShowPic}
                />   
            </div>
        );
    };
    };