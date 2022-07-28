#!/bin/sh
set -e

sed -i "s|{{PORT}}|$PORT|;s|{{HOST}}|$HOST|" /etc/nginx/conf.d/nginx.conf
cat /etc/nginx/conf.d/nginx.conf
nginx -g "daemon off;"