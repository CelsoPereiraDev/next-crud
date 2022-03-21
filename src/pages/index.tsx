import Layout from '../components/Layout.tsx';
import Table from '../components/Table.tsx';
import Client from '../core/Client.ts'


export default function Home() {

  const clients = [
    new Client('Ana',34,'1'),
    new Client('Bia',41,'2'),
    new Client('Caio',31,'3'),
    new Client ('Paulo',54,'5')
  ]

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-purple-500 to to-blue-300
      text-white
    `}>
      <Layout title="Simple Registration">
        <Table clients={clients}></Table>
      </Layout>
    </div>
  )
}
