import { Field, Formik, Form } from 'formik';

const Home = () => (
  <div className="container">

    <Formik
      initialValues={{
        director: '',
        movieName: '',
        yearReleased: '', 
      }}
      onSubmit={(values) => {
        alert(process.env.NEXT_PUBLIC_URL_SERVER)
        fetch( process.env.NEXT_PUBLIC_URL_SERVER, {
          method: 'POST',
          body: JSON.stringify({ ...values, yearReleased: Number(values.yearReleased) }),
        }).then(t=>{ console.log(t);});
      }}
    >
      <Form>
        <label>
          Movie Name {process.env.NEXT_PUBLIC_URL_SERVER}
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
