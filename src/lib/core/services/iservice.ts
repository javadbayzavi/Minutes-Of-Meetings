
export interface iservice<Type> extends ioperationpreparable
{
    Delete(model:Type) : boolean;
    Insert(model:Type): boolean;
    Update(model:Type): boolean;
    Get(model:Type): Type;
    Gets(model:Type): Type[];
}