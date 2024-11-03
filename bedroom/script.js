let scene, camera, renderer, controls;
let bed, recordPlayer, vinylCrate, poster1, poster2, walls;
let desk, chair, lamp, rug, table;
let editMode = false;
let bedroomScene;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    bedroomScene = new THREE.Group();
    bedroomScene.position.y = -2;
    scene.add(bedroomScene);

    createRoom();
    createFurniture();
    createRecordPlayer();

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    controls.minDistance = 5;
    controls.maxDistance = 15;
    const centerAngle = Math.PI / 2 - Math.PI / 9; // 90 degrees - 20 degrees (initial camera angle)
    controls.minPolarAngle = centerAngle - Math.PI / 18; // 10 degrees down from center
    controls.maxPolarAngle = centerAngle + Math.PI / 18; // 10 degrees up from center
    controls.enablePan = false;
    controls.minAzimuthAngle = -Math.PI / 14; // -30 degrees
    controls.maxAzimuthAngle = Math.PI / 14;  // +30 degrees

    window.addEventListener('resize', onWindowResize, false);
    document.getElementById('edit-mode-btn').addEventListener('click', toggleEditMode);
    document.getElementById('wall-color').addEventListener('change', changeWallColor);
    document.getElementById('poster1-upload').addEventListener('change', (e) => uploadPoster(e, 0));
    document.getElementById('poster2-upload').addEventListener('change', (e) => uploadPoster(e, 1));
    document.getElementById('lamp-toggle').addEventListener('change', toggleLamp);

    animate();
}

function createRoom() {
    const wallGeometry = new THREE.BoxGeometry(10, 8, 0.1);
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

    walls = [];

    const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
    backWall.position.set(0, 4, -5);
    bedroomScene.add(backWall);
    walls.push(backWall);

    const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-5, 4, 0);
    bedroomScene.add(leftWall);
    walls.push(leftWall);

    const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
    rightWall.rotation.y = Math.PI / 2;
    rightWall.position.set(5, 4, 0);
    bedroomScene.add(rightWall);
    walls.push(rightWall);

    const floorGeometry = new THREE.PlaneGeometry(10, 10);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x856C56 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    bedroomScene.add(floor);

    const windowGeometry = new THREE.PlaneGeometry(2, 2.4);
    const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb });

    for (let i = 0; i < 3; i++) {
        const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
        windowMesh.position.set(-3 + i * 3, 5, -4.9);
        bedroomScene.add(windowMesh);
    }

    const posterGeometry = new THREE.PlaneGeometry(2, 3);
    const posterMaterial1 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/default_poster1.jpg') });
    const posterMaterial2 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/default_poster2.jpg') });

    poster1 = new THREE.Mesh(posterGeometry, posterMaterial1);
    poster1.position.set(-4.9, 4, -2);
    poster1.rotation.y = Math.PI / 2;
    bedroomScene.add(poster1);

    poster2 = new THREE.Mesh(posterGeometry, posterMaterial2);
    poster2.position.set(-4.9, 4, 2);
    poster2.rotation.y = Math.PI / 2;
    bedroomScene.add(poster2);

    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        const textGeometry1 = new THREE.TextGeometry('Welcome to the', {
            font: font,
            size: 0.4,
            height: 0.05,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.02,
            bevelSize: 0.01,
            bevelOffset: 0,
            bevelSegments: 5
        });
        const textGeometry2 = new THREE.TextGeometry('CREAOverse', {
            font: font,
            size: 0.6,
            height: 0.08,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        });
        const textMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        const textMesh1 = new THREE.Mesh(textGeometry1, textMaterial);
        const textMesh2 = new THREE.Mesh(textGeometry2, textMaterial);

        textMesh1.position.set(4.9, 5, -2);
        textMesh2.position.set(4.9, 4, -2);

        textMesh1.rotation.y = -Math.PI / 2;
        textMesh2.rotation.y = -Math.PI / 2;

        bedroomScene.add(textMesh1);
        bedroomScene.add(textMesh2);

        const spotlight = new THREE.SpotLight(0xffffff, 0.4);
        spotlight.position.set(4, 6, 0);
        spotlight.target.position.set(4.9, 5.5, 0);
        spotlight.angle = Math.PI / 4;
        spotlight.penumbra = 0.1;
        spotlight.decay = 2;
        spotlight.distance = 10;
        bedroomScene.add(spotlight);
        bedroomScene.add(spotlight.target);
    });
}

