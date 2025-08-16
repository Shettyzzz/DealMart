// components/MovieBooking.js
import React, { useState } from 'react';
import './MovieBooking.css';
import { motion, AnimatePresence } from 'framer-motion';

const categories = {
  Disney: [
    {
      id: 'd1',
      title: 'Frozen',
      image: '/images/frozen.jpg',
      description: 'A tale of two royal sisters in a magical kingdom with icy powers.'
    },
    {
      id: 'd2',
      title: 'The Lion King',
      image: '/images/lion.jpg',
      description: 'A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.'
    },
    {
      id: 'd3',
      title: 'Jungle Book',
      image: '/images/jungle.jpg',
      description: 'The story of a young boy raised in the jungle by wolves, and his journey to find his place in the world.'
    },
    {
      id: 'd4',
      title: 'Mahavtar Narasimha',
      image: '/images/maha.jpg',
      description: 'The story of Lord Narasimha, the man-lion avatar of Vishnu, and his battle against evil.'
    }
  ],
  Hollywood: [
    {
      id: 'm2',
      title: 'Harry Potter',
      image: '/images/harry potter.jpg',
      description: 'A magical adventure of a young wizard discovering his destiny.'
    },
    {
      id: 'm3',
      title: 'Titanic',
      image: '/images/titanic.jpg',
      description: 'A romantic drama set during the tragic sinking of the RMS Titanic.'
    },
    {
      id: 'm4',
      title: 'Interstellar',
      image: '/images/interstealler.jpg',
      description: "Explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    }
  ],
  Bollywood: [
    {
      id: 'm1',
      title: '3 Idiots',
      image: '/images/3idiotes.jpg',
      description: 'A story of three engineering students and their journey through the pressures of college life.'
    },
    {
      id: 'm5',
      title: 'Sharukh Special',
      image: '/images/sharuk.jpg',
      description: 'A tribute to the iconic movies and roles of Shahrukh Khan.'
    },
    {
      id: 'm6',
      title: 'Hai Jawani Hai Diwani',
      image: '/images/HJHD.jpg',
      description: 'A celebration of love, friendship, and the journey of self-discovery.'
    }
  ]
};

const seatSets = [
  { label: 'Set A', rows: ['A', 'B', 'C', 'D', 'E', 'F'] },
  { label: 'Set B', rows: ['G', 'H', 'I', 'J'] }
];
const seatCols = 10;
const seatPrice = 200;

export default function MovieBooking() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isPaid, setIsPaid] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Disney');

  const toggleSeat = (seatId) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seatId)
        ? prevSeats.filter((id) => id !== seatId)
        : [...prevSeats, seatId]
    );
  };

  const handlePayment = () => {
    if (selectedSeats.length === 0) return alert("Please select at least one seat.");

    const bookingData = {
      movieId: selectedMovie.id,
      seats: selectedSeats,
      total: selectedSeats.length * seatPrice,
      time: new Date().toISOString(),
    };

    localStorage.setItem(`movieBooking-${selectedMovie.id}-${Date.now()}`, JSON.stringify(bookingData));
    setIsPaid(true);
  };

  if (!selectedMovie) {
    return (
      <div className="movie-booking container py-4">
        <h2 className="text-center mb-4">🎬 Select a Movie</h2>

        <div className="mb-4 text-center">
          <label htmlFor="categorySelect" className="form-label fw-bold">Choose Category:</label>
          <select
            id="categorySelect"
            className="form-select w-auto d-inline-block ms-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
          >
            {categories[selectedCategory].map((movie) => (
              <div key={movie.id} className="col">
                <div className="card movie-card h-100 text-center border-0 shadow-sm">
                  <div className="movie-image-container">
                    <img
                      src={movie.image}
                      className="card-img-top"
                      alt={movie.title}
                    />
                    <div className="movie-overlay">
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => setSelectedMovie(movie)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title mb-2 fw-bold">{movie.title}</h6>
                    <p className="card-text small flex-grow-1">{movie.description}</p>
                    <button 
                      className="btn btn-primary btn-sm mt-auto" 
                      onClick={() => setSelectedMovie(movie)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="movie-booking container py-4">
      <h2 className="text-center mb-4">🎟️ Book Your Seats</h2>
      <h5 className="text-center mb-3">Movie: {selectedMovie.title}</h5>

      <div className="screen-direction text-center mb-4">
        <div className="screen-label">📽️ Screen This Way</div>
        <hr style={{ width: '200px', margin: '0 auto', borderTop: '3px solid #444' }} />
      </div>

      <div className="seat-legend text-center mb-4">
        <span className="legend-item available">⬜ Available</span>
        <span className="legend-item selected" style={{ color: 'blue' }}>🟦 Selected</span>
        <span className="legend-item booked">⬛ Booked</span>
      </div>

      {!isPaid ? (
        <>
          {seatSets.map((set, index) => (
            <div key={index} className="set-container mb-5 p-3 rounded shadow-sm">
              <h5 className="text-center mb-3 set-label">{set.label}</h5>
              <div className="seat-layout d-flex flex-column align-items-center">
                {set.rows.map((rowLabel, rowIdx) => (
                  <div key={rowIdx} className="seat-row d-flex justify-content-center mb-2">
                    {[...Array(seatCols)].map((_, colIdx) => {
                      const seatId = `${rowLabel}${colIdx + 1}`;
                      const isSelected = selectedSeats.includes(seatId);
                      return (
                        <button
                          key={seatId}
                          className={`seat mx-1 ${isSelected ? 'selected' : ''}`}
                          onClick={() => toggleSeat(seatId)}
                          title={`Seat ${seatId}`}
                          style={{ backgroundColor: isSelected ? 'skyblue' : '' }}
                        >
                          {seatId}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <p className="h5 mb-3">Total Price: ₹{selectedSeats.length * seatPrice}</p>
            <button className="btn btn-success btn-lg" onClick={handlePayment}>
              Pay & Confirm
            </button>
          </div>
        </>
      ) : (
        <div className="text-center alert alert-success">
          ✅ Booking Confirmed!<br />
          Movie: <strong>{selectedMovie.title}</strong><br />
          Seats: <strong>{selectedSeats.join(', ')}</strong><br />
          Total Paid: ₹{selectedSeats.length * seatPrice}
        </div>
      )}
    </div>
  );
}
