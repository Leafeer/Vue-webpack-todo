import '../assets/styles/footer.styl'
export default {
    data() {
        return {
            author: 'Leafeer',
            
        }
    },
    render() {
        return (
         // [].map()
            <div id="footer">
                <span>Written by {this.author}</span>
                
            </div>
        )
    }
}