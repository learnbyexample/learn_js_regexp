// CommonRegexJS

let data = 'hello 255.21.255.22 okay'

const comm = new CommonRegex(data)

comm.IPv4

let new_data = '23.14.2.4.2 255.21.255.22 567.12.2.1'

const ip = new CommonRegex(new_data)

ip.IPv4

