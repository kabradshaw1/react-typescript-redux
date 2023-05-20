upstream webapp {
    server react_app:6000;
}

server {
    listen ${LISTEN_PORT};

    location /static/ {
        alias /vol/static/;
    }
    location / {
        proxy_pass              http://webapp;
        proxy_set_header        Host 127.0.0.1;
        include                 /etc/nginx/uwsgi_params;
        client_max_body_size    10M;
    }
}