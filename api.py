from flask import Blueprint, jsonify, request

api = Blueprint("api", __name__, static_folder=None, template_folder=None)


class ERRORS():
    """400 Errors"""
    BAD_CREDS = ('{"error":"Bad credentials"}', 400)
    BAD_REQ = ('{"error":"Bad request"})', 400)
    BAD_AUTH = ('{"error":"Bad authentication"}', 400)


@api.route("/test", methods=["POST"])
def test(req=None):
    if req is None: req = request.json
    return jsonify(req)


@api.route("/activate", methods=["POST"])
def activate(req=None):
    if req is None: req = request.json
