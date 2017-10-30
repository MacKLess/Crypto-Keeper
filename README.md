# Crypto Keeper

#### _Epicodus Solo Coding Project JavaScript Week 3 - Angular, 10/27/17_

#### _**L. Devin MacKrell**_

## Description

_An app that allows a tap room to track kegs._

## Setup/Installation Requirements

* Clone this repository at [github.com/MacKLess/Crypto-Keeper.git](https://github.com/MacKLess/Crypto-Keeper.git)
* Install npm and bower.
* Run npm install.
* Open index.html in your preferred browser by typing "open index.html" in your terminal.

## Specifications

* _App displays a menu of available kegs. Each keg includes: name, brand, price, and alcoholContent._
* Example Output: name: Franziskaner Hefe-Weisse, brand: Spaten-Franziskaner-Brau, price: $7/pint, Alcohol by volume(ABV): 5.00%
* _Employee will fill out a form to add it to the list when they tap a new keg._
* Example Input: name: , brand: , price: , ABV:
* Example Output: name: 1664 Blanc, brand: Kronenbourg, price: $8/pint, ABV: 5.0%
* _Either employee or patron can see how many pints remain in a keg (full keg = 124 pints)._
* Example Input: 1664 Blanc
* Example Output: 120 pints
* _Employee can click a button next to each brand to indicate that a pint has been sold._
* Example Input: 1664 Blanc
* Example Output: 119
* _Kegs with fewer than 10 pints remaining will be listed for an employee to see._
* Example Input: Franziskaner, 1664 Blanc, Guinness, Manny's, Stella Artois
* Example Output: Kegs with less than 10 pints: Guinness, Manny's, Stella Artois
* _Kegs will be color coded by price or by style of beer._
* _Add functionality to sort beers by alcohol content._

<!-- ## Further Exploration

* _Additional functionality that I'd like to include with more time:_
* Age calculators for all 7 planets (including Pluto).
* Health factors that can impact longevity like smoking, inactivity, persistent health conditions.
* Effects of pressure and other factors that impact longevity known to be present as differing planetary conditions (temperature, atmospheric conditions, etc.). -->

## Bugs

_There are no known bugs._

## Support and contact details

_Please contact [ldmackrell@gmail.com](mailto:ldmackrell@gmail.com) with questions, comments, or issues, or if you would like to contribute to the code._

## Technologies Used

* JavaScript
* jQuery
* Jasmine
* Karma
* Angular

### License

Copyright (c) 2017 **L. Devin MacKrell**

*Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*
