import { APIRequestContext } from '@playwright/test';
import  RelativePath  from '@tests/data/endpoint-relative-path.json';

export class LoginRequests{
    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async doLogin(body: object){
        const response = await this.request.post(`${process.env.BASE_URL_API}${RelativePath.API.LOGIN}`,
            {
                data: body
            })
        return response
    }
}