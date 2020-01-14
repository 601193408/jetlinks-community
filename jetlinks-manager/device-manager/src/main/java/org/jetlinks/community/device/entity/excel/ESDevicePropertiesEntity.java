package org.jetlinks.community.device.entity.excel;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ESDevicePropertiesEntity {

    public String id;

    private String deviceId;

    private String property;

    private String propertyName;

    private String stringValue;

    private String formatValue;

    private BigDecimal numberValue;

    private long timestamp;

    private Object objectValue;

    private String value;

    private String orgId;

    private String productId;
}
