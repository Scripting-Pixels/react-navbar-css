import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img alt="logo" src="./src/assets/logo.svg" />
      </Link>
    </div>
  )
}
