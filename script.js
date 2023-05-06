let arr=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
arr.map((element)=>{
	let words=element.split(" ");
	let updatedstring=words.reduce((prev, current, index)=> {
		if(current!= "The" && current!= "an" && current!= "a"){
			return prev+" "+ current;
		}
		return prev;
	},"")
	return updatedstring;
});
let mp ={};
updtedList.forEach((element)=>{
	mp[element]=arr[i];
});
updatedList.sort();
let ans=updatedList.map((element)=>{
	return mp[element];
})
console.log(ans);