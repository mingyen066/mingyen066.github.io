var vertexShaderText = 
[
'precision mediump float;',
'',
'attribute vec2 vertPosition;',
'',
'void main()', 
'{',
'	gl_Position = vec4(vertPosition, 0.0, 1.0);',
'}'
].join('\n');

var fragmentShaderText = 
[
'precision mediump float;',
'',
'void main()',
'{', 
'	gl.fragColor = vec4(1.0, 0.0, 0.0, 1.0);',
'}'
]
var InitDemo = function(){
	console.log('This is working');

	var canvas = document.getElementById('game-surface');
	var gl = canvas.getContext('webgl'); 

	gl.clearColor(0.75, 0.85, 0.8, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
 
	//canvas.width = window.innerWidth;
	//canvas.height = window.innerHeight;
	//gl.viewport(0, 0, window.innerWidth, window.innerHeight)
	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
	
	gl.shaderSource(vertexShader, vertexShaderText);
	gl.shaderSource(fragmentShader, fragmentShaderText);

	gl.compileShader(vertexShader);
	if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)){
		console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader))
		return;
	}
	gl.compileShader(fragmentShader);
	if(!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)){
		console.error('ERROR compiling fragmentShader shader!', gl.getShaderInfoLog(fragmentShader))
		return;
	}
};

// function vertexShader(vertPosition, vertColor){
// 	return {
// 		fragColor: vertColor,
// 		gl_Position: [vertPosition.x, vertPosition.y, 0.0, 1.0]
// 	};
// }