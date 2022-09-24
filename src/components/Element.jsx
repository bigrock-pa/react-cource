const ListComponent = (data) => {
 
const { elementValue } = data;
    return(
        <>
            {elementValue.map((element, index) => <li key={index}>{element}</li>)}
        </>
    );
};

export default ListComponent;