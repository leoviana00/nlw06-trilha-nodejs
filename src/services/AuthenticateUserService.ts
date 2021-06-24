import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;

}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        // Verificar se email existe
        const userExists = await usersRepositories.findOne({
            email
        });

        if (!userExists) {
            throw new Error("Email/Password incorrect!");
        }

        //Verificar se senha está correta
        //Compare a senha que o usuário colocou com a senha hash
        const passwordMatch = await compare(password, userExists.password)

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect!")
        }

        // Gerar Token
        const token = sign({
            email: userExists.email //Parâmetros - PAYLOAD - SECRETPRIVATEKEY - SUBJECT+EXPIRESTOKEN
        }, "f3a15a9caaa9f47a6dc035042325a4a3", {
            subject: userExists.id,
            expiresIn: "1d"
        });

        return token;

    }

}

export { AuthenticateUserService }