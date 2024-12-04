import React from "react";
import { View, Text } from "react-native";

const Experience = ({ className, data }) => {
  const groups = data[0].items.reduce((groups, item) => {
    const group = groups[item.company] || [];
    group.push(item);
    groups[item.company] = group;
    return groups;
  }, {});

  return (
    <View className={className}>
      <Text className="uppercase font-['Norwester'] text-xl text-primary-dark mb-4">
        {data[0].label}
      </Text>

      {Object.keys(groups).map((item, index) => (
        <View key={index}>
          {groups[item].length > 1 && (
            <View key={index} className={" bi-avoid bb-always font-['Lato'] mt-11"}>
              <Text className="text-secondary font-['LatoBlack'] uppercase text-sm font-semibold">
                {groups[item][0].company}
              </Text>
              <View className="text-primary-dark text-xs font-semibold mb-4">
                <Text className="font-['LatoBlack'] text-primary-dark text-xs" >
                  {groups[item][groups[item].length - 1].startDate}&nbsp; -
                  &nbsp;
                  {groups[item][0].presentDate === "Yes" && "Present"}
                  {groups[item][0].presentDate === "No" && (
                    <Text className="font-['LatoBlack'] text-primary-dark text-xs" >{groups[item][0].endDate}</Text>
                  )}
                </Text>
              </View>
              <View className="relative border-l border-solid border-primary-dark">
                {groups[item].map((item, index) => (
                  <View
                    key={index}
                    className={
                      "bi-avoid bb-always font-['Lato'] ml-4 " +
                      (index !== 0 ? "mt-11" : "mt-4")
                    }
                  >
                    <View className="absolute w-3 h-3 border-primary-dark bg-primary-dark rounded-full mt-1.5 -left-6 ml-0.5 border"></View>
                    <Text className="text-secondary font-['LatoBlack'] uppercase text-sm font-semibold">
                      {item.role}
                    </Text>
                    <View className="text-primary-dark text-xs font-semibold mb-4">
                      <Text className="font-['LatoBlack'] text-primary-dark text-xs" >
                        {item.startDate}&nbsp; - &nbsp;
                        {item.presentDate === "Yes" && "Present"}
                        {item.presentDate === "No" && (
                          <Text>{item.endDate}</Text>
                        )}
                      </Text>
                    </View>
                    <Text className="text-xs flex flex-col">
                      {item.duties.map((duty, index) => (
                        <Text key={index}>- {duty.duty}</Text>
                      ))}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {groups[item].length === 1 && (
            <View
              key={index}
              className={
                "bi-avoid bb-always font-['Lato'] " + (index !== 0 ? "mt-11" : "")
              }
            >
              <Text className="text-secondary font-['LatoBlack'] uppercase text-sm font-semibold">
                {groups[item][0].role}
              </Text>
              <View className=" mb-4 flex- flex-row">
                <Text className="font-['LatoBlack'] text-primary-dark text-xs border-r-2 border-solid border-primary-dark mr-1 pr-1">
                  {groups[item][0].company}
                </Text>
                <Text  className="font-['LatoBlack'] text-primary-dark text-xs" >
                  {groups[item][0].startDate}&nbsp; - &nbsp;
                  {groups[item][0].presentDate === "Yes" && "Present"}
                  {groups[item][0].presentDate === "No" && (
                    <Text className="font-['LatoBlack'] text-primary-dark text-xs" >{groups[item][0].endDate}</Text>
                  )}
                </Text>
              </View>
              <Text className="text-xs flex flex-col">
                {groups[item][0].duties.map((duty, index) => (
                  <Text key={index}> - {duty.duty}</Text>
                ))}
              </Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default Experience;
