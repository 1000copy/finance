class Item {
	constructor(name,code){
		this.name = name 
		this.code = code
	}
}
class Items {
	constructor(){
		this.items = []
	}
	add(item){
		this.items.push(item)
	}
}