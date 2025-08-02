function Skills(){
    const userNames=['anil','sam','peter','bruce']

    const userData=[
        {
            name:'Anil',
            age:'29',
            email:'anil@test',
            id:1
        },
        {
            name:'sam',
            age:'29',
            email:'sam@test',
            id:2
        },
        {
            name:'peter',
            age:'29',
            email:'peter@test',
            id:3
        },
        {
            name:'bruce',
            age:'29',
            email:'bruce@test',
            id:4
        }
    ]
    return(
        <div>
            <h1>Loops in JSX Map function</h1>
            <h3>Using loop</h3>
            <table border={"1"}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    userData.map((user)=>(
                        <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>
                    ))
                    }
                </tbody>
            </table>


            <h3>Normal way</h3>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>101</td>
                        <td>Kushal girdhar</td>
                        <td>k@gmail.com</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>101</td>
                        <td>Kushal girdhar</td>
                        <td>k@gmail.com</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>101</td>
                        <td>Kushal girdhar</td>
                        <td>k@gmail.com</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>101</td>
                        <td>Kushal girdhar</td>
                        <td>k@gmail.com</td>
                        <td>22</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Skills