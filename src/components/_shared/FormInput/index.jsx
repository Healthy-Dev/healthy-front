import React, { forwardRef, useState } from "react";
import { ReactComponent as Eye } from "assets/icons/eye.svg";
import { ReactComponent as EyeOff } from "assets/icons/eye-off.svg";
import "./index.scss";

const FormInput = forwardRef(
  ({ type, label, name, placeholder, safeable, errors, onChange, onKeyDown }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <section className="form__input">
        <label name={name} htmlFor={name}>
          {label}
        </label>
        <div className="input__container">
          <input
            className="input-form"
            id={name}
            type={safeable ? (isVisible ? "text" : "password") : type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={onKeyDown}
            ref={ref}
          />
          {safeable && (
            <div onClick={() => setIsVisible(!isVisible)} className="input__icon">
              {isVisible ? <Eye /> : <EyeOff />}
            </div>
          )}
        </div>
        {errors && errors[name] && (
          <p className="message__error">{errors[name].message}</p>
        )}
      </section>
    );
  },
);

export default FormInput;
