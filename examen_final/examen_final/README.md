# Final Exam - Computer Vision

# Exercise 1: Python Image Processing

## Overview

A computer vision project that processes images using OpenCV. The script loads an image (red panda), extracts individual color channels, applies morphological operations, and creates an animated GIF showing the transformations.

## What It Does

### Image Loading & Color Processing
1. Loads an image file (`redPanda.jpg`)
2. Converts color space from RGBA to BGR (OpenCV format)
3. Splits the image into individual color channels (Red, Green, Blue)

### Color Channel Extraction
- **Red Channel**: Isolates only red components, converts to grayscale
- **Green Channel**: Isolates only green components, converts to grayscale
- **Blue Channel**: Isolates only blue components, converts to grayscale

### Morphological Operations
Applied to the grayscale image using a 5x5 kernel:
- **Erosion**: Reduces white regions, highlights smaller features
- **Dilation**: Expands white regions, fills holes
- **Opening**: Erosion followed by dilation (removes small noise)

### Output
Creates an animated GIF (`image_changes.gif`) showing all transformations:
1. Original image (RGB)
2. Red channel
3. Green channel
4. Blue channel
5. Grayscale
6. Erosion
7. Dilation
8. Opening

## Installation & Running

1. **Install dependencies:**
   ```bash
   pip install opencv-python imageio
   ```

2. **Prepare the image:**
   - Place `redPanda.jpg` in the directory ./data/redPanda.jpg

3. **Run the notebook:**
   - Open `examen_final_python.ipynb` in Jupyter
   - Execute all cells to process the image and generate the GIF

4. **Output:**
   - `image_changes.gif` will be created showing all transformations

## Technologies Used
- **OpenCV** - Image processing and morphological operations
- **NumPy** - Array operations
- **ImageIO** - GIF creation

---

# Exercise 2: Three.js 3D Scene


## Overview

A Node.js web application demonstrating 3D graphics rendering using Three.js. Features an interactive scene with animated 3D objects, dynamic lighting, and orbital camera controls.

## Project Structure

```
threejs/
├── server.js           # Static file server
├── index.html          # HTML entry point
├── main.js             # 3D scene logic
├── package.json        # Dependencies
├── README.md           # Detailed documentation
├── textures/           # Image files (floor.jpg, metal.jpg)
└── gifs/              # Output/animation files
```
## How It Works

### Server Backend (server.js)

Node.js HTTP server that serves static files:
- Listens on port 8000 (configurable via PORT environment variable)
- Maps URL requests to local files
- Automatically serves `index.html` for root path
- Returns appropriate MIME types for different file extensions
- Includes security checks to prevent directory traversal attacks

### Frontend (main.js)

Three.js 3D scene with the following components:

#### Scene Setup
- **Renderer**: WebGL renderer with anti-aliasing
- **Camera**: Perspective camera starting at position (3, 2, 4)
- **Background**: Dark gray (0x202020)

### 3D Objects

1. **Cube** (blue)
   - Geometry: 1x1x1 BoxGeometry
   - Material: MeshStandardMaterial with blue color, low metalness and roughness
   - Position: Center of scene (0, 1, 0)
   - Animation: Rotates on X and Y axes continuously

2. **Cone** (metallic texture)
   - Geometry: ConeGeometry with radius 1, height 2
   - Material: Metal texture applied with high metalness and low roughness
   - Position: Left side (-2, 1.8, 0)
   - Animation: Rotates on X and Y axes continuously

3. **Ground Plane** (textured floor)
   - Geometry: 10x10 PlaneGeometry
   - Material: Repeating floor texture (4x4 repeat)
   - Rotated 90° to lie flat
   - Grid helper overlay for visual reference

### Lighting

- **Ambient Light**: Green light (0x00ff2a) at 0.6 intensity for overall scene illumination
- **Directional Light**: Red light (0xff0000) at 1.8 intensity from position (5, 8, 7) for dramatic shadows

### Interactive Controls

- **OrbitControls**: Mouse controls for rotating the camera around the scene
  - Damping enabled for smooth motion
  - Right-click drag to rotate
  - Scroll to zoom

### Keyboard Shortcuts

- **'E' key**: Fixed camera view from position (5, 5, 5)
- **'R' key**: Fixed camera view from position (-5, 5, 5)

### Animation Loops

Two animation functions run continuously:
- `animate()`: Updates cube rotation and renders the scene
- `animateCone()`: Updates cone rotation and renders the scene
- `controls.update()`: Updates camera damping each frame
- `renderer.render()`: Draws the scene to the canvas


### Lighting System

- **Ambient Light**: Green (0x00ff2a) at 0.6 intensity - provides base illumination
- **Directional Light**: Red (0xff0000) at 1.8 intensity - positioned at (5, 8, 7) for dramatic shadows

### User Interaction

#### Camera Controls (OrbitControls)
- **Right-click drag**: Rotate camera around the scene
- **Scroll wheel**: Zoom in/out
- **Damping enabled**: Smooth, eased camera motion

#### Keyboard Controls
- **'E' key**: Switch to fixed camera position (5, 5, 5)
- **'R' key**: Switch to fixed camera position (-5, 5, 5)

### Animation & Rendering

- **Continuous animation loops** update object rotations every frame
- **60 FPS rendering** using requestAnimationFrame
- **Responsive design**: Automatically adjusts to window resize events

## Execution

### Exercise 1: Python Image Processing

1. **Install dependencies:**
   ```bash
   cd python
   pip install opencv-python imageio
   ```

2. **Run the notebook:**
   - Open `examen_final_python.ipynb` in Jupyter Notebook
   - Execute all cells
   - View the generated `image_changes.gif`

### Exercise 2: Three.js 3D Scene

1. **Install dependencies:**
   ```bash
   cd threejs
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

4. **Interact with the scene:**
   - Drag mouse to rotate camera
   - Scroll to zoom in/out
   - Press 'E' or 'R' for fixed camera angles
   - Resize browser window to see responsive scaling

## Technologies Used

### Exercise 1
- **Python 3**
- **OpenCV** - Image processing
- **NumPy** - Array operations
- **Matplotlib** - Visualization
- **ImageIO** - GIF animation

### Exercise 2
- **Three.js** (v0.154.0) - 3D WebGL rendering
- **Node.js** - Server runtime
- **OrbitControls** - Camera manipulation

## Submission Contents

- **python/examen_final_python.ipynb** - Image processing notebook
- **threejs/** - Complete 3D scene application
- **README.md** - This documentation