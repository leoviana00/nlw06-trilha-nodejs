import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {

    // RECEBER TOKEN
    const authToken = request.headers.authorization;

    // VALIDAR SE TOKEN ESTÁ PREENCHIDO
    if (!authToken) {
        return response.status(401).end();
    }

    // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxlb25hcmRvQGdtYWlsLmNvbSIsImlhdCI6MTYyNDUwMTA3MywiZXhwIjoxNjI0NTg3NDczLCJzdWIiOiJkZGY0ZDk1Yi00MmZmLTQyNjUtYmYxNy0wMGRlZTFlZThmNjkifQ.KljB2qBItZqFv3vfzeSsMMdKrdm_dSDME-7mTYJVmNw

    const [, token] = authToken.split(" ");

    try {
        //VALIDAR SE É VÁLIDO 
        const { sub } = verify(token, "f3a15a9caaa9f47a6dc035042325a4a3") as IPayload;
        
        // RECUPERAR INFORMAÇÕES DO USUÁRIO
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }

    



}