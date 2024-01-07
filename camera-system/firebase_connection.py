from json import JSONEncoder
import firebase_admin
from firebase_admin import db,storage
import numpy as np

class firebase_connection:
    def __init__(self):
        self.__cred_obj = firebase_admin.credentials.Certificate('backend/secret.json')
        self.__default_app = firebase_admin.initialize_app(self.__cred_obj, {
            'databaseURL': 'https://manav-watchdog-default-rtdb.firebaseio.com/',
            'storageBucket': 'manav-watchdog.appspot.com'
        })
        self.__ref = db.reference('/')

    def save_image(self, image, weapon_type=None, time=None, date=None, location=None):
        """
        :param image: This is the image np object
        :param weapon_type: This is the weapontype as a string
        :param time: This is the time as a string
        :param date: This is the date as a string
        :param location: This is the string object
        :return: None
        """
        bucket = storage.bucket()
        blob = bucket.blob(image)
        blob.upload_from_filename(image)

        # Opt : if you want to make public access from the URL
        blob.make_public()

        childref = self.__ref.child('images')
        image_json = {
            'image':  blob.public_url,
            'cameraID': 1
        }
        # encoded_image_json = json.dumps(image_json, cls=NumpyArrayEncoder)
        childref.push(image_json)

if __name__ == '__main__':
    fc = firebase_connection()

    # # Test to add image
    # for i in range(5):
    #     fc.save_image(image='camera-system/test.jpg')

