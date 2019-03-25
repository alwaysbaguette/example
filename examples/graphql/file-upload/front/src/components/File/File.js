import React from 'react';
import gql from 'graphql-tag';
import { useApolloClient } from 'react-apollo-hooks';


const UPLOAD = gql`
    mutation($file:Upload!){
        uploadFile(file:$file)
    }
`
const File = () =>{
    const client = useApolloClient();

    const _onChangeFile = (e) => {
        const file = e.target.files[0];
        client.mutate({
            mutation:UPLOAD,
            variables:{
                file
            }
        }).then(res => alert(JSON.stringify(res)))
        .catch(error => alert(error));
    };

    return (
        <div>
            <input type="file" onChange={_onChangeFile} />
        </div>
    )
}

export default File;