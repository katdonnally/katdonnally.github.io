# rename_paths.py
# renames image paths affected by `srcset` requirements

import os

img_dir = "./refactor-pics/"

bowl_dir = img_dir + "bowls/"
jar_dir = img_dir + "jars/"
mug_dir = img_dir + "mugs/"
planter_dir = img_dir + "planters/"
plate_dir = img_dir + "plates/"
vase_dir = img_dir + "vases/"

# size options for pics
sizes = ["400/", "600/", "800/", "1200/"]
endings = ["-400w.jpg", "-600w.jpg", "-800w.jpg", "-1200w.jpg"]

pottery_paths = [bowl_dir, jar_dir, mug_dir, planter_dir, plate_dir, vase_dir]

# [[bowl 400, bowl 600, bowl 800, bowl 1200], [jar paths], etc.]
pottery_all_paths = []
for p in pottery_paths:
	size_paths = []
	for s in sizes:
		size_path = p + s
		size_paths.append(size_path)
	pottery_all_paths.append(size_paths)


# [[[bowl pics 400], [bowl pics 600], [bowl pics 800], [bowl pics 1200]], [jars...]]
# len = 4, just hella nested
pottery_all_files = []
for type_paths in pottery_all_paths:
	type_all_files = []
	for filepath in type_paths:
		files_only = [file for file in os.listdir(filepath) if os.path.isfile(os.path.join(filepath, file))]
		type_all_files.append(files_only)
	pottery_all_files.append(type_all_files)

# take file list, rename files with new endings
# all paths = *of a certain type of pottery*
# all files = *of a certain type of pottery*
# e.g. ['/pottery/mugs/600'], [['mug-test-400.jpg'], [alksdjf]] 
def renamePotteryType(all_paths_list, all_files_list):
	# generate new names for each size
	all_new_names = []
	for i, file_list in enumerate(all_files_list):
		newnames = []
		for file in file_list:
			newname = file.split('.')[0] + endings[i]
			newnames.append(newname)
		all_new_names.append(newnames)

	# rename files
	for i, size_path in enumerate(all_paths_list):
		oldnames = all_files_list[i]
		newnames = all_new_names[i]
		for oldname, newname in zip(oldnames, newnames):
			os.rename(size_path + oldname, size_path + newname)

# execute
'''
for paths, files in zip(pottery_all_paths, pottery_all_files):
	renamePotteryType(paths, files)
'''