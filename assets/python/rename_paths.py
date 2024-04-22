# rename_paths.py
# renames image paths affected by `srcset` requirements

import os
import os.path as ospath

current_path = os.getcwd()
img_dir = "C:/Users/Katherine/OneDrive/Clay/katdonnally.github.io/assets/img/pottery/"

bowl_dir = img_dir + "bowls/1200/"

# this contains both file and directory names
# files have extensions, directories don't
bowl_dir_contents = os.listdir(bowl_dir)
# filter out the directories, leave the files
bowl_dir_files = [bowl for bowl in bowl_dir_contents if '.' in bowl]


short_name_contents = [filename.split(".")[0] + "-1200w.png" for filename in bowl_dir_files]

for i, filename in enumerate(bowl_dir_files):
	os.rename(bowl_dir + filename, bowl_dir + short_name_contents[i])

# eliminating anything with a '.'
# dir_files = [file for file in dir_contents if "." in file]

# dir_filenames = [name.split(".")[0] for name in dir_files]
# dir_new_files = [img_dir + "/" + basename + "-400w.png" for basename in dir_filenames]

'''
StackOverflow answer to this issue:

import os
os.getcwd()
collection = "C:/darth_vader"
for i, filename in enumerate(os.listdir(collection)):
    os.rename("C:/darth_vader/" + filename, "C:/darth_vader/" + str(i) + ".jpg")

'''

