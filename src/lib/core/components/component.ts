import { basemodel } from "../models/basemodel";
import { iservice } from "../services/iservice";

export class component
{
    serviceProvider: iservice<basemodel>;
    constructor(serviceModel: iservice<basemodel>)
    {
        this.serviceProvider = serviceModel;
    }
}