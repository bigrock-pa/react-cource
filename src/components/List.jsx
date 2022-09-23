const List = (data) => {
 
const { array } = data;
    return(
        <ul>
            {array.map((element, index) => <div key={index}>{element}</div>)}
        </ul>
    );
};

export default List;