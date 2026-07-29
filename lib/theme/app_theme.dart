import 'package:flutter/material.dart';

class AppTheme {

  static ThemeData light = ThemeData(

    colorSchemeSeed: Colors.red,

    useMaterial3: true,

    scaffoldBackgroundColor: Colors.white,

    appBarTheme: const AppBarTheme(

      centerTitle: true,

      backgroundColor: Colors.red,

      foregroundColor: Colors.white,

      elevation: 0,

    ),

  );

}
