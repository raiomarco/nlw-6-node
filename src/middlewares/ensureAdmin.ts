import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    const { userId } = req;

    // TODO: Criar service para acesso do repository
    const usersRepository = getCustomRepository(UsersRepositories)

    const { admin } = await usersRepository.findOne(userId);

    if (admin) {
        return next()
    }

    return res.status(401).json({ error: "Unauthorized" })
}
