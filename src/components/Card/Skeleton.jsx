import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => (
	<ContentLoader
		speed={4}
		width={240}
		height={244}
		viewBox="0 0 240 244"
		backgroundColor="#a3cbf0"
		foregroundColor="#e3e3e3"
		
	>
		<rect x="-5" y="174" rx="3" ry="3" width="410" height="6" />
		<rect x="-8" y="199" rx="3" ry="3" width="380" height="6" />
		<rect x="-3" y="220" rx="3" ry="3" width="178" height="6" />
		<rect x="-3" y="-5" rx="0" ry="0" width="243" height="161" />
		<rect x="141" y="95" rx="0" ry="0" width="1" height="1" />
	</ContentLoader>
)