import { Request, Response } from "express"
import { ListUserReceivedComplimentsService } from "../services/ListUserReceivedComplimentsService"

class ListUserReceivedComplimentsController {
    async handle(req: Request, res: Response) {
        const { userId } = req

        const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService();

        const compliments = await listUserReceivedComplimentsService.execute(userId);

        return res.json(compliments)
    }
}

export { ListUserReceivedComplimentsController }
