class ParticleBackground {
    constructor() {
        this.container = document.createElement('div');
        this.container.style.position = 'fixed';
        this.container.style.top = '0';
        this.container.style.left = '0';
        this.container.style.width = '100%';
        this.container.style.height = '100%';
        this.container.style.zIndex = '-1';
        this.container.style.opacity = '0.95';
        document.body.prepend(this.container);

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        // Increase camera distance for larger view
        this.camera.position.z = 50;  // Increased from 40

        // Create flow lines group
        this.flowLines = new THREE.Group();
        this.scene.add(this.flowLines);
        
        // Much darker colors for the pattern
        this.colors = {
            primary: new THREE.Color('#050608'),    // Almost black
            secondary: new THREE.Color('#0a0c12'),  // Very dark blue
            accent: new THREE.Color('#F6B17A').multiplyScalar(0.2)  // Barely visible orange
        };

        // Keep transparent background
        this.scene.background = null;
        
        this.lineCount = 12;
        this.pointsPerLine = 100;
        this.createFlowLines();
        
        window.addEventListener('resize', this.onWindowResize.bind(this));
        
        this.animate();
    }
    
    createFlowLines() {
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-20, -15, 0),  // Increased spread
            new THREE.Vector3(20, 15, 0)     // Increased spread
        ]);

        for (let i = 0; i < this.lineCount; i++) {
            const points = [];
            const segments = 8;
            
            for (let j = 0; j <= segments; j++) {
                const x = (j / segments) * 40 - 20;  // Increased range from 30 to 40
                const y = Math.sin(j / segments * Math.PI * 2) * 8;  // Increased amplitude from 5 to 8
                const z = Math.cos(j / segments * Math.PI * 2) * 5;  // Increased depth from 3 to 5
                points.push(new THREE.Vector3(x, y + (Math.random() - 0.5) * 15, z));  // Increased random spread
            }

            const flowCurve = new THREE.CatmullRomCurve3(points);
            const geometry = new THREE.BufferGeometry().setFromPoints(
                flowCurve.getPoints(this.pointsPerLine)
            );

            const material = new THREE.LineBasicMaterial({
                color: i % 2 === 0 ? this.colors.primary : this.colors.secondary,
                transparent: true,
                opacity: 0.8,
                linewidth: 2.5  // Increased line thickness
            });

            const line = new THREE.Line(geometry, material);
            
            line.userData = {
                originalPoints: points.map(p => p.clone()),
                phase: Math.random() * Math.PI * 2,
                speed: 0.3 + Math.random() * 0.4,
                amplitude: 0.4 + Math.random() * 0.5  // Increased amplitude
            };

            this.flowLines.add(line);
        }
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        const time = Date.now() * 0.001;

        this.flowLines.children.forEach((line, i) => {
            const { originalPoints, phase, speed, amplitude } = line.userData;
            
            const points = originalPoints.map((point, j) => {
                const newPoint = point.clone();
                // Faster wave motion
                newPoint.y += Math.sin(time * speed + phase + j * 0.3) * amplitude;
                newPoint.z += Math.cos(time * speed * 0.7 + phase + j * 0.2) * amplitude;
                return newPoint;
            });

            const curve = new THREE.CatmullRomCurve3(points);
            const positions = curve.getPoints(this.pointsPerLine);
            line.geometry.setFromPoints(positions);
            
            // Faster color animation
            if (i % 3 === 0) {
                const hue = (time * 0.1 + i * 0.1) % 1;  // Doubled animation speed
                line.material.color.setHSL(hue, 0.5, 0.1);
            }
        });

        // Slightly faster camera movement
        this.camera.position.x = Math.sin(time * 0.25) * 2;
        this.camera.position.y = Math.cos(time * 0.2) * 1.5;
        this.camera.lookAt(0, 0, 0);
        
        this.renderer.render(this.scene, this.camera);
    }
} 