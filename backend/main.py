from fastapi import FastAPI

app = FastAPI()


@app.get('/blog/1')
def get_blog_1():
    return {"data": "hello world 1"}


@app.get('/blog/2')
def get_blog_2():
    return {"data": "hello world 2"}
