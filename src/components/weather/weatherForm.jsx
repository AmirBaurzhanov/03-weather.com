import React from 'react';
import { Formik } from 'formik';

const WeatherForm = (props) => (
    <div>
        <Formik
            initialValues={{ city: '', }}

            onSubmit={(values, { setSubmitting }) => {
                props.onSubmit(values)
                setSubmitting(false);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit} className="input-group mb-3">
                    <input
                        type="text"
                        name="city"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.text}
                    />
                    {errors.text && touched.text && errors.text}
                    <button className="btn btn-secondary" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default WeatherForm