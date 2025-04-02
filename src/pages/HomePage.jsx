import React from "react";
import CarouselComponent from "../components/CarouselComponent";

function HomePage() {
  return (
    <div>
      <CarouselComponent />
      <div className="container mt-4">
        <h2>Featured Movies</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICA4Ny4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00305698-jquqhbdnvv-portrait.jpg" className="card-img-top" alt="Movie 1" />
              <div className="card-body">
                <h5 className="card-title">L2: Empuraan</h5>
                <p className="card-text">Action/Crime/Thriller</p>
                <a href="/movies" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS42LzEwICAxLjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00429365-eygyrmwnnb-portrait.jpg" className="card-img-top" alt="Movie 2" />
              <div className="card-body">
                <h5 className="card-title">Middle Class Family</h5>
                <p className="card-text">Drama/Family/Romantic</p>
                <a href="/movies" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS45LzEwICAyMzkgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00395441-fmmeqjlezd-portrait.jpg" className="card-img-top" alt="Movie 3" />
              <div className="card-body">
                <h5 className="card-title">Bad</h5>
                <p className="card-text">Action/Suspense/Thriller</p>
                <a href="/movies" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAxNS44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00423507-bavrucgtpa-portrait.jpg" className="card-img-top" alt="Movie 4" />
              <div className="card-body">
                <h5 className="card-title">Veera Dheera Sooran -Part 2</h5>
                <p className="card-text">Action/Thriller</p>
                <a href="/movies" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-4">Upcoming Events</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNyBNYXk%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00437140-nxqwpvqzzn-portrait.jpg" className="card-img-top" alt="Event 1" />
              <div className="card-body">
                <h5 className="card-title">GUNS N ROSES</h5>
                <p className="card-text">Description of Event 1.</p>
                <a href="/events" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA2IEFwcg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00367500-ufhdljnkjg-portrait.jpg" className="card-img-top" alt="Event 2" />
              <div className="card-body">
                <h5 className="card-title">SOLVE THE RUBIKS CUBE</h5>
                <p className="card-text">Description of Event 2.</p>
                <a href="/events" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMiBBcHI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00438784-ugydttydwk-portrait.jpg" className="card-img-top" alt="Event 3" />
              <div className="card-body">
                <h5 className="card-title">Cult Unbound Championship</h5>
                <p className="card-text">Description of Event 3.</p>
                <a href="/events" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mt-4">Current Promotions</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00432060-fweejgudmm-portrait.jpg" className="card-img-top" alt="Promotion 1" />
              <div className="card-body">
                <h5 className="card-title">Promotion Title 1</h5>
                <p className="card-text">Details about Promotion 1.</p>
                <a href="/promotions" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00432058-dtnxtfedph-portrait.jpg" className="card-img-top" alt="Promotion 2" />
              <div className="card-body">
                <h5 className="card-title">Promotion Title 2</h5>
                <p className="card-text">Details about Promotion 2.</p>
                <a href="/promotions" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00422388-fqsrygjesd-portrait.jpg" className="card-img-top" alt="Promotion 3" />
              <div className="card-body">
                <h5 className="card-title">Promotion Title 3</h5>
                <p className="card-text">Details about Promotion 3.</p>
                <a href="/promotions" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;