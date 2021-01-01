import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: '1ページ目'),
      routes: {
        '/second': (BuildContext context) => MySecondPage(),
        '/third': (BuildContext context) => MyThirdPage(),
      },
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: RaisedButton(
          onPressed: () => Navigator.of(context).pushNamed('/second'),
          child: Text('2ページ目に行く'),),
      ),

    );
  }
}

class MySecondPage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('2ページ目'),
      ),
      body: Center(
        child: RaisedButton(
          onPressed: () => Navigator.of(context).pushNamed('/third'),
          child: Text('3ページ目に行く'),),
      ),

    );
  }
}

class MyThirdPage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('3ページ目'),
      ),
      body: Center(
        child: Text('3ページ目'),
      ),
    );
  }
}