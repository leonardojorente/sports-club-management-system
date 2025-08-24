import { APIRequestContext } from '@playwright/test';
import  RelativePath  from '@tests/data/endpoint-relative-path.json';

export class RegisterRequests{
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async registerUser(body: object){
        const response = await this.request.post(`${process.env.BASE_URL_API}${RelativePath.API.REGISTER}`,
            {
                data: body
            })
        return response
    }
}