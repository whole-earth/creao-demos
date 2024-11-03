let scene, camera, renderer, controls;
let recordPlayer, vinylCrate, poster1, poster2, walls;
let desk, chair, lamp, rug, table;
let editMode = false;
let studioScene;
let playPauseButton;
let audio;
let isPlaying = false;
let windows = [];
let isAudioSetup = false;

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

    studioScene = new THREE.Group();
    studioScene.position.y = -2;
    scene.add(studioScene);

    createRoom();
    createFurniture();
    createRecordPlayer();
    createDJEquipment();
    createPlayPauseButton();
    
    renderer.domElement.addEventListener('click', onMouseClick, false);

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
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x535353 });

    walls = [];

    const backWall = new THREE.Mesh(wallGeometry, wallMaterial);
    backWall.position.set(0, 4, -5);
    studioScene.add(backWall);
    walls.push(backWall);

    const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-5, 4, 0);
    studioScene.add(leftWall);
    walls.push(leftWall);

    const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
    rightWall.rotation.y = Math.PI / 2;
    rightWall.position.set(5, 4, 0);
    studioScene.add(rightWall);
    walls.push(rightWall);

    const floorGeometry = new THREE.PlaneGeometry(10, 10);
    const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x46156e });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    studioScene.add(floor);

    const windowGeometry = new THREE.PlaneGeometry(2, 2.4);
    const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });

    for (let i = 0; i < 3; i++) {
        const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
        windowMesh.position.set(-3 + i * 3, 5, -4.9);
        windows.push(windowMesh);
        studioScene.add(windowMesh);
    }

    const posterGeometry = new THREE.PlaneGeometry(2, 3);
    const posterMaterial1 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/leaderboard.jpg') });
    const posterMaterial2 = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/plaque.jpg') });

    poster1 = new THREE.Mesh(posterGeometry, posterMaterial1);
    poster1.position.set(-4.9, 4, -2);
    poster1.rotation.y = Math.PI / 2;
    studioScene.add(poster1);

    poster2 = new THREE.Mesh(posterGeometry, posterMaterial2);
    poster2.position.set(-4.9, 4, 2);
    poster2.rotation.y = Math.PI / 2;
    studioScene.add(poster2);

    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font) {
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
        const textGeometry2 = new THREE.TextGeometry('Artist Page', {
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

        studioScene.add(textMesh1);
        studioScene.add(textMesh2);

        const spotlight = new THREE.SpotLight(0xffffff, 0.4);
        spotlight.position.set(4, 6, 0);
        spotlight.target.position.set(4.9, 5.5, 0);
        spotlight.angle = Math.PI / 4;
        spotlight.penumbra = 0.1;
        spotlight.decay = 2;
        spotlight.distance = 10;
        studioScene.add(spotlight);
        studioScene.add(spotlight.target);
    });
}

