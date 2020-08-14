const Addfirstname = function (firstname) {
 
    return (
        {
            type: "ADD_FIRST_NAME",
            payload: firstname
        }
    )
}

export default Addfirstname;