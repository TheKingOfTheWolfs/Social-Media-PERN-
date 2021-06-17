import classes from './Container.module.css'

const requestUrl = 'http://localhost:5000/api/content/1'
function Container() {

     const getUrl = async () => {
         const response = await fetch(requestUrl);
         const data = await response.json();
         console.log(data.videurl);
         const {videurl} = data;   
     }

     getUrl();

    return (
        <div className={classes.container}>
            <video 
            url={data}
            />
        </div>
    )
}

export default Container


// const getVideo = (method, url, body = null) => {
//     return fetch(url) 
// }

// getVideo('GET', requestUrl).then((response) => response.json()).then((json) => console.log(json)).catch(err => console.log(err))
