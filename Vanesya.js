function setup() {
    // put setup code here
    createCanvas(800,400);
   
    j = 0;
    y = 100;
}

function draw() {
    background(250);

    // bagian kanan
    // muka
    var y = 180 + 40 * Math.sin(PI/100*j)
    j+=1
    fill(210, 69, 19);
    ellipse(570, y, 200, 200);

    // telinga
    var y = 180 + 40 * Math.sin(PI/100*j)
    j+=1
    ellipse(650, y, 60, 80);
    ellipse(490, y, 60, 80);

    // mata
    var y = 150 + 40 * Math.sin(PI/100*j)
    j+=1
    fill(255);
    ellipse(530, y, 40, 40);
    ellipse(610, y, 40, 40);
    fill(0);
    ellipse(530, y, 20, 20);
    ellipse(610, y, 20, 20);

    // hidung
    var y = 180 + 40 * Math.sin(PI/100*j)
    j+=1
    fill(210, 69, 19);
    ellipse(570, y, 19, 22, 21, 220);

    // mulut
    var y = 220 + 40 * Math.sin(PI/100*j)
    j+=1
    noFill();
    strokeWeight(3);
    arc(570, y, 60, 40, 0, PI);

    // rambut
    var y = 103 + 40 * Math.sin(PI/100*j)
    j+=1
    fill(210, 69, 19);
    ellipse(570,y,100,40,20,220)


    // bagian kiri
    // muka
    fill(139, 69, 19);
    ellipse(200, 200, 200, 200);
    
    // telinga
    ellipse(120, 200, 60, 80);
    ellipse(280, 200, 60, 80);
    
    // mata
    fill(255);
    ellipse(160, 170, 40, 40);
    ellipse(240, 170, 40, 40);
    fill(0);
    ellipse(160, 170, 20, 20);
    ellipse(240, 170, 20, 20);
    
    // hidung
    fill(139, 69, 19);
    ellipse(200, 200, 19, 22, 21, 220);
    
    // mulut
    noFill();
    strokeWeight(3);
    arc(200, 240, 60, 40, 0, PI);
    
    // rambut
    fill(139, 69, 19);
    ellipse(200,120,100,40,20,220)
  }
  