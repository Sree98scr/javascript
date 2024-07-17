import { Student } from "./components/student";
import { ChildComponent } from "./components/ChildComponent";
function App() {

  return (
      <Student Name ="sree" Age={23} /> 
      <Student Name ="Anu" Age={27} /> 
       <Student Name="sara"/>
      <Student /> 
      {ChildComponent}
      <p>This is sample para 1</p>
      <p>This is sample para 2</p>
      <p>This is sample para 3</p>  
      {ChildComponent}    
     
    </div>
  );
}

export default App;
