import styled from "styled-components"

function SyteComponent(){
  const Heading=styled.h1`
  color:red;
  border:1px solid green;
  border-radius:5px;
  margin:20px;
  padding:20px;`

  return(
    <>
    <h1>Styled Component with React js</h1>
    <Heading>Hello Heading</Heading>
    <Heading>Hello Heading</Heading>
    <Heading>Hello Heading</Heading>
    <Heading>Hello Heading</Heading>
    <Heading>Hello Heading</Heading>
    </>
  )
}
export default SyteComponent