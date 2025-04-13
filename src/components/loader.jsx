import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const Loader = () => {
  const itemsAnimation = useRef(
    [...Array(5)].map(() => ({
      translateY: new Animated.Value(-150),
      translateX: new Animated.Value(0),
      scale: new Animated.Value(1),
      opacity: new Animated.Value(1),
      rotation: new Animated.Value(0),
    }))
  ).current;

  useEffect(() => {
    const animate = () => {
      itemsAnimation.forEach(anim => {
        anim.translateY.setValue(-150);
        anim.translateX.setValue(0);
        anim.scale.setValue(1);
        anim.opacity.setValue(1);
        anim.rotation.setValue(0);
      });

      const animations = itemsAnimation.map((anim, index) => {
        const startX = Math.random() * 100 - 50;
        const endX = 0;
        anim.translateX.setValue(startX);

        return Animated.sequence([
          Animated.delay(index * 200),
          Animated.parallel([
            Animated.timing(anim.translateY, {
              toValue: 80,
              duration: 1000,
              easing: Easing.in(Easing.quad),
              useNativeDriver: true,
            }),
            Animated.timing(anim.translateX, {
              toValue: endX,
              duration: 1000,
              easing: Easing.out(Easing.quad),
              useNativeDriver: true,
            }),
            Animated.timing(anim.scale, {
              toValue: 0.6,
              duration: 1000,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
            Animated.timing(anim.rotation, {
              toValue: 1,
              duration: 1000,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
            Animated.sequence([
              Animated.delay(600),
              Animated.timing(anim.opacity, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
              }),
            ]),
          ]),
        ]);
      });

      Animated.stagger(150, animations).start(() => {
        setTimeout(animate, 700);
      });
    };

    animate();

    return () => {
      itemsAnimation.forEach(anim => {
        anim.translateY.stopAnimation();
        anim.translateX.stopAnimation();
        anim.scale.stopAnimation();
        anim.opacity.stopAnimation();
        anim.rotation.stopAnimation();
      });
    };
  }, [itemsAnimation]);

  return (
    <View style={styles.loaderContainer}>
      <View style={styles.itemsContainer}>
        {itemsAnimation.map((anim, index) => {
          const rotate = anim.rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          });
          return (
            <Animated.View
              key={index}
              style={[
                styles.item,
                {
                  transform: [
                    { translateY: anim.translateY },
                    { translateX: anim.translateX },
                    { scale: anim.scale },
                    { rotate },
                  ],
                  opacity: anim.opacity,
                },
              ]}
            />
          );
        })}
      </View>
      <View style={styles.basket} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  itemsContainer: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: 20,
  },
  item: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#8d7958',
    margin: 5,
  },
  basket: {
    width: 120,
    height: 60,
    borderWidth: 3,
    borderColor: '#8d7958',
    borderTopWidth: 0,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    position: 'absolute',
    bottom: 0,
  },
});

export default Loader;
