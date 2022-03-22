

export type DeepPartial<Thing> = Thing extends Function 
? Thing
: Thing extends Array<infer InferredArrayMember> 
? DeepPartialArray<InferredArrayMember> 
: Thing extends object
? DeepPartialObject<Thing>
: Thing | undefined;


interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>>{}

type DeepPartialObject<Thing> = {
    [Key in keyof Thing] ?: DeepPartial<Thing[Key]>;
}


interface Post{
    id:string,
    comments: {value:string}[],
    meta:{
        name:string,
        description:string
    };
}


const post: DeepPartial<Post> = {
    id:"1",
    comments:[
        {
            value:'hello there'
        }
    ],
    meta:{
        description: "123"
    }
}


// usage of deep partial

// if we use partial  we gonna check that all field are provided (high lever checking)
//  but if we use DeepPartial we are checking at low lever