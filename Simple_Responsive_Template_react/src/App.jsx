import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Card from "./Card/Card.jsx"
import Profiles from './Card/Profiles.json'


function App() {
  //   const jsonData 


  // const profiles = JSON.parse(jsonData)

  
  // console.log(profiles);
  return(
    <>
      <Header/>
      <main>
        {/* <Card title={profiles[0].title} description={profiles[0].description}/>
        <Card title={profiles[1].title} description={profiles[1].description}/>
        <Card title={profiles[2].title} description={profiles[2].description}/> */}
        {/* <Card data = {jsonData} /> */}
        {/* <Card/> */}

        {
          Profiles && Profiles.map(profile =>{
            return(
              <Card data = {profile} key={profile.id}/>
            )
          })
        }
        <Card/>
      </main>
      <Footer/>
    </>
  )
}

export default App
