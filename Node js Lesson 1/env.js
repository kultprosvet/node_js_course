console.log("Env variables");
for (let env in process.env){
    console.log(`${env} ${process.env[env]}`)
}
process.exit(1)