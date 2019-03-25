import {GraphQLServer} from 'graphql-yoga';
import {createWriteStream} from 'fs';

const _storeUpload = ({createReadStream,filename}) =>{
    return new Promise((resolve,reject)=>{
        createReadStream()
        .pipe(createWriteStream(filename))
        .on("finish",() => resolve(true))
        .on("error",reject)
    });
};

const typeDefs = `
    scalar Upload

    type Mutation {
        uploadFile(file:Upload!) : Boolean
    }

    type Query {
        hello:String
    }
`


const resolvers = {
    Mutation : {
        uploadFile : async (_,args) => {
            const {file} = args;
            const {createReadStream,filename} = await file;
            const returnValue = await _storeUpload({createReadStream,filename});
            return returnValue;
        }
    }
}
const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start({port:4000},()=>{
    console.log('server start');
});