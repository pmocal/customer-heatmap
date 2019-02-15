import os

w = open('coordinatesWithWeights.txt', 'r')
t = open('formattedCoordinates.txt', 'w')
# prints lines into 'test.txt' with the format:
# {location: new google.maps.LatLng(37.7756,-122.446167), weight: 4.123},

for line in w:
	list = line.split()
	t.write('{location: new google.maps.LatLng(%.5f,%.5f), weight: %.5f}, ' % (float(list[0]), float(list[1]), float(list[2])))

t.seek(0, os.SEEK_END)
t.seek(t.tell() - 2, os.SEEK_SET)
t.truncate()


t.close()
w.close()