FROM golang:alpine AS golang

RUN mkdir -p /app/fullcycle/docker-go

WORKDIR /app/fullcycle/docker-go

COPY . .

RUN go build ./PrintCodeEducationRocks.go

FROM scratch

COPY --from=golang /app/fullcycle/docker-go .

CMD ["./PrintCodeEducationRocks"]