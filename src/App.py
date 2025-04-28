from flask import Flask, jsonify, request
from flask_cors import CORS
from utils.prompt_enhancer import loader

app = Flask(__name__)
CORS(app) 

@app.route('/process', methods=['POST'])
def process_prompts():
    try:
        data = request.get_json()
        prompts = data['prompts']
        style=data['style']
        theme=data['theme']
    
        processed=loader(prompts,style,theme)
        
        return jsonify({
            "status": "success",
            "result": processed
        })
    
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        }), 500

if __name__ == '__main__':
    app.run(port=5001, debug=True)
