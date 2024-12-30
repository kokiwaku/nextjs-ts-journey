FROM php:8.3-apache

# composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# copy
COPY ./conf/ /

# setup
RUN apt-get update && apt-get install -y libpq-dev \
    git \
    libzip-dev \
    zip \
    && docker-php-ext-install zip pdo pdo_mysql \
    && a2enmod rewrite headers \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug

WORKDIR /workspace
