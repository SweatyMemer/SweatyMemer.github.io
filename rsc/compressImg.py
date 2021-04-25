from PIL import Image
import os

images = [file for file in os.listdir() if file.endswith(('jpg', 'png' ))]
print(f"Images found are: {images}")

for image in images:
    print(image.split('.')[0])

for image in images:
    # 1. Open the image
    img = Image.open(image)
    # 2. Compressing the image
    img.save("Compressed_and_resized_"+image,
             optimize=True,
             quality=30)