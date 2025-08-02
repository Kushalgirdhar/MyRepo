const Student = ({ Student }) => {
  return (
    <div>
      <h3>Students</h3>
      {
        Student.map((Student)=>(
            <ul><li>Name:{Student.name}</li></ul>
        ))
      }
    </div>
  )
}

export default Student;
