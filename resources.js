let resources = () => {


	let goal = _.map(Game.spawns['Spawn1'].room.find(FIND_SOURCES), function(source){
		return {pos: source.pos, range: 1};
	});
}


module.exports = resources;