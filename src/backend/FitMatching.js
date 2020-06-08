export default class FitMatching{
    constructor(closet){
        this.top = closet.Top
        this.bottom = closet.Bottom
        this.shoes = closet.Shoes
    }   

    _getRandomItem(array){

    }
    generateCloset(number_of_outfits){
        let local_top = [...this.top]
        let local_bottom = [...this.bottom]
        let local_shoe = [...this.shoes]
        let generated_outfits = []
        for (let i = 0; i < number_of_outfits; i++) {

            //refilling array
            if(local_top.length < 1){
                local_top = [...this.top]
            }
            if(local_bottom.length < 1){
                local_bottom = [...this.bottom]
            }
            if(local_shoe.length < 1)
            {
                local_shoe = [...this.shoes]
            }

            //choosing random tops,bottoms and shoes
            let random_top = local_top[Math.floor(Math.random()*local_top.length)]
            let random_bottom = local_bottom[Math.floor(Math.random()*local_bottom.length)]
            let random_shoe = local_shoe[Math.floor(Math.random()*local_shoe.length)]

            let newFit = {
                Top:random_top,
                Bottom:random_bottom,
                Shoe:random_shoe
            }
            generated_outfits.push(newFit)
            //removing the items
            local_top.splice(local_top.indexOf(random_top),1)
            local_bottom.splice(local_bottom.indexOf(random_bottom),1)
            local_shoe.splice(local_shoe.indexOf(random_shoe),1)

        }
        return(generated_outfits)
    }
}