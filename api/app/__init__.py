from flask import Flask

from app.routes import api, base_routes


def create_app():
    app = Flask(__name__)

    app.register_blueprint(base_routes)
    app.register_blueprint(api)

    return app
