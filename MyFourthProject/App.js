import React from 'react';
import { Text, View, SectionList } from 'react-native';

export default StatesApp = () => {
  return (
    <View style={{flex: 1, paddingTop: 22}}>
      <SectionList
       sections={[
          {title: 'A-C', data: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut']},
          {title: 'D-H', data: ['Delaware', 'Florida', 'Georgia', 'Hawaii']},
          {title: 'I-L', data: ['Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana']},
          {title: 'M', data: ['Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minesota', 'Mississippi', 'Misouri', 'Montana']},
          {title: 'N', data: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota']},
          {title: 'O-R', data: ['Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island']},
          {title: 'S-U', data: ['South Carolina', 'South Dakota', 'Tennesse', 'Texas', 'Utah']},
          {title: 'V-W', data: ['Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']}

        ]}
        renderItem={({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item} </Text>}
        renderSectionHeader={({section}) => <Text style={{paddingTop: 4, paddingLeft:10,
        paddingRight: 10, paddingBottom: 4, fontSize: 14, fontWeight: 'bold',
        backgroundColor: '#9FA8DA',}}>{section.title}</Text>}
        keyExtractor={(item,index) =>index}
      />
    </View>
  );
}