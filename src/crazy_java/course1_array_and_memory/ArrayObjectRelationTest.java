package crazy_java.course1_array_and_memory;

import java.lang.reflect.Field;

public class ArrayObjectRelationTest {
    public static void main(String[] args) {
        Object o = new int[3];

        int[] arr = new int[2];

        Class clazz = arr.getClass();
        System.out.println("int数组的类名为："+clazz.getName());
        Class superClass = clazz;
        while ((superClass = superClass.getSuperclass()) != null){
            System.out.println("父类名称为：" + superClass.getName());
        }
        Field[] fields = clazz.getFields();
        for (Field field: fields){
            System.out.println(field.getName());
        }
    }
}
