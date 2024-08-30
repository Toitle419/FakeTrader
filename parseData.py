import csv, os
import numpy as np

data = np.genfromtxt('bitcoin_2010-07-17_2024-08-29.csv', encoding='utf-8-sig', dtype=None, delimiter=',', names=True)


dates = data['Start']
opens = data['Open']

outData = np.flip(np.stack((dates, opens), 1), 0)
print(outData)

with open("dates_opens.csv", 'w', newline='') as outfile:
    writer = csv.writer(outfile, delimiter=',')
    writer.writerow(('Start', 'Open'))
    writer.writerows(outData)