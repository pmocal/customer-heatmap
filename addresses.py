from geopy import geocoders
import json

api_key_from_file = ""
with open('config.json') as json_file:  
    data = json.load(json_file)
    api_key_from_file = data["API_KEY"]

i = open('importedAddresses.txt', 'r')
#c = open('addressCoordinates.txt', 'w')
w = open('coordinatesWithWeights.txt', 'w')

for line in i:
	l1 = line.replace('"', '')
	l2 = l1.replace('$', ', ')
	list = l2.split(',')
	g = geocoders.GoogleV3(api_key=api_key_from_file)
	place, (lat, lng) = g.geocode(list[0])
	#c.write('%.5f %.5f' % (lat, lng)) #must make sure it is okay to remove commas in the string
	#c.write('\n')
	w.write('%.5f %.5f %s' % (lat, lng, list[1])) #must make sure it is okay to remove commas in the string

i.close()
#c.close()
w.close()



