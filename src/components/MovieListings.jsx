import React from "react";

function MovieListings() {
  const movies = [
    { 
      name: "Sikandar", 
      genre: "Drama", 
      releaseDate: "30-03-2025", 
      ratings: "6.3", 
      ticketPrice: "₹250", 
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4zLzEwICAxNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00394804-ujrgqmlwjv-portrait.jpg" 
    },
    { 
      name: "Mad Square", 
      genre: "Comedy", 
      releaseDate: "28-03-2025", 
      ratings: "8.4", 
      ticketPrice: "₹180", 
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAxNS42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00435629-werrbjluca-portrait.jpg" 
    },
    { 
      name: "Chhaava", 
      genre: "Action", 
      releaseDate: "14-02-2025", 
      ratings: "9.2", 
      ticketPrice: "₹220", 
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICAzMzRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-ccqetrbtcj-portrait.jpg" 
    },
    { 
      name: "Manada Kadalu", 
      genre: "Romantic", 
      releaseDate: "28-03-2025", 
      ratings: "8.3", 
      ticketPrice: "₹200", 
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICA3MzUgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00427614-dvsaawxzpr-portrait.jpg" 
    },
    { 
      name: "Snow White", 
      genre: "Adventure", 
      releaseDate: "21-03-2025", 
      ratings: "7.0", 
      ticketPrice: "₹230", 
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgMS44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408154-vfbvpbydew-portrait.jpg" 
    }
  ];

  return (
    <div className="container mt-4">
      <h2>Featured Movies</h2>
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img src={movie.imageUrl} className="card-img-top" alt={movie.name} />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text">Genre: {movie.genre}</p>
                <p className="card-text">Release Date: {movie.releaseDate}</p>
                <p className="card-text">Ratings: {movie.ratings}</p>
                <p className="card-text">Ticket Price: {movie.ticketPrice}</p>
                <a href="/movies" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieListings;
