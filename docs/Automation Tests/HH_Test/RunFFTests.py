from selenium import webdriver


class RunFFTests():

    def test(self):
        # Instantiate FF Browser Command
        driver = webdriver.Firefox()

        # Open the provided URL
        driver.get("https://hills.ccsf.edu/~igolovko/hiking_tips/")


ff = RunFFTests()
ff.test()