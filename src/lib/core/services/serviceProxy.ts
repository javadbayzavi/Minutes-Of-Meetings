import { Type } from "@angular/core";
import { basemodel } from "../models/basemodel";
import { service } from "./service";

export class serviceProxy<Type> implements iserviceproxy<Type
{
    service: service<Type>
    constructor(servi: service<Type>)
    {
        this.service = servi;
    }

    doInsert(model: Type): boolean {
        try
        {
        this.service.PrepareForInsert();

        //TODO: real insert operation for model

        this.service.AfterInsert();
        return true;
        }
        catch
        {
            return false
        }
    }

    doUpdate(mode: Type): boolean {
        try
        {
        this.service.PrepareForUpdate();

        //TODO: real update operation for model

        this.service.AfterUpdate();
        return true;
        }
        catch
        {
            return false
        }
    }
    doDelete(model: Type): boolean {
        try
        {
        this.service.PrepareForDelete();

        //TODO: real delete operation for model

        this.service.AfterDelete();
        return true;
        }
        catch
        {
            return false
        }
    }
    doGet(model: Type): Type {
        try
        {
        this.service.PrepareForGet();

        //TODO: real get operation for model

        this.service.AfterGet();
        return ;
        }
        catch
        {
            return false
        }
    }
    doGets(model: Type): Type[] {
        try
        {
        this.service.PrepareForGets();

        //TODO: real gets operation for model

        this.service.AfterGets();
        return ;
        }
        catch
        {
            return false
        }    
    }
}