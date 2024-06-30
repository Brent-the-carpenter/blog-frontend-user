import propTypes, { string } from "prop-types";

function ErrorPage({ errors }) {
  return (
    <div>
      {errors.forEach((error) => {
        return <li>{error}</li>;
      })}
    </div>
  );
}
export default ErrorPage;

ErrorPage.propTypes = {
  errors: propTypes.shape({
    errors: propTypes.arrayOf(string),
    forEach: propTypes.func,
  }),
};
