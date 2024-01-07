from firebase_connection import firebase_connection
from cosineSim import cosineSimilarity
import time
fc = firebase_connection()

def loop():
    # get queue
    queryqueue = fc.get_queue()
    if not queryqueue:
        return
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
        flag = 1
        for k, v in tracking_dict.items():
            cs = cosineSimilarity(qq['image'], v['image'])
            if cs >= 0.75:
                # Add the query to the tracking
                v['images'].append(qq['image'])
                v['camerasCrossed'].append(qq['cameraID'])
                fc.update_tracking(k, v)
                tracking_dict[k] = v
                flag = 0
                break
        if flag:
            image_json = {
                'image': queryqueue[i]['image'],
                'camerasCrossed': [queryqueue[i]['cameraID']],
                'images': [queryqueue[i]['image']]
            }
            fc.push_to_tracking(image_json)
            tracking_dict = fc.get_tracking()
    
    # clear the queue
    fc.clear_queue()
    
while True:
    time.sleep(10)
    loop()