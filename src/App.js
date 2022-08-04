

import {db} from './firebase/config'
import {collection, addDoc, Timestamp,doc,updateDoc,deleteDoc} from 'firebase/firestore'
function App() {

  return (
    <div className="App">
     <button onClick={()=>{
/*   its for adding a new collection (creating)*/

      // try {
      //    addDoc(collection(db, 'product'), {
      //     name:"iphone",
      //     type: "Mobile",
      //     price:"5000",
      //   })
        
      // } catch (err) {
      //   alert(err)
      // }
      
      /*Getting all tasks from Firestore*/

      // const taskDocRef = doc(db, 'products', "wTEOY1R7e0OawDtpdl2b")
      // try{
      //    updateDoc(taskDocRef, {
      //     name:"fazz",
      //     type: "kkkk",
      //     price:"5000",
      //   })
       
      // } catch (err) {
      //   alert(err)
      // }
      
      const taskDocRef = doc(db, 'shihad', "NEDZzuc2B6ezmnmDaQTJ")
    try{
         deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }


     }}>click me</button>
     
    </div>
  );
}

export default App;
