import 'package:flutter/material.dart';

import '../widgets/feature_card.dart';
import '../widgets/section_title.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final features = [
      {"title": "Word → PDF", "icon": Icons.description},
      {"title": "PDF → Word", "icon": Icons.article},
      {"title": "Excel → PDF", "icon": Icons.table_chart},
      {"title": "PDF → Excel", "icon": Icons.grid_on},
      {"title": "PPT → PDF", "icon": Icons.slideshow},
      {"title": "PDF → PPT", "icon": Icons.present_to_all},
      {"title": "Image → PDF", "icon": Icons.image},
      {"title": "PDF → Image", "icon": Icons.photo},

      {"title": "Merge PDF", "icon": Icons.merge_type},
      {"title": "Split PDF", "icon": Icons.call_split},
      {"title": "Compress", "icon": Icons.compress},
      {"title": "Rotate", "icon": Icons.rotate_right},
      {"title": "Delete Pages", "icon": Icons.delete},
      {"title": "Extract", "icon": Icons.content_copy},
      {"title": "Reorder", "icon": Icons.reorder},
      {"title": "Watermark", "icon": Icons.opacity},
      {"title": "Page Number", "icon": Icons.format_list_numbered},
      {"title": "Lock PDF", "icon": Icons.lock},
      {"title": "Unlock PDF", "icon": Icons.lock_open},
      {"title": "History", "icon": Icons.history},
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text("PDF Toolkit"),
      ),
      body: Column(
        children: [
          const SizedBox(height: 12),

          const SectionTitle(
            title: "All Features",
          ),

          Expanded(
            child: GridView.builder(
              padding: const EdgeInsets.all(16),

              itemCount: features.length,

              gridDelegate:
                  const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,

                crossAxisSpacing: 16,

                mainAxisSpacing: 16,

                childAspectRatio: 1.05,
              ),

              itemBuilder: (context, index) {
                final item = features[index];

                return FeatureCard(
                  icon: item["icon"] as IconData,
                  title: item["title"] as String,
                  onTap: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: Text(
                          "${item["title"]} belum dibuat",
                        ),
                      ),
                    );
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
