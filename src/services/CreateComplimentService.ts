import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplementRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {

    async execute( { tag_id, user_sender, user_receiver, message} : IComplementRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const userRepositories = getCustomRepository(UsersRepositories);

        // Verifica se o usuário está enviando elogio para ele mesmo...
        if(user_sender === user_receiver){
            throw new Error("Incorrecet User Receiver!");
        }

        const userReceiverExists = await userRepositories.findOne(user_receiver);

        // Verifica se o user receiver existe...
        if(!userReceiverExists){
            throw new Error("User Receiver does not exists!");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;

    }

}

export { CreateComplimentService }