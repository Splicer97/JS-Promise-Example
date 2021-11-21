const p = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log('preparing data...')
		const backendData = {
			server: "aws",
			port: 2000,
			status: "working"
		}
		resolve(backendData)
	}, 2000)
})

// p.then(data => {
// 	const p2 = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			data.modified = true
// 			resolve(data)
// 		}, 2000)
// 	})
// 	p2.then(clientData => {
// 		console.log('done', clientData)
// 	})
// })

p.then(data => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true
			resolve(data)
		}, 2000)
	})
})
	.then(clientData => {
		console.log('done', clientData)
	})
	.catch(error => console.error("error", error))
	.finally(() => console.log("finally"))


const sleep = ms => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), ms)
	})
}

// sleep(2000).then(() => console.log("sleep 2 seconds")).catch(error => console.error("error", error))
// sleep(3000).then(() => console.log("sleep 3 seconds")).catch(error => console.error("error", error))

// Promise.all([sleep(2000), sleep(3000)]).then(() => console.log("sleep all"))
// //метод all ждет, пока выполнятся все промисы и затем через then чтото выполняет

Promise.race([sleep(2000), sleep(3000)]).then(() => console.log("sleep race"))
// //метод race не ждет, пока выполнятся все промисы