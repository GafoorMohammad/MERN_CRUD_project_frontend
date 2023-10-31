import Axios from "axios";
import { Link } from "react-router-dom";

function StudentListRow(props) {
    const { _id, name, email, rollno } = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("https://mern-crud-project-backend.onrender.com/studentRoute/delete-student/"+_id)
            .then((res) => {
                console.log("Delete Response:", res);
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                } else {
                    Promise.reject();
                }
            })
            .catch((err) => {
                console.error("Delete Error:", err);
                alert("Error deleting the record");
            });
    };
    
   
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td class="d-flex justify-content-center">
                <Link class="text-decoration-none text-light" to={"/edit-student/"+_id}><button class="btn btn-success mr-2">Edit</button></Link>&ensp;
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}
export default StudentListRow;