function createFurniture() {
    const bedGroup = new THREE.Group();

    const bedFrameGeometry = new THREE.BoxGeometry(3, 1, 4);
    const bedFrameMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    const bedFrame = new THREE.Mesh(bedFrameGeometry, bedFrameMaterial);
    bedGroup.add(bedFrame);

    const mattressGeometry = new THREE.BoxGeometry(2.9, 0.5, 3.9);
    const mattressMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    const mattress = new THREE.Mesh(mattressGeometry, mattressMaterial);
    mattress.position.y = 0.75;
    bedGroup.add(mattress);

    const pillowGeometry = new THREE.BoxGeometry(0.8, 0.2, 0.6);
    const pillowMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });

    const pillow1 = new THREE.Mesh(pillowGeometry, pillowMaterial);
    pillow1.position.set(-0.8, 1.1, -1.5);
    bedGroup.add(pillow1);

    const pillow2 = new THREE.Mesh(pillowGeometry, pillowMaterial);
    pillow2.position.set(0.8, 1.1, -1.5);
    bedGroup.add(pillow2);

    bedGroup.position.set(3, 0.5, -3);
    bedroomScene.add(bedGroup);
    bed = bedGroup;

    const tableGeometry = new THREE.BoxGeometry(3, 1, 2);
    const tableMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.set(-2.5, 0.5, 3);
    bedroomScene.add(table);

    const vinylCrateGeometry = new THREE.BoxGeometry(1, 1, 1);
    const vinylCrateMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    vinylCrate = new THREE.Mesh(vinylCrateGeometry, vinylCrateMaterial);
    vinylCrate.position.set(-3, 0.5, 3.75);
    //scene.add(vinylCrate);

    const deskGeometry = new THREE.BoxGeometry(2, 1, 1);
    const deskMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.position.set(-3, 0.5, -3);
    bedroomScene.add(desk);

    const chairGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const chairMaterial = new THREE.MeshPhongMaterial({ color: 0x4B0082 });
    chair = new THREE.Mesh(chairGeometry, chairMaterial);
    chair.position.set(-3, 0.25, -2);
    bedroomScene.add(chair);

    const lampBaseGeometry = new THREE.CylinderGeometry(0.1, 0.2, 0.1, 32);
    const lampPoleGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.5, 32);
    const lampShadeGeometry = new THREE.ConeGeometry(0.2, 0.2, 32);
    const lampMaterial = new THREE.MeshPhongMaterial({ color: 0xEE7F7F });

    const lampBase = new THREE.Mesh(lampBaseGeometry, lampMaterial);
    const lampPole = new THREE.Mesh(lampPoleGeometry, lampMaterial);
    const lampShade = new THREE.Mesh(lampShadeGeometry, lampMaterial);

    lampPole.position.y = 0.3;
    lampShade.position.y = 0.65;

    lamp = new THREE.Group();
    lamp.add(lampBase);
    lamp.add(lampPole);
    lamp.add(lampShade);

    lamp.position.set(-2.5, 1, -3);
    bedroomScene.add(lamp);

    const lampLight = new THREE.PointLight(0xFFFFFF, 0.5, 3);
    lampLight.position.set(0, 0.2, 0);
    lamp.add(lampLight);
    lampLight.visible = false;
    lamp.userData.light = lampLight;

    const rugGeometry = new THREE.PlaneGeometry(6, 4);
    const rugMaterial = new THREE.MeshPhongMaterial({ color: 0xFF0000, side: THREE.DoubleSide });
    rug = new THREE.Mesh(rugGeometry, rugMaterial);
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(0, 0.01, 0);
    bedroomScene.add(rug);
}

