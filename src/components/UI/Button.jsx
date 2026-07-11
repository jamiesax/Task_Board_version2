import classes from "./Button.module.css";

const Button = ({ children, className, variant, ...rest }) => {
  return (
     <button {...rest} className={`${classes.button} ${classes[variant]} ${className || ""}`}>
       {children}
     </button>
  );
};

export default Button;