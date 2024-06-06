import messageModel from "./models/message.model.js";

export default class ChatManager {

  getMessages = async () => {
    try {
      return await messageModel.find().lean();
    } catch (error) {
      return error;
    }
  };

  createMessage = async (message) => {
    try {
      return await messageModel.create(message);
    } catch (error) {
      return error;
    }
  };
}