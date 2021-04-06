package com.online.enums;

import static com.online.constant.Privileges.*;

public enum Role {
    ROLE_USER(USER),
    ROLE_ADMIN(ADMIN);

    private final String[] privileges;

    Role(String... privileges) {
        this.privileges = privileges;
    }

    public String[] getAuthorities() {
        return privileges;
    }
}