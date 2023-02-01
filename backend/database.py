from model import Todo
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb+srv://dbUser:dbUserPassword@cluster0.8yz6ppy.mongodb.net/?retryWrites=true&w=majority")

database = client.ToDoList
collection = database.get_collection("todos_collection")


async def fetch_one_todo(title):
    document = await collection.find_one({"title": title})
    return document


async def fetch_all_todos():
    todos = []
    cursor = collection.find()
    async for document in cursor:
        todos.append(Todo(**document))
    return todos


async def create_todo(todo: Todo):
    document = todo.dict()
    result = await collection.insert_one(document)
    return document


async def update_todo(title: str, desc: Todo):
    await collection.update_one({"title": title}, {"$set": desc.dict()})
    document = await collection.find_one({"title": title})
    return document


async def remove_todo(title: str):
    await collection.delete_one({"title": title})
    return True