function createRecordPlayer() {
    const recordPlayerGroup = new THREE.Group();

    const baseGeometry = new THREE.BoxGeometry(2, 0.3, 1);
    const baseMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    recordPlayerGroup.add(base);

    const diskGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.03, 64);
    const diskMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x333333,
        shininess: 100
    });
    const disk = new THREE.Mesh(diskGeometry, diskMaterial);
    disk.rotation.x = 0;
    disk.position.set(0, 0.165, 0);
    recordPlayerGroup.add(disk);

    const tonearmBaseGeometry = new THREE.CylinderGeometry(0.075, 0.075, 0.075, 32);
    const tonearmBaseMaterial = new THREE.MeshPhongMaterial({ color: 0x999999 });
    const tonearmBase = new THREE.Mesh(tonearmBaseGeometry, tonearmBaseMaterial);
    tonearmBase.position.set(0.8, 0.1875, 0.4);
    recordPlayerGroup.add(tonearmBase);

    const tonearmGeometry = new THREE.BoxGeometry(0.6, 0.03, 0.03);
    const tonearmMaterial = new THREE.MeshPhongMaterial({ color: 0xCCCCCC });
    const tonearm = new THREE.Mesh(tonearmGeometry, tonearmMaterial);
    tonearm.position.set(0.5, 0.225, 0.4);
    tonearm.rotation.y = -Math.PI / 6;
    recordPlayerGroup.add(tonearm);

    const cartridgeGeometry = new THREE.BoxGeometry(0.06, 0.03, 0.03);
    const cartridgeMaterial = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
    const cartridge = new THREE.Mesh(cartridgeGeometry, cartridgeMaterial);
    cartridge.position.set(0.18, 0.21, 0.4);
    recordPlayerGroup.add(cartridge);

    const dustCoverGeometry = new THREE.BoxGeometry(2.2, 0.8, 1.2);
    const dustCoverMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xFFFFFF, 
        transparent: true, 
        opacity: 0.2
    });
    const dustCover = new THREE.Mesh(dustCoverGeometry, dustCoverMaterial);
    dustCover.position.set(0, 0.475, 0);
    recordPlayerGroup.add(dustCover);

    recordPlayerGroup.position.set(-2.5, 1.05, 2.5);
    recordPlayerGroup.rotation.y = Math.PI / 4;

    const spotlight = new THREE.SpotLight(0xFFFFFF, 1.5);
    spotlight.position.set(-3, 4, 3);
    spotlight.target = recordPlayerGroup;
    spotlight.angle = Math.PI / 6;
    spotlight.penumbra = 0.2;
    spotlight.castShadow = true;
    spotlight.shadow.mapSize.width = 512;
    spotlight.shadow.mapSize.height = 512;
    spotlight.shadow.camera.near = 0.5;
    spotlight.shadow.camera.far = 15;
    bedroomScene.add(spotlight);

    bedroomScene.add(recordPlayerGroup);
    recordPlayer = recordPlayerGroup;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function toggleEditMode() {
    editMode = !editMode;
    document.getElementById('edit-panel').style.display = editMode ? 'block' : 'none';
}

function changeWallColor(event) {
    const color = new THREE.Color(event.target.value);
    walls.forEach(wall => wall.material.color.set(color));
}

function uploadPoster(event, posterIndex) {
    const file = event.target.files[0];
    const reader = new FileReader();

    // When the file is loaded, convert it to a base64 string and store it in localStorage
    reader.onload = function(e) {
        const base64Image = e.target.result; // This is the base64-encoded image
        const storageKey = posterIndex === 0 ? 'poster1' : 'poster2';

        // Store the image in localStorage
        localStorage.setItem(storageKey, base64Image);

        // Load the texture from localStorage and apply it to the poster mesh
        loadTextureFromLocalStorage(storageKey, posterIndex);
    };

    // Read the file as a Data URL (base64 encoded string)
    reader.readAsDataURL(file);
}

function loadTextureFromLocalStorage(storageKey, posterIndex) {
    // Retrieve the base64 image from localStorage
    const base64Image = localStorage.getItem(storageKey);

    if (base64Image) {
        // Load the texture using the base64 image
        const texture = new THREE.TextureLoader().load(base64Image);

        // Select the correct poster mesh (poster1 or poster2)
        const posterMesh = posterIndex === 0 ? poster1 : poster2;

        // Apply the texture to the selected poster mesh
        posterMesh.material.map = texture;
        posterMesh.material.needsUpdate = true;
    } else {
        console.error('No image found in localStorage for key:', storageKey);
    }
}


function toggleLamp() {
    const isOn = document.getElementById('lamp-toggle').checked;
    lamp.userData.light.visible = isOn;
}

window.onload = function() {
    init();
};