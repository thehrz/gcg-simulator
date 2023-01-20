FROM golang:1.19-alpine as backend
WORKDIR /backend
RUN apk add --no-cache --virtual .build-deps \
  ca-certificates \
  gcc \
  g++
COPY backend/go.mod ./
RUN go mod download
COPY backend/ .
RUN go get -a
RUN go build -o main main.go

FROM alpine:3
WORKDIR /backend
COPY --from=backend /backend/main .
RUN mkdir -p ./data/persistence
ENTRYPOINT [ "./main", "--port=3001" ]