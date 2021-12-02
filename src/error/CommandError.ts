export class CommandError extends Error {
	constructor(message: string = 'command error') {
		super(message);
	}
}
