import app from './app.js';
import { connectToDB } from './db/connection.js';
const PORT = process.env.PORT || 5000;
connectToDB()
    .then(() => {
    app.listen(PORT, () => console.log("database connection established server open!"));
})
    .catch(error => { console.log(error); });
//# sourceMappingURL=index.js.map