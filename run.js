const dns = require('dns');


const program_name = process.argv[0]; 
const script_path = process.argv[1]; 
const domain = process.argv[2];

console.log("running script " + program_name + " in " + script_path);
console.log("looking up " + domain);

dns.resolve4(domain, 'A', (err, data) => {
	console.log('Getting hostnames for domain ' + domain);
	Object.entries(data).forEach(([key, IPAddress]) => {
		dns.reverse(IPAddress, (err, hostnames) => {
			console.log('reverse lookup for hostnames of ' + IPAddress + ' IP address');
			console.log(hostnames);
		});
	});
});

dns.resolveMx(domain, (err, data) => {
	console.log('MX records are');
	console.log(data);
});