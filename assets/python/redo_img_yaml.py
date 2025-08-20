orig = '''
- mini-diamond-vase-01.jpg
- mini-diamond-vase-02.jpg'''

remove_chars = orig.replace("\n", "").replace("\t", "").replace("- ", "").replace(" ", "")

basenames = remove_chars.split(".jpg")[:-1]

img_1 = basenames[0]
img_2 = basenames[1]
# img_3 = basenames[2]
# img_4 = basenames[3]

newnames = f'''image-set:
  - small: {img_1}-400w.jpg
    medium: {img_1}-600w.jpg
    large: {img_1}-1200w.jpg
  - small: {img_2}-400w.jpg
    medium: {img_2}-600w.jpg
    large: {img_2}-1200w.jpg'''

'''
  - small: {img_3}-400w.jpg
    medium: {img_3}-600w.jpg
    large: {img_3}-1200w.jpg'''

'''
  - small: {img_4}-400w.jpg
    medium: {img_4}-600w.jpg
    large: {img_4}-1200w.jpg
'''

print(newnames)

######## NB: YOU ARE ON 'BLUE-GRAY-VASE' NOW ####