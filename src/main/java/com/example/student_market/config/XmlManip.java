package com.example.student_market.config;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.List;

public class XmlManip {

    public static <T> String serializeToXml(T object, String rootTag) {
        if (object == null) {
            throw new IllegalArgumentException("L'objet ne peut pas être null");
        }

        StringBuilder xml = new StringBuilder();
        Class<?> clazz = object.getClass();
        xml.append("<").append(rootTag).append(">");

        for (Field field : clazz.getDeclaredFields()) {
            if (!isSerializableField(field)) {
                continue;
            }
            field.setAccessible(true);
            try {
                Object value = field.get(object);
                if (value != null) {
                    xml.append("<").append(field.getName()).append(">")
                            .append(value)
                            .append("</").append(field.getName()).append(">");
                }
            } catch (IllegalAccessException e) {
                throw new RuntimeException("Erreur d'accès au champ : " + field.getName(), e);
            }
        }

        xml.append("</").append(rootTag).append(">");
        return xml.toString();
    }

    private static boolean isSerializableField(Field field) {
        return !Modifier.isStatic(field.getModifiers()) && !Modifier.isTransient(field.getModifiers());
    }

    public static <T> String serializeListToXml(List<T> objects,String rootTag, String firsChildTag) {
        if (objects == null) {
            throw new IllegalArgumentException("L'objet ne peut pas être null");
        }
        StringBuilder xml = new StringBuilder();
        xml.append("<").append(rootTag).append(">");
        for (T object : objects) {
            xml.append(serializeToXml(object,firsChildTag));
        }
        xml.append("</").append(rootTag).append(">");
        return xml.toString();
    }

    public static <T> T deserializeFromXml(String xml, Class<T> clazz) {
        try {
            T instance = clazz.getDeclaredConstructor().newInstance();
            for (Field field : clazz.getDeclaredFields()) {
                if (!isSerializableField(field)) {
                    continue;
                }
                field.setAccessible(true);
                String tag = "<" + field.getName() + ">";
                String endTag = "</" + field.getName() + ">";
                if (xml.contains(tag) && xml.contains(endTag)) {
                    String value = xml.substring(xml.indexOf(tag) + tag.length(), xml.indexOf(endTag));
                    field.set(instance, convertValue(value, field.getType()));
                }
            }
            return instance;
        } catch (Exception e) {
            throw new RuntimeException("Erreur lors de la désérialisation", e);
        }
    }
    private static Object convertValue(String value, Class<?> type) {
        if (type == int.class || type == Integer.class) {
            return Integer.parseInt(value);
        } else if (type == double.class || type == Double.class) {
            return Double.parseDouble(value);
        } else if (type == boolean.class || type == Boolean.class) {
            return Boolean.parseBoolean(value);
        } else {
            return value; // Par défaut, on retourne une chaîne de caractères
        }
    }
}