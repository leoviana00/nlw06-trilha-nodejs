import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {

    async execute(name: string){
        const tagsRepositories = getCustomRepository(TagsRepositories);
        // Verificação se o nome ta preenchido, caso não esteja é retornado um erro, caso esteja ok, segue...
        if(!name) {
            throw new Error("Incorrect name!");
        }
        // Verificação se a tag ja existe, 
        //select * from tags where name = 'name'
        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        });

        // Caso a tag exista, ela não pode ser salva, retornando um erro, caos esteja ok, segue...
        if(tagAlreadyExists) {
            throw new Error("Tag already exists!");
        }

        const tag = tagsRepositories.create({
            name
        });
        // Caso não exista, a informação é salva
        await tagsRepositories.save(tag);

        return tag;
    }

}

export { CreateTagService }