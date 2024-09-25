import { useState } from "react";

function useValidation(values) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!values.name) {
      newErrors.name = "Имя не может быть пустым";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      newErrors.email = "Некорректный email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return {
    errors,
    validate,
  };
}

export default useValidation;