function createFurniture() {

    const couchGroup = new THREE.Group();

    // Couch base
    const couchBaseGeometry = new THREE.BoxGeometry(2.5, 0.5, 1);
    const couchMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    const couchBase = new THREE.Mesh(couchBaseGeometry, couchMaterial);
    couchGroup.add(couchBase);

    // Couch back
    const couchBackGeometry = new THREE.BoxGeometry(2.5, 0.8, 0.3);
    const couchBack = new THREE.Mesh(couchBackGeometry, couchMaterial);
    couchBack.position.set(0, 0.65, -0.35);
    couchGroup.add(couchBack);

    // Couch arms
    const couchArmGeometry = new THREE.BoxGeometry(0.3, 0.6, 1);
    const couchArmLeft = new THREE.Mesh(couchArmGeometry, couchMaterial);
    const couchArmRight = new THREE.Mesh(couchArmGeometry, couchMaterial);
    couchArmLeft.position.set(-1.1, 0.3, 0);
    couchArmRight.position.set(1.1, 0.3, 0);
    couchGroup.add(couchArmLeft, couchArmRight);

    // T-shirt draped over the arm (50% bigger)
    const shirtGroup = new THREE.Group();

    // Create the main body of the shirt
    const shirtBodyGeometry = new THREE.BoxGeometry(0.6, 0.075, 0.9);
    const shirtMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
    const shirtBody = new THREE.Mesh(shirtBodyGeometry, shirtMaterial);
    shirtBody.position.set(1.25, 0.6, 0);
    shirtGroup.add(shirtBody);

    // Create the hanging part of the shirt
    const shirtHangGeometry = new THREE.PlaneGeometry(0.6, 0.6);
    const shirtHang = new THREE.Mesh(shirtHangGeometry, shirtMaterial);
    shirtHang.rotation.x = Math.PI / 2;
    shirtHang.position.set(1.25, 0.3, 0.3);
    shirtGroup.add(shirtHang);

    couchGroup.add(shirtGroup);

    // Position the couch against the wall in the front-right corner
    couchGroup.position.set(3.8, 0.25, 2.7);
    couchGroup.rotation.y = -Math.PI / 2.4;

    studioScene.add(couchGroup);

    // Make the t-shirt interactive
    const shirtParts = [shirtBody, shirtHang];
    shirtParts.forEach(part => {
        part.userData.isShirt = true;
    });

    const tableGeometry = new THREE.BoxGeometry(3, 1, 2);
    const tableMaterial = new THREE.MeshPhongMaterial({ color: 0x222222 });
    table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.set(-2.5, 0.5, 3);
    studioScene.add(table);

    const vinylCrateGeometry = new THREE.BoxGeometry(1, 1, 1);
    const vinylCrateMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    vinylCrate = new THREE.Mesh(vinylCrateGeometry, vinylCrateMaterial);
    vinylCrate.position.set(-3, 0.5, 3.75);
    //scene.add(vinylCrate);

    const deskGeometry = new THREE.BoxGeometry(8, 2.5, 1.6);
    const deskMaterial = new THREE.MeshPhongMaterial({ color: 0x444444 });
    desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.position.set(0, 0.5, -3);
    studioScene.add(desk);

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

    lamp.position.set(-2.5, 1.8, -3);
    studioScene.add(lamp);

    const lampLight = new THREE.PointLight(0xFFFFFF, 0.5, 3);
    lampLight.position.set(0, 0.2, 0);
    lamp.add(lampLight);
    lampLight.visible = true;
    lamp.userData.light = lampLight;

    const rugGeometry = new THREE.PlaneGeometry(6, 4);
    const rugMaterial = new THREE.MeshPhongMaterial({ color: 0xFF0000, side: THREE.DoubleSide });
    rug = new THREE.Mesh(rugGeometry, rugMaterial);
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(0, 0.01, 0);
    studioScene.add(rug);
}

function createDJEquipment() {
    // DJ Controller
    const controllerGeometry = new THREE.BoxGeometry(2, 0.1, 1);
    const controllerMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const djController = new THREE.Mesh(controllerGeometry, controllerMaterial);
    djController.position.set(0, 1.8, -2.7);
    studioScene.add(djController);

    // Add some details to the DJ Controller
    const knobGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.05, 32);
    const knobMaterial = new THREE.MeshPhongMaterial({ color: 0xCCCCCC });
    for (let i = 0; i < 8; i++) {
        const knob = new THREE.Mesh(knobGeometry, knobMaterial);
        knob.rotation.x = Math.PI / 2;
        knob.position.set(-0.8 + i * 0.2, 1.85, -2.5);
        studioScene.add(knob);
    }

    // Speakers
    const speakerGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.6);
    const speakerMaterial = new THREE.MeshPhongMaterial({ color: 0x222222 });
    const leftSpeaker = new THREE.Mesh(speakerGeometry, speakerMaterial);
    const rightSpeaker = new THREE.Mesh(speakerGeometry, speakerMaterial);
    leftSpeaker.position.set(-3.5, 2.35, -3);
    rightSpeaker.position.set(3.5, 2.35, -3);
    studioScene.add(leftSpeaker);
    studioScene.add(rightSpeaker);

    // Speaker cones
    const coneGeometry = new THREE.CircleGeometry(0.2, 32);
    const coneMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
    for (const speaker of [leftSpeaker, rightSpeaker]) {
        const topCone = new THREE.Mesh(coneGeometry, coneMaterial);
        const bottomCone = new THREE.Mesh(coneGeometry, coneMaterial);
        topCone.position.set(0, 0.3, 0.301);
        bottomCone.position.set(0, -0.3, 0.301);
        speaker.add(topCone);
        speaker.add(bottomCone);
    }

    // Subwoofers
    const subwooferGeometry = new THREE.BoxGeometry(1, 1, 0.8);
    const subwooferMaterial = new THREE.MeshPhongMaterial({ color: 0x222222 });
    const leftSubwoofer = new THREE.Mesh(subwooferGeometry, subwooferMaterial);
    const rightSubwoofer = new THREE.Mesh(subwooferGeometry, subwooferMaterial);
    leftSubwoofer.position.set(-3.5, 0.5, -3);
    rightSubwoofer.position.set(3.5, 0.5, -3);
    studioScene.add(leftSubwoofer);
    studioScene.add(rightSubwoofer);

    // Subwoofer cones
    const subConeGeometry = new THREE.CircleGeometry(0.4, 32);
    const subConeMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
    for (const subwoofer of [leftSubwoofer, rightSubwoofer]) {
        const subCone = new THREE.Mesh(subConeGeometry, subConeMaterial);
        subCone.position.set(0, 0, 0.401);
        subwoofer.add(subCone);
    }

    // Computer Screen
    const screenStandGeometry = new THREE.BoxGeometry(0.1, 0.5, 0.1);
    const screenStandMaterial = new THREE.MeshPhongMaterial({ color: 0x888888 });
    const screenStand = new THREE.Mesh(screenStandGeometry, screenStandMaterial);
    screenStand.position.set(0, 1.95, -3.2);
    studioScene.add(screenStand);

    const screenGeometry = new THREE.BoxGeometry(2.1, 1.2, 0.05);
    const screenMaterial = new THREE.MeshPhongMaterial({ color: 0x111111 });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 2.9, -3.2);
    studioScene.add(screen);

    // Screen display
    const displayGeometry = new THREE.PlaneGeometry(2, 1.1);
    const displayMaterial = new THREE.MeshBasicMaterial({ color: 0x0077be });
    const display = new THREE.Mesh(displayGeometry, displayMaterial);
    display.position.set(0, 0, 0.026);
    screen.add(display);
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
    studioScene.add(spotlight);

    studioScene.add(recordPlayerGroup);
    recordPlayer = recordPlayerGroup;
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.material.color.setHex(0x00ff00); // Green for play
    } else {
        audio.play();
        playPauseButton.material.color.setHex(0xff0000); // Red for pause
    }
    isPlaying = !isPlaying;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function changeTShirtColor() {
    const randomColor = Math.random() * 0xFFFFFF;
    scene.traverse((object) => {
        if (object.userData.isShirt) {
            object.material.color.setHex(randomColor);
        }
    });
}

