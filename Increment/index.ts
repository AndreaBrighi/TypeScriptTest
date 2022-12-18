import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Counter } from "../src/counter";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const counter = new Counter(req.body.counter);
    counter.increment();
    const responseMessage = `The current count is ${counter.getCount()}. `
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };

};

export default httpTrigger;