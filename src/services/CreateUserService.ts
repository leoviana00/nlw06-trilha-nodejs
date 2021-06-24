import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {

    async execute({ name, email, admin = false, password} : IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositories);

        //Verifica se o email está preenchido, caso não esteja o erro é lançado
        if(!email){
            throw new Error("Email incorrect");
        }

        //Verifica se o usuário ja existe
        const userAlreadyExists = await usersRepository.findOne({
            email,
        });

        //Se ele exisitir um erro é lançado
        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        //Criptografando a senha do usuário
        const passwordHash = await hash(password, 8)

        // S tiver tudo ok, uma nova instancia é criado é o objeto é salvo no banco de dados
        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        })

        await usersRepository.save(user);
        return user;
    }
}

export { CreateUserService }