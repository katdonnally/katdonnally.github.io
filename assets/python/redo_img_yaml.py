orig = '''
    - turq-black-bud-vase-01.png
    - turq-black-bud-vase-02.png
    - turq-black-bud-vase-03.png'''

remove_chars = orig.replace("\n", "").replace("\t", "").replace("- ", "").replace(" ", "")

basenames = remove_chars.split(".png")[:-1]

img_1 = basenames[0]
img_2 = basenames[1]
img_3 = basenames[2]
# img_4 = basenames[3]

newnames = f'''image-set:
  - small: {img_1}-400w.png
    medium: {img_1}-800w.png
    large: {img_1}-1200w.png
  - small: {img_2}-400w.png
    medium: {img_2}-800w.png
    large: {img_2}-1200w.png
  - small: {img_3}-400w.png
    medium: {img_3}-800w.png
    large: {img_3}-1200w.png'''

'''  - small: {img_4}-400w.png
    medium: {img_4}-800w.png
    large: {img_4}-1200w.png'''

print(newnames)