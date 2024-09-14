from flask import Flask, request, jsonify
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

# Placeholder for the medical knowledge base
medical_data = {
    "diabetes": "Diabetes is a chronic condition that occurs when the body does not properly process food for use as energy.",
    "hypertension": "Hypertension, or high blood pressure, is a condition in which the blood pressure in the arteries is persistently elevated."
}

@app.route('/')
def index():
    return "Welcome to the Medical Bot!"

@app.route('/ask', methods=['POST'])
def ask():
    question = request.json.get('question').lower()
    response = medical_data.get(question, "I'm sorry, I don't have information on that topic.")
    return jsonify({"response": response})

if __name__ == '__main__':
    socketio.run(app)
    
    '''
from dash import html, dcc
from dash.dependencies import Input, Output
import json

app = dash.Dash(__name__)

@app.server.route('/api/chat', methods=['POST'])
def chat_api():
    data = json.loads(request.data)
    user_message = data['message']
    
    # Implement your chat logic here; for now, we are echoing the message.
    bot_response = f"You said: {user_message}"

    return json.dumps({'response': bot_response})

if __name__ == '__main__':
    app.run_server(debug=True)'''
