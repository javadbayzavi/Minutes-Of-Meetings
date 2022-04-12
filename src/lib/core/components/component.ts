import { basemodel } from "../models/basemodel";
import { service } from "../services/service";

export class component
{
    serviceProvider: service<basemodel>;
    constructor(serviceModel: service<basemodel>)
    {
        this.serviceProvider = serviceModel;
    }
}