import { getMovies, getMovie, getSuggestions } from "./db_axios";

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
    }
};

export default resolvers;