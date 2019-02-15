## Summary

**Find where your businesses customers are located! If your business should move, this repo shows you where the new business should be.**

## In depth

Taking output from a dummy business' Microsoft Access customer database, wrote scripts that use the Google Maps API to geocode customers' addresses (I used a dataset for Berkeley, CA). Used the total amount that each customer had spent at the business to weight each coordinate and calculate a weighted mean center. Created a heatmap with all of this information and plotted the weighted mean center with a marker. Potential application for a business: If a business needed to change locations or add a new location, they could use this program to figure out where an optimal new location would be.

## How to use

### Prerequisites

Make sure python3 is installed as well as geopy. `pip3 install geopy` installs the latter.

### Running the code

First run `python3 addresses.py`.  
Then `python3 weightedmeancenter.py`.  
Then `python3 formatCoordinates.py`.  
Then open `heatmap.html` to see the data all plotted!  

Pass a different `importedAddresses.txt` with the same formatting as the file I provided to see a heatmap for a different dataset.

## Changes/additions to be made

- Host it online and let users upload a `importedAddresses.txt` file to produce heatmap completely in-browser
- Could add more functionality to increase potential benefit for businesses (i.e. what if they're opening another location, not moving?)
