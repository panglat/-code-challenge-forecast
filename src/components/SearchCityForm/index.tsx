import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, FormikProps } from 'formik';
import { requestWeather } from 'business/Weather/actions';
import { getWeatherLoading } from 'business/Weather/selectors';

import './styles.scss';
import LatestCities from 'components/LatestCities';

interface FormValues {
  city: string;
}

interface FormError {
  city?: string;
}

const SearchCityForm: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getWeatherLoading);

  return (
    <div className="search-city-form">
      <Formik
        initialValues={{
          city: '',
        }}
        validate={(values: FormValues) => {
          const errors: FormError = {};
          if (!values.city) {
            errors.city = 'Required';
          }
          return errors;
        }}
        onSubmit={(values: FormValues) => {
          dispatch(requestWeather(values.city));
        }}
        validateOnMount
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          isValid,
          setFieldValue,
        }: FormikProps<FormValues>) => (
          <>
            <form className="search-city-form__form" onSubmit={handleSubmit}>
              <h1 className="search-city-form__header">Search City</h1>
              <div className="search-city-form__group">
                <label className="search-city-form__label" htmlFor="cityName">
                  City:
                  <input
                    name="city"
                    className="search-city-form__input-text"
                    type="text"
                    id="cityName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                </label>
              </div>
              <div className="search-city-form__button-group">
                <button
                  type="submit"
                  disabled={!isValid || isLoading}
                  className="search-city-form__button"
                >
                  Search
                </button>
              </div>
            </form>
            <LatestCities
              onCitySelected={(city) => {
                setFieldValue('city', city);
                setTimeout(() => handleSubmit());
              }}
            />
          </>
        )}
      </Formik>
    </div>
  );
};

export default SearchCityForm;
