import React, { useEffect, useState, useMemo } from "react";
import { Col, Container, Pagination, Row } from "react-bootstrap";
import { MainReducerState } from "../../interfaces/interfaces";
import ProductItem from "../ProductItem";

const PAGE_LIMIT: number = 4

type Props = Partial<MainReducerState> & { fetchProductList: Function }

const ProductList = (props: Props) => {
    const { fetchProductList, products = [], searchString } = props
    const [activePage, setActivePage] = useState<number>(0)
    useEffect(() => {
        fetchProductList()
    }, [fetchProductList, searchString])

    const { items, pagStart, pagEnd } = useMemo(() => {
        const pageLimit = Math.ceil(products.length / PAGE_LIMIT)
        let items = []
        for (let i = 0; i < pageLimit; i++) {
            items.push(
                <Pagination.Item
                    key={i}
                    active={activePage === i}
                    onClick={() => setActivePage(i)}>
                    {i + 1}
                </Pagination.Item>
            )
        }
        const pagStart = activePage * PAGE_LIMIT
        const pagEnd = pagStart + PAGE_LIMIT
        return {
            items,
            pagStart,
            pagEnd
        }
    }, [activePage, products.length])


    return (
        <Container className="px-2">
            <Row>
                {products.length ? products.slice(pagStart, pagEnd).map(item => {
                    return (
                        <Col lg={3} md={6} sm={6} xs={12} key={item.id}>
                            <ProductItem {...item} />
                        </Col>
                    )
                }) : <h4 className="pl-3">Products not found</h4>}
            </Row>
            <Pagination className="justify-content-center mt-4">
                {items}
            </Pagination>

        </Container>
    )
}

export default ProductList