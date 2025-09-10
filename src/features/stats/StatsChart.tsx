import type { RootState } from "../../store";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useAppSelector } from "../../hooks.ts";

export const StatsChart = () => {
    const stats = useAppSelector((state: RootState) => state.stats.completedPerDay)

    const data = Object.entries(stats).map(([date, count]) => ({
        date,
        count
    }))

    return (
        <div className="p-6 bg-white rounded-xl shadow-md mt-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">📊 Статистика</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <Line type="monotone" dataKey="count" stroke="#8b5cf6" strokeWidth={3} />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
