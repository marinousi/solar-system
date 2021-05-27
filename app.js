let sun;
let earth;
let moon;
let mercury;
let venus;
let mars;
let jupter;
let saturn;
let uranus;
let neptune;

function setup() {
    var canvas = createCanvas(1500,730, WEBGL)
    createEasyCam();
    document.body.style.backgroundColor = "#68228b";

    moon = new Sphere(100, 845, 38, 1.7, 20, 20)
    sun = new Sphere(0, 0, 0, 696, 20, 20)
    mercury = new Sphere(100, 753, 0, 2.4, 20, 20)
    venus = new Sphere(100, 804, 0, 6.0, 20, 20)
    earth = new Sphere(100, 845, 0, 6.371, 20, 20)
    mars = new Sphere(100, 923, 0, 3.3, 20, 20)
    jupter = new Sphere(100, 1474, 0, 69.9, 20, 20)
    saturn = new Sphere(100, 2125, 0, 58.2, 20, 20)
    uranus = new Sphere(100, 3566, 0, 25.3, 20, 20)
    neptune = new Sphere(100, 5200, 0, 24.6, 20, 20)
}

function draw() {
    background(0)

    //ROTATION
    sun.rotation_Z(1000, 0, 0)
    earth.rotation_Z(845,400,0)
    moon.rotation_Z(845,400,0)
    mercury.rotation_Z(753,400,0)
    venus.rotation_Z(804,400,0)
    mars.rotation_Z(923,400,0)
    jupter.rotation_Z(1474,400,0)
    saturn.rotation_Z(2125,400,0)
    uranus.rotation_Z(3566,400,0)
    neptune.rotation_Z(5200,400,0)

    //TRANSLATE
    // moon.translate(80,80,0)
    // mercury.translate(753,0,0)
    // venus.translate(804,0,0)
    // earth.translate(845,0,0)
    // mars.translate(923,0,0)
    // jupter.translate(1474,0,0)
    // saturn.translate(2125,0,0)
    // uranus.translate(3566,0,0)
    // neptune.translate(5200,0,0)


    //DRAW E COLOR
    sun.setColor('#ffff00')
    sun.draw()
    earth.setColor('#00ffff')
    earth.draw()
    moon.setColor('#cfcfcf')
    moon.draw()
    mercury.setColor('#eec591')
    mercury.draw()
    venus.setColor('#ee5c42')
    venus.draw()
    mars.setColor('#ffa07a')
    mars.draw()
    jupter.setColor('#ffc125')
    jupter.draw()
    saturn.setColor('#ffe7ba')
    saturn.draw()
    uranus.setColor('#add8ef')
    uranus.draw()
    neptune.setColor('#ab82ff')
    neptune.draw()
    
}