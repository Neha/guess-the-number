import { React} from 'react';
import { Text, StyleSheet} from 'react-native';

const Heading = ({children, style}) => {
    return <Text style={[Styles.heading, style]}>{children}</Text>
}

const Styles = StyleSheet.create({
    heading: {
        fontSize: 42,
        color: "#fff",
        fontFamily: "SpicyRice"
    }
})

export default Heading;