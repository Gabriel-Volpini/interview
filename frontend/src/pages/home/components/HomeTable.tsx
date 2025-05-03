import { Input, Table, TableProps, Select, GetProps } from 'antd';
import { MobileFoodFacility } from '../../../types';
import { HomeContext } from '../Home';
import { useContext, useState } from 'react';
import styled from 'styled-components';

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input


const columns: TableProps<MobileFoodFacility>['columns'] = [
    { title: 'locationid', dataIndex: 'locationid', key: 'locationid' },
    { title: 'Applicant', dataIndex: 'Applicant', key: 'Applicant' },
    { title: 'Address', dataIndex: 'Address', key: 'Address' },
    { title: 'Status', dataIndex: 'Status', key: 'Status' },
];



export const HomeTable = () => {
    const { data, setHoveredElementId } = useContext(HomeContext)
    const [search, setSearch] = useState<null | MobileFoodFacility[]>(null)

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        if (info?.source === "clear") return setSearch(null)
        else setSearch([data[0]])
    }

    return (
        <Wrapper >
            <SearchWrapper >
                <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    //onChange={handleChange}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                />
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </SearchWrapper >
            <Table
                size="large"
                columns={columns}
                dataSource={search || data}
                onRow={(record) => ({
                    onMouseEnter: () => setHoveredElementId(record.locationid),
                    onMouseLeave: () => setHoveredElementId(null),
                })} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex:1;
`

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
`



