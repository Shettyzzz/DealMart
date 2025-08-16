// components/MovieBooking.js
import React, { useState, useEffect } from 'react';
import './MovieBooking.css';

const categories = {
  Disney: [
    {
      id: 'd1',
      title: 'Frozen',
      image: '/images/frozen.jpg',
      description: 'A tale of two royal sisters in a magical kingdom with icy powers.',
      duration: '1h 42m',
      rating: 'PG'
    },
    {
      id: 'd2',
      title: 'The Lion King',
      image: '/images/lion.jpg',
      description: 'A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.',
      duration: '1h 58m',
      rating: 'G'
    }
  ],
  Hollywood: [
    {
      id: 'm2',
      title: 'Harry Potter',
      image: '/images/harry potter.jpg',
      description: 'A magical adventure of a young wizard discovering his destiny.',
      duration: '2h 32m',
      rating: 'PG'
    },
    {
      id: 'm3',
      title: 'Titanic',
      image: '/images/titanic.jpg',
      description: 'A romantic drama set during the tragic sinking of the RMS Titanic.',
      duration: '3h 14m',
      rating: 'PG-13'
    }
  ],
  Bollywood: [
    {
      id: 'm1',
      title: '3 Idiots',
      image: '/images/3idiotes.jpg',
      description: 'A story of three engineering students and their journey through the pressures of college life.',
      duration: '2h 50m',
      rating: 'U/A'
    },
    {
      id: 'm5',
      title: 'Sharukh Special',
      image: '/images/sharuk.jpg',
      description: 'A tribute to the iconic movies and roles of Shahrukh Khan.',
      duration: '2h 15m',
      rating: 'U/A'
    }
  ]
};

const seatSets = [
  { label: 'Premium Seats (Front)', rows: ['A', 'B', 'C', 'D'] },
  { label: 'Standard Seats (Middle)', rows: ['E', 'F', 'G'] }
];
const seatCols = 8;
const seatPrice = 200;

