import React,{useState} from 'react';
function Object() {
    const [person, setPerson] = useState({ firstname: '', lastname: '' });

    const handleSubmit = () => {
        if (!person.firstname || !person.lastname) {
          alert('Please enter both first name and last name');
        } else {
          console.log('Form submitted:', person);
        
        alert(`Form submitted successfully`);
        }
      };
      

return(
       <div>
       <input type ="text" onChange={(e)=>setPerson({...person,firstname:e.target.value})} placeholder="Enter your firstname"/>

        <input type ="text" onChange={(e)=>setPerson({...person,lastname: e.target.value})} placeholder="Enter your lastname"/>
         
      <button onClick={handleSubmit}>Submit</button>
       
        
          <p>firstname value is:{person.firstname}</p>
          
          <p>lastname value is:{person.lastname}</p>
       </div>
       );
       };



export default Object;

