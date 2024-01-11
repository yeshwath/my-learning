import React ,{useState} from "react";

function MovieApp() {
    const [search,setSearch] = useState("")
    const [data,setData] = useState([])
    const submitHandler =e=>{
        e.preventDefault()
        console.log(search)
        e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(
      response => response.json()
      
    ).then(data => {
        setData(data.Search)
        console.log(data.Search)

    //   setData(value.Search);
    })
    }


    const download = url => {
        fetch(url).then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png");
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
 
  return (
    <div >
        <center>
      <h1> Movie App </h1>
      <form onSubmit={submitHandler}>
        <input  type ="text" onChange={(e)=>setSearch(e.target.value)}/><br/>
        <br/>
        
        <input type = "submit" value="search"/> 
      </form>
      <div className="row">
      {data.length > 0 ? ( // Add a conditional check before rendering the movie data
          data.map((movie) => (
            <div className="col-md-4">
            <div className="card" key={movie.imdbID} style={{width:"250px",margin:"20px"}}>
              <img
                className="card-img-top"
                src={movie.Poster}
                alt={movie.Title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <a className="btn btn-primary" onClick={()=>download(movie.Poster)}>Download Poster</a>
              </div>
            </div>
            </div>

          ))
        ) : (
          <p>No movies found.</p>
        )}
        </div>

      </center>

      
    </div>
  );
}

export default MovieApp;
