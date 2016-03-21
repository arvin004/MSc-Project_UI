/*	
 	function to get the script needed
 	params: scriptId, scriptUrl, keyword
 */
function getScript (){

	function FileHelper()
	{}
	{
	    FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
	    {
	        var request = new XMLHttpRequest();
	        request.open("GET", pathOfFileToReadFrom, false);
	        request.send(null);
	        var returnValue = request.responseText;
	        	        
	       getKeyword(returnValue, "if");
	       getKeyword(returnValue, "switch");
	        
	    }
	}
	
	var text = FileHelper.readStringFromFileAtPath ( "http://localhost/js/login.js" );

}

/*	
	function to extract the value needed
	params: String(script content), keyword
*/
function extractValue(str,keyword, pos){

    var startOfSection = pos;
    var startOfValue = str.indexOf('(',startOfSection)+1;
    var endOffValue  = str.indexOf('{',startOfValue)-1; //Position of first char AFTER the value, as needed for substring

    var value = str.substring(startOfValue,endOffValue);
        
    return value;
}


/*	
	function to get all occurrences of keyword
	params: String(script content), keyword
*/
function getKeyword(str, keyword) {
	var statements = [];
    for(var pos = str.indexOf(keyword); pos !== -1; pos = str.indexOf(keyword, pos + 1)) {
    	statements.push(extractValue(str, keyword, pos));
    }
        
    downloadXls(statements);
}


/*	
	function to input statement in xls
	params: String(keyword content)
*/

function downloadXls(statements)
{
    var array = typeof statements != 'object' ? JSON.parse(statements) : statements;
    var str = '';
  
    for(var key in array) {
    	var line = new Array();
        var value = array[key];
        line.push(value);
        
        str += line;
        str += '\r\n';
    }
    
    window.open( "data:application/msexcel;charset=utf-8," + encodeURIComponent(str));
    
}

getScript();