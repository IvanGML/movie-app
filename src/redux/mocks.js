const payload = [{
  budget: 21000000,
  genres: ["Animation", "Comedy", "Music"],
  id: 9473,
  overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
  poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
}, {
  budget: 21000000,
  genres: ["Animation", "Comedy", "Music"],
  id: 9473,
  overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
  poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
}, {
  budget: 21000000,
  genres: ["Animation", "Comedy", "Music"],
  id: 9473,
  overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
  poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
}];

const payloadSecond = [{
  budget: 0,
  genres: ["Animation"],
  id: 1,
  overview: "When they are pronounced ",
  poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
}];

const newState = {
  movies: [{
      budget: 21000000,
      genres: ["Animation", "Comedy", "Music"],
      id: 9473,
      overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
      poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
    },
    {
      budget: 21000000,
      genres: ["Animation", "Comedy", "Music"],
      id: 9473,
      overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
      poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
    },
    {
      budget: 21000000,
      genres: ["Animation", "Comedy", "Music"],
      id: 9473,
      overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
      poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
    }
  ],
  moviesAll: [{
      budget: 21000000,
      genres: ["Animation", "Comedy", "Music"],
      id: 9473,
      overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
      poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
    },
    {
      budget: 21000000,
      genres: ["Animation", "Comedy", "Music"],
      id: 9473,
      overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
      poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
    },
    {
      budget: 21000000,
      genres: ["Animation", "Comedy", "Music"],
      id: 9473,
      overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
      poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
    }
  ],
};

const newStateSecond = {
  movies: {
    data: [{
      budget: 0,
      genres: ["Animation"],
      id: 1,
      overview: "When they are pronounced ",
      poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
    }],
  },
  moviesAll: [],
};

export {
  payload,
  payloadSecond,
  newStateSecond,
  newState,
};
