import React from "react";
import './App.css';
import firebase from './firebase'

function App() {
  const [tests, setTests] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      try{
        const db = firebase.firestore()
        const data = await db.collection("test").get()
        setTests(data.docs.map(doc => doc.data()))
      }
      catch(err){
        console.error(err)
      }
      }
    fetchData()
  }, []);

  return (
    <div>
      {tests.map(test => (
        <ul key={test.id}>
          <li>#{test.id}</li>
          <li>{test.title}</li>
          <li>{test.body}</li>
          </ul>
      ))}
    </div>
  );
}
export default App;
