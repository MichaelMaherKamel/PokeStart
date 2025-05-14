# Start from alpine as the base
FROM alpine:latest AS builder

# Install build dependencies
RUN apk add --no-cache wget tar git

# Install Go 1.24.1
RUN wget https://golang.org/dl/go1.24.1.linux-amd64.tar.gz && \
    tar -C /usr/local -xzf go1.24.1.linux-amd64.tar.gz && \
    rm go1.24.1.linux-amd64.tar.gz

# Set Go environment variables
ENV PATH="/usr/local/go/bin:${PATH}"
ENV GOPATH="/go"
ENV PATH="${GOPATH}/bin:${PATH}"

# Set working directory inside the container
WORKDIR /app

# Copy go.mod and go.sum files
COPY go.mod go.sum ./
RUN go mod download

# Copy source code
COPY main.go .

# Build the Go app
RUN go build -o server main.go

# Start a new, smaller image for the final application
FROM alpine:latest

# Add necessary packages
RUN apk --no-cache add ca-certificates

# Set working directory
WORKDIR /root/

# Copy the binary from the builder stage
COPY --from=builder /app/server .

# Expose port 80
EXPOSE 80

# Command to run the executable
CMD ["./server"]