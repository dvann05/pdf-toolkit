import 'package:flutter/material.dart';

class FeatureCard extends StatelessWidget {

  final IconData icon;

  final String title;

  final VoidCallback onTap;

  const FeatureCard({

    super.key,

    required this.icon,

    required this.title,

    required this.onTap,

  });

  @override

  Widget build(BuildContext context) {

    return InkWell(

      onTap: onTap,

      borderRadius: BorderRadius.circular(16),

      child: Card(

        elevation: 3,

        shape: RoundedRectangleBorder(

          borderRadius: BorderRadius.circular(16),

        ),

        child: Padding(

          padding: const EdgeInsets.all(20),

          child: Column(

            mainAxisAlignment: MainAxisAlignment.center,

            children: [

              Icon(

                icon,

                size: 42,

                color: Colors.red,

              ),

              const SizedBox(height: 12),

              Text(

                title,

                textAlign: TextAlign.center,

              ),

            ],

          ),

        ),

      ),

    );

  }

}