export default function MovieBooking() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isPaid, setIsPaid] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Disney');
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('MovieBooking component mounted');
    console.log('Selected category:', selectedCategory);
  }, [selectedCategory]);

  const toggleSeat = (seatId) => {
    try {
      setSelectedSeats((prevSeats) =>
        prevSeats.includes(seatId)
          ? prevSeats.filter((id) => id !== seatId)
          : [...prevSeats, seatId]
      );
    } catch (err) {
      console.error('Error toggling seat:', err);
      setError('Error selecting seat. Please try again.');
    }
  };

  const handlePayment = () => {
    try {
      if (selectedSeats.length === 0) {
        alert("Please select at least one seat.");
        return;
      }

      const bookingData = {
        movieId: selectedMovie.id,
        seats: selectedSeats,
        total: selectedSeats.length * seatPrice,
        time: new Date().toISOString(),
      };

      localStorage.setItem(`movieBooking-${selectedMovie.id}-${Date.now()}`, JSON.stringify(bookingData));
      setIsPaid(true);
      console.log('Booking confirmed:', bookingData);
    } catch (err) {
      console.error('Error processing payment:', err);
      setError('Error processing payment. Please try again.');
    }
  };

  const handleMovieSelect = (movie) => {
    try {
      console.log('Movie selected:', movie);
      setSelectedMovie(movie);
      setError(null);
    } catch (err) {
      console.error('Error selecting movie:', err);
      setError('Error selecting movie. Please try again.');
    }
  };

  const resetBooking = () => {
    setSelectedMovie(null);
    setSelectedSeats([]);
    setIsPaid(false);
  };

  // Error display
  if (error) {
    return (
      <div className="container py-4">
        <div className="alert alert-danger text-center">
          <h4>⚠️ Something went wrong</h4>
          <p>{error}</p>
          <button 
            className="btn btn-primary" 
            onClick={() => setError(null)}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!selectedMovie) {
    return (
      <div className="movie-booking container py-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-dark mb-3">🎬 Movie Booking</h1>
          <p className="lead text-muted">Choose your favorite movie and book the best seats</p>
        </div>

        {/* Category Selector */}
        <div className="category-selector-wrapper mb-5">
          <div className="category-selector">
            <label htmlFor="categorySelect" className="form-label fw-bold mb-3">
              <i className="fas fa-film me-2"></i>
              Select Movie Category
            </label>
            <select
              id="categorySelect"
              className="form-select form-select-lg"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {Object.keys(categories).map((cat) => (
                <option key={cat} value={cat}>{cat} Movies</option>
              ))}
            </select>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="movies-section">
          <h3 className="text-center mb-4 fw-bold text-dark">
            <i className="fas fa-star text-warning me-2"></i>
            {selectedCategory} Movies
          </h3>
          
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {categories[selectedCategory].map((movie) => (
              <div key={movie.id} className="col">
                <div className="card movie-card h-100 text-center border-0 shadow-sm">
                  <div className="movie-image-container">
                    <img
                      src={movie.image}
                      className="card-img-top"
                      alt={movie.title}
                      onError={(e) => {
                        console.log('Image failed to load:', movie.image);
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                      }}
                    />
                    <div className="movie-overlay">
                      <button 
                        className="btn btn-primary btn-lg"
                        onClick={() => handleMovieSelect(movie)}
                      >
                        <i className="fas fa-ticket-alt me-2"></i>
                        Book Now
                      </button>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-2">{movie.title}</h5>
                    <div className="movie-meta mb-2">
                      <span className="badge bg-info me-2">{movie.rating}</span>
                      <span className="badge bg-secondary">{movie.duration}</span>
                    </div>
                    <p className="card-text text-muted flex-grow-1">{movie.description}</p>
                    <button 
                      className="btn btn-primary btn-lg mt-auto" 
                      onClick={() => handleMovieSelect(movie)}
                    >
                      <i className="fas fa-ticket-alt me-2"></i>
                      Book Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="movie-booking container py-5">
      {/* Booking Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-dark mb-3">🎟️ Book Your Seats</h1>
        <div className="selected-movie-info">
          <h3 className="mb-2">{selectedMovie.title}</h3>
          <div className="movie-meta mb-3">
            <span className="badge bg-info me-2">{selectedMovie.rating}</span>
            <span className="badge bg-secondary me-2">{selectedMovie.duration}</span>
            <span className="badge bg-dark">₹{seatPrice} per seat</span>
          </div>
          <button 
            className="btn btn-outline-secondary btn-sm"
            onClick={resetBooking}
          >
            <i className="fas fa-arrow-left me-2"></i>
            Choose Different Movie
          </button>
        </div>
      </div>

      {/* Screen Direction */}
      <div className="screen-direction text-center mb-5">
        <div className="screen-label">
          <i className="fas fa-tv me-2"></i>
          Screen This Way
        </div>
        <div className="screen-line"></div>
      </div>

      {/* Seat Legend */}
      <div className="seat-legend text-center mb-5">
        <div className="legend-container">
          <span className="legend-item available">
            <i className="fas fa-square me-2"></i>
            Available
          </span>
          <span className="legend-item selected">
            <i className="fas fa-square me-2"></i>
            Selected
          </span>
          <span className="legend-item booked">
            <i className="fas fa-square me-2"></i>
            Booked
          </span>
        </div>
      </div>

      {!isPaid ? (
        <>
          {/* Seat Layout */}
          <div className="seat-layout-container">
            {seatSets.map((set, index) => (
              <div key={index} className="set-container mb-5">
                <h5 className="text-center mb-4 set-label">
                  <i className="fas fa-chair me-2"></i>
                  {set.label}
                </h5>
                <div className="seat-layout">
                  {set.rows.map((rowLabel, rowIdx) => (
                    <div key={rowIdx} className="seat-row">
                      <div className="row-label">{rowLabel}</div>
                      <div className="seats-container">
                        {[...Array(seatCols)].map((_, colIdx) => {
                          const seatId = `${rowLabel}${colIdx + 1}`;
                          const isSelected = selectedSeats.includes(seatId);
                          return (
                            <button
                              key={seatId}
                              className={`seat ${isSelected ? 'selected' : ''}`}
                              onClick={() => toggleSeat(seatId)}
                              title={`Seat ${seatId}`}
                            >
                              {colIdx + 1}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Booking Summary */}
          <div className="booking-summary text-center">
            <div className="summary-card">
              <h4 className="mb-3 text-dark">
                <i className="fas fa-receipt me-2"></i>
                Booking Summary
              </h4>
              <div className="summary-details mb-4">
                <div className="row">
                  <div className="col-md-4">
                    <p className="mb-1 text-muted">Selected Seats</p>
                    <h5 className="text-dark">{selectedSeats.length}</h5>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1 text-muted">Price per Seat</p>
                    <h5 className="text-success">₹{seatPrice}</h5>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-1 text-muted">Total Amount</p>
                    <h4 className="text-dark fw-bold">₹{selectedSeats.length * seatPrice}</h4>
                  </div>
                </div>
              </div>
              
              {selectedSeats.length > 0 && (
                <div className="selected-seats mb-4">
                  <p className="text-muted mb-2">Selected Seats:</p>
                  <div className="seats-display">
                    {selectedSeats.map(seat => (
                      <span key={seat} className="seat-badge">{seat}</span>
                    ))}
                  </div>
                </div>
              )}
              
              <button 
                className="btn btn-success btn-lg px-5"
                onClick={handlePayment}
                disabled={selectedSeats.length === 0}
              >
                <i className="fas fa-credit-card me-2"></i>
                {selectedSeats.length === 0 ? 'Select Seats First' : 'Pay & Confirm Booking'}
              </button>
            </div>
          </div>
        </>
      ) : (
        /* Booking Confirmation */
        <div className="booking-confirmation text-center">
          <div className="confirmation-card">
            <div className="success-icon mb-4">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2 className="text-success mb-4">🎉 Booking Confirmed!</h2>
            <div className="confirmation-details mb-4">
              <div className="row">
                <div className="col-md-4">
                  <p className="text-muted">Movie</p>
                  <h5>{selectedMovie.title}</h5>
                </div>
                <div className="col-md-4">
                  <p className="text-muted">Seats</p>
                  <h5>{selectedSeats.join(', ')}</h5>
                </div>
                <div className="col-md-4">
                  <p className="text-muted">Total Paid</p>
                  <h5 className="text-success">₹{selectedSeats.length * seatPrice}</h5>
                </div>
              </div>
            </div>
            <div className="confirmation-actions">
              <button className="btn btn-primary me-3" onClick={resetBooking}>
                <i className="fas fa-plus me-2"></i>
                Book Another Movie
              </button>
              <button className="btn btn-outline-secondary">
                <i className="fas fa-download me-2"></i>
                Download Ticket
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
