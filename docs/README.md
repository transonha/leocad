# About

This customization involves integrating LeoCAD with an online database of building elements.

LeoCAD is a CAD program for creating virtual LEGO(R) models. It's available
for free under the GNU Public License v2 and works on the Windows, Linux
and macOS Operating Systems.

# Compiling

## Compile server
* Go to /server directory then open Visual Studio Code
* Extract /server/data/ldraw.zip to the same directory
* Type command: npm start
* The server is available on http://localhost:3000

## Compile LeoCAD
* Open leocad source by using Qt Creator
* Navigate /common/lc_profile.cpp
* Find and change ServerUrl setting to the above url: lcProfileEntry("Settings", "ServerUrl", "http://localhost:8080")
* Build LeoCAD
* Open & extract /resources/library.zip to build output folder, for example: ../build-leocad-Desktop_x86_windows_msvc2019_pe_64bit-Debug/build/debug/library
* Run LeoCAD in debug mode

# Testing

After initializing LeoCAD, it downloads the following categories from the server:
- Animal
- Antenna
- Arch
- Bar
- Baseplate

Subsequently, when you click on the Animal category, LeoCAD downloads the relevant parts and displays them in the selection widget.

![image](https://github.com/transonha/leocad/assets/81273348/553e030b-6b80-44df-8a10-727592beacd4)

# Customization Ideas
![image](https://github.com/transonha/leocad/assets/81273348/d34feaf0-6b59-4adb-9a27-076e61ec1a29)

# Code Modification
## Download categories at application startup
![image](https://github.com/transonha/leocad/assets/81273348/93e38838-f9db-4b6a-b244-eb8995adb05f)

## Download parts when user select a category
![image](https://github.com/transonha/leocad/assets/81273348/d7c4df36-3594-4bb7-8331-f5b2533c1dc6)

# Legal Disclaimer

LEGO(R) is a trademark of the LEGO Group of companies which does not sponsor,
authorize or endorse this software.
