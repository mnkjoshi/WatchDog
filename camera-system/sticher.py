import torch
import yaml
from firebase_connection import firebase_connection
from fp16.model import ft_net
from torchvision import datasets, models, transforms


model_structure = ft_net(751, stride=1)
with open('camera-system/fp16/opt.yaml', 'r') as stream:
        config = yaml.load(stream, Loader=yaml.FullLoader)

def load_network(network):
    save_path = 'camera-system/fp16/net_last.pth'
    network.load_state_dict(torch.load(save_path))
    return network

model = load_network(model_structure)
fc = firebase_connection()

def loop():
    # get queue
    imgqueue = fc.get_queue()

    # download the images