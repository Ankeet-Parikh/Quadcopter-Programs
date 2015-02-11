module.exports = PID;

function (Kp,Ki,Kd){
	this.initalize(Kp,Ki,Kd);
	this.reset();
}

PID.prototype.initalize(Kp,Ki,Kd){
	this._Kp = Kp;
	this._Ki = Ki;
	this._Kd = Kd;
}

PID.prototype.reset() = function(){
	this._PrevTime = 0;
	this._PrevError = 0;
	this._ErrorIntegral = 0;
}	

PID.prototype.getCommand = function(Xgoal,Xstate){
	//Get Current time;
	var CurrentTime = Data.now();
	//Get dt somehow...im cheating a bit here
	var dt = (CurrentTime - PrevTime)/100;
	//Find Error
	var e = (Xgoal - Xstate);
	//Find Derivation of Error
	var de = (e - this._last_error) / dt;
	//Find Integral as a Discrete Summation
	this._ErrorIntegral += e*dt;
	
	//Update variables
	this._PrevTime = CurrentTime;
	this._PrevError = e;
	
	//Get calculated Command
	var Command = this._Kp * e + this._Ki * this._ErrorIntegral + this.Kd *  de
	
	return Command;
}
