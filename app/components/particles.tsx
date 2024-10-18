import * as THREE from "three";
import { MeshSurfaceSampler } from "three/addons/math/MeshSurfaceSampler.js";
import { useEffect, useRef } from "react";

const noise = `
  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x) {
      return mod289(((x*34.0)+1.0)*x);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //   x0 = x0 - 0.0 + 0.0 * C.xxx;
    //   x1 = x0 - i1  + 1.0 * C.xxx;
    //   x2 = x0 - i2  + 2.0 * C.xxx;
    //   x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

    // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  vec3 snoiseVec3(vec3 x) {
    float s  = snoise(vec3( x ));
    float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));
    float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));
    vec3 c = vec3( s , s1 , s2 );
    return c;
  }

  vec3 curlNoise(vec3 p) {
    const float e = .1;
    vec3 dx = vec3( e   , 0.0 , 0.0 );
    vec3 dy = vec3( 0.0 , e   , 0.0 );
    vec3 dz = vec3( 0.0 , 0.0 , e   );

    vec3 p_x0 = snoiseVec3( p - dx );
    vec3 p_x1 = snoiseVec3( p + dx );
    vec3 p_y0 = snoiseVec3( p - dy );
    vec3 p_y1 = snoiseVec3( p + dy );
    vec3 p_z0 = snoiseVec3( p - dz );
    vec3 p_z1 = snoiseVec3( p + dz );

    float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;
    float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;
    float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;

    const float divisor = 1.0 / ( 2.0 * e );
    return normalize( vec3( x , y , z ) * divisor );
  }
`;

const fboPositionVertexShader = `
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`;

const fboPositionFragmentShader = `
  precision highp float;
  uniform sampler2D uOriginalPositionsTexture;
  uniform sampler2D uPositionsTexture;
  uniform sampler2D uVelocitiesTexture;
  uniform vec2 uTextureResolution;
  uniform vec3 uPointer;
  uniform vec3 uPointerStart;
  uniform float uNoiseFrequency;
  uniform float uNoiseAmplitude;
  uniform float uTime;
  uniform float uDeltaTime;

  ${noise}

  void main() {
    vec2 uv = gl_FragCoord.xy / uTextureResolution;
    vec3 originalPosition = texture2D(uOriginalPositionsTexture, uv).rgb;
    vec3 position = texture2D(uPositionsTexture, uv).rgb;
    vec4 velocity = texture2D(uVelocitiesTexture, uv).rgba;
    vec3 diffPosition = originalPosition - position;

    position += curlNoise((originalPosition + uTime / 10.) * uNoiseFrequency) * uNoiseAmplitude;
    position += velocity.xyz * uDeltaTime;

    gl_FragColor = vec4(position, length(diffPosition));
  }
`;

const fboVelocityVertexShader = `
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`;

const fboVelocityFragmentShader = `
  precision highp float;
  uniform sampler2D uOriginalPositionsTexture;
  uniform sampler2D uPositionsTexture;
  uniform sampler2D uVelocitiesTexture;
  uniform vec2 uTextureResolution;
  uniform vec3 uPointer;
  uniform float uGravity;
  uniform vec3 uPointerStart;

  ${noise}

  void main() {
    vec2 uv = gl_FragCoord.xy / uTextureResolution;
    vec3 originalPosition = texture2D(uOriginalPositionsTexture, uv).rgb;
    vec3 position = texture2D(uPositionsTexture, uv).rgb;
    vec4 velocity = texture2D(uVelocitiesTexture, uv).rgba;

    // if pointer hits a particle
    vec3 diffToPointer = position - uPointer;
    float pointerDiffLength = distance(uPointer.xy, uPointerStart.xy);
    float distanceToPointer = length(position.xy - uPointer.xy);
    float isHit = 1. - smoothstep(0., 1., distanceToPointer);

    if (uGravity < 0.) {
      isHit = (smoothstep(0., 1., distanceToPointer) - 1.) * 10.;
    }

    // find target position
    vec3 target = originalPosition + normalize(diffToPointer) * clamp(pow(2.5, pointerDiffLength), 1.0, 100.0) * isHit + snoise(velocity.xyz * 0.7);

    // move that position
    velocity.xyz = (target - position);

    gl_FragColor = vec4(velocity.xyz, 1.);
  }
`;

