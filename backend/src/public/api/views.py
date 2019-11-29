from rest_framework.generics import ListAPIView,ListCreateAPIView
from public.models import Article
from .serializers import ArticleSerializer


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    
class ArticleDetailView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer