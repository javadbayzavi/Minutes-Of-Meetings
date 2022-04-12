interface iserviceproxy<Type>
{
    doInsert(model: Type): boolean;
    doUpdate(mode: Type): boolean;
    doDelete(model: Type): boolean;
    doGet(model: Type): Type;
    doGets(model: Type): Type[];
}