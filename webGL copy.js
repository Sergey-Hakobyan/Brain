const brainData = 
[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,3,3,3,3,3,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],    
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,1,1,1,1,1,1,1,1,2,5,5,3,2,1,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,1,2,2,2,2,3,3,3,3,2,1,1,5,3,2,1,1,1,2,2,2,1,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,1,1,1,1,3,3,5,5,3,2,1,1,1,1,1,2,2,3,3,3,2,2,1,1,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,2,3,2,1,1,5,5,3,2,1,1,1,1,2,2,3,5,5,2,1,1,1,1,1,1,2,2,4,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,2,2,3,5,5,5,5,5,3,1,1,3,2,1,1,2,3,3,3,3,2,2,2,1,1,1,1,1,1,1,1,1,2,4,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,4,1,2,2,3,5,5,1,3,5,5,5,3,1,1,1,2,1,2,3,5,5,5,5,5,3,2,1,1,1,1,1,1,1,1,1,1,2,4,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,4,1,3,3,5,5,2,2,3,5,5,5,3,1,1,2,2,1,2,3,5,5,3,3,5,5,5,3,1,1,1,2,2,2,2,2,2,1,1,2,4,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,4,1,3,5,5,2,2,3,3,5,5,5,3,1,1,2,2,2,2,3,5,5,3,1,1,3,5,5,5,3,1,1,2,1,1,1,1,1,2,2,2,2,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,4,1,3,5,3,1,2,3,5,5,5,5,3,1,1,1,2,4,1,1,2,2,2,2,2,1,1,3,3,5,5,3,1,1,1,2,1,2,2,2,4,4,4,2,2,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,4,1,3,5,2,1,2,3,5,5,5,5,3,1,1,2,4,1,2,2,3,3,3,3,2,2,2,3,5,5,3,1,1,1,2,2,4,3,3,2,1,1,1,1,1,1,4,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,3,5,5,2,1,2,3,5,5,5,3,2,1,2,4,1,2,2,3,5,5,5,5,3,4,4,2,3,3,1,1,1,1,2,4,3,5,3,2,1,1,1,1,1,1,2,4,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,2,3,5,2,1,1,2,3,5,5,5,3,2,2,4,1,2,2,3,5,5,5,3,5,5,3,4,2,2,1,1,1,1,1,2,4,3,5,3,1,1,1,1,4,4,1,2,4,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,2,3,5,2,1,1,1,2,3,3,3,2,1,4,4,1,2,4,3,5,3,3,2,3,3,5,3,4,2,2,1,1,1,2,2,4,3,5,3,1,1,1,4,3,3,4,2,4,4,0,0,0,0],
    [0,0,0,0,0,0,0,1,2,1,1,1,3,3,2,3,2,2,2,2,1,4,1,2,4,3,5,5,3,2,1,2,4,3,4,4,4,4,2,1,1,2,1,3,5,5,3,1,1,4,3,3,3,3,4,2,4,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,2,3,5,5,5,5,5,3,3,1,2,1,1,1,2,3,5,5,5,3,2,2,2,3,4,4,4,3,4,2,1,1,1,3,5,5,3,4,1,1,4,1,1,1,2,3,4,3,4,0,0,0],
    [0,0,0,0,0,4,1,2,2,3,3,5,5,5,5,5,3,2,3,1,2,1,2,4,3,5,5,5,5,3,2,2,2,3,3,4,4,3,4,2,2,2,3,5,5,3,4,1,1,4,1,2,2,2,2,4,3,2,4,0,0],
    [0,0,0,0,4,1,2,2,2,2,2,3,3,3,5,5,3,2,2,1,2,1,2,4,3,5,5,5,5,5,3,4,2,2,2,3,3,5,3,3,2,2,2,3,5,3,4,1,1,4,1,4,1,1,1,3,3,1,2,0,0],
    [0,0,0,4,1,2,2,2,2,2,2,2,2,3,5,5,3,2,2,1,1,1,2,4,4,3,3,3,3,3,4,4,4,2,2,2,3,5,5,5,3,4,2,1,3,3,4,1,1,4,1,4,2,1,1,1,3,1,1,4,0],
    [0,0,4,1,1,2,2,2,1,1,1,1,2,3,5,5,3,2,2,1,1,2,2,4,2,2,2,2,2,2,2,4,4,4,2,2,2,3,5,5,3,4,2,2,1,3,3,1,1,4,1,4,2,1,1,1,3,1,1,4,0],
    [0,0,4,1,2,2,2,1,1,1,1,2,3,5,5,5,3,2,2,1,1,2,2,2,3,3,3,3,3,3,3,2,2,3,4,2,2,1,4,5,5,3,4,1,1,1,1,1,1,1,4,1,4,2,1,1,4,3,4,4,0],
    [0,0,3,1,1,1,1,2,2,2,2,2,3,5,5,3,2,2,1,1,1,2,3,5,5,5,5,5,3,2,2,3,3,5,3,4,2,1,1,4,5,3,4,2,1,1,1,1,1,1,4,1,4,2,1,1,1,3,3,4,0],
    [0,0,3,3,1,2,2,3,3,3,5,5,5,5,3,2,2,1,1,1,2,3,5,5,5,5,5,5,5,3,2,2,2,3,5,3,4,1,1,4,5,5,3,2,1,1,1,1,1,2,4,1,4,2,1,1,1,3,3,4,0],
    [0,0,3,2,2,2,3,5,5,5,5,5,5,3,2,2,1,1,1,2,3,5,5,3,3,3,3,3,3,3,3,2,1,1,2,4,2,1,1,4,5,5,3,2,1,1,1,1,1,2,4,1,4,2,1,1,1,3,3,1,4],
    [0,4,2,1,2,2,3,3,5,5,5,5,3,2,2,2,1,1,1,2,3,5,3,2,2,2,2,2,2,4,3,2,2,2,1,1,2,2,2,4,5,5,3,2,1,1,1,2,2,3,2,1,2,1,1,1,1,3,2,1,4],
    [4,2,1,1,1,2,2,2,3,3,3,3,2,2,2,1,1,1,2,3,5,5,3,2,1,3,4,4,2,2,2,2,2,4,2,2,2,1,2,1,5,3,2,1,1,2,2,2,3,2,1,2,1,1,1,1,3,3,1,1,4],
    [4,2,1,1,1,1,2,2,2,2,2,2,2,2,1,1,1,2,2,3,5,5,3,2,1,1,1,1,4,4,4,4,4,2,2,1,1,2,1,5,5,3,2,1,4,3,3,3,2,1,1,2,1,1,1,1,3,1,1,2,4],
    [2,1,1,1,1,2,1,1,1,1,1,2,2,1,1,1,1,2,3,5,5,5,3,3,2,2,3,3,1,1,4,3,4,4,2,1,1,1,2,3,3,2,1,1,2,4,2,2,1,1,2,1,1,1,1,3,3,1,1,2,4],
    [2,1,2,2,2,1,1,1,1,2,2,1,1,1,1,1,2,1,2,5,5,5,5,5,3,2,2,2,3,3,2,4,3,4,2,1,1,1,1,2,2,1,1,1,2,4,1,1,1,2,1,1,1,1,3,3,1,1,2,4,0],
    [2,1,2,2,1,2,2,2,2,3,3,3,2,1,1,1,2,1,2,3,5,5,5,5,5,3,2,1,2,2,3,2,4,3,4,2,1,1,1,1,1,1,1,2,4,1,1,2,2,1,1,1,1,3,3,2,1,1,2,4,0],
    [2,2,1,1,2,2,3,5,5,5,3,2,3,2,1,1,2,1,2,3,3,3,5,5,3,3,3,2,1,1,2,4,2,4,3,4,2,1,1,1,1,1,2,4,2,1,4,1,1,1,1,3,3,3,2,1,1,2,4,3,4],
    [2,1,1,1,2,3,5,5,5,5,3,2,1,1,1,2,2,2,2,2,2,3,3,3,3,3,3,2,2,1,1,2,4,2,4,3,4,2,1,1,1,2,4,2,1,1,4,1,1,1,3,3,4,2,1,1,1,2,4,2,4],
    [4,2,1,2,2,3,5,5,5,3,2,1,1,1,1,2,2,3,1,1,1,2,2,4,4,2,2,2,2,1,1,1,2,4,2,4,3,4,2,2,2,4,3,2,1,2,4,2,1,1,3,4,2,1,1,1,2,4,3,1,4],
    [4,2,1,2,2,3,3,3,3,2,2,1,3,1,1,2,2,3,3,3,3,1,1,2,2,3,2,2,1,1,1,1,1,2,2,4,3,3,4,4,3,3,2,1,1,2,4,2,1,1,3,4,1,1,2,2,4,3,2,2,4],
    [4,3,2,2,2,2,3,2,2,2,1,2,3,1,2,2,3,5,5,3,2,3,3,1,1,2,4,2,2,1,1,1,1,1,1,2,4,3,3,3,4,2,1,1,2,2,2,1,1,1,3,4,1,2,4,3,3,2,1,2,4],
    [0,3,4,4,2,2,2,2,2,1,1,2,1,1,2,3,5,5,5,5,3,2,2,3,3,1,2,4,2,1,1,1,1,1,1,1,2,3,4,4,2,1,1,1,2,4,1,1,1,1,3,4,2,4,3,3,4,1,2,4,0],
    [0,3,3,3,4,4,2,2,2,2,2,1,1,2,2,2,3,5,5,5,5,3,2,2,1,3,1,2,4,2,2,2,2,2,2,2,2,3,2,2,1,1,1,2,3,4,1,1,1,1,3,4,4,3,3,4,1,1,2,4,0],
    [0,3,3,3,3,3,4,4,4,4,2,1,1,2,2,1,2,3,5,5,3,3,2,2,1,1,3,4,2,4,4,4,4,4,4,4,3,2,1,1,1,2,2,5,3,1,1,1,1,2,3,3,3,3,3,1,1,2,4,4,0],
    [0,0,3,3,3,3,3,3,3,3,2,1,1,2,2,1,1,2,3,3,2,2,2,1,1,1,1,3,2,2,3,3,3,3,3,3,3,2,1,1,2,5,5,3,2,1,1,1,2,3,3,3,3,4,4,1,2,3,4,0,0],
    [0,0,3,4,3,3,3,3,3,3,2,1,1,2,4,2,1,1,2,2,2,1,1,1,1,1,1,1,1,2,4,3,3,3,3,3,3,1,1,2,5,5,3,2,1,1,1,2,3,3,3,3,4,1,1,2,3,4,4,0,0],
    [0,0,0,3,4,3,3,3,3,3,4,2,1,2,4,4,2,2,1,1,1,1,1,1,1,1,1,1,1,2,4,3,3,2,2,4,3,1,1,2,5,3,4,1,1,1,2,3,3,3,3,4,1,2,2,3,3,2,0,0,0],
    [0,0,0,0,3,4,4,3,3,3,4,2,1,2,4,3,4,4,2,2,2,1,1,1,1,2,2,2,2,4,3,3,2,1,1,2,1,1,2,3,3,4,1,1,1,2,3,3,3,3,4,1,2,3,3,4,2,0,0,0,0],
    [0,0,0,0,0,3,4,4,3,3,4,2,2,1,2,3,3,3,4,4,2,2,2,2,2,4,4,4,4,3,3,3,2,1,1,1,1,2,4,3,4,2,4,4,4,3,3,3,4,4,1,2,3,3,4,2,0,0,0,0,0],
    [0,0,0,0,0,0,3,3,4,4,2,2,2,1,2,3,3,3,3,3,4,4,4,4,4,3,3,3,3,3,3,3,2,1,1,1,2,4,3,3,3,4,4,4,3,3,3,4,1,1,2,3,4,4,2,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,4,3,2,2,1,1,1,1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,2,1,1,2,2,4,3,3,3,3,3,3,3,3,4,4,4,3,3,4,2,2,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,4,3,3,3,3,3,3,3,3,3,3,3,3,4,2,1,4,1,1,2,2,4,3,3,3,3,3,4,4,1,3,4,2,2,2,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,2,4,4,3,3,3,3,3,3,3,3,4,4,2,1,4,0,4,1,1,2,2,4,4,4,4,4,4,2,1,2,2,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,4,4,4,4,4,4,4,4,2,2,1,4,0,0,0,4,1,1,2,2,2,2,2,2,2,1,2,1,2,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,4,0,0,0,0,0,0,0,1,1,1,2,2,1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,4,2,1,1,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]
