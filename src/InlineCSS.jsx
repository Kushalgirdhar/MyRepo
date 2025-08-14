import {useState} from 'react'

function InlineCSS(){

  const [cardStyle,setCardStyle]=useState(
    {
      border: "5px solid #cccccc3b",
      width:"200px",
      boxShadow:"1px 2px 3px 0px #cccccc57",
      margin:"10px"
    }
  )

  const [textColor,setTextColor]=useState('black')

  const [grid,setGrid]=useState(true)

  const updateTheme=(bgColor,textColor)=>{
    setCardStyle({...cardStyle,backgroundColor:bgColor},console.log("i am on update theme"))
    setTextColor(textColor)
  }

  return(
    <>
      <h1 style={{color:'red'}}>Dynamic and Conditional Inline Style</h1>
      <button onClick={()=>updateTheme('gray','blue')}>Gray Theme</button>
      <button onClick={()=>updateTheme('white,black')}>Default Theme</button>
      <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
      <div style={{display: grid?'flex':'block',flexWrap:'wrap'}}>
        <div style={cardStyle}>
          <img style={{width:'200px'}} src="https://cegeogtech.unimap.edu.my/wp-content/uploads/2020/08/1200px-Unknown_person.jpg" alt="person" />
          <div style={{padding:'5px',color:textColor}}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{width:'200px'}} src="https://cegeogtech.unimap.edu.my/wp-content/uploads/2020/08/1200px-Unknown_person.jpg" alt="person" />
          <div style={{padding:'5px',color:textColor}}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{width:'200px'}} src="https://cegeogtech.unimap.edu.my/wp-content/uploads/2020/08/1200px-Unknown_person.jpg" alt="person" />
          <div style={{padding:'5px',color:textColor}}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{width:'200px'}} src="https://cegeogtech.unimap.edu.my/wp-content/uploads/2020/08/1200px-Unknown_person.jpg" alt="person" />
          <div style={{padding:'5px',color:textColor}}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{width:'200px'}} src="https://cegeogtech.unimap.edu.my/wp-content/uploads/2020/08/1200px-Unknown_person.jpg" alt="person" />
          <div style={{padding:'5px',color:textColor}}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{width:'200px'}} src="https://cegeogtech.unimap.edu.my/wp-content/uploads/2020/08/1200px-Unknown_person.jpg" alt="person" />
          <div style={{padding:'5px',color:textColor}}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{width:'200px'}} src="https://cegeogtech.unimap.edu.my/wp-content/uploads/2020/08/1200px-Unknown_person.jpg" alt="person" />
          <div style={{padding:'5px',color:textColor}}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{width:'200px'}} src="https://cegeogtech.unimap.edu.my/wp-content/uploads/2020/08/1200px-Unknown_person.jpg" alt="person" />
          <div style={{padding:'5px',color:textColor}}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{width:'200px'}} src="https://cegeogtech.unimap.edu.my/wp-content/uploads/2020/08/1200px-Unknown_person.jpg" alt="person" />
          <div style={{padding:'5px',color:textColor}}>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div>
      </div>
    
    </>
  )
}
export default InlineCSS