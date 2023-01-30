import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function Pagination({ todosSize, setPage }) {
  const [count, setCount] = useState(1);
  const [numberOfBtn, setNumberOfBtn] = useState(0);
  const showPerPage = 6;
  useEffect(() => {
    const end = showPerPage * count;
    const start = end - showPerPage;
    setPage({ start, end });
    setNumberOfBtn(Math.ceil(todosSize / showPerPage));
  }, [count]);
  return (
    <>
      {Math.ceil(todosSize / showPerPage) > 0 && (
        <View style={styles.Page}>
          <View>
            <Button
              disabled={count === 1}
              onPress={() => setCount(count - 1)}
              title="<<"
            />
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {new Array(numberOfBtn).fill("").map((items, idx) => (
              <Button
                key={idx}
                onPress={() => {
                  console.log(idx + 1);
                  setCount(idx + 1);
                }}
                title={`${idx + 1}`}
              />
            ))}
          </View>
          <View>
            <Button
              disabled={Math.ceil(todosSize / showPerPage) === count}
              onPress={() => setCount(count + 1)}
              title=">>"
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 30,
  },
  text: {
    display: "f",
  },
  Page: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});
