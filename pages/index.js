import { Field, Formik, Form } from 'formik';
import { PrismaClient } from '@prisma/client';

const Home = ({ movies }) => (
  <div className="container">
  {movies.map((movie) => (
      <div key={movie.id}>
        <p>Name: {movie.movieName}</p>
        <p>Director: {movie.director}</p>
        <p>Year Released: {movie.yearReleased}</p>
      </div>
    ))}
    <Formik
      initialValues={{
        director: '',
        movieName: '',
        yearReleased: '',
      }}
      onSubmit={(values) => {
        alert('oi')
        fetch('http://localhost:3000/api/movies', {
          method: 'POST',
          body: JSON.stringify({ ...values, yearReleased: Number(values.yearReleased) }),
        }).then(t=>{ console.log(t);});
      }}
    >
      <Form>
        <label>
          Movie Name
          <Field name="movieName" type="text"></Field>
        </label>
        <label>
          Director
          <Field name="director" type="text"></Field>
        </label>
        <label>
          Year Released
          <Field name="yearReleased" type="text"></Field>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Home;

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const movies = await prisma.movie.findMany();
  return { props: { movies } };
};