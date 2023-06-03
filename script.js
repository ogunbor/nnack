window.addEventListener("DOMContentLoaded", () => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const loader = new THREE.TextureLoader();
    loader.load("path/to/your/image.jpg", texture => {
        const geometry = new THREE.SphereGeometry(2, 32, 32);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        function animate() {
            requestAnimationFrame(animate);

            globe.rotation.y += 0.005;

            renderer.render(scene, camera);
        }

        animate();
    });
});
