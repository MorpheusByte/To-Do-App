import { useState, useEffect } from "react"
import AddTutorial from "../components/AddTutorial"
import TutorialList from "../components/TutorialList"
import axios from "axios"

const Home = () => {
  const [tutorials, setTutorials] = useState([])

  const getTutorials = async () => {
    // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"
    

    try {
      const res = await axios(process.env.REACT_APP_URL)
      console.log(res.data.result)
      setTutorials(res.data.result)
    } catch (error) {
      console.log(error)
    }
  }

  //? componentDidMount (ilk render sonrasi bir kere istek gonder)
  console.log("Hi")
  useEffect(() => {
    getTutorials()
  }, [])

  return (
    <div style={{ backgroundColor: 'gray' }}>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </div>
  )
}

export default Home
