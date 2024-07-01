import POSTSignUp from "../api/fetch/POSTSignUp";
import { useState } from "react";
function SignUpForm() {
  const [] = useState();
  const [] = useState();
  const [] = useState();
  const [] = useState();
  const [] = useState();
  return (
    <div>
      <form action="/authentication/signup" method="POST">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required={true} />
        </div>
        <div className="formControl">
          <label htmlFor="user_name">User Name:</label>
          <input name="user_name" id="user_name" type="text" required={true} />
        </div>

        <div className="formControl">
          <label htmlFor="password">Please Enter a Password:</label>
          <input
            name="password"
            id="password"
            type="password"
            required={true}
          />
        </div>
        <div className="formControl">
          <label htmlFor="confirm_password"> Confirm password:</label>
          <input
            name="confirm_password"
            id="confirm_password"
            type="password"
            required={true}
          />
        </div>
        <button onClick={POSTSignUp}>Submit</button>
      </form>
    </div>
  );
}
export default SignUpForm;
