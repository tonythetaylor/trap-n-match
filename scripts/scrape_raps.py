# import libraries
from urllib.request import urlopen as uReq
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup as soup 
headers={
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
}

req = Request('https://blackbeat.topix.com/quiz/18243/qidx1', data=None, headers=headers)
# webpage = urlopen(req).read()
# uClient = uReq(*req*)

# print(webpage)

# # specify the url
# rap_page = 'https://blackbeat.topix.com/quiz/18243/qidx1'

# query the website and return the html to the variable ‘page’
page = urlopen(req)

# parse the html using beautiful soup and store in variable `soup`
soup = soup(page, 'html.parser')

# Take out the <div> of name and get its value
lyric_box = soup.find('div', attrs={'class': 'question-text'})

name = lyric_box # strip() is used to remove starting and trailing
print(name)