from selenium import webdriver
import os


class RunChromeTests():
    #http://chromedriver.storage.googleapis.com/index.html


    def test(self):
        driverLocation = "/Users/ivanzich/Documents/workspace_Personal/SeleniumProject/lib/chromedriver"
        os.environ["webdriver.chrome.driver"] = driverLocation
        # Instantiate Chrome Browser Command
        driver = webdriver.Chrome(driverLocation)

        # Open the provided URL
        driver.get("https://hills.ccsf.edu/~igolovko/hiking_tips/")


ff = RunChromeTests()
ff.test()