
var assert = require('assert');
describe('config', function () {
  it('test2', function () {
  	var parse = require('csv-parse');

	var input = '#Welcome\n"1","2"\n"a","b"';
	parse(input, {comment: '#'}, function(err, output){
	  assert.deepEqual(output,[ [ '1', '2' ], [ 'a', 'b' ] ]);
	});		
  })
  it('test2', function (done) {
  	(async function (){
	 	const csv = require('async-csv');
	 	var input = '"1","2"\n"a","b"';
		let result2 = await csv.parse(input,{});
		try{
			assert.deepEqual(result2,[ [ '1', '2' ], [ 'a', 'b' ] ]);
		}catch(e){
			console.log(e)
		}
		done()
	})()
  })
  it('test3', async () => {
  	 	const csv = require('async-csv');
	 	var input = '"1","2"\n"a","b"';
		let result2 = await csv.parse(input,{});
		try{
			assert.deepEqual(result2,[ [ '1', '2' ], [ 'a', 'b' ] ]);
		}catch(e){
			console.log(e)
		}
  })
   it('test4', async () => {
  	 	const csv = require('async-csv');
	 	var input = '"1","2"\n"a","b"';
		let result2 = await csv.parse(input,{});
		assert.deepEqual(result2,[ [ '1', '2' ], [ 'a', 'b' ] ]);
  })
})


