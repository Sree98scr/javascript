import propTypes from "prop-types";

export const Student = (Props) => {
    return(
        <div className="Student">
            <table>
            <tbody>
            <tr>
            <th>Name</th>
            <td>{Props.Name}</td>
             </tr> 
            <tr>
            <th>Age</th>
            <td>{Props.Age}</td>
             </tr>  
             
            </tbody>
             
             </table> 
        </div>

    );
        
    };
   // props
     Student.propTypes={
       Name: propTypes.string,
        Age: propTypes .number,
       ,
     }
     // default props
      Student.defaultProps ={
        Name: "No Name",
        Age: 0
     }