function createPlayPauseButton() {
    const geometry = new THREE.CircleGeometry(0.2, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    playPauseButton = new THREE.Mesh(geometry, material);

    // Position the button above the record player
    playPauseButton.position.set(-2.5, 2.5, 2.5);

    studioScene.add(playPauseButton);
}

function setupAudio() {
    audio = new Audio('./assets/sample.mp3');
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 256;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
}

/* function updateWindowColors(dataArray) {
    const lowFreq = dataArray.slice(0, 3).reduce((a, b) => a + b) / 3;
    const midFreq = dataArray.slice(3, 6).reduce((a, b) => a + b) / 3;
    const highFreq = dataArray.slice(6, 9).reduce((a, b) => a + b) / 3;

    windows.forEach((window, index) => {
        let r, g, b;
        switch (index) {
            case 0: // Low frequencies - Red
                r = Math.min(255, lowFreq + 50);
                g = b = 50;
                break;
            case 1: // Mid frequencies - Green
                g = Math.min(255, midFreq + 50);
                r = b = 50;
                break;
            case 2: // High frequencies - Blue
                b = Math.min(255, highFreq + 50);
                r = g = 50;
                break;
        }
        window.material.color.setRGB(r / 255, g / 255, b / 255);
    });
} */

function updateWindowColors(dataArray) {
    // Get frequency data from the analyser
    analyser.getByteFrequencyData(dataArray);

    // Iterate through the windows and update their colors based on the frequency data
    windows.forEach((windowMesh, index) => {
        // Map the frequency data to a color value (0x000000 - 0xFFFFFF)
        const frequency = dataArray[index % dataArray.length]; // Loop over dataArray if there are more windows than frequency bins
        const color = new THREE.Color(`hsl(${(frequency / 255) * 360}, 60%, 40%)`); // Map frequency to a hue value

        // Set the window material color
        windowMesh.material.color.set(color);
    });
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);

    if (playPauseButton) {
        playPauseButton.position.y = 2.5 + Math.sin(Date.now() * 0.005) * 0.05;
    }

    if (isPlaying) {
        analyser.getByteFrequencyData(dataArray);
        updateWindowColors(dataArray);
    }
    
}

function toggleEditMode() {
    editMode = !editMode;
    document.getElementById('edit-panel').style.display = editMode ? 'block' : 'none';
}

function onMouseClick(event) {
    
    event.preventDefault();

    if (!isAudioSetup) {
        setupAudio();
        isAudioSetup = true;
    }

    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);

    for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object === playPauseButton) {
            togglePlayPause();
            break;
        } else if (intersects[i].object.userData.isShirt) {
            changeTShirtColor();
            break;
        }
    }
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