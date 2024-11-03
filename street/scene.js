window.onload = function() {
    // Initialize Three.js scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Light blue sky color
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);

    // Add lighting to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(100, 100, -40);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -200;
    directionalLight.shadow.camera.right = 200;
    directionalLight.shadow.camera.top = 200;
    directionalLight.shadow.camera.bottom = -200;
    scene.add(directionalLight);

    // Add directional light helper
    const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10);
    scene.add(directionalLightHelper);

    // Create a grid using GridHelper
    const gridSize = 250; // 25 * 10 (tileSize)
    const tileSize = 10;
    const gridDivisions = 25;
    const gridMaterial = new THREE.LineBasicMaterial({
      color: 0x888888,
      opacity: 0.5,
      transparent: true,
      linewidth: 1,
    });
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x888888, 0x888888);
    gridHelper.material = gridMaterial;
    gridHelper.position.y = 0.1;
    gridHelper.receiveShadow = true;
    scene.add(gridHelper);

    // Create an array to store the state of each tile
    const tileStates = new Array(gridDivisions * gridDivisions).fill(false);
    const tileMeshes = [];

    // Create individual tile meshes
    for (let i = 0; i < gridDivisions; i++) {
      for (let j = 0; j < gridDivisions; j++) {
        const tileGeometry = new THREE.PlaneGeometry(tileSize, tileSize);
        const tileMaterial = new THREE.MeshStandardMaterial({
          color: 0x333333,
          transparent: true,
          opacity: 0.1,
          side: THREE.DoubleSide,
        });
        const tileMesh = new THREE.Mesh(tileGeometry, tileMaterial);
        tileMesh.rotation.x = -Math.PI / 2;
        tileMesh.position.set(
          (i - gridDivisions / 2 + 0.5) * tileSize,
          0,
          (j - gridDivisions / 2 + 0.5) * tileSize
        );
        tileMesh.receiveShadow = true;
        scene.add(tileMesh);
        tileMeshes.push(tileMesh);
      }
    }

    // Create buildings
    const buildings = [];
    const buildingColors = [0x800080, 0x008000, 0x0000FF, 0xFFA500, 0xFFFFFF];

    const buildingPositions = [
      { x: 50, z: 30 },
      { x: 100, z: 30 },
      { x: -30, z: -100 },
      { x: -30, z: -55 },
      { x: -30, z: -10 }
    ];

    function createBuilding(color, position) {
      const buildingGeometry = new THREE.BoxGeometry(40, 30, 40);
      const buildingMaterial = new THREE.MeshPhongMaterial({ 
        color: color
      });
      const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
      building.position.set(
        position.x,
        15,
        position.z
      );
      building.castShadow = true;
      building.receiveShadow = true;
      scene.add(building);
      buildings.push(building);
      return building;
    }

    // Initialize buildings
    for (let i = 0; i < 5; i++) {
      createBuilding(buildingColors[i], buildingPositions[i]);
    }

    // Function to activate specific grid squares for the road
    function activateRoadTiles() {
      const halfGrid = Math.floor(gridDivisions / 2);
      const roadTiles = [];

      // Create horizontal part of the L
      for (let x = 0; x <= halfGrid; x++) {
        roadTiles.push({ x: x, z: halfGrid });
      }

      // Create vertical part of the L
      for (let z = halfGrid; z <= gridDivisions; z++) {
        roadTiles.push({ x: halfGrid, z: z });
      }

      roadTiles.forEach(tile => {
        const tileIndex = tile.x + tile.z * gridDivisions;
        if (tileIndex >= 0 && tileIndex < tileStates.length) {
          tileStates[tileIndex] = true;
          tileMeshes[tileIndex].material.opacity = 1;
        }
      });
    }

    // Activate road tiles after creating the grid and tile meshes
    activateRoadTiles();

    // Set up camera position and controls
    camera.position.set(140, 65, -100);
    camera.lookAt(scene.position);

    // Initialize OrbitControls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Create a div for camera position readout
    const cameraPositionReadout = document.createElement('div');
    cameraPositionReadout.id = 'cameraPositionReadout';
    cameraPositionReadout.style.position = 'fixed';
    cameraPositionReadout.style.bottom = '10px';
    cameraPositionReadout.style.left = '10px';
    cameraPositionReadout.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    cameraPositionReadout.style.color = 'white';
    cameraPositionReadout.style.padding = '5px';
    cameraPositionReadout.style.borderRadius = '5px';
    document.body.appendChild(cameraPositionReadout);

    // Update camera position readout
    function updateCameraPositionReadout() {
      cameraPositionReadout.textContent = `Camera: X: ${camera.position.x.toFixed(2)}, Y: ${camera.position.y.toFixed(2)}, Z: ${camera.position.z.toFixed(2)}`;
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        updateCameraPositionReadout();
        renderer.render(scene, camera);
    }

    animate();

    // Function to adjust building dimensions
    function adjustBuildingDimensions(index, width, height, depth) {
      if (index >= 0 && index < buildings.length) {
        const building = buildings[index];
        building.scale.set(width / 5, height / 30, depth / 5);
        building.position.y = height / 2;
      }
    }

    // Function to adjust building position
    function adjustBuildingPosition(index, x, z) {
        if (index >= 0 && index < buildings.length) {
            buildings[index].position.x = x;
            buildings[index].position.z = z;
        }
    }

    // Event listeners for building adjustments
    document.getElementById('buildingControls').addEventListener('input', (event) => {
        const [type, color] = event.target.id.split('-');
        const value = parseFloat(event.target.value);
        const index = ['purple', 'green', 'blue', 'orange', 'white'].indexOf(color);
        const building = buildings[index];

        switch (type) {
            case 'height':
                adjustBuildingDimensions(index, building.scale.x * 5, value, building.scale.z * 5);
                break;
            case 'width':
                adjustBuildingDimensions(index, value, building.scale.y * 30, building.scale.z * 5);
                break;
            case 'depth':
                adjustBuildingDimensions(index, building.scale.x * 5, building.scale.y * 30, value);
                break;
            case 'posX':
                adjustBuildingPosition(index, value, building.position.z);
                break;
            case 'posZ':
                adjustBuildingPosition(index, building.position.x, value);
                break;
        }

        // Update the slider value display
        event.target.nextElementSibling.textContent = value;
    });

    // Handle window resizing
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
    });

    // Road mode functionality
    let roadModeActive = false;

    function toggleTile(tileIndex) {
      tileStates[tileIndex] = !tileStates[tileIndex];
      const tileMesh = tileMeshes[tileIndex];
      tileMesh.material.opacity = tileStates[tileIndex] ? 1 : 0.1;
    }

    function onMouseClick(event) {
      if (!roadModeActive) return;

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(tileMeshes);

      if (intersects.length > 0) {
        const tileIndex = tileMeshes.indexOf(intersects[0].object);
        toggleTile(tileIndex);
      }
    }

    function toggleRoadMode() {
      roadModeActive = !roadModeActive;
      document.getElementById('roadModeToggle').checked = roadModeActive;
    }

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener('click', onMouseClick, false);

    // Make toggleRoadMode globally accessible
    window.toggleRoadMode = toggleRoadMode;

    // Add Building functionality
    document.getElementById('addBuildingBtn').addEventListener('click', () => {
      const newColor = Math.random() * 0xFFFFFF;
      const newPosition = {
        x: Math.random() * 200 - 100,
        z: Math.random() * 200 - 100
      };
      const newBuilding = createBuilding(newColor, newPosition);
      updateBuildingControls();
    });

    // Remove Building functionality
    document.getElementById('removeBuildingBtn').addEventListener('click', () => {
      if (buildings.length > 0) {
        const removedBuilding = buildings.pop();
        scene.remove(removedBuilding);
        updateBuildingControls();
      }
    });

    // Update building controls
    function updateBuildingControls() {
      const buildingControls = document.getElementById('buildingControls');
      const colorButtons = buildingControls.querySelector('.color-buttons');
      const controlContents = buildingControls.querySelectorAll('.control-content');

      // Clear existing color buttons and control contents
      colorButtons.innerHTML = '';
      controlContents.forEach(content => content.remove());

      // Create new color buttons and control contents for each building
      buildings.forEach((building, index) => {
        const color = building.material.color.getHexString();
        const colorBtn = document.createElement('button');
        colorBtn.className = 'color-btn';
        colorBtn.setAttribute('data-color', color);
        colorBtn.style.backgroundColor = `#${color}`;
        colorBtn.innerHTML = '<div class="color-indicator"></div>';
        colorBtn.onclick = () => toggleBuildingControl(color);
        colorButtons.appendChild(colorBtn);

        const controlContent = document.createElement('div');
        controlContent.id = `control-${color}`;
        controlContent.className = 'control-content';
        controlContent.innerHTML = `
          <label for="height-${color}">Height:</label>
          <input type="range" id="height-${color}" min="10" max="100" value="${building.scale.y * 30}" data-value="${building.scale.y * 30}">
          <span class="slider-value">${building.scale.y * 30}</span>
          <br>
          <label for="width-${color}">Width:</label>
          <input type="range" id="width-${color}" min="5" max="50" value="${building.scale.x * 5}" data-value="${building.scale.x * 5}">
          <span class="slider-value">${building.scale.x * 5}</span>
          <br>
          <label for="depth-${color}">Depth:</label>
          <input type="range" id="depth-${color}" min="5" max="50" value="${building.scale.z * 5}" data-value="${building.scale.z * 5}">
          <span class="slider-value">${building.scale.z * 5}</span>
          <br>
          <label for="posX-${color}">Position X:</label>
          <input type="range" id="posX-${color}" min="-90" max="90" value="${building.position.x}" data-value="${building.position.x}">
          <span class="slider-value">${building.position.x}</span>
          <br>
          <label for="posZ-${color}">Position Z:</label>
          <input type="range" id="posZ-${color}" min="-90" max="90" value="${building.position.z}" data-value="${building.position.z}">
          <span class="slider-value">${building.position.z}</span>
        `;
        buildingControls.appendChild(controlContent);
      });

      // Reattach event listeners
      buildingControls.removeEventListener('input', onBuildingControlInput);
      buildingControls.addEventListener('input', onBuildingControlInput);
    }

    function onBuildingControlInput(event) {
      const [type, color] = event.target.id.split('-');
      const value = parseFloat(event.target.value);
      const index = buildings.findIndex(b => b.material.color.getHexString() === color);
      const building = buildings[index];

      switch (type) {
        case 'height':
          adjustBuildingDimensions(index, building.scale.x * 5, value, building.scale.z * 5);
          break;
        case 'width':
          adjustBuildingDimensions(index, value, building.scale.y * 30, building.scale.z * 5);
          break;
        case 'depth':
          adjustBuildingDimensions(index, building.scale.x * 5, building.scale.y * 30, value);
          break;
        case 'posX':
          adjustBuildingPosition(index, value, building.position.z);
          break;
        case 'posZ':
          adjustBuildingPosition(index, building.position.x, value);
          break;
      }

      // Update the slider value display
      event.target.nextElementSibling.textContent = value;
    }

    // Initialize building controls
    updateBuildingControls();
};

let activeColor = null;

function toggleBuildingControl(color) {
    const controlContent = document.getElementById(`control-${color}`);
    const wasActive = controlContent.classList.contains('active');

    // Hide all control contents and indicators
    document.querySelectorAll('.control-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.color-indicator').forEach(el => el.style.display = 'none');

    // Show the selected control content if it wasn't active before
    if (!wasActive) {
        controlContent.classList.add('active');

        // Show and position the indicator
        const activeButton = document.querySelector(`.color-btn[data-color="${color}"]`);
        const indicator = activeButton.querySelector('.color-indicator');
        indicator.style.display = 'block';
        indicator.style.backgroundColor = `#${color}`;

        activeColor = color;
    } else {
        activeColor = null;
    }
}

// Add event listeners for slider changes
document.querySelectorAll('input[type="range"]').forEach(slider => {
    slider.addEventListener('input', (event) => {
        const value = event.target.value;
        event.target.nextElementSibling.textContent = value;
    });
});

// Initialize slider values
document.querySelectorAll('input[type="range"]').forEach(slider => {
    slider.nextElementSibling.textContent = slider.value;
});