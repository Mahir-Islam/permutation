//Returns greatest value in multidimensional array
function geth(o){
    var vals = [];    
    for(var i in o){
       vals.push(o[i]);
    }

    var max = Math.max.apply(null, vals);
    return max;

     for(var i in o){
        if(o[i] == max){
            return i;
        }
    }
}

//Takes in md-array and returns dictionary
function Permutation(lists)
{
	Perm_Dict = {}
	for (i = 0; i < lists.length; i++)
	{
		for (j = 0; j < lists[i].length; j++)
		{
			Perm_Dict[lists[i][j]] = lists[i][(j+1) % lists[i].length]
		}

	}

	for (i = 1; i <= geth(Perm_Dict); i++)
	{
		if (!(i in Perm_Dict)) {
			Perm_Dict[i] = i;
		}
	}

	return Perm_Dict}

//Multiplies 2 dictionaries and returns md-array
function Multiply(x,y)
{
	let temp_list = [];

	max_value = Math.max(geth(x),geth(y));

	New_Dict = {}

	for (i = 1; i <= max_value; i++)
	{
		if (!(i in x)) {
			x[i] = i;
		} else if (!(i in y)) {
			y[i] = i;
		}
	}

	for (i = 1; i <= max_value; i++)
	{
		New_Dict[i] = x[y[i]];		
	}

	let cycle_list = [];
	let template_list  = [];


	for (i = 1; i <= geth(New_Dict); i++)
	{
		if (New_Dict[i] != i) {

			template_list.push(i);
			template_list.push(New_Dict[i]);
			new_val = New_Dict[New_Dict[i]];

			while (new_val != template_list[1]) {
				template_list.push(new_val);
				new_val = New_Dict[new_val];
			}

			cycle_list.push(template_list);
			template_list = [];

		}
	}

	resultant = [];

	for (i = 0; i < cycle_list.length; i++) {
		if ( Math.min.apply(Math, cycle_list[i]) == cycle_list[i][0] ) {
			cycle_list[i].pop();
			resultant.push( cycle_list[i] );
		}
	}

	return resultant;
}

//Converts md-array to string
function Format_HTML(s) {
	
	perm_string = ""
	temp_string = ""
		
	for (i = 0; i < s.length; i++) {

			temp_string = "("
			
			for (j = 0; j < s[i].length; j++) {
				temp_string += `${s[i][j]},`
			}

			temp_string = temp_string.slice(0, -1);
			temp_string += ")";
			perm_string += temp_string;

	}
	
	if (perm_string == "") {perm_string = "e";}

	return perm_string;
}

//Takes in string and returns md-array
function HTML_to_MDA(s) {

	raw_array = s.split(')');
	raw_array = raw_array.slice(0,-1);
	resultant_array = [];

	for (i = 0; i < raw_array.length; i++) {
		x = raw_array[i];
		x = x.substring(1);
		resultant_array.push(x.split(',').map(Number));
	}

	return resultant_array;
}

//Converts md-array to invert permutation
function Invert(s) { 
	for (i = 0; i < s.length; i++) {
		s[i].reverse();
		s[i].splice(0,0,s[i].pop());
	}

	return s
}

//LCM is used to find orders
//quantify converts md-array to array of lengths
function quantify(s) {
	for (var i = 0; i < s.length; i++) {
		s[i] = s[i].length;
	}
	return s
}

const gcd = (a, b) => a ? gcd(b % a, a) : b;
const lcm = (a, b) => a * b / gcd(a, b);