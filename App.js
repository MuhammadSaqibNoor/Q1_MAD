import React from 'react';
import { Button, Image, Platform, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Objectives from './src/components/Objectives';
import Experience from './src/components/Objectives';
import EducationSections from './src/components/Objectives';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./Cv.png')}
        style={{ width: 50, height: 50 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
      title="Curriculum Vitae"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0,
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={{ flex: 1,marginTop: 5, marginLeft: 10,}}>

       
           <Image
        source={require('./Pic.jpg')}
        style={{ width: 120, height: 120,   }}
      />
    
        <Text style={{ color: '#0984C1', fontWeight: 'bold'  , marginTop: 30 , fontSize: 20 }}>Personal Info:</Text>
       <Text style={{ color: '#000000', marginTop: 5  }}>Name : Muhammad Saqib Noor</Text>
       <Text style={{ color: '#000000', marginTop: 5  }}>Father Name : Ahmed Noor</Text>
       <Text style={{ color: '#000000', marginTop: 5  }}>Gender : Male</Text>
       <Text style={{ color: '#000000', marginTop: 5  }}>Relgion : Islam</Text>
      
        
      </View>
    );
  }
}


const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="Objectives" component={Objectives} title="Objectives"/>
      <Scene key="Education" component={EducationSections} title="Education"/>
      <Scene key="Experience" component={Experience}/>
    </Stack>
  </Router>
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


