import { iservice } from "./iservice";
import { serviceProxy } from "./serviceProxy";

export class service<Type> implements iservice<Type>
{
    PrepareForDelete(): void {}
    PrepareForInsert(): void {}
    PrepareForUpdate(): void {}
    PrepareForGet(): void {}
    AfterDelete(): void {}
    AfterInsert(): void {}
    AfterUpdate(): void {}
    AfterGet(): void {}

    executor: serviceProxy<Type>;
    servicemodel: Type;
    servicemodels: Type[];

    constructor()
    {
        this.executor = new serviceProxy<Type>(this);
    }
    Delete(model: Type): boolean {
        try
        {
            this.PrepareForDelete();

            //TODO: real delete operation for model

            this.AfterDelete();
            return true;
        }
        catch
        {
            return false
        }
    }
    Insert(model: Type): boolean {
        try
        {
            this.PrepareForInsert();

            //TODO: real insert operation for model

            this.AfterInsert();
            return true;
        }
        catch
        {
            return false
        }
    }
    Update(model: Type): boolean {
        try
        {
            this.PrepareForUpdate();

            //TODO: real update operation for model
           

            this.AfterUpdate();
            return true;
        }
        catch
        {
            return false
        }
    }
    Get(model: Type) {
        try
        {
            this.PrepareForGet();

            //TODO: real get operation for model

            this.AfterGet();
            return this.servicemodel;
        }
        catch
        {
        }
        finally
        {
            return this.servicemodel;
        }
    }
    Gets(model: Type): Type[] {
        try
        {
            //this.service.PrepareForGets();

            //TODO: real gets operation for model

            //this.service.AfterGets();
        }
        catch
        {
        }    
        finally
        {
            return this.servicemodels;
        }
    }
    
}