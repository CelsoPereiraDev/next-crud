import Client from "../core/Client.ts"

interface TableProps {
    clients: Clients[]
}

export default function Table (props:TableProps) {

    function renderHeader() {
        return (
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
        )
    }

    function renderData(){
        return props.clients?.map((Client,i) => {
            return(
                <tr key={Client.id}>
                    <td>{Client.id}</td>
                    <td>{Client.name}</td>
                    <td>{Client.age}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
                {renderHeader()}
            </thead>   
            <tbody>
                {renderData()}
            </tbody>        
        </table>
    )
}