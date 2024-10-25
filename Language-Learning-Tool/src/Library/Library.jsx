import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './Library.css'; // Import CSS file for styling
import bookImage from '../assets/book.jpg'; // Import the image

const booksByLevel = {
  'Level 1': [
    { title: 'Bumble Bee', image: bookImage },
    { title: 'The Little Bird', image: bookImage },
    { title: 'Molly Going to the Zoo', image: bookImage },
    { title: 'The Gold Coins', image: bookImage },
    { title: 'Fluffy the Cloud', image: bookImage },
    { title: 'A Day at the Zoo', image: bookImage },
    { title: 'Chay Che the Friendly Dragon', image: bookImage },
    { title: 'The Greengrocer', image: bookImage },
    { title: 'The Farm Animals', image: bookImage },
    { title: 'Like a Balloon', image: bookImage },
    { title: 'Roli and Suja', image: bookImage },
    { title: 'Grannys Farm', image: bookImage },
  ],
  'Level 2': [
    { title: 'A Day at the Zoo', image: bookImage },
    { title: 'Chay Che the Friendly Dragon', image: bookImage },
    { title: 'The Greengrocer', image: bookImage },
    { title: 'The Farm Animals', image: bookImage },
    { title: 'Like a Balloon', image: bookImage },
  ],
  'Level 3': [
    { title: 'Roli and Suja', image: bookImage },
    { title: 'Grannys Farm', image: bookImage },
    { title: 'The New Book 1', image: bookImage },
    { title: 'The New Book 2', image: bookImage },
    { title: 'The New Book 3', image: bookImage },
  ],
  'Level 4': [
    { title: 'Book 4-1', image: bookImage },
    { title: 'Book 4-2', image: bookImage },
    { title: 'Book 4-3', image: bookImage },
    { title: 'Book 4-4', image: bookImage },
    { title: 'Book 4-5', image: bookImage },
  ],
  'Level 5': [
    { title: 'Book 5-1', image: bookImage },
    { title: 'Book 5-2', image: bookImage },
    { title: 'Book 5-3', image: bookImage },
    { title: 'Book 5-4', image: bookImage },
    { title: 'Book 5-5', image: bookImage },
  ],
  // Add more levels if needed
  'Level 6': [
    // Example books for Level 6
    { title: 'Book 6-1', image: bookImage },
    { title: 'Book 6-2', image: bookImage },
    { title: 'Book 6-3', image: bookImage },
    { title: 'Book 6-4', image: bookImage },
    { title: 'Book 6-5', image: bookImage },
  ],
  'Level 7': [
    // Example books for Level 7
    { title: 'Book 7-1', image: bookImage },
    { title: 'Book 7-2', image: bookImage },
    { title: 'Book 7-3', image: bookImage },
    { title: 'Book 7-4', image: bookImage },
    { title: 'Book 7-5', image: bookImage },
  ],
  'Level 8': [
    // Example books for Level 8
    { title: 'Book 8-1', image: bookImage },
    { title: 'Book 8-2', image: bookImage },
    { title: 'Book 8-3', image: bookImage },
    { title: 'Book 8-4', image: bookImage },
    { title: 'Book 8-5', image: bookImage },
  ],
  'Level 9': [
    // Example books for Level 9
    { title: 'Book 9-1', image: bookImage },
    { title: 'Book 9-2', image: bookImage },
    { title: 'Book 9-3', image: bookImage },
    { title: 'Book 9-4', image: bookImage },
    { title: 'Book 9-5', image: bookImage },
  ],
  'Level 10': [
    // Example books for Level 10
    { title: 'Book 10-1', image: bookImage },
    { title: 'Book 10-2', image: bookImage },
    { title: 'Book 10-3', image: bookImage },
    { title: 'Book 10-4', image: bookImage },
    { title: 'Book 10-5', image: bookImage },
  ],
};

const ReaderBoard = () => {
  const [selectedLevel, setSelectedLevel] = useState('Level 1');
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate(); // Create a navigate instance

  const books = booksByLevel[selectedLevel] || [];

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleBackToList = () => {
    setSelectedBook(null);
  };

  const handleReaderBoardClick = () => {
    navigate('/reader-board'); // Navigate to the ReaderBoard route
  };

  return (
    <div className="reader-board">
      <div className="headers">
        <button className="create-button" onClick={handleReaderBoardClick}>
          Reader Board
        </button>
        <select
          className="level-dropdown"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          {[...Array(10).keys()].map((level) => (
            <option key={level} value={`Level ${level + 1}`}>
              {`Level ${level + 1}`}
            </option>
          ))}
        </select>
      </div>
      <div className="content">
        {selectedBook ? (
          <div className="book-detail">
            <button className="back-button" onClick={handleBackToList}>
              Back to List
            </button>
            <div className="book-detail-title">
              <h1>{selectedBook.title}</h1>
            </div>
            <div className="book-detail-image">
              <img src={selectedBook.image} alt={selectedBook.title} />
            </div>
          </div>
        ) : (
          <div className="cards-container">
            {books.map((book, index) => (
              <div
                key={index}
                className="book-card"
                onClick={() => handleBookClick(book)}
              >
                <img src={book.image} alt={book.title} className="book-image" />
                <div className="book-title">{book.title}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReaderBoard;
