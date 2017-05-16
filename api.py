from flask import Blueprint, jsonify, request
import RPi.GPIO as GPIO
import time

api = Blueprint("api", __name__, static_folder=None, template_folder=None)

GPIO.setmode(GPIO.BCM)


class ERRORS():
    """400 Errors"""
    BAD_CREDS = ('{"error":"Bad credentials"}', 400)
    BAD_REQ = ('{"error":"Bad request"})', 400)
    BAD_AUTH = ('{"error":"Bad authentication"}', 400)


def pulse(pin):
    print("pulsing pin", pin)
    GPIO.output(pin, GPIO.LOW)
    time.sleep(0.1)
    GPIO.output(pin, GPIO.HIGH)

pinList = [4, 17, 27, 22]
def setup():
    for pinNum in pinList:
        GPIO.setup(pinNum, GPIO.OUT)
        GPIO.output(pinNum, GPIO.HIGH)



# test endpoint
@api.route("/test", methods=["POST"])
def test(req=None):
    if req is None: req = request.json
    return jsonify(req)


# get input and activate the right pin
@api.route("/activate", methods=["POST"])
def activate(req=None):
    if req is None: req = request.json
    pulse(req['id'])
    return jsonify(req)
