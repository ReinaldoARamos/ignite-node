import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req

if(req.method === "GET") {
    return res.end(JSON.stringify(users))
}

if(req.method === "POST") {
    users.push({
        id: 1,
        name: "reinaldo",
        cargo: "dev Jr"
    })
    return res.end(JSON.stringify(users))
}


    res.end(users)
})

server.listen(3333)


