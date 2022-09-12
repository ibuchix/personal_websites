import 'package:flutter/material.dart';
import 'package:personal_websites/utilities/constants.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(
     const Portfolio(),
  );
}

class Portfolio extends StatelessWidget {
  const Portfolio({Key? key}) : super(key: key);

  Future<void>_openUrl(String url) async{
    final isLaunchable = await canLaunch(url);
    if (isLaunchable) {
      launch(url);
    }
  }
  Widget _header(){
    return  SizedBox(width: double.infinity,
      child: Column(
        children:  [
          const SizedBox(height: 32,),
          const CircleAvatar(backgroundImage: AssetImage('assets/images/IMG_1031.jpg'),radius: 100,),
          //Image.asset('assets/images/gym_me.jpg', width: 200),
          const SizedBox(height: 24,),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 16),
            child: Text('Hi, I am Buchi, lead developer at Chiokee', style: TextStyle(color: kDarkGrey, fontSize: 14, fontWeight: FontWeight.w400, fontFamily: 'FiraSansExtraCondensed'),textAlign: TextAlign.center,),
          ),
          const SizedBox(height: 8,),
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 16),
            child: Text("Passionate about building unique websites/web-apps used in solving everyday problems", style: TextStyle(color: kDarkGrey, fontWeight: FontWeight.bold, fontSize: 22), textAlign: TextAlign.center,),
          ),
          const SizedBox(height: 16.0,),
          Wrap(
            spacing: 16.0,
            runSpacing: 16.0,
            alignment: WrapAlignment.center,
              children: [
              IconButton(onPressed: () =>_openUrl('https://www.twitter.com/buchichioke'),

               icon:   const FaIcon(FontAwesomeIcons.twitter, color: kBlueColor),),
                IconButton(onPressed: () =>_openUrl('https://www.instagram.com/buchichioke'),
                  icon:   const FaIcon(FontAwesomeIcons.instagram, color: kBlueColor),),
                   IconButton(onPressed: () =>_openUrl('https://github.com/ibuchix'),
                  icon:   const FaIcon(FontAwesomeIcons.github, color: kBlueColor),)
            ],),
        ],
      ),
    );
  }
  Widget _badges(){
    const technologies = ['flutter', 'dart', 'python', 'firebase', 'docker','ethereum',];
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Wrap(
        alignment: WrapAlignment.center,
        children: technologies.map(
                (technology)=>Card(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                children: [
                  Image.asset('assets/badges/$technology.png', width: 48),
                const SizedBox(height: 4,),
                Text(technology)
                ],
              ),
            ),
          ),)
          .toList(),
      ),
    );
  }

  Widget _renderProjectCard({
  required String imageUrl,
    required String title,
    required String description,
    String? visitLink,
}){
   return Container(
     constraints: const BoxConstraints(maxWidth: 350),
     child: Card(
       shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8),
       side: const BorderSide(
         color: kDarkGrey,
       )),
       elevation: 2,
       clipBehavior: Clip.antiAliasWithSaveLayer,
       child: Column(
       children: [
         Image.asset(imageUrl, fit: BoxFit.cover, height: 200, width: 350,),
         SizedBox(
           width: double.infinity,
           child: Padding(
             padding: const EdgeInsets.all(16.0),
             child: Column(
               crossAxisAlignment: CrossAxisAlignment.start,
               children: [
                 Text(title, style: const TextStyle(color: kDarkGrey, fontWeight: FontWeight.w800,fontSize: 20.0),),
                 const SizedBox(height: 8,),
                 Text(description, overflow: TextOverflow.ellipsis,maxLines: 2,),
               ],
             ),
           ),
         ),
         if (visitLink != null)
         Padding(
           padding: const EdgeInsets.only(left: 16, bottom: 16, right: 16),
           child: Row(
             mainAxisAlignment: MainAxisAlignment.end,
             children: [
               ElevatedButton(onPressed: () =>_openUrl(visitLink),
                   child: const Text('Visit'))
             ],
           ),
         )
       ],
     ),),
   );
}
  Widget _projects(){
    return Container(
      color: kLightGrey,
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 52.0, horizontal: 16.0),
      child: Column(children:  [
        const Text('Projects', style: TextStyle(color: kDarkGrey,fontSize: 28.0,fontWeight: FontWeight.w500),
        ),
        const SizedBox(height: 16,),
        Wrap(
          runSpacing: 16,
          spacing: 16,
          alignment: WrapAlignment.center,
          children: [_renderProjectCard(imageUrl:'assets/projects/howwz.PNG',
          title: 'Howwz', description: 'A short-let accommodation platform.',
              visitLink: 'https://www.howwz.com',),
            _renderProjectCard(imageUrl:'assets/projects/simplesolvents.jpeg',
              title: 'SimpleSolvents', description: 'offical website for simplesolvents with shop feature.',
              visitLink: 'https://www.simplesolvents.com/#/',),
            _renderProjectCard(imageUrl:'assets/projects/lydian.jpeg',
              title: 'Lydian DaO', description: 'A staking protocol on the stacks blockchain',
              visitLink: 'https://www.lydian.xyz',)],
        )
      ],
      ),
    );
  }
  Widget _footer(){
    return Container(color: kBlackColor,padding: const EdgeInsets.all(32),
    child: Row(children: const [
      Text('Contact: buchi@chiokee.com', style: TextStyle(color: Colors.purple),)
    ],),);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(fontFamily: "FiraSansExtraCondensed"),
      home: Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          elevation: 0,
          backgroundColor: Colors.transparent,
          title: const Text('chiokee',style: TextStyle(color: Colors.black, ),),
          centerTitle: false,
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              Container(constraints: const BoxConstraints(maxWidth: 800),
                child: Column(
                  children: [
                    _header(),
                    const SizedBox(height: 24,),
                    _badges(),
                  ],
                ),
              ),
              const SizedBox(height: 32,),
              _projects(),
              _footer(),
            ],
          ),
        )
      ),
    );
  }
}



