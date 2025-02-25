const express = require('express');
const app = express();
const port = 24081;

// Dummy book data
const books = [
  {
    id: 1,
    title: "The Whispering Shadows",
    author: "Lena Blackwood",
    genre: "Mystery",
    summary: "In the small coastal town of Havenbrook, strange things start to happen when a mysterious fog rolls in. Detective Clara Evans is drawn into a world of secrets and shadows as she uncovers the town’s hidden past and faces an ancient curse that threatens everyone around her.",
    publicationYear: 2021,
    likes: 64,
    reviews: [
      {
        id: 1,
        reviewer: "John Doe",
        rating: 4.5,
        comment: "An enthralling mystery with unexpected twists! The atmosphere was eerie, and I couldn’t put it down."
      },
      {
        id: 2,
        reviewer: "Jane Smith",
        rating: 4.0,
        comment: "Loved the setting and the suspense. Detective Clara is a fantastic character, though the ending felt a bit rushed."
      },
      {
        id: 3,
        reviewer: "Mark Wilson",
        rating: 3.8,
        comment: "Good read with a unique storyline. The pacing was a bit slow at times, but the mystery kept me hooked."
      }
    ]
  },
  {
    id: 2,
    title: "Beyond the Veil of Stars",
    author: "Ethan Caldwell",
    genre: "Science Fiction",
    summary: "Astronauts on a deep-space mission to find habitable planets discover an ancient alien civilization that holds the key to humanity’s survival. As Captain Mark Danton unravels the secrets of the alien world, he faces moral dilemmas and unearths truths that will change the course of human history forever.",
    publicationYear: 2032,
    likes: 128,
    reviews: [
      {
        id: 4,
        reviewer: "Alice Brown",
        rating: 5.0,
        comment: "A fantastic sci-fi adventure that really makes you think! The alien civilization was fascinating, and the plot twists were brilliant."
      },
      {
        id: 5,
        reviewer: "Samuel Green",
        rating: 4.2,
        comment: "Great story with a lot of depth. I loved the exploration of ethics and humanity’s place in the universe."
      },
      {
        id: 6,
        reviewer: "Emily White",
        rating: 4.7,
        comment: "This book kept me on the edge of my seat! It’s thought-provoking and full of action. Highly recommend for sci-fi fans."
      }
    ]
  },
  {
    id: 3,
    title: "Echoes of the Forgotten",
    author: "Maria Thornfield",
    genre: "Fantasy",
    summary: "In a land where magic has been forgotten, a young girl named Lira discovers a hidden power within herself that could restore balance to the world. Joined by a band of unlikely allies, she embarks on a journey to reclaim her heritage and confront an ancient evil that threatens to plunge the kingdom into darkness.",
    publicationYear: 2018,
    likes: 256,
    reviews: [
      {
        id: 7,
        reviewer: "Rachel Lee",
        rating: 4.8,
        comment: "A beautiful fantasy tale with rich world-building and an unforgettable heroine. I can’t wait for the sequel!"
      },
      {
        id: 8,
        reviewer: "Tom Hanks",
        rating: 4.3,
        comment: "The magical elements were well done, and I loved the characters. The journey was captivating from start to finish."
      },
      {
        id: 9,
        reviewer: "Sophia Martinez",
        rating: 4.6,
        comment: "Wonderful fantasy book that reminded me of classic tales. The storyline was engaging, and the pacing was perfect."
      }
    ]
  }
];

app.use((req, res, next) => {

  const startTime = Date.now(); // Record the start time
  const { path, method, query } = req;

  // Capture the original send method to get the response status code
  const originalSend = res.send;
  res.send = function (...args) {
    const responseTime = Date.now() - startTime; // Calculate the execution time
    console.log(`Request Details:
        - Path: ${path}
        - Method: ${method}
        - Query Params: ${JSON.stringify(query)}
        - Status Code: ${res.statusCode}
        - Execution Time: ${responseTime} ms
        `);
    originalSend.apply(res, args);
  };

  next(); // Proceed to the next middleware or route handler
})

app.use((req, res, next) => {
  if ('slowdown' in  req.query) {
    const delay = req.query.slowdown ? parseInt(req.query.slowdown) : 1200;

    setTimeout(() => {
      next();
    }, delay);
  } else {
    next();
  }
})

// Endpoint to get the list of books (ID and title)
app.get('/api/books', (req, res) => {
  const bookList = books.map(book => ({ id: book.id, title: book.title, likes: book.likes }));
  res.json(bookList);
});

// Endpoint to get details of a specific book
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  if (book) {
    if ('fail' in  req.query) {
      const failingBook = {...book, author: null};
      return res.json(failingBook)
    }
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

app.patch('/api/books/:bookId/like', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (book) {
    book.likes += 1; // Increment the like counter
    res.json(book); // Return the updated book object
  } else {
    res.status(404).json({ error: `Book '${bookId}' not found` });
  }
});

// Endpoint to get reviews for a specific book
app.get('/api/books/:bookId/reviews', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  if (book) {
    res.json(book.reviews);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
