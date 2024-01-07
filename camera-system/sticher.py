from firebase_connection import firebase_connection
import requests
from PIL import Image

fc = firebase_connection()

def loop():
    # get queue
    queryqueue = fc.get_queue()

    # get the tracking people
    tracking_dict = fc.get_tracking()
    
    if not tracking_dict:
        image_json = {
             'image': queryqueue[0]['image'],
             'camerasCrossed': [queryqueue[0]['cameraID']],
             'images': [queryqueue[0]['image']]
        }
        fc.push_to_tracking(image_json)
    
    # get the tracking people col again
    tracking_dict = fc.get_tracking()
    for i in range(1,len(queryqueue)):
        qq = queryqueue[i]
        queryimage = requests.get(qq['image']).content
        with open('queryimg.jpg', 'wb') as handler:
            handler.write(queryimage)

        queryimagenp = Image.open('queryimg.jpg')

        for k, v in tracking_dict.items():
            trackingimage = requests.get(v['image']).content
            with open('trackingimg.jpg', 'wb') as handler:
                handler.write(trackingimage)
            
            trackingimagenp = Image.open('trackingimg.jpg')




loop()