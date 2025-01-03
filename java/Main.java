package com.collage;

import com.collage.student.MyStudent;
import com.collage.teacher.MyTeacher;

public class Main {
    public static void main(String[] args) {
        System.out.println("My Main");
        MyStudent student = new MyStudent();
        student.print();

        MyTeacher teacher = new MyTeacher();
        teacher.print();
    }
}
