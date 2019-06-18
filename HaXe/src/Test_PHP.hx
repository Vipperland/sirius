package;
import jotun.Jotun;
import jotun.db.Token;
import jotun.php.file.Uploader;
import jotun.serial.JsonTool;
import jotun.tools.Utils;
import jotun.utils.Dice;

/**
 * ...
 * @author Rafael Moreira
 */
class Test_PHP {

	static public function main() {
		//var img:Image = new Image('../assets/img/image.jpg');
		//img.fit(300,300).save('../assets/img/test.jpg');
		//trace('===================================================== Headers');
		var buff:Array<Dynamic> = [];
		Dice.All(Jotun.header.getClientHeaders(), function(p:String, v:String){
			buff.push(p + ': ' + v);
		});
		buff.push('===================================================== Parameters: (Method:' + Jotun.domain.getRequestMethod() + ')');
		Dice.All(Jotun.domain.params, function(p:String, v:String){
			buff.push(p + ': ' + v);
		});
		buff.push('===================================================== APPLICATION/JSON Content-Type');
		buff.push(Utils.sruString(Jotun.domain.input));
		
		buff.push('===================================================== Files');
		buff.push(Uploader.save('./uploads/', {
			thumb:{
				width:240,
				height:160,
				create:true,
			},
			small:{
				width:480,
				height:320,
				create:true,
			},
			medium:{
				width:960,
				height:640,
				create:true,
			},
			large:{
				width:1920,
				height:1280,
				create:true,
			},
		}).list);
		
		buff.push('===================================================== Database Handshake');
		Jotun.gate.open(Token.localhost('decorador'), true);
		if (Jotun.gate.isOpen()){
			Jotun.gate.setPdoAttributes(true);
			buff.push('Successful Handshake!');
		}else{
			buff.push(Jotun.gate.errors);
		}
		
		Jotun.header.setJSON(buff);
		
	}
	
}