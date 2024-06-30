import propTypes, { string } from "prop-types";

function ErrorPage({ error }) {
  return <div>{error}</div>;
}
export default ErrorPage;

ErrorPage.propTypes = {
  errors: propTypes.shape({
    errors: propTypes.arrayOf(string),
    forEach: propTypes.func,
  }),
};
