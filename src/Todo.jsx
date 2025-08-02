function MyTodo(){

    function callFun(){
        alert("function called")
    }
    return(
        <div>
            <h1>Kushal dog's Todos</h1>
            <img src="https://tse1.mm.bing.net/th/id/OIP.jFZQogcGSNncaVuPSgJ2cQHaFj?pid=Api&P=0&h=180" alt="This is a dog" />
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellendus.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, incidunt?</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, omnis.</li>
            </ul>
            <button onClick={callFun}>Click me</button>
        </div>
    )
}
export default MyTodo