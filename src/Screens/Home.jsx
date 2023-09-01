import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

const Home = ({ navigation }) => {

    const [carouselData, setCarouselData] = useState([])
    // const carouselData = [
    //     { id: 1, title: 'Slide 1', content: 'Content for slide 1' },
    //     { id: 2, title: 'Slide 2', content: 'Content for slide 2' },
    //     { id: 3, title: 'Slide 3', content: 'Content for slide 3' },
    // ];

    useEffect(() => {
        fetchData('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20')
    }, [])


    const fetchData = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setCarouselData(data.photos)
    }

    const renderCarouselItem = ({ item }) => {
        return (
            <View style={styles.carouselItem}>
                <ImageBackground
                    source={{ uri: item.url }}
                    style={styles.carouselItem}
                >
                    <Text style={styles.carouselTitle}>{item.title}</Text>
                    <Text style={styles.carouselContent}>{item.description}</Text>
                </ImageBackground>
            </View>
        )
    };
    

    return (
        <ScrollView style={styles.container}>
            <View style={styles.carouselContainer}>
                {/* <Carousel
                    data={carouselData}
                    renderItem={renderCarouselItem}
                    sliderWidth={500}
                    itemWidth={400}
                    sliderHeight={200}
                    itemHeight={200}
                    autoplay={true}
                    autoplayInterval={2500}
                    loop={true}
                /> */}
            </View>
            <View style={styles.optionContainer}>
                <View style={styles.editOptionRow}>
                    <TouchableOpacity style={styles.editOptionBtn} onPress={() => { }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editOptionBtn} onPress={() => { }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.editOptionRow}>
                    <TouchableOpacity style={styles.editOptionBtn} onPress={() => { }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.editOptionBtn} onPress={() => { }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    carouselContainer: {
        height: 260,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselItem: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: "100%",
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselTitle: {
        fontSize: 22,
        width: 290,
        textAlign: 'center',
        color: 'black',
        fontWeight: '800',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    carouselContent: {
        width: 300,
        color: 'black',
        marginTop: 10,
        fontSize: 16,
    },
    optionContainer: {
        paddingVertical: 10,
        height: 350,
        justifyContent: 'space-between'
    },
    editOptionRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    editOptionBtn: {
        height: 160,
        width: 190,
        borderRadius: 12,
        backgroundColor: 'pink'
    },
    loginButton: {
        marginBottom: 20,
        backgroundColor: 'pink',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 5,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Home;
