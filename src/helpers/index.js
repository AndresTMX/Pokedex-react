//--------Filtro de habilidades pokemon-------------------//

export const callbackAbilities = (array, string) => {
    let result = array.filter(element => element.name === string);
    return result
}

export const callbackLanguage = (element) => {
    let result = element.filter(elemet => elemet.language.name === "en")
    return result
}

export const FilterAbilities =
    (arrayAbilities,
        arrayCurrentAbilities,
        callbackAbilities,
        callbackLanguage) => {
        let data = []
        arrayCurrentAbilities.forEach((ability) => {
            data.push(callbackAbilities(arrayAbilities, ability))
        })

        const response = data.flatMap(element => element)

        const textAbility = response.map(element => element.effect_entries).flatMap(element => element)

        const textEnglish = callbackLanguage(textAbility)

        return textEnglish

    }

 //--------fin Filtro de habilidades pokemon-------------------//
