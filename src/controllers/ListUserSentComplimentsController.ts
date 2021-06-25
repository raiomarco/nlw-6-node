import { Request, Response } from "express"
import { ListUserSentComplimentsService } from "../services/ListUserSentComplimentsService"

class ListUserSentComplimentsController {
    async handle(req: Request, res: Response) {
        const { userId } = req

        const listUserSentComplimentsService = new ListUserSentComplimentsService();

        const compliments = await listUserSentComplimentsService.execute(userId);

        return res.json(compliments)
    }
}

export { ListUserSentComplimentsController }
