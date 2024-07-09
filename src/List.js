
const List = (props) => {
    return (
        <ul>
          {props.data.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
    );
};


export default List;