import React, { Component } from 'react';
import './itemList.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Itemlist extends Component {
    handleBid = function(itemName){
        console.log(itemName);
    }
  
    render() {
    return (
      <div id="content-itemList">
        {/* bid item */}
        <div id="itemList-bid">
          <h1>Bid item</h1>
          <form onSubmit={(event) => {
            event.preventDefault()
            const id = this.itemIdBid.value
            const price = window.web3.utils.toWei(this.itemPriceBid.value.toString(), 'Ether')
            this.props.bidItem(id, price)
          }}>
            <div>
              <input class="bid-input"
                id="itemIdBid"
                type="text"
                ref={(input) => { this.itemIdBid = input }}
                placeholder="Item ID to bid"
                required />
            </div>
            <div>
              <input class="bid-input"
                id="itemPriceBid"
                type="text"
                ref={(input) => { this.itemPriceBid = input }}
                placeholder="item Price to bid"
                required />
            </div>
            <Button type="submit">Bid!</Button>
          </form>
        </div>

        {/* list of existing items */}
        <div>
          <h2>Item List</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Owner</th>
                <th scope="col">Status</th>
              </tr> 
            </thead>
            <tbody>
                {this.props.itemList.map((item, key)=>{
                    return(
                        <tr key={key}>
                          <td>{item.itemId}</td>   
                          <td>{item.itemName.toString()}</td>
                          <td>{window.web3.utils.fromWei(item.price.toString(), 'ether')} ETH </td>
                          <td>{item.owner}</td>
                          <td>
                            {
                              !item.isItemSold
                              ?
                              "Available"   
                              : 
                              "Sold"
                              }
                          </td>
                        </tr>
                    )
                })}
            </tbody>
          </Table>
        </div>
      </div>
      
    );
  }
}

export default Itemlist;
