/*
Test.describe('change', () => {
	Test.it('Basic tests 1', () => {
		const s1 = 'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0091\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha'
		const s11 = 'Program title: Hammer\nAuthor: Tolkien\nCorporation: IB\nPhone: +1-503-555-0090\nDate: Tues March 29, 2017\nVersion: 2.0\nLevel: Release'
		const s12 = 'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-009\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha'

		Test.assertEquals(change(s1, 'Ladder', '1.1'), 'Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1')
		Test.assertEquals(change(s11, 'Balance', '1.5.6'), 'Program: Balance Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 2.0')
		Test.assertEquals(change(s12, 'Ladder', '1.1'), 'ERROR: VERSION or PHONE')
	})
})
*/
const s1 = 'Program title: Primes\nAuthor: Kern\nCorporation: Gold\nPhone: +1-503-555-0091\nDate: Tues April 9, 2005\nVersion: 6.7\nLevel: Alpha'
const s2 = 'Program title: Hammer\nAuthor: Tolkien\nCorporation: IB\nPhone: +1-503-555-0090\nDate: Tues March 29, 2017\nVersion: 2.0\nLevel: Release'

// Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1' 
// Program: Ladder Author: g964 Phone: +1-503-555-0091 Date: 2019-01-01 Version: 1.1'

// 'Program: Balance Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 2.0',
// 'Program: Balance Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.5.6'

function change(s, prog, version) {
	let breakStr = s.split(" ");
	// console.log(breakStr);
	let valid = true;

	let result = breakStr.map((e,i) => {
		// console.log(e, i);

		switch(i) {
			case 0: return e+": " + prog + " "; 
			case 2: return "Author: g964 ";
			case 4: return "Phone: ";

			case 5:
				// check valid phone #
				let phoneNum = e.split("-");
				// console.log(phoneNum)
				let newNum = phoneNum.map((n,d) => {
					// console.log(n,d);
					switch(d) {
						case 0: 
							if(n == "+1") return "+1-";
							else valid = false;
						case 1: 
						case 2:
							if(n.length ===3 ) return n+"-"; 
							else valid = false;
						case 3:
							let lastDig = n.split("\n");
							// console.log(n);
							if(lastDig[0].length === 4) return lastDig[0] + " Date: 2019-01-01 ";
							else valid = false;
						default: break;
					}
				});
				return newNum.join("");

			case 9:
				let versionStr = e.split("\n");
				return versionStr[1] + " ";
			case 10:
				let versionNum = version.split("\n");
				let oldVersionNum = e.split("\n");
				if(oldVersionNum[0] == "2.0") {
					return "2.0";
				}else{
					let verNumDig = versionNum[0].split(".");
					switch(verNumDig.length) {
						case 2: return verNumDig[0]+"."+verNumDig[1];
						case 3: return verNumDig[0]+"."+verNumDig[1]+"."+verNumDig[2];
						default: valid = false;
					}
				} 
			default: break;
		}
	});

	if (valid) return result.join("");
	else return 'ERROR: VERSION or PHONE';
}

change(s2,"Ladder","1.1");