import { Schema, model } from 'mongoose';
import { randomUUID } from 'crypto';
const chatSchema = new Schema({
    id: {
        type: 'string',
        default: randomUUID()
    },
    role: {
        type: 'string',
        required: true,
    },
    content: {
        type: 'string',
        required: true
    }
});
const UserSchema = new Schema({
    name: {
        type: 'string',
        maxLength: 100,
        required: true
    },
    email: {
        type: 'string',
        maxLength: 255,
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
        maxLength: 255
    },
    chats: []
});
export default model('User', UserSchema);
//# sourceMappingURL=user.js.map