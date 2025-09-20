EXPLICACIÓN DE CADA CÓDIGO

UNITY (MovimientoObjeto.cs)

- Se definen variables públicas para controlar el tiempo entre movimientos, la distancia de traslación y la velocidad de rotación.
- En 'Start()' se inicializa el temporizador con el tiempo entre movimientos.
- En 'Update()' se realizan tres acciones principales:
  1. **Rotación constante**: con EXPLICACIÓN DE CADA CÓDIGO
=========================

UNITY (MovimientoObjeto.cs)
---------------------------
- Se definen variables públicas para controlar el tiempo entre movimientos, la distancia de traslación y la velocidad de rotación.
- En 'Start()' se inicializa el temporizador con el tiempo entre movimientos.
- En 'Update()' se realizan tres acciones principales:
  1. **Rotación constante**: con 'transform.Rotate()' y 'Time.deltaTime' se logra que la rotación sea fluida e independiente de los FPS.
  2. **Escalado oscilante**: se utiliza 'Mathf.Sin(Time.time)' para variar el tamaño entre un mínimo y un máximo, aplicado a 'transform.localScale'.
  3. **Traslación aleatoria**: cada cierto tiempo ('tiempoRestante') se elige aleatoriamente mover el objeto en X o Y (positivo o negativo) mediante 'transform.Translate()'.

PROCESSING (cube.pde)
---------------------
- Se definen variables globales para manejar ángulo, escala y posición con límites de movimiento.
- En 'setup()' se configura la ventana 3D ('P3D') de 600x600 píxeles.
- En 'draw()':
  1. Se limpia el fondo y se agregan luces.
  2. Se traslada el cubo en el eje X, y se aplican rotaciones en X e Y con 'rotateX()' y 'rotateY()'.
  3. Se dibuja el cubo con 'box(200)' aplicando color de relleno y borde.
  4. Se hace oscilar la escala ('scale') y la posición ('pos') dentro de ciertos límites.
  5. Se incrementa el ángulo ('angle') para la animación de rotación.

PYTHON (Transformaciones con Numpy y Matplotlib)
------------------------------------------------
- Se importan librerías ('numpy', 'matplotlib', 'imageio') para manejar matrices, graficar y crear animaciones GIF.
- Se define un cuadrado con sus vértices.
- Funciones:
  - 'translate(points, tx, ty)': aplica traslación con una matriz de transformación.
  - 'rotate(points, angle, center)': aplica rotación en torno al origen o un centro definido.
  - 'scale(points, sx, sy)': aplica escalado en X y Y.
- Se prueban estas funciones con el cuadrado inicial (trasladado, rotado, escalado).
- Se genera una animación de 100 frames donde el cuadrado se traslada, rota y escala progresivamente, exportando un archivo GIF.

THREE.JS (React Three Fiber)
----------------------------
- Se usa '@react-three/fiber' (React) y '@react-three/drei' para simplificar elementos 3D.
- 'RotatingBox()':
  - Se usa 'useRef()' para referenciar el cubo y 'useFrame()' para actualizar en cada frame.
  - Se aplican tres transformaciones:
    1. Rotación continua en Y ('rotation.y += 0.01').
    2. Movimiento circular en plano XZ usando 'Math.cos' y 'Math.sin' con el tiempo 't'.
    3. Escalado oscilante basado en seno ('1 + 0.3 * sin(t)').
- 'RotatingCube()':
  - Crea el canvas con luces ('ambientLight', 'pointLight').
  - Renderiza el cubo rotando y permite mover la cámara con 'OrbitControls'.transform.Rotate()' y 'Time.deltaTime' se logra que la rotación sea fluida e independiente de los FPS.
  2. **Escalado oscilante**: se utiliza 'Mathf.Sin(Time.time)' para variar el tamaño entre un mínimo y un máximo, aplicado a 'transform.localScale'.
  3. **Traslación aleatoria**: cada cierto tiempo ('tiempoRestante') se elige aleatoriamente mover el objeto en X o Y (positivo o negativo) mediante 'transform.Translate()'.

PROCESSING (cube.pde)

- Se definen variables globales para manejar ángulo, escala y posición con límites de movimiento.
- En 'setup()' se configura la ventana 3D ('P3D') de 600x600 píxeles.
- En 'draw()':
  1. Se limpia el fondo y se agregan luces.
  2. Se traslada el cubo en el eje X, y se aplican rotaciones en X e Y con 'rotateX()' y 'rotateY()'.
  3. Se dibuja el cubo con 'box(200)' aplicando color de relleno y borde.
  4. Se hace oscilar la escala ('scale') y la posición ('pos') dentro de ciertos límites.
  5. Se incrementa el ángulo ('angle') para la animación de rotación.

PYTHON (Transformaciones con Numpy y Matplotlib)

- Se importan librerías ('numpy', 'matplotlib', 'imageio') para manejar matrices, graficar y crear animaciones GIF.
- Se define un cuadrado con sus vértices.
- Funciones:
  - 'translate(points, tx, ty)': aplica traslación con una matriz de transformación.
  - 'rotate(points, angle, center)': aplica rotación en torno al origen o un centro definido.
  - 'scale(points, sx, sy)': aplica escalado en X y Y.
- Se prueban estas funciones con el cuadrado inicial (trasladado, rotado, escalado).
- Se genera una animación de 100 frames donde el cuadrado se traslada, rota y escala progresivamente, exportando un archivo GIF.

THREE.JS (React Three Fiber)

- Se usa '@react-three/fiber' (React) y '@react-three/drei' para simplificar elementos 3D.
- 'RotatingBox()':
  - Se usa 'useRef()' para referenciar el cubo y 'useFrame()' para actualizar en cada frame.
  - Se aplican tres transformaciones:
    1. Rotación continua en Y ('rotation.y += 0.01').
    2. Movimiento circular en plano XZ usando 'Math.cos' y 'Math.sin' con el tiempo 't'.
    3. Escalado oscilante basado en seno ('1 + 0.3 * sin(t)').
- 'RotatingCube()':
  - Crea el canvas con luces ('ambientLight', 'pointLight').
  - Renderiza el cubo rotando y permite mover la cámara con 'OrbitControls'.