const Person = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <h3>{props.job}</h3>
        <img
          src={props.avatar}
          alt={props.name}
        />
      </div>
    );
}

export default Person;