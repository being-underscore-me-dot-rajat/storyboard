import React,{useState} from 'react'
import img_data from '../assets/Data/data'
import '../styles/Gallery.css';
import Navbar from './Nav';
export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="min-vh-100 w-100">
        <Navbar/>
    <div className="container py-5">
      <h1 className="gallery-heading text-center mb-4 text-white">📸 Gallery</h1>
      <div className="row">
        {img_data.map((img) => (
          <div className="col-md-4 mb-4" key={img.id}>
            <div
              className="card bg-dark text-white"
              onClick={() => setSelectedImage(img.src)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={img.src}
                className="card-img-top"
                alt={img.title}
                style={{ height: '300px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{img.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              ❌
            </button>
            <img src={selectedImage} alt="Full View" className="img-fluid" />
          </div>
        </div>
      )}
    </div>
    </div>
);
}
