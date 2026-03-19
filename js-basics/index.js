// lets do some questions on objects 
// Question-1:  Create a function to perform a deep clone of an object, handling nested objects and arrays.
let obj ={ 
    parents:{
      mother:'Laxmi',
      father:'Shayam',
    },
    Siblings: {
      brother:'Manas',
      sister:'Simran'    
    },

    // f: function sum (a,b) {
    //   return a+b;
    // }
}
function deepclone(obj) {
  let newobj=structuredClone(obj);
  console.log(newobj)

}

deepclone(obj)


// shallow copy mtlb hota hai ki dono same memory ko point kar rhe hai thik hai 
// and where as if we talk about the deep cloning 

// let copy=_.cloneDeep(obj)
// console.log(copy)
// console.log(copy.f(2,3))

// was a nice question learnt a lot

// Question-2:  Write a function that takes two objects and returns an object containing the common key-value pairs.

let obj3={
  name:'Shikhar',
  class:'XII',
  sibling:'Simran'
}

let obj4={
  name:'Riya',
  class:'XII',
  car:'Maruti'
}

let obj5={};
for(let key in obj3) {
  if(key in obj4===true&&obj3[key]==obj4[key]) {
    obj5[key]=obj3[key];
  }  
}

console.log(obj5)



// Question-3:  Create a function that transforms an object by renaming its keys based on a provided mapping. The function should handle nested objects. For example:

// input: { firstName: 'John', address: { city: 'New York' } }
// mapping: { firstName: 'name', address: { city: 'location.city' } }
// output: { name: 'John', location: { city: 'New York' } }

function transform(obj,map) {
  let result={};

  for(let key in obj) {
    // if that key is there in the assignment
    // 
    if(map && map[key]) {

      if(typeof map[key]==="string") {
        setValue(result,map[key],obj[key]);
      }
      else if(typeof map[key]==="object") {
        // you have entered the object 
        Object.assign(
          result,
          transform(obj[key],map[key])
        );
      }
      
    } else {
      // means put it as it is 
      result[key]=obj[key];
    }
  }
  return result;
}

function setValue(obj,newkey,value) {
  newkey.split(".").reduce((acc,key,i,arr)=> {
    // first we did assigned the thing and then we jst changed it 
    // so we can return 
    if(i===arr.length-1) {
      acc[key]=value;
    }
    else {
      acc[key]=acc[key]||{};
    }
    return acc[key];
  },obj)
}

// Question-4:  Write a function that validates an object against a provided schema. The schema should define the expected structure, data types, and optional/required fields. For example:

// object: { name: 'John', age: 25, email: 'john@example.com' }
// schema: { name: 'string', age: 'number', email: 'string', address: 'string?' }
// valid output: true


// function check(schema,obj) {
//   for(let key in obj) {
//     if(schema[key]) {
//       if(schema[key]!=typeof obj[key]) return false;
//     }
//   }
//   return true;
// }  //wrong ❌


// now comes the main things 

function check(schema,obj) {
  for(let key in schema) {
    let rule=schema[key];
    let optional=rule.endsWith('?');
    let expected=optional? rule.slice(0,-1) : rule;

    if(!optional&&!(key in obj)) {
      return false;
    }
    for(let key in obj) {
      if(typeof obj[key]!=expected) {
        return false;        
      }
    }
  }
  return true;
}



// Question-5:  Create a function that merges two objects. If there are conflicts in values, allow for custom logic to determine the merged result. For example:

// obj1: { a: 1, b: 2 }
// obj2: { b: 3, c: 4 }
// customMerge: (key, val1, val2) => key === 'b' ? val1 * val2 : val2
// output: { a: 1, b: 6, c: 4 }


function merge(obj1,obj2,customMerge) {
  let ans={};
  for(let key in obj1) {
    ans[key]=obj1[key];
  }

  for(let key in obj2) {
    if(key in ans) {
      ans[key]=customMerge(key,ans[key],obj2[key]);
    }
    else {
      ans[key]=obj2[key];
    }
  }
  return ans;
}

function customMerge(key,val1,val2) {
  if(key!='b') {
    return val2;
  }
  return val1*val2;
}


// assignment-2
// 1) Sum values in object arrays
// { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

let obj69={
  food: [10, 20, 30],
  travel: [5, 15],
  bills:[40, 60]
}
let obj70={}
for(let key in obj69) {
  let sum=0;
  for(let value of obj69[key]) {
    sum+=value;
  }
  obj70[key]=sum;
}

console.log(obj70)



// 2) count word occurnece 

let arr=["apple", "banana", "apple", "orange", "banana", "apple"]
// { apple: 3, banana: 2, orange: 1 }

let obj31={}

for(let value of arr) {
  if(value in obj31) {
    obj31[value]+=1;
  }
  else {
    obj31[value]=1;
  }
}
console.log(obj31)


