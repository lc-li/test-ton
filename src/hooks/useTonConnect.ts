import { useTonConnectUI } from "@tonconnect/ui-react";
import { Sender, SenderArguments } from "ton-core";

export function useTonConnect(): { sender: Sender; connected: boolean } {
    const [tonConnectUI] = useTonConnectUI();

    return {
        // 发送者对象
        sender: {
            // 发送交易的方法
            send: async (args: SenderArguments) => {
               tonConnectUI.sendTransaction({
                // 交易消息数组
                messages: [
                    {
                        // 接收地址
                        address: args.to.toString(),
                        // 转账金额
                        amount: args.value.toString(),
                        // 附加数据（如果有）
                        payload: args.body?.toBoc().toString("base64"),
                    }
                ],
                // 交易有效期：当前时间 + 5分钟
                validUntil: Date.now() + 1000 * 60 * 5, // 5 minutes
               })
            },
        },
        // 连接状态
        connected: tonConnectUI.connected,
    };
}