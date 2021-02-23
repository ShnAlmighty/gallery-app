import React from 'react';

class Header extends React.Component{
constructor(props){
    super(props);
};
searchQuery = (event) => {
    this.props.resetPictures();
    const query = event.target.value;
    if(query.length>0){
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=cQ3X5ZdQwCuCdLxmPV3PPd7jiV44c61GOalNVjNBom0`)
    .then(response=>response.json())
    .then((data)=>{
        for(var i=0;i<data.results.length;i++){
            let dataImg = {
                likes:data.results[i].likes,
                user:data.results[i].user.name,
                social:data.results[i].user.instagram_username,
                url:data.results[i].urls.small          
            };
            this.props.changePictures(dataImg);
        };
    })
    .catch((e)=>{
        alert('Server Overload. Please wait for some time. We are sorry for the inconvenience.');
        console.log(e);
    });
}else{
    this.props.generateImages();
}
};
render(){
    return(
        <div className="Header">
        <h1>Gallery App</h1>
        <input 
        type="text"
        placeholder="search images"
        className="searchBar"
        name="search"
        onChange={this.searchQuery}
        />
        </div>
    );
};
};

export default Header;