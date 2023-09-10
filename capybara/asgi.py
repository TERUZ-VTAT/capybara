# import os

# from django.core.asgi import get_asgi_application

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'capybara.settings')

# application = get_asgi_application()



import os

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import capybara_chat.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'capybara.settings')

application = ProtocolTypeRouter({
    'http':get_asgi_application(),
    'websocket':AuthMiddlewareStack(
        URLRouter(
            capybara_chat.routing.websocket_urlpatterns
        )
    )
})