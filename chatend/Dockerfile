FROM python
                   
RUN apt-get update && apt-get install -y


RUN pip install --upgrade pip

RUN pip install requests

WORKDIR /chatend

COPY requirements.txt .

RUN pip install -r requirements.txt

CMD python manage.py makemigrations && \
    python manage.py migrate && \
    python manage.py runserver 0.0.0.0:8000