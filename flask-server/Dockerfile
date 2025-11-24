FROM python:3.14

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

ENV PORT=5000
EXPOSE 5000

CMD ["python", "server.py"]