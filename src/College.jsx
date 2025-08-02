import Student from "./Student"

const College=({college})=>{
    return(
        <div>
            <h1>Name:{college.name}</h1>
            <ul>
              <li><h3>City:{college.city}</h3></li>
              <li><h3>Website:{college.website}</h3></li>
              <li>
                <Student Student={college.student}></Student>
              </li>
            </ul>
            
            <hr />
        </div>
    )
}
export default College