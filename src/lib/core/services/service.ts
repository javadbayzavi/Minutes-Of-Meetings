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
        return this.executor.doUpdate(model);
    }
    Insert(model: Type): boolean {
        return this.executor.doInsert(model);
    }
    Update(model: Type): boolean {
        return this.executor.doUpdate(model);
    }
    Get(model: Type) {
        return this.executor.doGet(model);
    }
    Gets(model: Type): Type[] {
        return this.executor.doGets(model);
    }
    
}