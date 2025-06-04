// flashcards.js
const flashcard = [
    /* ───────────── Lecture 2 – Image Basics, Thresholding & Morphology ───────────── */
    {
    "category": "Lecture02(Binary Image Analysis)",
    "question": "What is the relationship between spatial resolution and image size, and how does pixel representation affect memory usage?",
    "answer": "<p>An image is represented as a matrix where each entry corresponds to a pixel's grey-level intensity (ranging from 0 to 255). The <strong>spatial resolution</strong> is defined by the matrix dimensions, e.g., a 512×512 image has higher resolution than a 128×128 one.</p><ul><li><strong>Spatial resolution:</strong> Determined by the number of pixels in width and height.</li><li><strong>Memory usage:</strong> Each pixel uses 8 bits (1 byte) for greyscale; so, a 512×512 image uses 512×512×8 = 2,097,152 bits (262,144 bytes).</li></ul><p>Reducing resolution or grey levels can significantly affect both storage and perceived image quality.</p>"
    },
    {
    "category": "Lecture02(Binary Image Analysis)",
    "question": "What is image binarization and why is it used in computer vision?",
    "answer": "<p><strong>Image binarization</strong> converts a greyscale image into a binary image using thresholding, resulting in two levels: foreground (often white) and background (often black).</p><p><strong>Applications:</strong></p><ul><li>Pre-processing for OCR (Optical Character Recognition)</li><li>License plate recognition</li><li>Fingerprint and palm print identification</li><li>Signature recognition</li><li>Digit recognition and edge map processing</li></ul><p>Though some detail is lost, binary images are simpler and faster to analyze.</p>"
    },
    {
    "category": "Lecture02(Binary Image Analysis)",
    "question": "Describe Otsu's thresholding method and explain how it determines the optimal threshold.",
    "answer": "<p><strong>Otsu's method</strong> is a global thresholding algorithm that finds the threshold minimizing intra-class variance (within foreground and background).</p><ol><li>Compute histogram and intensity probabilities.</li><li>For every possible threshold <code>t</code>, compute class probabilities <code>w1</code>, <code>w2</code> and means <code>μ1</code>, <code>μ2</code>.</li><li>Calculate between-class variance <code>σ²_b(t) = w1(t) * w2(t) * (μ1 - μ2)²</code>.</li><li>Select the threshold <code>t</code> that maximizes <code>σ²_b</code>.</li></ol><p>Otsu's method is suitable for images with bimodal histograms and operates on global statistics.</p>"
    },
    {
    "category": "Lecture02(Binary Image Analysis)",
    "question": "Compare global and local thresholding methods. When should one be preferred over the other?",
    "answer": "<ul><li><strong>Global Thresholding:</strong><ul><li>Applies a single threshold value to the entire image.</li><li>Fast and effective under uniform illumination.</li><li>Fails under variable lighting conditions.</li></ul></li><li><strong>Local Thresholding:</strong><ul><li>Threshold depends on local statistics (e.g., mean and standard deviation in a window).</li><li>Handles non-uniform illumination well.</li><li>Slower due to per-region computation.</li></ul></li></ul><p>Use <strong>global</strong> for well-lit scenes; <strong>local</strong> when dealing with shadows, gradients, or document scans.</p>"
    },
    {
    "category": "Lecture02(Binary Image Analysis)",
    "question": "How does Niblack's method work and how does it compare to Sauvola's method?",
    "answer": "<p><strong>Niblack's method</strong> calculates a local threshold <code>t</code> using:</p><p><code>t = μ - kσ</code>, where:</p><ul><li><code>μ</code>: local mean (e.g., in a 15×15 window)</li><li><code>σ</code>: local standard deviation</li><li><code>k</code>: typically -0.2</li></ul><p><strong>Sauvola's method</strong> refines this to:</p><p><code>t = μ * (1 + k(σ/r - 1))</code>, where:</p><ul><li><code>k</code>: e.g., 0.5</li><li><code>r</code>: dynamic range of standard deviation (e.g., 128)</li></ul><p><strong>Comparison:</strong> Sauvola is more adaptive, especially in noisy and highly variable lighting.</p>"
    },
    {
    "category": "Lecture02(Binary Image Analysis)",
    "question": "What is Connected Component Analysis (CCA) and how does it work in binary image processing?",
    "answer": "<p><strong>Connected Component Analysis (CCA)</strong> identifies and labels distinct connected regions in a binary image.</p><ol><li>Scan the image row-by-row.</li><li>Assign a new label to a foreground pixel if left and upper neighbors are background.</li><li>Copy the label from neighbors if already foreground.</li><li>Merge labels if necessary (i.e., upper and left neighbors have different labels).</li></ol><p>Choice of <strong>4- or 8-neighbourhood</strong> affects connectivity assumptions.</p>"
    },
    {
    "category": "Lecture02(Binary Image Analysis)",
    "question": "What are morphological operations in image processing, and what is their purpose?",
    "answer": "<p><strong>Morphological operations</strong> manipulate the structure of binary images using a structuring element.</p><ul><li><strong>Dilation:</strong> Expands objects; fills holes.</li><li><strong>Erosion:</strong> Shrinks objects; removes noise.</li><li><strong>Opening:</strong> <em>Erosion followed by Dilation</em>; removes protrusions.</li><li><strong>Closing:</strong> <em>Dilation followed by Erosion</em>; fills gaps and smoothens boundaries.</li><li><strong>Boundary Extraction:</strong> Uses subtraction: <code>Boundary(A) = A - Erosion(A)</code></li></ul><p>They are foundational for cleaning, segmenting, and extracting meaningful regions.</p>"
    },
    {
    "category": "Lecture02(Binary Image Analysis)",
    "question": "What is the Distance Transform and how is it computed in binary images?",
    "answer": "<p>The <strong>Distance Transform</strong> replaces each foreground pixel with its distance to the nearest background pixel.</p><ol><li>Use a <strong>two-pass algorithm</strong> (standard scan and reverse scan).</li><li>Each pixel's distance is updated based on neighboring pixels that precede or follow it in scan order.</li><li>Distance can be computed in L1 (Manhattan) or L2 (Euclidean) metrics.</li></ol><p>Applications include: shape analysis, skeletonization, and thickness estimation.</p>"
    },
    {
    "category": "Lecture02(Binary Image Analysis)",
    "question": "How do you compute the compactness of a binary shape, and what does it tell you?",
    "answer": "<p><strong>Compactness</strong> is defined as:</p><p><code>Compactness = Area / (Boundary Length)<sup>2</sup></code></p><ul><li>Measures how closely packed the shape is.</li><li>Higher compactness = more circular/regular shape.</li><li>Useful for shape classification and object recognition.</li></ul>"
    },
    {
    "category": "Lecture02(Binary Image Analysis)",
    "question": "What are 2D gradients in image analysis and how do they relate to image surfaces?",
    "answer": "<p>A 2D gradient of an image <code>f(x, y)</code> is a vector:</p><p><code>∇f = [df/dx, df/dy]</code></p><ul><li>Points in the direction of steepest ascent (brightest increase).</li><li>Magnitude shows rate of intensity change.</li><li>Used in edge detection, surface analysis, segmentation.</li></ul><p>At peaks/valleys: <code>∇f = 0</code>. Perpendicular vectors describe level curves (contours).</p>"
    },
    {
    "category": "Lecture02(Binary Image Analysis)",
    "question": "Why are gradients considered more informative than pixel intensities in grayscale image analysis?",
    "answer": "<p>Gradients capture <strong>local intensity changes</strong> rather than absolute values.</p><ul><li>Highlight <strong>edges, boundaries, and textures</strong>.</li><li>Invariance to constant brightness shifts.</li><li>Provide directional cues for <em>shape, depth, and object boundaries</em>.</li></ul><p>In surface view, gradients reveal terrain-like features—slope, orientation, and curvature.</p>"
    },
    /* ───────────── Lecture 3 – Fourier Transform & Frequency Analysis ───────────── */
    {
        "category": "Lecture3(FourierTransform)",
        "question": "What is a signal in computer vision context?",
        "answer": "A signal is any physical phenomenon that can be modeled as a function of time or position to some real- or vector-valued domain and is used to carry information. In computer vision, a greyscale image is treated as a 2-D signal."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "What's the difference between analog and digital signals?",
        "answer": "• Analog signals: continuous domain and continuous range\n• Digital signals: discrete domain and discrete range\n• Images are digital signals with discrete pixels and intensities."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "How do 1-D and 2-D signals differ in vision processing?",
        "answer": "1-D signals vary over time (e.g., audio); 2-D signals vary over 2D space (images) and require 2-D operations like 2-D convolution."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "What is a kernel in image processing?",
        "answer": "A small matrix (mask) used to convolve with an image to perform operations such as blurring, sharpening or edge detection."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "What defines a linear filter?",
        "answer": "It satisfies additivity and homogeneity: T(f+g)=T(f)+T(g) and T(af)=a·T(f)."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "Provide an example of a non-linear filter.",
        "answer": "Median filter or gamma correction; they violate linearity because output is not linear combination of inputs."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "State the 2-D convolution formula.",
        "answer": "(f∗g)(x,y)=ΣuΣv f(u,v) g(x-u, y-v)."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "How does correlation differ from convolution?",
        "answer": "In correlation the kernel is not flipped; convolution flips the kernel both horizontally and vertically before sliding."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "Why perform Fourier Transform in image analysis?",
        "answer": "To analyze frequency content, design frequency-domain filters, perform efficient convolution, compression and pattern detection."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "When is Fourier Series used?",
        "answer": "For periodic continuous signals to represent them as sums of sines and cosines."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "What is a discrete spectrum?",
        "answer": "A set of isolated frequency components (impulses) produced by a periodic signal's Fourier series."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "Name three key properties of the Fourier Transform.",
        "answer": "Linearity, shift (translation) property, and convolution theorem."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "State the Nyquist sampling criterion.",
        "answer": "Sampling frequency must be at least twice the highest signal frequency to avoid aliasing."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "Why can frequencies above Nyquist cause aliasing?",
        "answer": "They fold back into lower frequencies after sampling, distorting the reconstructed signal."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "What is the computational complexity of FFT compared to DFT?",
        "answer": "FFT: O(N log N); naive DFT: O(N²)."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "Which carries more structural information, phase or magnitude?",
        "answer": "Phase; swapping phase retains image structure whereas swapping magnitude only alters contrast."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "How is low-pass filtering done in frequency domain?",
        "answer": "Multiply Fourier spectrum by a mask that preserves low frequencies near origin and attenuates high frequencies."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "Name a common low-pass filter in frequency domain.",
        "answer": "Ideal, Butterworth or Gaussian low-pass filter."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "Why use fftshift before visualizing the spectrum?",
        "answer": "Centers the zero frequency component, making the spectrum easier to interpret."
    },
    {
        "category": "Lecture3(FourierTransform)",
        "question": "Which functions help rescale FFT magnitude for display?",
        "answer": "Log or square-root scaling to compress large dynamic range."
    },
    
    /* ───────────── Lecture 4 – Single-Pixel Ops, Histogram Eq & Spatial Filtering ───────────── */
    {
        "category": "Lecture4(Enhancement)",
        "question": "Give two examples of single-pixel intensity transformations.",
        "answer": "Negative transformation and gamma (power-law) correction."
    },
    {
        "category": "Lecture4(Enhancement)",
        "question": "What is the goal of contrast stretching?",
        "answer": "Expand intensity range to utilize full dynamic range and improve visibility of details."
    },
    {
        "category": "Lecture4(Enhancement)",
        "question": "What does histogram equalization achieve?",
        "answer": "Flattens the histogram to produce a uniform distribution, enhancing global contrast."
    },
    {
        "category": "Lecture4(Enhancement)",
        "question": "Why is Gaussian preferred for smoothing?",
        "answer": "It removes high-frequency noise while preserving edges better due to no ringing artifacts."
    },
    {
        "category": "Lecture4(Enhancement)",
        "question": "What is high-boost filtering used for?",
        "answer": "To sharpen images by adding a scaled high-pass filtered version to the original image."
    },
    {
        "category": "Lecture4(Enhancement)",
        "question": "Why is median filter effective for salt-and-pepper noise?",
        "answer": "It replaces each pixel with median of neighborhood, removing isolated outliers without blurring edges."
    },
    {
        "category": "Lecture4(Enhancement)",
        "question": "Why must anti-aliasing be applied before subsampling?",
        "answer": "To suppress high frequencies that would alias after down-sampling."
    },
    {
        "category": "Lecture4(Enhancement)",
        "question": "Name two similarity measures for template matching.",
        "answer": "Sum of Squared Differences (SSD) and Normalized Cross-Correlation (NCC)."
    },
    
    /* ───────────── Lecture 5 – Edge Detection ───────────── */
    {
        "category": "Lecture5(EdgeDetection)",
        "question": "What is an edge in an image?",
        "answer": "A location of rapid intensity change corresponding to boundaries of objects or features."
    },
    {
        "category": "Lecture5(EdgeDetection)",
        "question": "List four physical causes of edges.",
        "answer": "Depth discontinuity, surface normal discontinuity, surface color discontinuity, illumination discontinuity."
    },
    {
        "category": "Lecture5(EdgeDetection)",
        "question": "Name three finite-difference schemes for 1-D gradient.",
        "answer": "Forward difference, backward difference, central difference."
    },
    {
        "category": "Lecture5(EdgeDetection)",
        "question": "What are the 3×3 Sobel kernels?",
        "answer": "Gx = [[+1 0 -1],[+2 0 -2],[+1 0 -1]]; Gy = [[+1 +2 +1],[0 0 0],[-1 -2 -1]]."
    },
    {
        "category": "Lecture5(EdgeDetection)",
        "question": "How does Prewitt differ from Sobel?",
        "answer": "Prewitt uses uniform weights (1) whereas Sobel uses center weight 2 for better smoothing."
    },
    {
        "category": "Lecture5(EdgeDetection)",
        "question": "What is the Laplacian of Gaussian (LoG) used for?",
        "answer": "Detect zero-crossings that correspond to edges by combining smoothing and second-derivative."
    },
    {
        "category": "Lecture5(EdgeDetection)",
        "question": "What three criteria define an optimal edge detector according to Canny?",
        "answer": "Good detection (low error rate), good localization, and single response to a single edge."
    },
    {
        "category": "Lecture5(EdgeDetection)",
        "question": "Outline the Canny edge detection pipeline.",
        "answer": "1) Gaussian smoothing 2) Gradient magnitude & orientation 3) Non-maximal suppression 4) Hysteresis thresholding."
    },
    {
        "category": "Lecture5(EdgeDetection)",
        "question": "Why use two thresholds in Canny?",
        "answer": "High threshold finds strong edges; low threshold links weak edges connected to strong ones, reducing breaks."
    },
    {
        "category": "Lecture5(EdgeDetection)",
        "question": "How does increasing Gaussian σ affect Canny output?",
        "answer": "More smoothing reduces noise but blurs edges, decreasing localization accuracy."
    },
    
    /* ───────────── Lecture 6 – Object Recognition & PCA ───────────── */
    {
        "category": "Lecture6(ObjectRecognition)",
        "question": "Differentiate between identification and categorization.",
        "answer": "Identification matches to a specific instance; categorization assigns to a class label."
    },
    {
            "category": "Lecture6(ObjectRecognition)",
        "question": "How does detection differ from recognition?",
        "answer": "Detection localizes instances of a class; recognition determines identity or class once detected."
    },
    {
        "category": "Lecture6(ObjectRecognition)",
        "question": "Name four challenges in visual recognition.",
        "answer": "Appearance variation, viewpoint changes, illumination, background clutter, scale, occlusion."
    },
    {
        "category": "Lecture6(ObjectRecognition)",
        "question": "List stages of a typical object recognition pipeline.",
        "answer": "1) Feature extraction 2) Training (learn classifier) 3) Testing (classification/prediction)."
    },
    {
        "category": "Lecture6(ObjectRecognition)",
        "question": "What does PCA achieve in object recognition?",
        "answer": "Projects high-dimensional image data onto lower-dimensional orthogonal basis maximizing variance; used for shape/appearance modeling."
    },
    {
        "category": "Lecture6(ObjectRecognition)",
        "question": "How are Eigenfaces used in face recognition?",
        "answer": "Faces are projected onto PCA subspace; recognition done by nearest neighbor in eigenface coefficients."
    },
    {
        "category": "Lecture6(ObjectRecognition)",
        "question": "What is a color histogram?",
        "answer": "Distribution of pixel colors in chosen color space (e.g., HSV), used as descriptor for object recognition."
    },
    {
        "category": "Lecture6(ObjectRecognition)",
        "question": "Why convert RGB to HSV or CIE-XYZ for color matching?",
        "answer": "Decouples chromaticity from intensity, making descriptors more robust to lighting changes."
    },
    {
        "category": "Lecture6(ObjectRecognition)",
        "question": "Describe the k-Nearest Neighbor classifier.",
        "answer": "Classifies a sample by majority vote of its k closest training samples in feature space."
    },
    {
        "category": "Lecture6(ObjectRecognition)",
        "question": "What is the goal of an SVM?",
        "answer": "Find the maximum-margin hyperplane that separates classes; can be extended with kernels for nonlinear separation."
    },
    
    /* ───────────── Lecture 7 – Feature Detection & Extraction ───────────── */
    
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "Why are pixel values not suitable for robust feature matching across images?",
    "answer": "<p>Pixel values are highly sensitive to:</p><ul><li><strong>Lighting conditions:</strong> Illumination changes affect pixel intensities.</li><li><strong>Color variations:</strong> Different camera settings or scenes cause value inconsistencies.</li><li><strong>Viewpoint shifts:</strong> Camera orientation changes can significantly alter pixel arrangements.</li></ul><p>These instabilities make direct pixel comparison unreliable for tasks like image matching or object recognition.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "How does the Harris Corner Detector achieve rotation invariance but not scale invariance?",
    "answer": "<ul><li><strong>Rotation Invariance:</strong> Harris computes a <code>corner response R</code> based on the eigenvalues of the matrix M, which remain stable under rotation.</li><li><strong>Scale Sensitivity:</strong> The fixed-size window used in Harris fails to detect corners at different image scales. A corner at one scale may not appear as one at another.</li></ul><p>Thus, Harris requires a fixed scale set by the user and does not adapt automatically to scale changes.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "What are the two main steps in feature extraction, and how do they relate?",
    "answer": "<ol><li><strong>Feature Detection:</strong> Determines <em>where</em> in the image features should be extracted (e.g., corners).</li><li><strong>Feature Description:</strong> Defines <em>how</em> to describe the detected point, typically using gradients or histogram information.</li></ol><p>Detection identifies informative regions, while description encodes them for comparison. Both steps must be tuned to maintain invariance to transformations like rotation or scale.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "What makes a feature 'good' for detection and matching tasks?",
    "answer": "<ul><li><strong>Repeatability:</strong> Detectable under various viewing conditions (illumination, perspective).</li><li><strong>Saliency:</strong> Should be distinctive enough to distinguish between points.</li><li><strong>Compactness:</strong> Few and small features make matching faster.</li></ul><p>Effective features offer consistency across transformations and computational efficiency.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "Compare Haar features with LBP and HOG in terms of detection and representation.",
    "answer": "<ul><li><strong>Haar:</strong> Use rectangular differences, fast via integral images, used in face detection.</li><li><strong>LBP:</strong> Texture-based binary encoding; robust to illumination but not rotation unless modified.</li><li><strong>HOG:</strong> Gradient-based descriptor emphasizing edge direction; effective for object detection.</li></ul><p>Each method offers trade-offs between computation cost and descriptive power.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "Why does HOG compute histograms on small patches (e.g., 8×8 cells) instead of globally?",
    "answer": "<p>Dividing the image into <strong>localized cells</strong> ensures:</p><ul><li>Capture of spatial structure and object shape.</li><li>Better representation of object parts.</li><li>Robustness to minor translations or occlusions.</li></ul><p>Local histograms allow for detailed structural encoding that would be lost with global features.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "Explain how the integral image speeds up Haar feature computation.",
    "answer": "<p>The <strong>integral image</strong> at a location (x, y) stores the sum of all pixels above and to the left of (x, y). Using it:</p><ul><li>Any rectangular region's sum can be computed in <strong>constant time</strong> using just 4 lookups.</li><li>Eliminates need for per-pixel summation during feature evaluation.</li></ul><p>This drastically reduces computation, enabling real-time detection systems.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "How does SIFT ensure invariance to rotation?",
    "answer": "<ul><li><strong>Gradient Histogram:</strong> For each keypoint, SIFT computes a histogram of local gradient directions.</li><li><strong>Orientation Assignment:</strong> Dominant direction is identified and used to rotate the patch to a canonical orientation.</li></ul><p>This normalization makes descriptors rotation-invariant by aligning all features relative to the same direction.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "What is the Difference of Gaussian (DoG) and how does it help SIFT achieve scale invariance?",
    "answer": "<p>DoG is computed by subtracting two blurred images at different scales:</p><ul><li>Highlights changes in image structure at various levels.</li><li><strong>Keypoints</strong> are detected where maxima/minima persist across scales.</li></ul><p>This allows SIFT to find features that are stable regardless of image resolution.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "Why are LBP features more robust to illumination than raw intensity values?",
    "answer": "<ul><li>LBP compares <strong>local intensity patterns</strong> rather than absolute values.</li><li>Binary encoding reduces the impact of gradual lighting changes.</li></ul><p>This encoding makes LBP effective for texture classification in varying light conditions.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "Describe the structure of a SIFT keypoint descriptor.",
    "answer": "<p>Each SIFT descriptor is a <strong>128-dimensional vector</strong> constructed as follows:</p><ul><li>Divide 16×16 window into 16 (4×4) blocks.</li><li>Compute 8-bin gradient histogram per block.</li></ul><p>This yields 4×4×8 = 128 values, capturing local gradient structure in a compact, robust form.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "What is the mathematical condition for detecting corners using the Harris response <code>R</code>?",
    "answer": "<p>The cornerness measure is:</p><p><code>R = det(M) - k × (trace(M))²</code></p><ul><li><strong>R &gt; 0:</strong> Corner</li><li><strong>R &lt; 0:</strong> Edge</li><li><strong>|R| small:</strong> Flat region</li></ul><p>Where M is the second-moment matrix of gradients and k is an empirical constant (typically 0.04–0.06).</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "Why is non-maximum suppression essential in corner detection?",
    "answer": "<ul><li><strong>R values</strong> may be high in a region around a corner.</li><li>To localize true corners, retain only the <strong>local maxima</strong> of R.</li><li>Eliminates redundant and noisy detections.</li></ul><p>This step sharpens localization and reduces overlap among nearby detections.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "How do SIFT and Harris differ in handling scale and orientation?",
    "answer": "<ul><li><strong>Harris:</strong> Rotation-invariant but <em>not</em> scale-invariant. Uses fixed-size window.</li><li><strong>SIFT:</strong> Fully scale and rotation-invariant. Uses DoG and gradient alignment.</li></ul><p>SIFT is thus preferred in applications with variable object sizes or camera angles.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "What is the role of gradient magnitude in HOG descriptors?",
    "answer": "<p>Gradient magnitude:</p><ul><li><strong>Weights</strong> the contribution of a pixel's orientation in the histogram.</li><li>Enhances the impact of strong edges over weak or noisy gradients.</li></ul><p>This improves robustness and emphasizes prominent object boundaries.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "Why do HOG features include normalization steps after cell histograms?",
    "answer": "<ul><li><strong>Lighting sensitivity:</strong> Raw gradients vary with brightness.</li><li><strong>Normalization:</strong> Combine histograms in 16×16 blocks (4 cells) into 36×1 vector and normalize.</li></ul><p>This reduces effects of illumination changes, producing more stable features.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "How does SIFT avoid selecting features from flat or edge-only regions?",
    "answer": "<ul><li><strong>Contrast Thresholding:</strong> Removes low-contrast keypoints.</li><li><strong>Principal Curvature Check:</strong> Suppresses keypoints with large eigenvalue ratios (edges).</li></ul><p>This ensures that retained features are both <strong>distinctive</strong> and <strong>localizable</strong>.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "How does the SIFT algorithm achieve invariance to affine transformations?",
    "answer": "<ul><li><strong>Scale invariance:</strong> Through DoG-based scale-space analysis.</li><li><strong>Rotation invariance:</strong> By assigning dominant gradient orientation.</li><li><strong>Affine robustness:</strong> Extracts keypoints that are distinctive across different viewpoints.</li></ul><p>These steps collectively ensure resilience to typical affine transformations.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "Compare the HOG and SIFT descriptors in terms of computation and robustness.",
    "answer": "<ul><li><strong>HOG:</strong><ul><li>Faster to compute.</li><li>Effective for shape-based tasks (e.g., pedestrian detection).</li></ul></li><li><strong>SIFT:</strong><ul><li>Computationally heavier.</li><li>Robust to scale, rotation, illumination changes.</li></ul></li></ul><p>HOG is simpler but SIFT is more versatile for complex recognition tasks.</p>"
    },
    {
    "category": "Lecture07(Feature Detection and Extraction)",
    "question": "What is the intuition behind using eigenvalues of the structure tensor in corner detection?",
    "answer": "<p>The structure tensor captures local gradient variation:</p><ul><li><strong>Both large eigenvalues:</strong> High variation in two directions → corner.</li><li><strong>One large, one small:</strong> Edge.</li><li><strong>Both small:</strong> Flat region.</li></ul><p>This enables robust detection of corners as points of high local complexity.</p>"
    },
    
    /* ───────────── Lecture 8 – Camera Calibration ───────────── */
    {
        "category": "Lecture8(Calibration)",
        "question": "Why is camera calibration useful?",
        "answer": "It estimates intrinsic and extrinsic parameters allowing metric measurements, 3-D reconstruction, and distortion correction."
    },
    {
        "category": "Lecture8(Calibration)",
        "question": "List the five intrinsic camera parameters.",
        "answer": "Focal length fx, focal length fy, principal point (cx, cy), and skew s."
    },
    {
        "category": "Lecture8(Calibration)",
        "question": "What do the six extrinsic parameters represent?",
        "answer": "3D rotation (3 parameters) and translation (3 parameters) of camera with respect to world coordinates."
    },
    {
        "category": "Lecture8(Calibration)",
        "question": "Describe the pinhole camera model.",
        "answer": "Projects 3D points onto 2D image plane via straight lines through a single center of projection (camera center)."
    },
    {
        "category": "Lecture8(Calibration)",
        "question": "What is the form of the full camera projection matrix P?",
        "answer": "P = K [ R | t ] where K is intrinsic 3×3, R is 3×3 rotation, t is translation 3×1."
    },
    {
                "category": "Lecture8(Calibration)",
        "question": "Write the perspective projection of 3-D point (X,Y,Z).",
        "answer": "In homogeneous: s [u v 1]ᵀ = K [ R | t ] [X Y Z 1]ᵀ."
    },
    {
        "category": "Lecture8(Calibration)",
        "question": "What is solved in the Direct Linear Transformation (DLT) method?",
        "answer": "Linear system Aq=0 for projection matrix parameters using many point correspondences."
    },
    {
        "category": "Lecture8(Calibration)",
        "question": "Name two types of radial distortion.",
        "answer": "Barrel distortion (magnification decreases with radius) and pincushion distortion (magnification increases with radius)."
    },
    
    /* ───────────── Lecture 9 – Projective Geometry ───────────── */
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "What is the geometric significance of vanishing points in perspective images?",
        "answer": "<p>Vanishing points represent the intersection points of parallel lines in 3D space when projected onto a 2D image plane. They arise due to perspective projection and hold the following significance:</p><ul><li><strong>Direction Encoding:</strong> Each vanishing point corresponds to a specific direction in 3D space.</li><li><strong>Reconstruction Tool:</strong> They are used to infer 3D geometry, orientation, and camera parameters.</li><li><strong>Multiple Points:</strong> Sets of parallel lines not aligned with the same direction yield different vanishing points.</li></ul>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "How is a vanishing line formed, and what is its interpretation in a scene?",
        "answer": "<p>A <strong>vanishing line</strong> is formed by joining two or more vanishing points that lie on the same plane. It represents the horizon or the limit of visibility in that plane.</p><ul><li><strong>For horizontal ground planes:</strong> The vanishing line is the geometric horizon.</li><li><strong>In 3D understanding:</strong> It helps identify the orientation of the scene with respect to the camera.</li></ul><p>The vanishing line also plays a critical role in rectifying perspective distortion.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "Why are homogeneous coordinates essential in projective geometry?",
        "answer": "<p><strong>Homogeneous coordinates</strong> extend Euclidean coordinates to represent points at infinity and enable projective transformations. Their advantages include:</p><ul><li><strong>Representing Points at Infinity:</strong> Parallel lines meet at vanishing points using homogeneous coordinates.</li><li><strong>Simplifying Transformations:</strong> Translation, rotation, scaling, and projection become matrix operations.</li><li><strong>Duality:</strong> Points and lines share a unified representation.</li></ul>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "How do affine and projective transformations differ geometrically?",
        "answer": "<ul><li><strong>Affine Transformation:</strong><ul><li>Preserves parallelism and collinearity</li><li>Does not preserve angles or distances</li></ul></li><li><strong>Projective Transformation:</strong><ul><li>More general; can represent perspective effects</li><li>Preserves straight lines and cross-ratio but not parallelism</li></ul></li></ul><p><strong>Conclusion:</strong> Affine is a subset of projective transformation. Projective transformation models real-world imaging more accurately.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "What are the conditions under which two lines intersect in homogeneous coordinates?",
        "answer": "<p>Two lines intersect at a point <code>p</code> in homogeneous coordinates if:</p><p><code>p = l₁ × l₂</code> (cross product of the two lines)</p><p>Conversely, to check if a point lies on a line:</p><p><code>lᵀ · p = 0</code></p><p>This condition ensures that the point and line are incident under projective geometry.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "How can we determine the equation of a line through two points in homogeneous coordinates?",
        "answer": "<p>Given two points <code>p₁ = (x₁, y₁, 1)</code> and <code>p₂ = (x₂, y₂, 1)</code>, the line <code>l</code> passing through them is given by:</p><p><code>l = p₁ × p₂</code></p><p>This cross product yields the coefficients <code>(a, b, c)</code> of the line equation <code>ax + by + c = 0</code>.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "Explain the cross-ratio and why it is a projective invariant.",
        "answer": "<p>The <strong>cross-ratio</strong> of four collinear points A, B, C, D is defined as:</p><p><code>(AC/AD) / (BC/BD)</code></p><p><strong>Why it is invariant:</strong></p><ul><li>It remains constant under projective transformations.</li><li>Useful in metrology: allows recovery of unknown lengths using known ratios.</li></ul><p>Only six unique cross-ratios exist due to symmetry and reordering.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "How is the height of an object computed from a single image using vanishing points?",
        "answer": "<ol><li>Identify a reference object with known height.</li><li>Find the vertical vanishing point.</li><li>Mark the top and bottom of both the reference and target objects.</li><li>Use similar triangles or compute metric factor using cross-ratio or projection geometry.</li></ol><p>This process uses projective geometry principles to infer metric properties from images.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "How do you construct a vanishing line from two vanishing points?",
        "answer": "<p>The <strong>vanishing line</strong> is computed as the cross product of two vanishing points <code>v₁</code> and <code>v₂</code>:</p><p><code>l = v₁ × v₂</code></p><p>This line lies on the image plane and represents the projection of the horizon or the plane containing the two sets of parallel lines.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "Describe the steps involved in image rectification using homography.",
        "answer": "<ol><li>Identify four points on the plane to be rectified.</li><li>Compute the vanishing line of the plane.</li><li>Estimate the homography matrix <code>H</code> from these points.</li><li>Apply <code>H</code> to transform the distorted image region.</li></ol><p>This process corrects perspective distortion and restores geometric properties like angles and parallelism.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "What is the homography matrix and how is it estimated from point correspondences?",
        "answer": "<p>The <strong>homography matrix</strong> is a 3×3 transformation matrix mapping points from one plane to another under projective geometry.</p><p><strong>Estimation:</strong> From 4 or more point correspondences, set up linear equations and solve using:</p><ul><li><strong>Direct Linear Transformation (DLT)</strong></li><li><strong>Singular Value Decomposition (SVD)</strong></li></ul><p>The solution is the eigenvector corresponding to the smallest singular value.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "Why is perspective rectification important in computer vision applications?",
        "answer": "<p><strong>Perspective rectification</strong> removes projective distortion caused by angled camera views. It is crucial for:</p><ul><li>Restoring metric properties (length, angle)</li><li>Measuring real-world dimensions from images</li><li>Improving feature matching accuracy</li></ul><p>It allows planar surfaces to be treated as if viewed frontally.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "What role does the vanishing point play in height measurement using cross-ratios?",
        "answer": "<p>The vertical vanishing point defines the direction of height in the image.</p><ul><li>Used as a reference to construct triangles or ratios</li><li>Allows computation of unknown heights based on reference height and projected distances</li></ul><p>It anchors the geometry needed for accurate metric calculations.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "What are the geometric properties preserved by projective, affine, and Euclidean transformations?",
        "answer": "<ul><li><strong>Euclidean:</strong> Preserves distances, angles, parallelism, collinearity</li><li><strong>Affine:</strong> Preserves parallelism, collinearity, ratios of lengths along lines</li><li><strong>Projective:</strong> Preserves collinearity, cross-ratio</li></ul><p>Understanding these invariants helps choose the right model for scene analysis.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "Why are points at infinity important in understanding vanishing points?",
        "answer": "<p>Points at infinity represent directions in projective geometry. When projected via a perspective transformation:</p><ul><li>They appear as <strong>vanishing points</strong> in the image</li><li>Help encode the orientation of parallel lines</li><li>Enable recovery of camera pose and scene layout</li></ul><p>They are key to projective reasoning and geometry.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "What are the six cross-ratio permutations, and why do only a few yield unique values?",
        "answer": "<p>The six permutations of cross-ratio <code>r</code> are:</p><ul><li><code>r</code></li><li><code>1/r</code></li><li><code>1 - r</code></li><li><code>r / (r - 1)</code></li><li><code>1 / (1 - r)</code></li><li><code>(r - 1)/r</code></li></ul><p>Due to symmetries in point ordering, only six unique values arise from the 24 permutations of four points.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "What preprocessing is needed for precise height measurement in real images?",
        "answer": "<p>Before measuring heights, apply these preprocessing steps:</p><ul><li><strong>Remove radial distortion</strong> from the lens</li><li><strong>Detect parallel lines</strong> using edge detectors and Hough transform</li><li><strong>Compute accurate vanishing points</strong></li></ul><p>These steps ensure geometric accuracy and reliable metric estimations.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "What is the difference between affine and affine homography in practice?",
        "answer": "<ul><li><strong>Affine:</strong> General transformation preserving parallelism</li><li><strong>Affine Homography:</strong> A constrained homography where the last row is fixed to simplify computations</li></ul><p>Affine homography is appropriate for small image regions or when using telephoto lenses with negligible perspective effects.</p>"
    },
    {
        "category": "Lecture9(Projective Geometry)",
        "question": "How does image rectification support 3D reconstruction from a single image?",
        "answer": "<p>Image rectification restores planar geometry, which enables:</p><ul><li>Identification of multiple planes in the scene</li><li>Estimation of relative depths and orientation</li><li>Construction of approximate 3D models from 2D input</li></ul><p>This is a foundational step in <strong>single view metrology</strong> and 3D scene understanding.</p>"
    },
    
    
    
    /* ───────────── Lecture 10 – Stereo Reconstruction ───────────── */
    {
        "category": "Lecture10(Stereo)",
        "question": "Why is depth ambiguous in a single image?",
        "answer": "All 3-D points along a viewing ray project to the same 2-D pixel, making depth indeterminate."
    },
    {
        "category": "Lecture10(Stereo)",
        "question": "What does a random dot stereogram demonstrate?",
        "answer": "That disparity differences alone can convey depth perception without recognizable objects."
    },
    {
                "category": "Lecture10(Stereo)",
        "question": "Define an epipolar line.",
        "answer": "The image locus of intersection of the epipolar plane with the image plane; correspondence must lie on this line."
    },
    {
        "category": "Lecture10(Stereo)",
        "question": "What relates normalized image coordinates of a calibrated stereo pair?",
        "answer": "Essential matrix E such that x'ᵀ E x = 0."
    },
    {
        "category": "Lecture10(Stereo)",
        "question": "What is the fundamental matrix?",
        "answer": "F is a 3×3 rank-2 matrix relating homogeneous pixel coordinates of uncalibrated cameras: x'ᵀ F x = 0."
    },
    {
        "category": "Lecture10(Stereo)",
        "question": "What does the eight-point algorithm compute?",
        "answer": "Estimates the fundamental matrix from at least eight point correspondences."
    },
    {
        "category": "Lecture10(Stereo)",
        "question": "Why perform stereo rectification?",
        "answer": "To simplify correspondence search to 1-D horizontal disparity by aligning epipolar lines."
    },
    {
        "category": "Lecture10(Stereo)",
        "question": "How is depth Z computed from disparity d?",
        "answer": "Z = (f · B) / d where f is focal length and B is baseline."
    },
    {
        "category": "Lecture10(Stereo)",
        "question": "How does a laser stripe scanner recover 3-D shape?",
        "answer": "Projects known stripe pattern; deformation in camera image gives triangulation for surface points."
    },
    
    /* ───────────── Lecture 11 – Optical Flow, Tracking & 3-D Shape ───────────── */
    
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "What are the key assumptions underlying optical flow computation, and how do they interact?",
        "answer": "<p>Optical flow estimation relies on three major assumptions:</p><ul><li><strong>Brightness constancy:</strong> The intensity of a point remains constant between frames: <code>I(x, y, t) = I(x + u, y + v, t + 1)</code>.</li><li><strong>Small motion:</strong> The motion between frames is small enough to permit linear approximation (via Taylor series expansion).</li><li><strong>Spatial smoothness:</strong> Neighboring pixels are likely to have similar motion vectors due to continuity of surfaces.</li></ul><p>These assumptions interact to constrain the underdetermined optical flow problem and enable estimation of motion fields.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "Explain the optical flow constraint equation and its significance.",
        "answer": "<p>The optical flow constraint equation is derived from brightness constancy and small motion assumptions using a first-order Taylor expansion:</p><p><code>I_x u + I_y v + I_t = 0</code></p><ul><li><code>I_x</code>, <code>I_y</code>: Spatial gradients</li><li><code>I_t</code>: Temporal gradient</li><li><code>u, v</code>: Flow vectors (horizontal and vertical motion)</li></ul><p>This equation provides a linear constraint for each pixel, but is underconstrained, motivating use of additional constraints like smoothness (as in Lucas-Kanade).</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "What is the aperture problem in motion estimation, and how can it be resolved?",
        "answer": "<p><strong>Aperture problem:</strong> When observing motion through a small aperture (like a pixel window), only motion perpendicular to edges can be detected, leading to ambiguity.</p><p>Solution strategies:</p><ul><li>Use corner features where gradients exist in multiple directions.</li><li>Apply methods like <em>Lucas-Kanade</em> that use larger patches assuming constant motion to gather more constraints.</li></ul>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "Why is it important for the matrix <code>A<sup>T</sup>A</code> in Lucas-Kanade method to be well-conditioned?",
        "answer": "<p>In Lucas-Kanade, we solve:</p><p><code>A<sup>T</sup>A v = A<sup>T</sup>b</code></p><p>If <code>A<sup>T</sup>A</code> is ill-conditioned or nearly singular, the solution becomes unstable and sensitive to noise.</p><p>Good conditioning requires:</p><ul><li>Two strong, independent gradients (non-zero eigenvalues)</li><li><code>λ₁ / λ₂</code> not too large</li></ul><p>This implies corners are better than edges or flat regions for reliable flow estimation.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "How does coarse-to-fine optical flow estimation overcome the small motion assumption?",
        "answer": "<p>Large motions violate the small displacement assumption used in Taylor expansion.</p><p><strong>Coarse-to-fine estimation</strong> uses image pyramids:</p><ol><li>Downsample images to get coarser levels.</li><li>Estimate flow at coarser levels where motion appears smaller.</li><li>Iteratively refine flow at finer levels using upsampled initial estimates.</li></ol><p>This allows robust handling of large displacements.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "Describe how spatial and temporal gradients are computed in practice for optical flow.",
        "answer": "<p>To compute the gradients needed for optical flow constraint equation:</p><ul><li><strong>Spatial gradients (<code>I_x</code>, <code>I_y</code>):</strong><ul><li>Use filters like Sobel, Prewitt, or derivative-of-Gaussian</li></ul></li><li><strong>Temporal gradient (<code>I_t</code>):</strong><ul><li>Use frame differencing between consecutive images</li></ul></li></ul><p>Gradient estimation is critical for accuracy and stability of optical flow methods.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "Explain how the Lucas-Kanade method converts an underdetermined optical flow problem into an overdetermined one.",
        "answer": "<p>Optical flow constraint provides one equation per pixel with two unknowns (<code>u</code>, <code>v</code>).</p><p><strong>Lucas-Kanade approach:</strong></p><ul><li>Assumes flow is constant over a window (e.g., 5x5 patch)</li><li>This yields 25 equations for 2 unknowns</li><li>Solves using least squares: <code>A<sup>T</sup>A v = A<sup>T</sup>b</code></li></ul><p>This aggregation resolves ambiguity and increases robustness.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "Why do flow algorithms often fail at object boundaries, and what does this imply?",
        "answer": "<p>At object boundaries:</p><ul><li>Brightness constancy may be violated due to occlusion or disocclusion.</li><li>Flow is discontinuous, violating smoothness assumption.</li></ul><p><strong>Implication:</strong> Flow estimation is least reliable where motion segmentation would be most informative. This paradox motivates more sophisticated models (e.g., with motion discontinuity priors).</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "Contrast motion field and optical flow. Why is the distinction important?",
        "answer": "<p><strong>Motion field:</strong> True 3D motion projected to 2D image plane, depends on scene geometry and camera motion.</p><p><strong>Optical flow:</strong> Apparent motion of brightness patterns, inferred from image sequences.</p><p>The difference matters because:</p><ul><li>Optical flow may be misleading due to lighting changes or non-rigid motion.</li><li>Motion field is often unobservable, but more physically meaningful.</li></ul>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "Give two real-world applications of optical flow in different domains.",
        "answer": "<ul><li><strong>Video compression:</strong><ul><li>Motion estimation is used to encode frame differences efficiently using motion vectors.</li></ul></li><li><strong>Biological imaging:</strong><ul><li>Used to track cell or heart wall motion in medical videos for diagnostics.</li></ul></li></ul><p>These highlight the diverse utility of motion estimation in both engineered and scientific domains.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "Explain how a laser stripe scanner estimates 3D shape using a single camera.",
        "answer": "<p><strong>Laser stripe scanning:</strong> Projects a laser line orthogonal to epipolar lines.</p><p>As the stripe moves:</p><ul><li>Camera captures position of the line in image space</li><li>Using known geometry (e.g., triangulation), the depth at each pixel along the stripe is computed</li></ul><p>This builds up a dense 3D surface model from multiple stripe positions.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "How does structured light differ from laser stripe scanning in 3D reconstruction?",
        "answer": "<p><strong>Structured light:</strong> Projects multiple patterns (stripes, dots) onto the object surface.</p><p><strong>Differences from laser stripe:</strong></p><ul><li>Simultaneous projection of many points (vs. sequential stripe sweep)</li><li>Uses coding (e.g., time, color, spatial) to disambiguate pattern correspondence</li><li>Enables faster and denser 3D acquisition</li></ul><p>Example: Kinect 1 uses structured IR dot patterns to estimate depth.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "Describe how Kinect 2 uses time-of-flight for depth sensing.",
        "answer": "<p><strong>Time-of-flight (ToF) scanning:</strong> Fires a modulated laser beam and measures the time (or phase shift) it takes to reflect back.</p><p>Kinect 2 uses ToF to:</p><ul><li>Compute distance from each pixel to the object surface</li><li>Produce high-resolution depth maps</li></ul><p>Compared to Kinect 1 (structured light), Kinect 2 has improved spatial and depth resolution.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "What is a pointcloud, and how is it converted into a surface mesh?",
        "answer": "<p>A <strong>pointcloud</strong> is a set of 3D points (<code>X, Y, Z</code>) typically stored as a <code>3 x N</code> matrix.</p><p>Conversion to surface mesh:</p><ul><li>Find nearest neighbors</li><li>Connect them into triangles or polygons</li><li>Render using shading for surface appearance</li></ul><p>Mesh representation allows realistic rendering and further geometric analysis.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "Why is surface normal estimation important in 3D rendering?",
        "answer": "<p>Surface normals are vectors perpendicular to the surface at each point.</p><p><strong>Importance:</strong></p><ul><li>Used in lighting models (e.g., Phong shading) for realistic rendering</li><li>Required for estimating curvature, segmenting objects, and aligning surfaces</li></ul><p>Normals are computed from mesh triangle orientations or local pointcloud neighborhoods.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "How can Kinect's depth data be used for full 3D object reconstruction?",
        "answer": "<p>Steps for full 3D reconstruction using Kinect:</p><ol><li><strong>Rotate object</strong> or sensor to capture from multiple angles</li><li><strong>Capture depth maps</strong> at 30 fps</li><li><strong>Register</strong> all views into a common frame</li><li><strong>Integrate</strong> point clouds to form complete 3D model</li></ol><p>Software like OpenCV, MATLAB, or Kinect SDK is used for this pipeline.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "How is motion information used to segment objects in a scene?",
        "answer": "<p>Two motion-based segmentation methods:</p><ul><li><strong>Background subtraction:</strong> Assumes static background; detects moving foreground using temporal differences.</li><li><strong>Motion segmentation:</strong> Groups pixels into clusters with coherent motion patterns, useful in dynamic scenes with multiple objects.</li></ul><p>Motion cues reveal object boundaries even when visual appearance is similar.</p>"
    },
    {
        "category": "Lecture11(Optical Flow and Motion)",
        "question": "What makes corners ideal features for motion tracking and flow estimation?",
        "answer": "<p><strong>Corners</strong> have high spatial variation in both directions, providing strong image gradients.</p><p>Benefits:</p><ul><li>Resolve aperture problem</li><li>Yield well-conditioned <code>A<sup>T</sup>A</code> matrices in Lucas-Kanade</li><li>Enable precise and stable tracking</li></ul><p>Hence, feature tracking algorithms (e.g., KLT) often prioritize corner-like structures.</p>"
    },
    
    /* ───────────── Lecture 12 – Deep Learning (CNNs) ───────────── */
    {
        "category": "Lecture12(Deep Learning)",
        "question": "Why do Convolutional Neural Networks (CNNs) have significantly fewer parameters compared to fully connected networks?",
        "answer": "<p>CNNs reduce the number of parameters by leveraging two key strategies:</p><ul><li><strong>Local Receptive Fields:</strong> Each filter in a convolutional layer only connects to a small region of the input, not the entire input volume.</li><li><strong>Weight Sharing:</strong> The same filter (weights) is applied across different spatial positions of the input, drastically reducing the number of unique weights.</li></ul><p>This design improves efficiency and generalization, making CNNs scalable for high-dimensional data like images.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "How does a convolutional layer work in a CNN, and what are its main components?",
        "answer": "<p>A convolutional layer performs the following operations:</p><ol><li>Applies <strong>filters</strong> (kernels) across the input volume using a sliding window (controlled by <em>stride</em>).</li><li>Computes the <strong>dot product</strong> between the filter and local regions of the input.</li><li>Outputs a <strong>feature map</strong> for each filter, capturing specific patterns like edges or textures.</li></ol><p>Main components include:</p><ul><li><code>Filters</code>: Learnable weight matrices</li><li><code>Stride</code>: Controls the step size of the sliding filter</li><li><code>Padding</code>: Adds borders to control output size</li></ul>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "Explain how the concept of shared weights contributes to translation invariance in CNNs.",
        "answer": "<p>Shared weights mean that the same filter is applied across different spatial regions of the input. This enables the network to:</p><ul><li><strong>Detect the same pattern</strong> regardless of its location in the image</li><li>Encourage <strong>translation invariance</strong>, where the CNN recognizes an object even if it appears in different places</li></ul><p>This property is crucial for visual tasks, as objects can appear at any location within the field of view.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "Why is max pooling used in CNNs, and what are its effects?",
        "answer": "<p>Max pooling serves several important functions:</p><ul><li><strong>Dimensionality Reduction:</strong> Reduces the spatial size of feature maps, lowering computational cost.</li><li><strong>Translation Invariance:</strong> Captures the most prominent feature in a local region, making detection less sensitive to small translations.</li><li><strong>Prevents Overfitting:</strong> Fewer parameters mean less chance to memorize noise.</li></ul><p>It acts as a form of downsampling while preserving critical spatial features.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "What is the role of the ReLU activation function in CNNs?",
        "answer": "<p><strong>ReLU (Rectified Linear Unit)</strong> introduces non-linearity into the network by applying the function:</p><p><code>f(x) = max(0, x)</code></p><ul><li>Helps in learning complex patterns</li><li>Accelerates convergence during training</li><li>Reduces the likelihood of vanishing gradients compared to sigmoid or tanh</li></ul><p>It enables CNNs to model non-linear decision boundaries efficiently.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "In CNNs, what is the significance of feature maps and how are they formed?",
        "answer": "<p><strong>Feature maps</strong> are 2D outputs resulting from applying filters across the input volume. Each feature map represents:</p><ul><li><strong>Spatial activation</strong> for a specific pattern (e.g., edge, corner)</li><li>One channel of output per filter</li></ul><p>They are formed by sliding a filter over the input and computing dot products at each location, producing a map of pattern responses.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "Compare convolution and fully connected layers in terms of connections and parameters.",
        "answer": "<ul><li><strong>Convolutional Layers:</strong><ul><li>Sparse connections: filter connects to a local patch</li><li>Shared weights across space</li><li>Fewer parameters, better scalability</li></ul></li><li><strong>Fully Connected Layers:</strong><ul><li>Every neuron connects to all inputs</li><li>More parameters, higher risk of overfitting</li></ul></li></ul><p>Convolutional layers are more efficient and suitable for spatial data like images.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "What is the process of flattening in CNNs and why is it necessary?",
        "answer": "<p><strong>Flattening</strong> transforms the multi-dimensional feature maps into a 1D vector, enabling their use as input for fully connected layers.</p><p>This is necessary because:</p><ul><li>Fully connected layers expect 1D vectors</li><li>It aggregates extracted features across spatial dimensions for final classification</li></ul><p>It marks the transition from feature extraction to decision making in a CNN.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "How does batch normalization improve training in CNNs?",
        "answer": "<p><strong>Batch Normalization</strong> normalizes the inputs of a layer across a mini-batch to have zero mean and unit variance.</p><p>Benefits include:</p><ul><li><strong>Accelerates training</strong> by reducing internal covariate shift</li><li><strong>Allows higher learning rates</strong></li><li><strong>Acts as regularization</strong> by adding noise from batch statistics</li></ul><p>This stabilizes the network and helps in faster convergence.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "What are residual connections and how do they help deep CNNs?",
        "answer": "<p><strong>Residual connections</strong> add the input of a layer to its output before applying non-linearity:</p><p><code>y = F(x) + x</code></p><p>They help by:</p><ul><li>Allowing <strong>gradient flow</strong> through identity paths</li><li>Mitigating <strong>vanishing gradient</strong> issues</li><li>Making it easier to train very deep networks</li></ul><p>This is the core idea behind <strong>ResNet</strong>.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "In the context of CNNs, how does increasing depth affect feature representation?",
        "answer": "<p>Increasing the depth of a CNN allows for learning:</p><ul><li><strong>Low-level features</strong> (e.g., edges, textures) in early layers</li><li><strong>Mid-level features</strong> (e.g., object parts) in intermediate layers</li><li><strong>High-level features</strong> (e.g., full objects) in deeper layers</li></ul><p>This hierarchical representation improves the model's capacity to understand complex structures in images.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "How does AlexNet process an image from input to the first pooling layer?",
        "answer": "<p><strong>AlexNet</strong> pipeline:</p><ol><li><strong>Input:</strong> 227x227x3 image</li><li><strong>Conv1:</strong> 96 filters of size 11x11 with stride 4 → output: 55x55x96</li><li><strong>Pool1:</strong> 3x3 filters with stride 2 → output: 27x27x96</li></ol><p>It drastically reduces spatial dimensions while increasing feature abstraction.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "Why does the first convolutional layer in AlexNet have over 35K parameters?",
        "answer": "<p><p>Each filter in Conv1 has:</p><ul><li>Size: 11x11x3 (RGB channels)</li><li>+1 bias parameter</li></ul><p>Total parameters per filter: <code>11*11*3 + 1 = 364</code><br>Total filters: 96<br><strong>Total parameters: 364 * 96 = 34,944 (~35K)</strong></p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "Why are there zero parameters in the pooling layers of AlexNet?",
        "answer": "<p><strong>Pooling layers</strong> (e.g., max pooling) apply a fixed operation like max or average within a window and do not learn weights.</p><p>Hence, they contain <strong>no trainable parameters</strong>.</p><p>They serve to reduce spatial dimensions and retain dominant features.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "How does VGGNet differ architecturally from AlexNet?",
        "answer": "<ul><li><strong>VGGNet:</strong> Uses multiple small filters (3x3) stacked deeper</li><li><strong>AlexNet:</strong> Uses larger filters (11x11, 5x5) with fewer layers</li></ul><p><strong>Impact:</strong> VGGNet captures more fine-grained details through successive non-linearities, while AlexNet reduces dimensions more aggressively in early layers.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "What architectural innovation is introduced in GoogleNet (Inception)?",
        "answer": "<p><strong>GoogleNet</strong> introduces <em>Inception modules</em> which:</p><ul><li>Apply multiple filters (1x1, 3x3, 5x5) in parallel</li><li>Use <strong>1x1 convolutions</strong> as bottlenecks to reduce channel size before expensive operations</li></ul><p>This enables deep and wide architectures while controlling computational cost.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "What key problem does ResNet solve, and how?",
        "answer": "<p><strong>ResNet</strong> solves the degradation problem in deep networks by using <strong>residual blocks</strong>:</p><ul><li>Prevents accuracy degradation in deeper networks</li><li>Enables very deep models (e.g., 152 layers) to be trained effectively</li></ul><p>This is achieved through identity mappings that help gradients flow backward during training.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "What does a CNN learn at various depths, and how is this useful for transfer learning?",
        "answer": "<p><ul><li><strong>Early layers:</strong> Generic features (edges, textures)</li><li><strong>Middle layers:</strong> Abstract shapes (object parts)</li><li><strong>Deep layers:</strong> Task-specific concepts (objects)</li></ul><p><strong>Transfer learning</strong> uses pretrained lower layers as general feature extractors, saving training time and improving performance on small datasets.</p>"
    },
    {
        "category": "Lecture12(Deep Learning)",
        "question": "Why is it important to understand the shape of outputs at each CNN layer?",
        "answer": "<p>Understanding output shapes helps to:</p><ul><li><strong>Diagnose model errors</strong></li><li><strong>Optimize memory usage</strong></li><li><strong>Align dimensions</strong> between layers (e.g., flattening, reshaping)</li></ul><p>It is critical when designing or debugging custom architectures.</p>"
    }
    ];
    