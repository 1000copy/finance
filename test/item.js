
var assert = require('assert');
describe('config', function () {
	 it('csv', async () => {
			const fs = require('await-fs');
			try{
				let input = await fs.readFile('./doc/科目列表.csv','utf8')
		  	 	const csv = require('async-csv');
			 	let result2 = await csv.parse(input,{});
				assert.deepEqual(result2.length,190);
			}catch(err){
				console.log(err)
			}

	  })
})
