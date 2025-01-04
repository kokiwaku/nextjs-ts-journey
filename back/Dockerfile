FROM php:8.3-apache

# composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# disable default site and delete all default files inside APP_HOME
RUN a2dissite 000-default.conf

# setup
# install all the dependencies and enable PHP modules
RUN apt-get update && apt-get upgrade -y && apt-get install -y \
      bash-completion \
      fish \
      procps \
      nano \
      git \
      unzip \
      libicu-dev \
      zlib1g-dev \
      libxml2 \
      libxml2-dev \
      libreadline-dev \
      supervisor \
      cron \
      sudo \
      libzip-dev \
    && docker-php-ext-configure pdo_mysql --with-pdo-mysql=mysqlnd \
    && docker-php-ext-configure intl \
    && docker-php-ext-install \
      pdo_mysql \
      sockets \
      intl \
      opcache \
      zip \
    && rm -rf /tmp/* \
    && rm -rf /var/list/apt/* \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug

# enable apache modules
RUN a2enmod rewrite

# copy
COPY ./conf/ /

# put apache and php config for Laravel, enable sites
RUN a2ensite laravel.conf

WORKDIR /workspace
