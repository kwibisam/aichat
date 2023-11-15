import {connect, disconnect} from 'mongoose'


async function connectToDB() {
    try {
        await connect(process.env.MONGO_DB_URL)
    } catch (error) {
        console.log(error)
        throw new Error("error connecting to the database");
        
    }
}

async function disconnectFromDB() {
    try {
        await disconnect()
    } catch (error) {
        console.log(error)
        throw new Error("failed to disconnect");
        
    }
}

export {connectToDB,disconnectFromDB}