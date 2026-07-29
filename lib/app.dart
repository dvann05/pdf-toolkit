import 'package:flutter/material.dart';
import 'screens/home_screen.dart';
import 'theme/app_theme.dart';

class PDFToolkitApp extends StatelessWidget {
  const PDFToolkitApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'PDF Toolkit',
      theme: AppTheme.light,
      home: const HomeScreen(),
    );
  }
}
