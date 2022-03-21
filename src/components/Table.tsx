import Client from "../core/Client.ts"

interface TableProps {
    clients: Clients[]
}

export default function Table (props:TableProps) {

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
            </tr>
        )
    }

    function renderData(){
        return props.clients?.map((Client,i) => {
            return(
                <tr key={Client.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-300'}`}>
                    <td className="text-left p-4">{Client.id}</td>
                    <td className="text-left p-4">{Client.name}</td>
                    <td className="text-left p-4">{Client.age}</td>
                </tr>
            )
        })
    }

    return (
        <table className={`
            w-full rounded-xl overflow-hidden
        `}>
            <thead className={`
            bg-gradient-to-r from-purple-700 to-purple-500 text-white
        `}>
                {renderHeader()}
            </thead>   
            <tbody>
                {renderData()}
            </tbody>        
        </table>
    )
}