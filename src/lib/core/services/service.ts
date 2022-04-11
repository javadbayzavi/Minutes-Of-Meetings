export interface service<Type>
{
    Delete(model:Type) : boolean;
    Inseert(model:Type): boolean;
    Update(model:Type): boolean;
    Get(model:Type): Type;
    Gets(model:Type): Type[];
}