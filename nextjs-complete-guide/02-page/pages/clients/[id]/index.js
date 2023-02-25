import { useRouter } from "next/router";

const ClientProjectsPagge = () => {
    const router = useRouter();
    console.log(router.query);

    const loadProjectHandler = () => {
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid: 'projectA'}
        })
    };

    return (
        <div>
            <h1>The Project of Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientProjectsPagge;