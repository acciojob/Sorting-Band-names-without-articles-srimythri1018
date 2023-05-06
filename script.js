let arr=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let updatedList=arr.map((element)=>{
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
updatedList.forEach((element, index)=>{
	mp[element]=arr[index];
});
updatedList.sort();
let ans=updatedList.map((element)=>{
	return mp[element];
})
console.log(ans);
let tags=[];
const tag_li=document.getElementByTagName('li').length;
