console.log("Env variables");
let table=[]
for (let env in process.env){
   table.push( {env,value:process.env[env].substr(0,50)})
}
console.table(table)

