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
    const [searchStatus, setSearchStatus] = useState<string>('ALL')

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        if (info?.source === "clear") return setSearch(null)

        const searched = data.filter(item => (item.Applicant.includes(value) || item.Address.includes(value)))
        if (searchStatus === "ALL") {
            setSearch(searched)
        } else {
            const statusSearched = searched.filter(item => item.Status === searchStatus)
            setSearch(statusSearched)
        }
    }

    return (
        <Wrapper >
            <SearchWrapper >
                <Select
                    value={searchStatus}
                    size='large'
                    style={{ width: 180, marginRight: 24 }}
                    onChange={setSearchStatus}
                    options={[
                        { value: 'ALL', label: 'All Status' },
                        { value: 'REQUESTED', label: 'Requested' },
                        { value: 'APPROVED', label: 'Approved' },
                        { value: 'EXPIRED', label: 'Expired' },
                        { value: 'SUSPENDED', label: 'Suspended' },
                        { value: 'ISSUED', label: 'Issued' },
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
    flex-direction: row;
    margin-bottom: 32px;
`



