from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3001",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/blog/count')
def get_blog_1():
    return {"count": "2"}


@app.get('/blog/1')
def get_blog_1():
    return {"blog": "hello world 1"}


@app.get('/blog/2')
def get_blog_2():
    return {"blog": "hello world 2"}
