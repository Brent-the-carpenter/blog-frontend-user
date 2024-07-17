import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSignUp from "../../api/hooks/useSignUp";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();
  const { signUpUser, loading, signUpError, validationErrors, user } =
    useSignUp();

  useEffect(() => {
    if (submit) {
      const formData = {
        email,
        user_name,
        password,
        confirm_password,
        first_name,
      };
      signUpUser(formData);
      setSubmit(false);
    }
  }, [
    submit,
    email,
    user_name,
    password,
    confirm_password,
    first_name,
    signUpUser,
  ]);
  useEffect(() => {
    if (user) {
      setEmail("");
      setFirstName("");
      setUserName("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [user, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const getErrorMessage = (field) => {
    const error = validationErrors.find((error) => error.path === field);
    return error ? error.msg : null;
  };

  return (
    <div className="flex flex-1 flex-col content-center items-center gap-4 p-2">
      <h1 className="text-3xl">Sign Up today!</h1>
      <form className="form" onSubmit={handleSignUp}>
        <div className="formControl">
          <label htmlFor="first_name">Name:</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {getErrorMessage("first_name") && (
            <p className="error">{getErrorMessage("first_name")}</p>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {getErrorMessage("email") && (
            <p className="error">{getErrorMessage("email")}</p>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="user_name">User Name:</label>
          <input
            name="user_name"
            id="user_name"
            type="text"
            autoComplete="username"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          {getErrorMessage("user_name") && (
            <p className="error">{getErrorMessage("user_name")}</p>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            id="password"
            type="password"
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {getErrorMessage("password") && (
            <p className="error">{getErrorMessage("password")}</p>
          )}
        </div>
        <div className="formControl">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            name="confirm_password"
            id="confirm_password"
            type="password"
            autoComplete="new-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {getErrorMessage("confirm_password") && (
            <p className="error">{getErrorMessage("confirm_password")}</p>
          )}
        </div>

        <button type="submit" className="btn p-2" disabled={loading}>
          {loading ? "Signing up..." : "Submit"}
        </button>
        {signUpError && <p>Error: {signUpError.message}</p>}
        {user && <p>Sign up successful!</p>}
      </form>
    </div>
  );
}

export default SignUpForm;
