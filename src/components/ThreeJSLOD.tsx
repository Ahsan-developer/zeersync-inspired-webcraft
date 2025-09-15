import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface AnimatedObject {
  mesh: THREE.Mesh;
  originalPosition: THREE.Vector3;
  animationSpeed: number;
  lodLevel: number;
  baseRotationSpeed: number;
}

const ThreeJSLOD = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const animatedObjectsRef = useRef<AnimatedObject[]>([]);
  const frameCountRef = useRef(0);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Create animated objects with different LOD levels
    const objects: AnimatedObject[] = [];
    const colors = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0xf9ca24, 0xf0932b, 0xeb4d4b, 0x6c5ce7];

    for (let i = 0; i < 50; i++) {
      const geometry = new THREE.BoxGeometry(
        Math.random() * 2 + 0.5,
        Math.random() * 2 + 0.5,
        Math.random() * 2 + 0.5
      );
      
      const material = new THREE.MeshLambertMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.8
      });

      const mesh = new THREE.Mesh(geometry, material);
      
      // Random positioning
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 60;
      
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      const animatedObject: AnimatedObject = {
        mesh,
        originalPosition: mesh.position.clone(),
        animationSpeed: Math.random() * 0.02 + 0.01,
        lodLevel: 0,
        baseRotationSpeed: Math.random() * 0.05 + 0.02
      };

      objects.push(animatedObject);
      scene.add(mesh);
    }

    animatedObjectsRef.current = objects;

    // Camera controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let cameraRotation = { x: 0, y: 0 };

    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;

      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y
      };

      cameraRotation.y += deltaMove.x * 0.01;
      cameraRotation.x += deltaMove.y * 0.01;

      // Limit vertical rotation
      cameraRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraRotation.x));

      // Update camera position
      const radius = 20;
      camera.position.x = radius * Math.cos(cameraRotation.y) * Math.cos(cameraRotation.x);
      camera.position.y = radius * Math.sin(cameraRotation.x);
      camera.position.z = radius * Math.sin(cameraRotation.y) * Math.cos(cameraRotation.x);
      
      camera.lookAt(0, 0, 0);

      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleWheel = (event: WheelEvent) => {
      const zoomSpeed = 0.1;
      const newRadius = camera.position.length() + event.deltaY * zoomSpeed;
      const clampedRadius = Math.max(5, Math.min(50, newRadius));
      
      camera.position.normalize().multiplyScalar(clampedRadius);
    };

    // Add event listeners
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('wheel', handleWheel);

    // Animation loop with LOD
    const animate = () => {
      requestAnimationFrame(animate);
      frameCountRef.current++;

      // Update LOD for each object based on distance to camera
      animatedObjectsRef.current.forEach((obj) => {
        const distance = camera.position.distanceTo(obj.mesh.position);
        
        // Determine LOD level based on distance
        let lodLevel = 0;
        if (distance > 15) lodLevel = 3; // No animation
        else if (distance > 10) lodLevel = 2; // Simple animation
        else if (distance > 5) lodLevel = 1; // Reduced animation
        else lodLevel = 0; // Full animation

        obj.lodLevel = lodLevel;

        // Apply animations based on LOD level
        switch (lodLevel) {
          case 0: // Full detail - complex animations
            obj.mesh.rotation.x += obj.baseRotationSpeed;
            obj.mesh.rotation.y += obj.baseRotationSpeed * 1.5;
            obj.mesh.rotation.z += obj.baseRotationSpeed * 0.5;
            
            // Complex floating motion
            obj.mesh.position.y = obj.originalPosition.y + Math.sin(frameCountRef.current * obj.animationSpeed * 2) * 2;
            obj.mesh.position.x = obj.originalPosition.x + Math.cos(frameCountRef.current * obj.animationSpeed) * 0.5;
            
            // Scale pulsing
            const scale = 1 + Math.sin(frameCountRef.current * obj.animationSpeed * 3) * 0.1;
            obj.mesh.scale.setScalar(scale);
            break;

          case 1: // Reduced detail - basic rotation and movement
            obj.mesh.rotation.y += obj.baseRotationSpeed;
            obj.mesh.position.y = obj.originalPosition.y + Math.sin(frameCountRef.current * obj.animationSpeed) * 1;
            obj.mesh.scale.setScalar(1);
            break;

          case 2: // Simple - only basic rotation
            if (frameCountRef.current % 2 === 0) { // Reduce frame rate
              obj.mesh.rotation.y += obj.baseRotationSpeed * 0.5;
            }
            obj.mesh.position.copy(obj.originalPosition);
            obj.mesh.scale.setScalar(1);
            break;

          case 3: // No animation
            // Objects are static, but we might update them less frequently
            if (frameCountRef.current % 10 === 0) {
              obj.mesh.position.copy(obj.originalPosition);
              obj.mesh.scale.setScalar(1);
            }
            break;
        }

        // Fade objects based on distance for additional LOD effect
        const material = obj.mesh.material as THREE.MeshLambertMaterial;
        if (distance > 20) {
          material.opacity = Math.max(0.1, 1 - (distance - 20) / 10);
        } else {
          material.opacity = 0.8;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative">
      <div ref={mountRef} className="w-full h-screen" />
      
      {/* LOD Information Overlay */}
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg border border-white/20">
        <h3 className="text-lg font-semibold mb-2 gradient-text">Animation LOD System</h3>
        <div className="space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>&lt; 5 units: Full animation detail</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <span>5-10 units: Reduced animation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
            <span>10-15 units: Simple animation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <span>&gt; 15 units: No animation</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-gray-300">
          Drag to rotate • Scroll to zoom
        </p>
      </div>
    </div>
  );
};

export default ThreeJSLOD;