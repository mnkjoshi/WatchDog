from PIL import Image
import numpy as np
import requests
from io import BytesIO
from tensorflow.keras.applications.vgg16 import VGG16, preprocess_input
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.models import Model

def extract_features(image_url, model):
    response = requests.get(image_url)
    image = Image.open(BytesIO(response.content))
    image = image.resize((224, 224))  # Resize for the model input

    image_array = img_to_array(image)
    image_array = np.expand_dims(image_array, axis=0)
    image_array = preprocess_input(image_array)

    features = model.predict(image_array)
    features = features.flatten()
    return features

base_model = VGG16(weights='imagenet')
model = Model(inputs=base_model.input, outputs=base_model.get_layer('fc1').output)

def cosineSimilarity(image_url1, image_url2):
    features1 = extract_features(image_url1, model)
    features2 = extract_features(image_url2, model)

    features1_norm = features1 / np.linalg.norm(features1)
    features2_norm = features2 / np.linalg.norm(features2)

    cosine_similarity = np.dot(features1_norm, features2_norm)

    return cosine_similarity

if __name__ == '__main__':
    print(cosineSimilarity('https://storage.googleapis.com/manav-watchdog.appspot.com/PFxS3V9gQm0.jpg', 'https://storage.googleapis.com/manav-watchdog.appspot.com/tKbaxXpoyq0.jpg'))
