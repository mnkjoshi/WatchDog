import random
import string
from ultralytics import YOLO
import cv2
import math 
from time import time
from firebase_connection import firebase_connection
import os 

fc = firebase_connection()

def get_random_string(length):
    # choose from all lowercase letter
    letters = string.ascii_letters + string.digits
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str

def camera():
    # start webcam
    cap = cv2.VideoCapture(1)
    cap.set(3, 640)
    cap.set(4, 480)

    # model
    model = YOLO("yolo-Weights/yolov8n.pt")

    # object classes
    classNames = ["person"]

    interval = 0
    while True:
        success, img = cap.read()

        results = model(img, stream=True, classes=[0])

        # coordinates
        for r in results:
            boxes = r.boxes
            image_key = get_random_string(10)
            for i, box in enumerate(boxes):
                # bounding box
                x1, y1, x2, y2 = box.xyxy[0]
                x1, y1, x2, y2 = int(x1), int(y1), int(x2), int(y2) # convert to int values

                # put box in cam
                cv2.rectangle(img, (x1, y1), (x2, y2), (255, 0, 255), 3)

                # object details
                org = [x1, y1]
                font = cv2.FONT_HERSHEY_SIMPLEX
                fontScale = 1
                color = (255, 0, 0)
                thickness = 2

                cv2.putText(img, classNames[0], org, font, fontScale, color, thickness)

                if interval == 100:
                    print("Uploading images")
                    ultralytics_crop_object = img[int(y1):int(y2), int(x1):int(x2)]
                    # Save the cropped object as an image
                    image_name = image_key + str(i) + '.jpg'
                    cv2.imwrite(image_name, ultralytics_crop_object)
                    fc.save_image(image=image_name, cameraID=1)
                    os.remove(image_name)
            

        cv2.imshow('Webcam', img)
        if cv2.waitKey(1) == ord('q'):
            break

        if interval != 100:
            interval += 1
        else:
            interval = 0
        

    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    camera()