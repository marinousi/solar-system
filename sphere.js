class Sphere {
    constructor(x, y, z, r, st, se) {

        this.points = [];
        this.x = x;
        this.y = y;
        this.z = z;
        // let z = z;
        let xy;
        // let nx;
        // let ny;
        // let nz;
        // let lengthInv = 1 / r;
        // let s;
        // let t;

        let sectorStep = 2 * Math.PI / se;
        let stackStep = Math.PI / st;
        let sectorAngle;
        let stackAngle;
        this.t = new Transformations();

        for(let i = 0; i <= st; ++i) {
            stackAngle = Math.PI / 2 - i * stackStep;        
            xy = r * Math.cos(stackAngle);             
            z = r * Math.sin(stackAngle);              
        
        
            for(let j = 0; j <= se; ++j) {
                sectorAngle = j * sectorStep;        
        
               
                x = xy * Math.cos(sectorAngle);           
                y = xy * Math.sin(sectorAngle);           
                this.points.push(new Vector(3, [x, y, z])); //0
        
              
                // nx = x * lengthInv;
                // ny = y * lengthInv;
                // nz = z * lengthInv;
                // this.points.push(new Vector(3, [nx, ny, nz])); //0
        
             
                // s = j / sectorCount;
                // t = i / stackCount;
                // texCoords.push_back(s);
                // texCoords.push_back(t);
            }
        }
        this.indices = [];
        let k1, k2;
        for(let i = 0; i < st; ++i)
        {
            k1 = i * (se + 1);     
            k2 = k1 + se + 1;      

            for(let j = 0; j < se; ++j, ++k1, ++k2) {
                
                if(i != 0)
                {
                   this.indices.push(k1);
                   this.indices.push(k2);
                   this.indices.push(k1 + 1);
                }

               
                if(i != (st - 1))
                {
                   this.indices.push(k1 + 1);
                   this.indices.push(k2);
                   this.indices.push(k2 + 1);
                }
            }
        }
    }

    setColor(newColor) {
        this.color = newColor;
     }

     translate(dx, dy, dz) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.translate3D(this.points[i],dx,dy,dz)
        }
    }

    rotation_X(dx, dy, dz) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3D_X(this.points[i], dx, dy, dz)
        }
    }
    rotation_Y(dx, dy, dz) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3D_Y(this.points[i], dx, dy, dz)
        }
    }
    rotation_Z(dx, dy, dz) {
        for(let i = 0; i < this.points.length; i++) {
            this.points[i] = this.t.rotation3D_Z(this.points[i], dx, dy, dz)
        }
    }

    draw() {
        
        stroke('fff68f');
        fill(this.color);
        beginShape(TRIANGLES)
        
        for(let i = 0; i < this.indices.length; i+= 3) {
            let translate_1 = this.t.translate3D(this.points[this.indices[i]],this.x,this.y, this.z)
            let translate_2 = this.t.translate3D(this.points[this.indices[i + 1]],this.x,this.y, this.z)
            let translate_3 = this.t.translate3D(this.points[this.indices[i + 2]],this.x,this.y, this.z)
            
            vertex(translate_1.values[0], translate_1.values[1], translate_1.values[2]);
            vertex(translate_2.values[0], translate_2.values[1], translate_2.values[2]);
            vertex(translate_3.values[0], translate_3.values[1], translate_3.values[2]);            
        }
        endShape(CLOSE)
    }
}
