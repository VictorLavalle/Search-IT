FROM python:3.7-slim

RUN pip3 install fastapi uvicorn nltk
COPY install_dictionary.py /install_dictionary.py
RUN python3 /install_dictionary.py
EXPOSE 8091

COPY ./app /app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8091"]