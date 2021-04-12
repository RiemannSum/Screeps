function command(creep){
	creep.suicide()
}

module.exports = {
	exec: command,
	command: "killAll"
};