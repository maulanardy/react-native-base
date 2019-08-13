import {StyleSheet} from 'react-native';

export let param  = {
  size_xsmall: 10,
  size_small: 12,
  size_normal: 14,
  size_medium: 16,
  size_large: 18,
  size_xlarge: 20,
  size_xxlarge: 24
}

export let typography = StyleSheet.create({
  font: {
    fontFamily: "Helvetica"
  },
})

export let main = StyleSheet.create({
  heading: {
    ...typography.font,
    color: "#000000",
    fontSize:param.size_xlarge,
    fontWeight: "bold"
  },
  content: {
    backgroundColor : "#fafafa"
  },
  backgroundShadow: {
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3
  }
});