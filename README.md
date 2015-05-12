# node-express
#node v0.12.0
#gulp 3.8.11
#express 4.12.3
#bootstrap 3.3.4
#jade 1.9.2
#jquery 2.1.3
#selenium-server 2.45.0
#selenium-webdriver 2.45.1
#webdriverio 2.4.5
    

#e2e Testing
#cucumber 0.4.8
#headless browser
#zombie 4.0.8 
#selenium-webdriver 2.45.1

#cd node-express     npm install ---> to install all dependencies

## Run app
#cd node-express     gulp built  ---> to built project and start server 
#cd node-express     gulp e2e    ---> to start e2e testing
#cd node-express     gulp clean  ---> to clean project 
#cd node-express     gulp        ---> to start all task('lint', 'css', 'scripts', 'watch', 'built')


## Run e2e test

#Start Selenium Server 
#cd node-express    gulp sel  

#	OR 

#cd node-express	java -jar jars/selenium-server-standalone-2.45.0.jar


#Start e2e test
#cd node-express    gulp e2e

#cd node-express    gulp test



# ERROR HANDLING

#if any error while building  
#delete folder  node_modules
#cd node-express     npm install
#cd ~  pkill -f node



#runing selenium server
# Error - "java.net.BindException: Selenium is already running on port 4444
#http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer# web-app



#TASKS
#1. Weather Forcast         DONE
#2. Mortgage Calculator     TODO
#3. Currency Convertor      TODO