// 3 swap keys and values
let obj72={ a: "x", b: "y", c: "z" }
// { x: "a", y: "b", z: "c" }
let obj74={};
for(let key in obj72) {
  obj74[obj72[key]]=key;
}
console.log(obj74)

// 4 find largest value key
let obj75={ a: 10, b: 50, c: 20 }
let mx=-1;
let ans="";
for(let key in obj75) {
  if(mx<obj75[key]) {
    mx=obj75[key];
    ans=key;
  }
}
console.log(ans)

// 5 flatten object
let obj78={ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
let obj79=[];
for(let key in obj78) {
obj79.push(obj78[key]);
}

let obj80=obj79.flat(Infinity)
console.log(obj80)

// 6 group people by city
let arr2=[
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]
let obj01={};
arr2.forEach((value) => {
  let name=value.name;
  let city=value.city;

    if(!obj01[city]) {
      obj01[city]=[];
    }
      obj01[city].push(name);
  
});
console.log(obj01)




// 7 filter

let obj10={ a: 20, b: 60, c: 40, d: 90 }
let obj0={};
for(let key in obj10) {
  if(obj10[key]>50) {
    obj0[key]=obj10[key];
  }
}
console.log(obj0)

//8  avg highest

let obj99={ A: [80, 90], B: [70, 75, 85] }

let maxi=-1;

let ans2;
for(let key in obj99) {
  let sum=0;
  obj99[key].forEach(elem=> {
    sum+=elem;
  })
  // console.log(value)
  if(maxi<(sum/obj99[key].length)) {
    maxi=(sum/obj99[key].length);
    console.log(maxi)
    ans2=key;    
    // console.log(ans2)
  }
}

console.log(ans2)


// 9 unique
let obj11={ x: [1,2,3], y: [2,3,4], z: [4,5] }


let set=new Set();
for(let key in obj11) {
  obj11[key].forEach(elem=> {
    set.add(elem);
  })
}
let arr69=[...set]
console.log(arr69)


// 13 sort object values entries by values 
let obj21={ a: 3, b: 1, c: 2 }

let ans69=[]

let sorted=Object.entries(obj21).sort((a,b)=>a[1]-b[1]);
console.log(sorted)

// 14 14. **Capitalize string values inside object**
    // - Input:
        
    //     ```jsx
    //     { name: "alice", city: "delhi" }
        
    //     ```
        
    // - Output:
        
    //     ```jsx
    //     { name: "Alice", city: "Delhi" }
    //     ```

let obj12={ name: "alice", city: "delhi" }

for(let key in obj12) {
  // let chabi=key;
  let value=obj12[key];

  obj12[key]=value.charAt(0).toUpperCase()+value.slice(1);


}

console.log(obj12)


// 15. **Convert object to query string**
//     - Input:
        
//         ```jsx
  let ena={ name: "Alice", age: 25 }     
//         ```        
//     - Output:        
//         ```
//         "name=Alice&age=25"
//         ```

let modified=Object.entries(ena).map( ([key,value])=> `${key}=${value}`

).join("&");
console.log(modified)


// 16. **Count even and odd numbers in array**
    
       let riya= [1,2,3,4,5,6]

       let even=0;
       let odd=0;

       riya.forEach(elem=> {
        if(elem%2==0) even++;
        else {
          odd++;
        }
       })
       let laila={
        "even":even, 
        "odd":odd
       }
       console.log(laila)


      //  17. **Find common keys between two objects**
       let majnu= { a: 1, b: 2, c: 3 },kela= { b: 4, c: 5, d: 6 };
       let pagal=[];
       for(let key in kela) {
        if(key in majnu)  {
          pagal.push(key);
        }
       }

       console.log(pagal)


// 18. **Convert array of objects to lookup by id**
        let prj=[{ id: 1, name: "A" }, { id: 2, name: "B" }]
        // let poj={ 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }

        let ld=prj.reduce((acc,elem)=> {
          acc[elem.id]=elem;
          return acc;

        },{})
        

        console.log(ld)



// 19. Check if all values in object are numbers**
   
        let ar45={ a: 1, b: "hello", c: 3 }
        ans=true;

        for(let key in ar45) {
          if(typeof ar45[key]!=Number) {
            ans=false;
            break;
          } 
        }

        console.log(ans)


// 1. **Sum all transactions per user**
    // - Input:
        
        let ar10=[
          { user: "A", amount: 100 },
          { user: "B", amount: 200 },
          { user: "A", amount: 50 }
        ]

       let ans67=ar10.reduce((acc,curr)=> {
        if(!acc[curr.user]) acc[curr.user]=curr.amount;
        else acc[curr.user]+=curr.amount;
        return acc;
       },{})
       console.log(ans67)
        

      // 2. **Transform API response to object (id → name)**
        let sank=[
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" }
        ]

        let ans10=sank.reduce((acc,curr)=> {
          acc[curr.id]=curr.name;
          return acc;
        },{})

        console.log(ans10)

        // 3 Remove falsy values from object

        let ar20={ a: 0, b: null, c: "hello", d: undefined, e: 5 }

        let jawab={};
        for(let key in ar20) {
          if(ar20[key]) jawab[key]=ar20[key];
        }
        console.log(jawab)

        // 4. Check for permissions from roles
        roles={ admin:["read","write"], user:["read"], staff: ["write"]}
        checkRole="user";
        action="write";

        console.log(roles[checkRole].includes(action)) 


        // 5. 5. **Transform array of orders into revenue per category**
        let ar19=[
          { id: 1, category: "electronics", price: 100 },
          { id: 2, category: "clothes", price: 50 },
          { id: 3, category: "electronics", price: 200 }
        ]

        let as={};

        ar19.reduce((acc,curr)=> {
          if(!acc[curr.category]) acc[curr.category]=curr.price;
          else  acc[curr.category]+=curr.price;
          return acc;
        },as)
        console.log(as)



        // 6. **Remove duplicate objects by id**
        let lasn=[
          { id: 1, name: "A" },
          { id: 2, name: "B" },
          { id: 1, name: "A" }
        ]


        let st=new Set();


        let loda=lasn.filter(item=> {
          if(st.has(item.id)) return false;
          st.add(item.id);
          return true;
        })

        console.log(loda)


        // 7. **Chunk object entries into groups of size**
        let bharna={ a: 1, b: 2, c: 3, d: 4 }, size=2
        
        let karna=[ [["a",1],["b",2]], [["c",3],["d",4]] ]

        let turn=Object.entries(bharna)
        console.log(turn)
        let res=[];
        for (let i = 0; i < turn.length; i+=size) {
          res.push(turn.slice(i,i+size));              
        }
        console.log(res)



        // 8. **Find longest string among object values**
        let hack={ a: "apple", b: "banana", c: "kiwi" }
        let hacker;
        let ans001=0;
        for(let key in hack) {
          if(ans001<hack[key].length) {
            hacker=hack[key];
            ans001=hack[key].length;
          }
        }
        console.log(hacker)


        // 8. Convert the object where **languages** are the top-level keys, and inside each are **translation strings by key into** an object where **translation keys** are the top-level keys, and inside each you store values per language [HARD**]
        let sher={
          en: { hello: "Hello", bye: "Goodbye" },
          fr: { hello: "Bonjour", bye: "Au revoir" },
          es: { hello: "Hola" }
        }
        // {
        //   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
        //   bye: { en: "Goodbye", fr: "Au revoir" }
        // }

        let nakli={};
        for(let lang in sher) {
          for(let key in sher[lang]) {
            if(!nakli[key]) {
              nakli[key]={}
            }
            nakli[key][lang]=sher[lang][key];
          }
        }
        console.log(nakli)


    
// 9. **Build index of ids grouped by category**
        
       let sjk= [
          { id: 1, category: "fruit" },
          { id: 2, category: "veggie" },
          { id: 3, category: "fruit" }
        ]
        
        // { fruit: [1,3], veggie: [2] }

        let paisa=sjk.reduce((acc,curr)=> {
          if(!acc[curr.category]) acc[curr.category]=[];
          acc[curr.category].push(curr.id);
          return acc;

        },{})
        console.log(paisa)
      


        // 10. **Remove deeply nested key from object**
        
        let bakra={ a: { b: { c: 1, d: 2 } } };//remove "c"
        // { a: { b: { d: 2 } } }
        const c='c';

        function removekey(obj,remove) {
          for(let key in obj) {
            if(key==remove) {
              delete obj[key];
              break;
            }
            else if(obj[key]!=remove&&obj[key]!==null) {
              removekey(obj[key],remove);
            }
          }
        }
        removekey(bakra,c);

        console.log(bakra)


        // 11. **Check if two objects are deeply equal**
        let lamda={ a: { x: 1, y: 2 } }, tamda={ a: { x: 1, y: 2 } }

        function check(obj1,obj2) {
          // this thing will check the value
          if(obj1===obj2) return true;
          if(typeof obj1!='object'||typeof obj2!='object'||obj2==null||obj1==null) {
            return false;
          }
          let key1=Object.keys(obj1);
          let key2=Object.keys(obj2);
          if(key1.length!=key2.length) return false;
          for(let value of key1) {
            if(!key2.includes(value)) return false;
            // entering inside 
            if(!check(obj1[value],obj2[value])) return false;
          }
          return true;
        } 

        console.log(check(lamda,tamda))


        // 12. **Deep flatten nested arrays inside object**
        let abc={ a: [1, [2, [3]]], b: [4, [5]] }
        
        // { a: [1,2,3], b: [4,5] }

       for(let key in abc) {
        if(Array.isArray(abc[key])) {
          let loda=abc[key].flat(Infinity);
          abc[key]=loda;
        }
        // else if(abc[key]==='object'&&abc[key]!==null) {
        // we can make a recusive call to you knoww make it deeper and interview ready 
                    
        // }
       }
       console.log(abc)



      //  13. **Find most repeated word across categories**


        let chodd={ fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }
        
        // apple
        let madar={};
        for(let key in chodd) {
          for(let value of chodd[key]) {
            madar[value]=(madar[value]||0)+1;
          }
        }

        let ans72=-1;
        let realans=-1;

        for(let key in chodd) {
          for(let value of chodd[key]) {
            if(madar[value]>ans72) {
              ans72=madar[value];
              realans=value;
            }
          }
        }
        console.log(realans)


        // 14. **Find intersection of all arrays in object**
        let kutta={ a: [1,2,3], b: [2,3,4], c: [3,4,5] }

        let billi=Object.values(kutta)

        let res10=billi.reduce((acc,curr)=> {
          return acc.filter(value=> 
            curr.includes(value)
          )
          // return acc;
        })

        console.log(res10);

        // 15. **Deep merge two nested objects**
    
        let topa={ a: { x: 1, y: 2 } }
        let topi ={ a: { y: 3, z: 4 } }

        let lodaa={};

        function merge(topa,topi) {
          let result= {...topa};

          for(let key in topi) {
            if(typeof topi[key]==="object"&& typeof result[key]==="object") {
              result[key]=merge(result[key],topi[key]);
            }
            else {
              // value of other datasets 
              result[key]=topi[key];
            }
          }

          return result;
        }

        console.log(merge(topa,topi))


        

        
    // - Output:
        // ```jsx
    //     { a: { x: 1, y: 3, z: 4 } }
    //     ```




    // 16. **Nested object destructuring**
    // - Input:
        
    //     ```jsx
       let task= { user: { profile: { name: "Alice", age: 25 } } }
        
    //     ```
        
    // - Output:
        
    //     ```
    //     Alice 25
        
    //     ```

    const {user: {profile: {name,age}}}=task

    console.log(name,age)


    // 17. **Find top N keys by value**
    // - Input:
        
    //     ```jsx
        let abj={ a: 10, b: 50, c: 30, d: 40 };
        let tokla=2;
        
    //     ```
        
    // - Output:
        
    //     ```jsx
    //     ["b","d"]
    //     ```

    let dik=[];

    let nas=Object.entries(abj).sort((a,b)=>b[1]-a[1]);

    let top=nas.slice(0,tokla);
    let all=top.map(curr=> {
      return curr[0];
    })
    console.log(all)
    // oneliner

    let lajawab=Object.entries(abj).sort((a,b)=>b[1]-a[1]).slice(0,tokla).map(elem=> elem[0]);
    console.log(lajawab)

    // 18. **Sort array of objects by name then age**
    // - Input:
        
        // ```jsx
        let gv=[
          { name: "Alice", age: 30 },
          { name: "Bob", age: 25 },
          { name: "Alice", age: 22 }
        ]
        
        // ```
        
    // - Output:
        
    //     ```jsx
    //     [
    //       { name: "Alice", age: 22 },
    //       { name: "Alice", age: 30 },
    //       { name: "Bob", age: 25 }
    //     ]
    //     ```
    let dj=gv;


    dj.sort((a,b)=> {
      if(a.name===b.name) {
        return a.age-b.age;
      }
      return a.name.localeCompare(b.name);
    })
    console.log(dj)



    // 19. Reconcile two lists (missing + extra items)
    // - Input:
        
    //     ```jsx
       let expected=["a","b","c"]
       let actual=["b","c","d"]
       let extra=[]
       let missing=[]
    //     ```
        
    // - Output:
        let eset=new Set(expected);
        let acset=new Set(actual);

    //     ```
    //     { missing:["a"], extra:["d"] }
    //     ```

    for(let item of eset) {
      if(!acset.has(item)) {
        missing.push(item);
      }
    }
    for(let item of acset) {
      if(!eset.has(item)) {
        extra.push(item);
      }
    }

    console.log({missing,extra})
    


    // 20. **Merge two objects (no sum, override second)**
    // - Input:
        
    //     ```jsx
      let one= { a: 10, b: 20 }
      let two= { a: 5, c: 15 }
        
    //     ```
        
    // - Output:
        
    //     ```jsx
    //     { a: 5, b: 20, c: 15 }
    //     ```

    let toda={}
    

    for(let key in one) {
      toda[key]=one[key];
    }
    for(let key in two) {
      toda[key]=two[key];
    }

    console.log(toda)