const canvas = document.getElementById("brainCanvas");
const gl = canvas.getContext("webgl");

// Настройка canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
gl.clearColor(18 / 255, 17 / 255, 19 / 255, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

// Шейдеры
const vertexShaderSource = `
attribute vec2 a_position;
attribute vec2 a_texCoord;
uniform vec2 u_resolution;
varying vec2 v_texCoord;

void main() {
    vec2 zeroToOne = a_position / u_resolution;
    vec2 zeroToTwo = zeroToOne * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    v_texCoord = a_texCoord;
}`;

const fragmentShaderSource = `
precision mediump float;
varying vec2 v_texCoord;
uniform sampler2D u_image;

void main() {
    gl_FragColor = texture2D(u_image, v_texCoord);
}`;

// Создаем шейдеры
const createShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
};

// Создаем и связываем программу
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

// Находим атрибуты и униформы
const positionLocation = gl.getAttribLocation(program, "a_position");
const texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
const imageLocation = gl.getUniformLocation(program, "u_image");

// Настройка буферов
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

const texCoordBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
const texCoords = [
    0, 0,
    1, 0,
    0, 1,
    0, 1,
    1, 0,
    1, 1,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);

function createTexture(gl, url) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    
    // Настройки фильтрации текстуры
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); // Установите фильтрацию на LINEAR
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR); // Установите фильтрацию на LINEAR

    const level = 0;
    const internalFormat = gl.RGBA;
    const width = 1;
    const height = 1;
    const border = 0;
    const srcFormat = gl.RGBA;
    const srcType = gl.UNSIGNED_BYTE;
    const pixel = new Uint8Array([0, 0, 255, 255]);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, srcFormat, srcType, pixel);

    const image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);
        gl.generateMipmap(gl.TEXTURE_2D);
    });
    return texture;
}

// Загрузка текстур и рендеринг
const gap = 0.1901042 * window.innerWidth / 365;
const side = gap * 5;
brainData.forEach((row, y) => {
    row.forEach((value, x) => {
        if (value !== 0) {
            const xPos = x * (side + gap);
            const yPos = y * (side + gap);

            const positions = [
                xPos, yPos,
                xPos + side, yPos,
                xPos, yPos + side,
                xPos, yPos + side,
                xPos + side, yPos,
                xPos + side, yPos + side,
            ];
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

            const texture = createTexture(gl, `${value}.svg`);

            gl.useProgram(program);
            gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(imageLocation, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
            gl.enableVertexAttribArray(texCoordLocation);
            gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
        }
    });
});