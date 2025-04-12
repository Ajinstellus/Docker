FROM python:3.10-slim

LABEL author="Ajin"
LABEL project="flask-login"

WORKDIR /app

RUN pip install flask

COPY app.py .

COPY templates/ ./templates/.

EXPOSE 5000

CMD ["python", "app.py"]
