w = open('coordinatesWithWeights.txt', 'r')
m = open('meanCenter.txt', 'w')

xsum = 0
ysum = 0
weights = 0

for line in w:
	l1 = line.replace(',', '')
	list = l1.split();
	x = float(list[0])
	y = float(list[1])
	weight = float(list[2])
	xsum += x * weight
	ysum += y * weight
	weights += weight

meanx = xsum / weights
meany = ysum / weights

m.write('%.5f %.5f' % (meanx, meany))

w.close()	
