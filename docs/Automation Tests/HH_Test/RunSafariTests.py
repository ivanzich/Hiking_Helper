from selenium import webdriver
import os


class RunSafariTests():
    #http://chromedriver.storage.googleapis.com/index.html


    def test(self):
        serverLocation = "/Users/ivanzich/Documents/workspace_Personal/SeleniumProject/lib/selenium-server-standalone-3.11.0.jar"
        os.environ["SELENIUM_SERVER_JAR"] = serverLocation
        # Instantiate Safari Browser Command
        driver = webdriver.Safari()

        # Open the provided URL
        driver.get("https://hills.ccsf.edu/~igolovko/hiking_tips/")


ff = RunSafariTests()
ff.test()

