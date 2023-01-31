from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import fetch_one_todo, fetch_all_todos, create_todo, update_todo, remove_todo
from model import Todo



app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/')
def index():
    return {'key': 'value'}


@app.get('/api/todo')
async def get_todo():
    response = await fetch_all_todos()
    return response


@app.post('/api/todo', response_model=Todo)
async def post_todo(todo: Todo):
    response = await create_todo(todo)
    if response:
        return response
    raise HTTPException(status_code=404, detail="Bad Request")


@app.get('api/todo/{title}', response_model=Todo)
async def get_todo_by_id(title):
    response = await fetch_one_todo(title)
    if response:
        return response
    raise HTTPException(status_code=404, detail="Todo not found")


@app.put('/api/todo/{title}', response_model=Todo)
async def update_todo_by_id(title:str, data:str):
    response = await update_todo(title, data)
    if response:
        return response
    raise HTTPException(status_code=404, detail="Todo not found")


@app.delete('/api/todo/{title}')
async def delete_todo_by_id(title: int):
    response = await remove_todo(title)
    if response:
        return "Successfully deleted todo item"
    raise HTTPException(status_code=404, detail="Todo not found")