export default function Particles() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    const highlightColor = new THREE.Vector3(0, 0, 0);
    const scene = new THREE.Scene();
    let aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 2;
    const camera = new THREE.OrthographicCamera(
      (frustumSize * aspect) / -2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      100
    );
    camera.position.z = 76;

    // fbo scene
    const fboScene = new THREE.Scene();
    const fboCamera = new THREE.OrthographicCamera(
      -1,
      1,
      1,
      -1,
      1 / Math.pow(2, 53),
      1
    );

    // fbo config
    const fboWidth = 1000;
    const fboHeight = 1000;
    const COUNT = fboWidth * fboHeight;

    // uniforms
    const textUniforms = {
      uPositionsTexture: { value: null },
      uVelocitiesTexture: { value: null },
      uGravity: { value: 1 },
      uHighlightColor: { value: new THREE.Vector3(1, 1, 1) },
    };
    const fboUniforms = {
      uOriginalPositionsTexture: { value: null },
      uPositionsTexture: { value: null },
      uVelocitiesTexture: { value: null },
      uTextureResolution: { value: new THREE.Vector2(fboWidth, fboHeight) },
      uGravity: { value: 1 },
      uPointer: { value: new THREE.Vector3() },
      uPointerStart: { value: new THREE.Vector3() },
      uNoiseFrequency: { value: 0.6 },
      uNoiseAmplitude: { value: 0.0025 },
      uTime: { value: 0 },
      uDeltaTime: { value: 0 },
      uComeBack: { value: 0 },
    };

    const textGeometry = new THREE.BufferGeometry();
    const textMaterial = new THREE.PointsMaterial({
      size: 1,
      opacity: 0.5,
      transparent: true,
    });

    const text = new THREE.Points(textGeometry, textMaterial);
    text.position.set(0, 0, 0);
    text.material.onBeforeCompile = function (shader) {
      shader.uniforms = {
        ...shader.uniforms,
        ...textUniforms,
      };
      shader.vertexShader = `
            uniform sampler2D uPositionsTexture;
            uniform sampler2D uVelocitiesTexture;
            varying vec2 vUv;
            varying float vTemperature;
            ${shader.vertexShader}
        `.replace(
        "#include <begin_vertex>",
        `
            #include <begin_vertex>
            transformed = texture2D(uPositionsTexture, position.xy).rgb;
            vTemperature = texture2D(uPositionsTexture, position.xy).a;
            vUv = uv;
        `
      );
      shader.fragmentShader = `
            uniform sampler2D uPositionsTexture;
            uniform vec3 uHighlightColor;
            varying float vTemperature;
            varying vec2 vUv;
        ${shader.fragmentShader}
        `.replace(
        "vec4 diffuseColor = vec4( diffuse, opacity );",
        `
            vec3 background = vec3(1.);
            vec3 finalColor = mix(background, uHighlightColor, vTemperature);
            vec4 diffuseColor = vec4( finalColor, opacity * smoothstep(0.04, 1., vTemperature / 2.5) );
        `
      );
    };

    // fbo mesh
    const fboMeshGeometry = new THREE.BufferGeometry();
    const fboPlaneGeometryPositions = new Float32Array([
      -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
    ]);
    fboMeshGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(fboPlaneGeometryPositions, 3)
    );
    const fboMeshMaterial = new THREE.ShaderMaterial({ uniforms: fboUniforms });
    const fboMesh = new THREE.Mesh(fboMeshGeometry, fboMeshMaterial);
    fboScene.add(fboMesh);

    // fbo render targets
    let fboPositionRenderTarget1 = new THREE.RenderTarget(fboWidth, fboHeight, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    });
    let fboPositionRenderTarget2 = fboPositionRenderTarget1.clone();
    let fboVelocityRenderTarget1 = fboPositionRenderTarget1.clone();
    let fboVelocityRenderTarget2 = fboPositionRenderTarget1.clone();

    function setTextGeometry() {
      text.geometry = new THREE.SphereGeometry(1.25, 16, 8);
      text.geometry.computeBoundingBox();
      const textWidth =
        text.geometry.boundingBox!.max.x - text.geometry.boundingBox!.min.x;
      const textHeight =
        text.geometry.boundingBox!.max.y - text.geometry.boundingBox!.min.y;

      const surfaceSampler = new MeshSurfaceSampler(
        text as unknown as THREE.Mesh
      ).build();
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(COUNT * 3);
      const uvs = new Float32Array(COUNT * 2);
      const fboPositionData = new Float32Array(COUNT * 4);
      const fboVelocityData = new Float32Array(COUNT * 4);

      const tempPosition = new THREE.Vector3();
      for (let i = 0; i < COUNT; i++) {
        const i2 = i * 2;
        const i3 = i * 3;
        const i4 = i * 4;

        // sample a postion from the surface of the text
        surfaceSampler.sample(tempPosition);
        const [x, y, z] = tempPosition;

        // intialize the position and velocity for fbo
        fboPositionData[i4 + 0] = x;
        fboPositionData[i4 + 1] = y;
        fboPositionData[i4 + 2] = z;

        // set particles position on the texture
        positions[i3 + 0] = (i % fboWidth) / fboWidth;
        positions[i3 + 1] = ~~(i / fboWidth) / fboHeight;
        positions[i3 + 2] = 0;

        // calculate uv based on text's width and height
        const xlength = x - text.geometry.boundingBox!.min.x;
        const ylength = x - text.geometry.boundingBox!.min.y;
        uvs[i2 + 0] = xlength / textWidth;
        uvs[i2 + 1] = ylength / textHeight;
      }
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

      fboMesh.material.uniforms.uOriginalPositionsTexture.value =
        new THREE.DataTexture(
          new Float32Array(fboPositionData), // wrap it in Float32Array again to make a copy
          fboWidth,
          fboHeight,
          THREE.RGBAFormat,
          THREE.FloatType
        );
      fboMesh.material.uniforms.uOriginalPositionsTexture.value.needsUpdate =
        true;

      fboMesh.material.uniforms.uPositionsTexture.value = new THREE.DataTexture(
        new Float32Array(fboPositionData), // wrap it in Float32Array again to make a copy
        fboWidth,
        fboHeight,
        THREE.RGBAFormat,
        THREE.FloatType
      );
      fboMesh.material.uniforms.uPositionsTexture.value.needsUpdate = true;

      fboMesh.material.uniforms.uVelocitiesTexture.value =
        new THREE.DataTexture(
          fboVelocityData,
          fboWidth,
          fboHeight,
          THREE.RGBAFormat,
          THREE.FloatType
        );
      fboMesh.material.uniforms.uVelocitiesTexture.value.needsUpdate = true;

      textUniforms.uPositionsTexture.value =
        fboMesh.material.uniforms.uPositionsTexture.value;
      text.geometry = geometry;
      text.geometry.computeBoundingSphere();
      text.geometry.boundingSphere!.radius = 1000;
    }

    setTextGeometry();
    scene.add(text);

    const renderer = new THREE.WebGLRenderer({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      powerPerformance: "high-performance",
      failIfMajorPerformanceCaveat: true,
      preserveDrawingBuffer: true,
      canvas: canvas.current,
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0000000);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    // plane to capture mouse position
    const raycasterPlaneGeometry = new THREE.PlaneGeometry(100, 100);
    const raycasterPlaneMaterial = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      depthTest: false,
      depthWrite: false,
    });
    const raycasterPlane = new THREE.Mesh(
      raycasterPlaneGeometry,
      raycasterPlaneMaterial
    );
    raycasterPlane.position.set(0, 0, 0.5);
    raycasterPlane.visible = false;
    scene.add(raycasterPlane);

    // raycaster
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector3();
    let gravity = 1;
    function onPointerUp() {
      gravity = 1;
    }

    function onPointerDown() {
      gravity = -1;
    }

    function onPointerMove(event: MouseEvent) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    let pointerStartCountdown = 0;

    // clock
    const clock = new THREE.Clock();
    let animationFrame: number;

    function render() {
      const delta = 0.003;
      const time = clock.getElapsedTime();

      // fbo
      if (!fboMesh.material.uniforms.uPositionsTexture.value)
        return requestAnimationFrame(render);
      if (!fboMesh.material.uniforms.uVelocitiesTexture.value)
        return requestAnimationFrame(render);
      const temp = fboVelocityRenderTarget1;
      fboVelocityRenderTarget1 = fboVelocityRenderTarget2;
      fboVelocityRenderTarget2 = temp;
      fboMesh.material.vertexShader = fboVelocityVertexShader;
      fboMesh.material.fragmentShader = fboVelocityFragmentShader;
      fboMesh.material.needsUpdate = true;
      renderer.setRenderTarget(
        fboVelocityRenderTarget1 as unknown as THREE.WebGLRenderTarget
      );
      renderer.clear();
      renderer.render(fboScene, fboCamera);
      fboMesh.material.uniforms.uVelocitiesTexture.value =
        fboVelocityRenderTarget1.texture;
      const temp2 = fboPositionRenderTarget1;
      fboPositionRenderTarget1 = fboPositionRenderTarget2;
      fboPositionRenderTarget2 = temp2;
      fboMesh.material.vertexShader = fboPositionVertexShader;
      fboMesh.material.fragmentShader = fboPositionFragmentShader;
      fboMesh.material.needsUpdate = true;
      renderer.setRenderTarget(
        fboPositionRenderTarget1 as unknown as THREE.WebGLRenderTarget
      );
      renderer.clear();
      renderer.render(fboScene, fboCamera);
      fboMesh.material.uniforms.uPositionsTexture.value =
        fboPositionRenderTarget1.texture;
      renderer.setRenderTarget(null);
      textUniforms.uPositionsTexture.value =
        fboMesh.material.uniforms.uPositionsTexture.value;
      textUniforms.uGravity.value = gravity;
      textUniforms.uHighlightColor.value = highlightColor;

      fboMesh.material.uniforms.uTime.value = time;
      fboMesh.material.uniforms.uDeltaTime.value = delta;
      fboMesh.material.uniforms.uGravity.value = gravity;

      // raycaster
      raycaster.setFromCamera(new THREE.Vector2(pointer.x, pointer.y), camera);
      const intersects = raycaster.intersectObjects([raycasterPlane]);
      if (intersects[0]) {
        fboMesh.material.uniforms.uPointer.value = intersects[0].point
          .clone()
          .sub(text.position);
      }
      if (pointerStartCountdown <= 0) {
        fboMesh.material.uniforms.uPointerStart.value =
          fboMesh.material.uniforms.uPointer.value;
        pointerStartCountdown = 10;
      } else {
        pointerStartCountdown -= 1;
      }

      renderer.render(scene, camera);
      setTimeout(() => {
        animationFrame = requestAnimationFrame(render);
      }, 30 / 1000);
    }

    animationFrame = requestAnimationFrame(render);

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("resize", onWindowResize);

    function onWindowResize() {
      camera.updateProjectionMatrix();
      camera.position.z =
        window.innerWidth < 500 ? 76 : window.innerWidth < 980 ? 46 : 26;
      renderer.setSize(window.innerWidth, window.innerHeight);

      aspect = window.innerWidth / window.innerHeight;
      camera.left = (frustumSize * aspect) / -2;
      camera.right = (frustumSize * aspect) / 2;
      camera.top = frustumSize / 2;
      camera.bottom = frustumSize / -2;
      camera.updateProjectionMatrix();
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      className="transition-opacity fixed inset-0 z-30 mix-blend-exclusion pointer-events-none"
    />
  );
}
