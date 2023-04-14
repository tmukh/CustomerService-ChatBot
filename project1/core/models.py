from django.db import models
from datetime import datetime
# Create your models here.
current_dateTime = datetime.now()
class Notes(models.Model):
    titties = models.CharField(max_length=60)
    content = models.CharField(max_length=120)
    chat_time = models.DateTimeField(blank=True, null=True,default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

    def __str__(self):
        return self.titties

