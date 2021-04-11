package com.online.constant;

public class SecurityConstants {

    public static final String[] PUBLIC_URLS = {"/api/login", "/api/register", "/api/getItems"};
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String TOKEN_CANNOT_BE_VERIFIED = "Token cannot be verified.";
    public static final String ISSUER = "Store";
    public static final String PLAY_ADMINISTRATION = "Customers";
    public static final String PRIVILEGES = "Privileges";
    public static final String ACCESS_DENIED = "You do not have access to this page.";
    public static final String FORBIDDEN_MESSAGE = "Log in to access this page.";
    public static final String OPTIONS_HTTP_METHOD = "OPTIONS";
    public static final long TIME = 86400000; //one day in milliseconds
}