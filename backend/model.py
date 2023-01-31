from pydantic import BaseModel

class ToDo(BaseModel):
    title: str
    description: str

