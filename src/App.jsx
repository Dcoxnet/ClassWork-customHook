import useForm from "./components/useForm";

function FormComponent() {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form values:", values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
