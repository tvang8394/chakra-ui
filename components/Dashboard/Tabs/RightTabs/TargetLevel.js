import { loadFirebase } from "../../Firebase/Firebase";
import { useEffect, useDispatch } from 'react';

function useLevels() {
  const [levels, setLevels] = useState([]);
  // const { symbol } = useSelector((state) => state.symbol);
  useEffect(() => {
    let firebase = loadFirebase();
    firebase
      .firestore()
      .collection("Levels")
      .onSnapshot((snapshot) => {
        const newLevels = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLevels(newLevels);
      });
  }, []);

  return levels;
}



export default function TargetLevel() {
  const levels = useLevels();

  return <h1>Target Level</h1>;
}
