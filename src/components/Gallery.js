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
            fetch(`https://api.unsplash.com/photos?client_id=cQ3X5ZdQwCuCdLxmPV3PPd7jiV44c61GOalNVjNBom0`)
            .then(response=>response.json())
            .then((data)=>{
                for(var i=0;i<data.length;i++){
                    this.setState(()=>({loading:true}));
                let pic = {
                    likes:data[i].likes,
                    user:data[i].user.name,
                    social:data[i].user.instagram_username,
                    url:data[i].links.download,
                    selected:undefined
                };
                this.setState((prevState)=>({ pictures:prevState.pictures.concat(pic) }));
                }
                this.setState(()=>({loading:false}));
            })
            .catch((e)=>{
                console.log(e);
            });
            this.setState(()=>({loading:false}));
    };
    resetPictures = () => {
        this.setState(()=>({ pictures:[] }));
        // this.setState(()=>({loading:false}));
    };
    changePictures = (value) => {
        this.setState((prevState)=>({pictures:prevState.pictures.concat(value)}));
    };
    selectedPicture = (pic) => {
        this.setState(()=>({ showpic: pic }));
    };
    handleClearShowPic = () =>{
        this.setState(()=>({ showpic: undefined }));
    };
    componentDidMount(){
        this.generateImages();
        // this.sleep(1000)
        // .then(()=>{
        //     this.generateImages();
        //     this.setState(()=>({ loading: false }));
        // });
    };
    // componentWillUnmount(){
    //     this.sleep(1000)
    //     .then(()=>{
    //         this.setState(()=>({ loading: false }));
    //     });
    //     alert('end');
    // }
    render(){
        return(
            <div>
                <Header
                searchQuery={this.searchQuery}
                changePictures={this.changePictures}
                resetPictures={this.resetPictures}
                generateImages={this.generateImages}
                handleLoading={this.handleLoading}
                />
                {this.state.loading && <Loading loading={this.state.loading}/>}
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