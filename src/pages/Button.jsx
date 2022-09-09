const Button = (props) => {
  return (
    <div>
      <button onClick={() => props.clicked()}>Klik di sini</button>
    </div>
  );
};

export default Button;