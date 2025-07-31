import { cn } from '@/utils';
import React from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

export const Paginate = ({ totalPage, name = 'page' }) => {

    const [searchParams] = useSearchParams()
    const currentPage = parseInt(searchParams.get(name) || 1);
    const { pathname } = useLocation()

    const search = new URLSearchParams(searchParams)
    const renderItem = () => {
        const list = []
        let start = currentPage - 2
        let end = currentPage + 2
        if (start < 1) {
            start = 1
            end = start + 4
        }
        if (end > totalPage) {
            end = totalPage
            start = end - 4
            if (start < 1) start = 1
        }
        for (let i = start; i <= end; i++) {
            search.set(name, i)
            list.push(<div key={i} className={cn("pagination__pages", { "active": i === currentPage })}>
                <Link className="pagination__page" to={`${pathname}?${search.toString()}`}>{i}</Link>
            </div>)
        }
        return list

    }

    search.set(name, currentPage - 1)
    const preLink = `${pathname}?${search.toString()}`
    search.set(name, currentPage + 1)
    const nextLink = `${pathname}?${search.toString()}`

    if (totalPage <= 1) return null;
    return (
        <div className="pagination">
            {
                currentPage > 1 && (
                    <Link className="pagination__prev" style={{ transform: 'rotate(180deg)' }} to={preLink}>
                        <img src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="prev" />
                    </Link>
                )
            }
            {renderItem()}
            {
                currentPage < totalPage && (
                    <Link className="pagination__next" to={nextLink}>
                        <img src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="prev" />
                    </Link>
                )
            }
        </div>
    )
}
