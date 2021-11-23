/**
 * Required if like laravel
 * 1. We will be implementing a voting scheme
 */

const req : {[key: string] : string} = {
    roles_logic : "replace",
    anyotherfield : "something"
    
}
 function requiredIf(currentValue : string | undefined, condition : string) : boolean | never {

        let makeRequired : number[] = [] //only signifies if this should be required or not
        const fieldsWithValues = condition.split(',')
        fieldsWithValues.forEach(intervalValue => {
            const fieldWithValue = intervalValue.split(':')
            const field = fieldWithValue[0]
            const value = fieldWithValue[1].split('|')
            
            if(req[field] && value.includes(req[field]))
            {
                makeRequired.push(0) //0 signifies that this should be added as a validation
            }
            // if(req[field] && req[field] !== value)
            else
               {
                   //do nothing and skip
                   //this will skip for replace
                   makeRequired.push(1) // 1 signifies that this should be skipped
               }
            

        })
       console.log(makeRequired)
       const sum = makeRequired.reduce((acc, curr) => acc + curr)
       console.log(sum)
       if(sum == 0 && !currentValue)
        throw new Error('Value must be defined')
        return true
        
    //skip
}

console.log(requiredIf(undefined, "roles_logic:replace|append|delete,anyotherfield:something"))
