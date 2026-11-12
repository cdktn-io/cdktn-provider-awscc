/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface Ec2ClientVpnEndpointConfig extends cdktn.TerraformMetaArguments {
  /**
  * Information about the authentication method to be used to authenticate clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authentication_options Ec2ClientVpnEndpoint#authentication_options}
  */
  readonly authenticationOptions: Ec2ClientVpnEndpointAuthenticationOptions[] | cdktn.IResolvable;
  /**
  * The Cedar authorization policy to associate with the Client VPN endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#authorization_policy Ec2ClientVpnEndpoint#authorization_policy}
  */
  readonly authorizationPolicy?: Ec2ClientVpnEndpointAuthorizationPolicy;
  /**
  * The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_cidr_block Ec2ClientVpnEndpoint#client_cidr_block}
  */
  readonly clientCidrBlock?: string;
  /**
  * The options for managing connection authorization for new client connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_connect_options Ec2ClientVpnEndpoint#client_connect_options}
  */
  readonly clientConnectOptions?: Ec2ClientVpnEndpointClientConnectOptions;
  /**
  * Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_login_banner_options Ec2ClientVpnEndpoint#client_login_banner_options}
  */
  readonly clientLoginBannerOptions?: Ec2ClientVpnEndpointClientLoginBannerOptions;
  /**
  * Client route enforcement is a feature of the Client VPN service that helps enforce administrator defined routes on devices connected through the VPN. This feature helps improve your security posture by ensuring that network traffic originating from a connected client is not inadvertently sent outside the VPN tunnel.
  * Client route enforcement works by monitoring the route table of a connected device for routing policy changes to the VPN connection. If the feature detects any VPN routing policy modifications, it will automatically force an update to the route table, reverting it back to the expected route configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_route_enforcement_options Ec2ClientVpnEndpoint#client_route_enforcement_options}
  */
  readonly clientRouteEnforcementOptions?: Ec2ClientVpnEndpointClientRouteEnforcementOptions;
  /**
  * Information about the client connection logging options. If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged: client connection requests, client connection results (successful and unsuccessful), reasons for unsuccessful client connection requests, client connection termination time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#connection_log_options Ec2ClientVpnEndpoint#connection_log_options}
  */
  readonly connectionLogOptions: Ec2ClientVpnEndpointConnectionLogOptions;
  /**
  * A brief description of the Client VPN endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}
  */
  readonly description?: string;
  /**
  * The device-posture trust providers to associate with the Client VPN endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#device_posture_options Ec2ClientVpnEndpoint#device_posture_options}
  */
  readonly devicePostureOptions?: Ec2ClientVpnEndpointDevicePostureOptions;
  /**
  * Indicates whether the client VPN session is disconnected after the maximum sessionTimeoutHours is reached. If true, users are prompted to reconnect client VPN. If false, client VPN attempts to reconnect automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#disconnect_on_session_timeout Ec2ClientVpnEndpoint#disconnect_on_session_timeout}
  */
  readonly disconnectOnSessionTimeout?: boolean | cdktn.IResolvable;
  /**
  * Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#dns_servers Ec2ClientVpnEndpoint#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * The IP address type of the Client VPN endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#endpoint_ip_address_type Ec2ClientVpnEndpoint#endpoint_ip_address_type}
  */
  readonly endpointIpAddressType?: string;
  /**
  * The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#security_group_ids Ec2ClientVpnEndpoint#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Specify whether to enable the self-service portal for the Client VPN endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_portal Ec2ClientVpnEndpoint#self_service_portal}
  */
  readonly selfServicePortal?: string;
  /**
  * The ARN of the server certificate. For more information, see the AWS Certificate Manager User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#server_certificate_arn Ec2ClientVpnEndpoint#server_certificate_arn}
  */
  readonly serverCertificateArn: string;
  /**
  * The maximum VPN session duration time in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#session_timeout_hours Ec2ClientVpnEndpoint#session_timeout_hours}
  */
  readonly sessionTimeoutHours?: number;
  /**
  * Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#split_tunnel Ec2ClientVpnEndpoint#split_tunnel}
  */
  readonly splitTunnel?: boolean | cdktn.IResolvable;
  /**
  * The tags to apply to the Client VPN endpoint during creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tag_specifications Ec2ClientVpnEndpoint#tag_specifications}
  */
  readonly tagSpecifications?: Ec2ClientVpnEndpointTagSpecifications[] | cdktn.IResolvable;
  /**
  * The IP address type of the Client VPN endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#traffic_ip_address_type Ec2ClientVpnEndpoint#traffic_ip_address_type}
  */
  readonly trafficIpAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_configuration Ec2ClientVpnEndpoint#transit_gateway_configuration}
  */
  readonly transitGatewayConfiguration?: Ec2ClientVpnEndpointTransitGatewayConfiguration;
  /**
  * The transport protocol to be used by the VPN session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transport_protocol Ec2ClientVpnEndpoint#transport_protocol}
  */
  readonly transportProtocol?: string;
  /**
  * The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpc_id Ec2ClientVpnEndpoint#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * The port number to assign to the Client VPN endpoint for TCP and UDP traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#vpn_port Ec2ClientVpnEndpoint#vpn_port}
  */
  readonly vpnPort?: number;
}
export interface Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#directory_id Ec2ClientVpnEndpoint#directory_id}
  */
  readonly directoryId?: string;
}

export function ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryToTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    directory_id: cdktn.stringToTerraform(struct!.directoryId),
  }
}


export function ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryToHclTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    directory_id: {
      value: cdktn.stringToHclTerraform(struct!.directoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryId = this._directoryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryId = value.directoryId;
    }
  }

  // directory_id - computed: true, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }
}
export interface Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#saml_provider_arn Ec2ClientVpnEndpoint#saml_provider_arn}
  */
  readonly samlProviderArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#self_service_saml_provider_arn Ec2ClientVpnEndpoint#self_service_saml_provider_arn}
  */
  readonly selfServiceSamlProviderArn?: string;
}

export function ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationToTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    saml_provider_arn: cdktn.stringToTerraform(struct!.samlProviderArn),
    self_service_saml_provider_arn: cdktn.stringToTerraform(struct!.selfServiceSamlProviderArn),
  }
}


export function ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationToHclTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    saml_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.samlProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_service_saml_provider_arn: {
      value: cdktn.stringToHclTerraform(struct!.selfServiceSamlProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samlProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlProviderArn = this._samlProviderArn;
    }
    if (this._selfServiceSamlProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceSamlProviderArn = this._selfServiceSamlProviderArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._samlProviderArn = undefined;
      this._selfServiceSamlProviderArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._samlProviderArn = value.samlProviderArn;
      this._selfServiceSamlProviderArn = value.selfServiceSamlProviderArn;
    }
  }

  // saml_provider_arn - computed: true, optional: true, required: false
  private _samlProviderArn?: string; 
  public get samlProviderArn() {
    return this.getStringAttribute('saml_provider_arn');
  }
  public set samlProviderArn(value: string) {
    this._samlProviderArn = value;
  }
  public resetSamlProviderArn() {
    this._samlProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlProviderArnInput() {
    return this._samlProviderArn;
  }

  // self_service_saml_provider_arn - computed: true, optional: true, required: false
  private _selfServiceSamlProviderArn?: string; 
  public get selfServiceSamlProviderArn() {
    return this.getStringAttribute('self_service_saml_provider_arn');
  }
  public set selfServiceSamlProviderArn(value: string) {
    this._selfServiceSamlProviderArn = value;
  }
  public resetSelfServiceSamlProviderArn() {
    this._selfServiceSamlProviderArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceSamlProviderArnInput() {
    return this._selfServiceSamlProviderArn;
  }
}
export interface Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#client_root_certificate_chain_arn Ec2ClientVpnEndpoint#client_root_certificate_chain_arn}
  */
  readonly clientRootCertificateChainArn?: string;
}

export function ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationToTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    client_root_certificate_chain_arn: cdktn.stringToTerraform(struct!.clientRootCertificateChainArn),
  }
}


export function ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationToHclTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    client_root_certificate_chain_arn: {
      value: cdktn.stringToHclTerraform(struct!.clientRootCertificateChainArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientRootCertificateChainArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRootCertificateChainArn = this._clientRootCertificateChainArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientRootCertificateChainArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientRootCertificateChainArn = value.clientRootCertificateChainArn;
    }
  }

  // client_root_certificate_chain_arn - computed: true, optional: true, required: false
  private _clientRootCertificateChainArn?: string; 
  public get clientRootCertificateChainArn() {
    return this.getStringAttribute('client_root_certificate_chain_arn');
  }
  public set clientRootCertificateChainArn(value: string) {
    this._clientRootCertificateChainArn = value;
  }
  public resetClientRootCertificateChainArn() {
    this._clientRootCertificateChainArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRootCertificateChainArnInput() {
    return this._clientRootCertificateChainArn;
  }
}
export interface Ec2ClientVpnEndpointAuthenticationOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#active_directory Ec2ClientVpnEndpoint#active_directory}
  */
  readonly activeDirectory?: Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#federated_authentication Ec2ClientVpnEndpoint#federated_authentication}
  */
  readonly federatedAuthentication?: Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#mutual_authentication Ec2ClientVpnEndpoint#mutual_authentication}
  */
  readonly mutualAuthentication?: Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#type Ec2ClientVpnEndpoint#type}
  */
  readonly type: string;
}

export function ec2ClientVpnEndpointAuthenticationOptionsToTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    active_directory: ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryToTerraform(struct!.activeDirectory),
    federated_authentication: ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationToTerraform(struct!.federatedAuthentication),
    mutual_authentication: ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationToTerraform(struct!.mutualAuthentication),
    type: cdktn.stringToTerraform(struct!.type),
  }
}


export function ec2ClientVpnEndpointAuthenticationOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointAuthenticationOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    active_directory: {
      value: ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryToHclTerraform(struct!.activeDirectory),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory",
    },
    federated_authentication: {
      value: ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationToHclTerraform(struct!.federatedAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication",
    },
    mutual_authentication: {
      value: ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationToHclTerraform(struct!.mutualAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointAuthenticationOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2ClientVpnEndpointAuthenticationOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectory = this._activeDirectory?.internalValue;
    }
    if (this._federatedAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.federatedAuthentication = this._federatedAuthentication?.internalValue;
    }
    if (this._mutualAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutualAuthentication = this._mutualAuthentication?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointAuthenticationOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeDirectory.internalValue = undefined;
      this._federatedAuthentication.internalValue = undefined;
      this._mutualAuthentication.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeDirectory.internalValue = value.activeDirectory;
      this._federatedAuthentication.internalValue = value.federatedAuthentication;
      this._mutualAuthentication.internalValue = value.mutualAuthentication;
      this._type = value.type;
    }
  }

  // active_directory - computed: true, optional: true, required: false
  private _activeDirectory = new Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectoryOutputReference(this, "active_directory");
  public get activeDirectory() {
    return this._activeDirectory;
  }
  public putActiveDirectory(value: Ec2ClientVpnEndpointAuthenticationOptionsActiveDirectory) {
    this._activeDirectory.internalValue = value;
  }
  public resetActiveDirectory() {
    this._activeDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryInput() {
    return this._activeDirectory.internalValue;
  }

  // federated_authentication - computed: true, optional: true, required: false
  private _federatedAuthentication = new Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationOutputReference(this, "federated_authentication");
  public get federatedAuthentication() {
    return this._federatedAuthentication;
  }
  public putFederatedAuthentication(value: Ec2ClientVpnEndpointAuthenticationOptionsFederatedAuthentication) {
    this._federatedAuthentication.internalValue = value;
  }
  public resetFederatedAuthentication() {
    this._federatedAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedAuthenticationInput() {
    return this._federatedAuthentication.internalValue;
  }

  // mutual_authentication - computed: true, optional: true, required: false
  private _mutualAuthentication = new Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationOutputReference(this, "mutual_authentication");
  public get mutualAuthentication() {
    return this._mutualAuthentication;
  }
  public putMutualAuthentication(value: Ec2ClientVpnEndpointAuthenticationOptionsMutualAuthentication) {
    this._mutualAuthentication.internalValue = value;
  }
  public resetMutualAuthentication() {
    this._mutualAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualAuthenticationInput() {
    return this._mutualAuthentication.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Ec2ClientVpnEndpointAuthenticationOptionsList extends cdktn.ComplexList {
  public internalValue? : Ec2ClientVpnEndpointAuthenticationOptions[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2ClientVpnEndpointAuthenticationOptionsOutputReference {
    return new Ec2ClientVpnEndpointAuthenticationOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2ClientVpnEndpointAuthorizationPolicy {
  /**
  * A brief description of the authorization policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#description Ec2ClientVpnEndpoint#description}
  */
  readonly description?: string;
  /**
  * The Cedar policy document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#policy_document Ec2ClientVpnEndpoint#policy_document}
  */
  readonly policyDocument?: string;
  /**
  * Whether the authorization policy runs in shadow (observe-only) mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#shadow_mode Ec2ClientVpnEndpoint#shadow_mode}
  */
  readonly shadowMode?: string;
}

export function ec2ClientVpnEndpointAuthorizationPolicyToTerraform(struct?: Ec2ClientVpnEndpointAuthorizationPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    policy_document: cdktn.stringToTerraform(struct!.policyDocument),
    shadow_mode: cdktn.stringToTerraform(struct!.shadowMode),
  }
}


export function ec2ClientVpnEndpointAuthorizationPolicyToHclTerraform(struct?: Ec2ClientVpnEndpointAuthorizationPolicy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_document: {
      value: cdktn.stringToHclTerraform(struct!.policyDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shadow_mode: {
      value: cdktn.stringToHclTerraform(struct!.shadowMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointAuthorizationPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2ClientVpnEndpointAuthorizationPolicy | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._policyDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDocument = this._policyDocument;
    }
    if (this._shadowMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.shadowMode = this._shadowMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointAuthorizationPolicy | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._policyDocument = undefined;
      this._shadowMode = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._policyDocument = value.policyDocument;
      this._shadowMode = value.shadowMode;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // policy_document - computed: true, optional: true, required: false
  private _policyDocument?: string; 
  public get policyDocument() {
    return this.getStringAttribute('policy_document');
  }
  public set policyDocument(value: string) {
    this._policyDocument = value;
  }
  public resetPolicyDocument() {
    this._policyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDocumentInput() {
    return this._policyDocument;
  }

  // shadow_mode - computed: true, optional: true, required: false
  private _shadowMode?: string; 
  public get shadowMode() {
    return this.getStringAttribute('shadow_mode');
  }
  public set shadowMode(value: string) {
    this._shadowMode = value;
  }
  public resetShadowMode() {
    this._shadowMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shadowModeInput() {
    return this._shadowMode;
  }
}
export interface Ec2ClientVpnEndpointClientConnectOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#lambda_function_arn Ec2ClientVpnEndpoint#lambda_function_arn}
  */
  readonly lambdaFunctionArn?: string;
}

export function ec2ClientVpnEndpointClientConnectOptionsToTerraform(struct?: Ec2ClientVpnEndpointClientConnectOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    lambda_function_arn: cdktn.stringToTerraform(struct!.lambdaFunctionArn),
  }
}


export function ec2ClientVpnEndpointClientConnectOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointClientConnectOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lambda_function_arn: {
      value: cdktn.stringToHclTerraform(struct!.lambdaFunctionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointClientConnectOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2ClientVpnEndpointClientConnectOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._lambdaFunctionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointClientConnectOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._lambdaFunctionArn = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._lambdaFunctionArn = value.lambdaFunctionArn;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // lambda_function_arn - computed: true, optional: true, required: false
  private _lambdaFunctionArn?: string; 
  public get lambdaFunctionArn() {
    return this.getStringAttribute('lambda_function_arn');
  }
  public set lambdaFunctionArn(value: string) {
    this._lambdaFunctionArn = value;
  }
  public resetLambdaFunctionArn() {
    this._lambdaFunctionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionArnInput() {
    return this._lambdaFunctionArn;
  }
}
export interface Ec2ClientVpnEndpointClientLoginBannerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#banner_text Ec2ClientVpnEndpoint#banner_text}
  */
  readonly bannerText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
}

export function ec2ClientVpnEndpointClientLoginBannerOptionsToTerraform(struct?: Ec2ClientVpnEndpointClientLoginBannerOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    banner_text: cdktn.stringToTerraform(struct!.bannerText),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
  }
}


export function ec2ClientVpnEndpointClientLoginBannerOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointClientLoginBannerOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    banner_text: {
      value: cdktn.stringToHclTerraform(struct!.bannerText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2ClientVpnEndpointClientLoginBannerOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bannerText !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerText = this._bannerText;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointClientLoginBannerOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bannerText = undefined;
      this._enabled = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bannerText = value.bannerText;
      this._enabled = value.enabled;
    }
  }

  // banner_text - computed: true, optional: true, required: false
  private _bannerText?: string; 
  public get bannerText() {
    return this.getStringAttribute('banner_text');
  }
  public set bannerText(value: string) {
    this._bannerText = value;
  }
  public resetBannerText() {
    this._bannerText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerTextInput() {
    return this._bannerText;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface Ec2ClientVpnEndpointClientRouteEnforcementOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enforced Ec2ClientVpnEndpoint#enforced}
  */
  readonly enforced?: boolean | cdktn.IResolvable;
}

export function ec2ClientVpnEndpointClientRouteEnforcementOptionsToTerraform(struct?: Ec2ClientVpnEndpointClientRouteEnforcementOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enforced: cdktn.booleanToTerraform(struct!.enforced),
  }
}


export function ec2ClientVpnEndpointClientRouteEnforcementOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointClientRouteEnforcementOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enforced: {
      value: cdktn.booleanToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2ClientVpnEndpointClientRouteEnforcementOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointClientRouteEnforcementOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforced = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforced = value.enforced;
    }
  }

  // enforced - computed: true, optional: true, required: false
  private _enforced?: boolean | cdktn.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktn.IResolvable) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }
}
export interface Ec2ClientVpnEndpointConnectionLogOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_group Ec2ClientVpnEndpoint#cloudwatch_log_group}
  */
  readonly cloudwatchLogGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#cloudwatch_log_stream Ec2ClientVpnEndpoint#cloudwatch_log_stream}
  */
  readonly cloudwatchLogStream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
  */
  readonly enabled: boolean | cdktn.IResolvable;
  /**
  * Indicates whether authorization-policy evaluation context is included in the connection logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#include_authorization_policy_context Ec2ClientVpnEndpoint#include_authorization_policy_context}
  */
  readonly includeAuthorizationPolicyContext?: boolean | cdktn.IResolvable;
}

export function ec2ClientVpnEndpointConnectionLogOptionsToTerraform(struct?: Ec2ClientVpnEndpointConnectionLogOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    cloudwatch_log_group: cdktn.stringToTerraform(struct!.cloudwatchLogGroup),
    cloudwatch_log_stream: cdktn.stringToTerraform(struct!.cloudwatchLogStream),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    include_authorization_policy_context: cdktn.booleanToTerraform(struct!.includeAuthorizationPolicyContext),
  }
}


export function ec2ClientVpnEndpointConnectionLogOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointConnectionLogOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    cloudwatch_log_group: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchLogGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudwatch_log_stream: {
      value: cdktn.stringToHclTerraform(struct!.cloudwatchLogStream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_authorization_policy_context: {
      value: cdktn.booleanToHclTerraform(struct!.includeAuthorizationPolicyContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointConnectionLogOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2ClientVpnEndpointConnectionLogOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogGroup = this._cloudwatchLogGroup;
    }
    if (this._cloudwatchLogStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogStream = this._cloudwatchLogStream;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._includeAuthorizationPolicyContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAuthorizationPolicyContext = this._includeAuthorizationPolicyContext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointConnectionLogOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudwatchLogGroup = undefined;
      this._cloudwatchLogStream = undefined;
      this._enabled = undefined;
      this._includeAuthorizationPolicyContext = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudwatchLogGroup = value.cloudwatchLogGroup;
      this._cloudwatchLogStream = value.cloudwatchLogStream;
      this._enabled = value.enabled;
      this._includeAuthorizationPolicyContext = value.includeAuthorizationPolicyContext;
    }
  }

  // cloudwatch_log_group - computed: true, optional: true, required: false
  private _cloudwatchLogGroup?: string; 
  public get cloudwatchLogGroup() {
    return this.getStringAttribute('cloudwatch_log_group');
  }
  public set cloudwatchLogGroup(value: string) {
    this._cloudwatchLogGroup = value;
  }
  public resetCloudwatchLogGroup() {
    this._cloudwatchLogGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupInput() {
    return this._cloudwatchLogGroup;
  }

  // cloudwatch_log_stream - computed: true, optional: true, required: false
  private _cloudwatchLogStream?: string; 
  public get cloudwatchLogStream() {
    return this.getStringAttribute('cloudwatch_log_stream');
  }
  public set cloudwatchLogStream(value: string) {
    this._cloudwatchLogStream = value;
  }
  public resetCloudwatchLogStream() {
    this._cloudwatchLogStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogStreamInput() {
    return this._cloudwatchLogStream;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // include_authorization_policy_context - computed: true, optional: true, required: false
  private _includeAuthorizationPolicyContext?: boolean | cdktn.IResolvable; 
  public get includeAuthorizationPolicyContext() {
    return this.getBooleanAttribute('include_authorization_policy_context');
  }
  public set includeAuthorizationPolicyContext(value: boolean | cdktn.IResolvable) {
    this._includeAuthorizationPolicyContext = value;
  }
  public resetIncludeAuthorizationPolicyContext() {
    this._includeAuthorizationPolicyContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAuthorizationPolicyContextInput() {
    return this._includeAuthorizationPolicyContext;
  }
}
export interface Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders {
  /**
  * The URL of the public signing key. Conditionally required by the provider type and enforced server-side (crowdstrike/jumpcloud require it, jamf rejects it).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#public_signing_key_url Ec2ClientVpnEndpoint#public_signing_key_url}
  */
  readonly publicSigningKeyUrl?: string;
  /**
  * The tenant identifier registered with the trust provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tenant_id Ec2ClientVpnEndpoint#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The device-posture trust provider type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#trust_provider_type Ec2ClientVpnEndpoint#trust_provider_type}
  */
  readonly trustProviderType?: string;
}

export function ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersToTerraform(struct?: Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    public_signing_key_url: cdktn.stringToTerraform(struct!.publicSigningKeyUrl),
    tenant_id: cdktn.stringToTerraform(struct!.tenantId),
    trust_provider_type: cdktn.stringToTerraform(struct!.trustProviderType),
  }
}


export function ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersToHclTerraform(struct?: Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    public_signing_key_url: {
      value: cdktn.stringToHclTerraform(struct!.publicSigningKeyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktn.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_provider_type: {
      value: cdktn.stringToHclTerraform(struct!.trustProviderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicSigningKeyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicSigningKeyUrl = this._publicSigningKeyUrl;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._trustProviderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustProviderType = this._trustProviderType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publicSigningKeyUrl = undefined;
      this._tenantId = undefined;
      this._trustProviderType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publicSigningKeyUrl = value.publicSigningKeyUrl;
      this._tenantId = value.tenantId;
      this._trustProviderType = value.trustProviderType;
    }
  }

  // public_signing_key_url - computed: true, optional: true, required: false
  private _publicSigningKeyUrl?: string; 
  public get publicSigningKeyUrl() {
    return this.getStringAttribute('public_signing_key_url');
  }
  public set publicSigningKeyUrl(value: string) {
    this._publicSigningKeyUrl = value;
  }
  public resetPublicSigningKeyUrl() {
    this._publicSigningKeyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSigningKeyUrlInput() {
    return this._publicSigningKeyUrl;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // trust_provider_type - computed: true, optional: true, required: false
  private _trustProviderType?: string; 
  public get trustProviderType() {
    return this.getStringAttribute('trust_provider_type');
  }
  public set trustProviderType(value: string) {
    this._trustProviderType = value;
  }
  public resetTrustProviderType() {
    this._trustProviderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustProviderTypeInput() {
    return this._trustProviderType;
  }
}

export class Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList extends cdktn.ComplexList {
  public internalValue? : Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference {
    return new Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2ClientVpnEndpointDevicePostureOptions {
  /**
  * Whether device posture is enabled for the Client VPN endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#enabled Ec2ClientVpnEndpoint#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The device-posture trust providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#trust_providers Ec2ClientVpnEndpoint#trust_providers}
  */
  readonly trustProviders?: Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[] | cdktn.IResolvable;
}

export function ec2ClientVpnEndpointDevicePostureOptionsToTerraform(struct?: Ec2ClientVpnEndpointDevicePostureOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    trust_providers: cdktn.listMapper(ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersToTerraform, false)(struct!.trustProviders),
  }
}


export function ec2ClientVpnEndpointDevicePostureOptionsToHclTerraform(struct?: Ec2ClientVpnEndpointDevicePostureOptions | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_providers: {
      value: cdktn.listMapperHcl(ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersToHclTerraform, false)(struct!.trustProviders),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointDevicePostureOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2ClientVpnEndpointDevicePostureOptions | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._trustProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustProviders = this._trustProviders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointDevicePostureOptions | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._trustProviders.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._trustProviders.internalValue = value.trustProviders;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // trust_providers - computed: true, optional: true, required: false
  private _trustProviders = new Ec2ClientVpnEndpointDevicePostureOptionsTrustProvidersList(this, "trust_providers", false);
  public get trustProviders() {
    return this._trustProviders;
  }
  public putTrustProviders(value: Ec2ClientVpnEndpointDevicePostureOptionsTrustProviders[] | cdktn.IResolvable) {
    this._trustProviders.internalValue = value;
  }
  public resetTrustProviders() {
    this._trustProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustProvidersInput() {
    return this._trustProviders.internalValue;
  }
}
export interface Ec2ClientVpnEndpointTagSpecificationsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#key Ec2ClientVpnEndpoint#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#value Ec2ClientVpnEndpoint#value}
  */
  readonly value?: string;
}

export function ec2ClientVpnEndpointTagSpecificationsTagsToTerraform(struct?: Ec2ClientVpnEndpointTagSpecificationsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    value: cdktn.stringToTerraform(struct!.value),
  }
}


export function ec2ClientVpnEndpointTagSpecificationsTagsToHclTerraform(struct?: Ec2ClientVpnEndpointTagSpecificationsTags | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktn.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2ClientVpnEndpointTagSpecificationsTags | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointTagSpecificationsTags | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Ec2ClientVpnEndpointTagSpecificationsTagsList extends cdktn.ComplexList {
  public internalValue? : Ec2ClientVpnEndpointTagSpecificationsTags[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference {
    return new Ec2ClientVpnEndpointTagSpecificationsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2ClientVpnEndpointTagSpecifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#resource_type Ec2ClientVpnEndpoint#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#tags Ec2ClientVpnEndpoint#tags}
  */
  readonly tags?: Ec2ClientVpnEndpointTagSpecificationsTags[] | cdktn.IResolvable;
}

export function ec2ClientVpnEndpointTagSpecificationsToTerraform(struct?: Ec2ClientVpnEndpointTagSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    resource_type: cdktn.stringToTerraform(struct!.resourceType),
    tags: cdktn.listMapper(ec2ClientVpnEndpointTagSpecificationsTagsToTerraform, false)(struct!.tags),
  }
}


export function ec2ClientVpnEndpointTagSpecificationsToHclTerraform(struct?: Ec2ClientVpnEndpointTagSpecifications | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    resource_type: {
      value: cdktn.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktn.listMapperHcl(ec2ClientVpnEndpointTagSpecificationsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "Ec2ClientVpnEndpointTagSpecificationsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointTagSpecificationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ec2ClientVpnEndpointTagSpecifications | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointTagSpecifications | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceType = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceType = value.resourceType;
      this._tags.internalValue = value.tags;
    }
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new Ec2ClientVpnEndpointTagSpecificationsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Ec2ClientVpnEndpointTagSpecificationsTags[] | cdktn.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class Ec2ClientVpnEndpointTagSpecificationsList extends cdktn.ComplexList {
  public internalValue? : Ec2ClientVpnEndpointTagSpecifications[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Ec2ClientVpnEndpointTagSpecificationsOutputReference {
    return new Ec2ClientVpnEndpointTagSpecificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ec2ClientVpnEndpointTransitGatewayConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zone_ids Ec2ClientVpnEndpoint#availability_zone_ids}
  */
  readonly availabilityZoneIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#availability_zones Ec2ClientVpnEndpoint#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#transit_gateway_id Ec2ClientVpnEndpoint#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
}

export function ec2ClientVpnEndpointTransitGatewayConfigurationToTerraform(struct?: Ec2ClientVpnEndpointTransitGatewayConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    availability_zone_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.availabilityZoneIds),
    availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.availabilityZones),
    transit_gateway_id: cdktn.stringToTerraform(struct!.transitGatewayId),
  }
}


export function ec2ClientVpnEndpointTransitGatewayConfigurationToHclTerraform(struct?: Ec2ClientVpnEndpointTransitGatewayConfiguration | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    availability_zone_ids: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.availabilityZoneIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    availability_zones: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.availabilityZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transit_gateway_id: {
      value: cdktn.stringToHclTerraform(struct!.transitGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Ec2ClientVpnEndpointTransitGatewayConfiguration | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneIds = this._availabilityZoneIds;
    }
    if (this._availabilityZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones;
    }
    if (this._transitGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayId = this._transitGatewayId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ec2ClientVpnEndpointTransitGatewayConfiguration | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneIds = undefined;
      this._availabilityZones = undefined;
      this._transitGatewayId = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneIds = value.availabilityZoneIds;
      this._availabilityZones = value.availabilityZones;
      this._transitGatewayId = value.transitGatewayId;
    }
  }

  // availability_zone_ids - computed: true, optional: true, required: false
  private _availabilityZoneIds?: string[]; 
  public get availabilityZoneIds() {
    return this.getListAttribute('availability_zone_ids');
  }
  public set availabilityZoneIds(value: string[]) {
    this._availabilityZoneIds = value;
  }
  public resetAvailabilityZoneIds() {
    this._availabilityZoneIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdsInput() {
    return this._availabilityZoneIds;
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // transit_gateway_id - computed: true, optional: true, required: false
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint awscc_ec2_client_vpn_endpoint}
*/
export class Ec2ClientVpnEndpoint extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awscc_ec2_client_vpn_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a Ec2ClientVpnEndpoint resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ec2ClientVpnEndpoint to import
  * @param importFromId The id of the existing Ec2ClientVpnEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ec2ClientVpnEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_client_vpn_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/ec2_client_vpn_endpoint awscc_ec2_client_vpn_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2ClientVpnEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2ClientVpnEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'awscc_ec2_client_vpn_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'awscc',
        providerVersion: '1.110.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationOptions.internalValue = config.authenticationOptions;
    this._authorizationPolicy.internalValue = config.authorizationPolicy;
    this._clientCidrBlock = config.clientCidrBlock;
    this._clientConnectOptions.internalValue = config.clientConnectOptions;
    this._clientLoginBannerOptions.internalValue = config.clientLoginBannerOptions;
    this._clientRouteEnforcementOptions.internalValue = config.clientRouteEnforcementOptions;
    this._connectionLogOptions.internalValue = config.connectionLogOptions;
    this._description = config.description;
    this._devicePostureOptions.internalValue = config.devicePostureOptions;
    this._disconnectOnSessionTimeout = config.disconnectOnSessionTimeout;
    this._dnsServers = config.dnsServers;
    this._endpointIpAddressType = config.endpointIpAddressType;
    this._securityGroupIds = config.securityGroupIds;
    this._selfServicePortal = config.selfServicePortal;
    this._serverCertificateArn = config.serverCertificateArn;
    this._sessionTimeoutHours = config.sessionTimeoutHours;
    this._splitTunnel = config.splitTunnel;
    this._tagSpecifications.internalValue = config.tagSpecifications;
    this._trafficIpAddressType = config.trafficIpAddressType;
    this._transitGatewayConfiguration.internalValue = config.transitGatewayConfiguration;
    this._transportProtocol = config.transportProtocol;
    this._vpcId = config.vpcId;
    this._vpnPort = config.vpnPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_options - computed: false, optional: false, required: true
  private _authenticationOptions = new Ec2ClientVpnEndpointAuthenticationOptionsList(this, "authentication_options", false);
  public get authenticationOptions() {
    return this._authenticationOptions;
  }
  public putAuthenticationOptions(value: Ec2ClientVpnEndpointAuthenticationOptions[] | cdktn.IResolvable) {
    this._authenticationOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationOptionsInput() {
    return this._authenticationOptions.internalValue;
  }

  // authorization_policy - computed: true, optional: true, required: false
  private _authorizationPolicy = new Ec2ClientVpnEndpointAuthorizationPolicyOutputReference(this, "authorization_policy");
  public get authorizationPolicy() {
    return this._authorizationPolicy;
  }
  public putAuthorizationPolicy(value: Ec2ClientVpnEndpointAuthorizationPolicy) {
    this._authorizationPolicy.internalValue = value;
  }
  public resetAuthorizationPolicy() {
    this._authorizationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationPolicyInput() {
    return this._authorizationPolicy.internalValue;
  }

  // client_cidr_block - computed: true, optional: true, required: false
  private _clientCidrBlock?: string; 
  public get clientCidrBlock() {
    return this.getStringAttribute('client_cidr_block');
  }
  public set clientCidrBlock(value: string) {
    this._clientCidrBlock = value;
  }
  public resetClientCidrBlock() {
    this._clientCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCidrBlockInput() {
    return this._clientCidrBlock;
  }

  // client_connect_options - computed: true, optional: true, required: false
  private _clientConnectOptions = new Ec2ClientVpnEndpointClientConnectOptionsOutputReference(this, "client_connect_options");
  public get clientConnectOptions() {
    return this._clientConnectOptions;
  }
  public putClientConnectOptions(value: Ec2ClientVpnEndpointClientConnectOptions) {
    this._clientConnectOptions.internalValue = value;
  }
  public resetClientConnectOptions() {
    this._clientConnectOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnectOptionsInput() {
    return this._clientConnectOptions.internalValue;
  }

  // client_login_banner_options - computed: true, optional: true, required: false
  private _clientLoginBannerOptions = new Ec2ClientVpnEndpointClientLoginBannerOptionsOutputReference(this, "client_login_banner_options");
  public get clientLoginBannerOptions() {
    return this._clientLoginBannerOptions;
  }
  public putClientLoginBannerOptions(value: Ec2ClientVpnEndpointClientLoginBannerOptions) {
    this._clientLoginBannerOptions.internalValue = value;
  }
  public resetClientLoginBannerOptions() {
    this._clientLoginBannerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLoginBannerOptionsInput() {
    return this._clientLoginBannerOptions.internalValue;
  }

  // client_route_enforcement_options - computed: true, optional: true, required: false
  private _clientRouteEnforcementOptions = new Ec2ClientVpnEndpointClientRouteEnforcementOptionsOutputReference(this, "client_route_enforcement_options");
  public get clientRouteEnforcementOptions() {
    return this._clientRouteEnforcementOptions;
  }
  public putClientRouteEnforcementOptions(value: Ec2ClientVpnEndpointClientRouteEnforcementOptions) {
    this._clientRouteEnforcementOptions.internalValue = value;
  }
  public resetClientRouteEnforcementOptions() {
    this._clientRouteEnforcementOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRouteEnforcementOptionsInput() {
    return this._clientRouteEnforcementOptions.internalValue;
  }

  // client_vpn_endpoint_id - computed: true, optional: false, required: false
  public get clientVpnEndpointId() {
    return this.getStringAttribute('client_vpn_endpoint_id');
  }

  // connection_log_options - computed: false, optional: false, required: true
  private _connectionLogOptions = new Ec2ClientVpnEndpointConnectionLogOptionsOutputReference(this, "connection_log_options");
  public get connectionLogOptions() {
    return this._connectionLogOptions;
  }
  public putConnectionLogOptions(value: Ec2ClientVpnEndpointConnectionLogOptions) {
    this._connectionLogOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLogOptionsInput() {
    return this._connectionLogOptions.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_posture_options - computed: true, optional: true, required: false
  private _devicePostureOptions = new Ec2ClientVpnEndpointDevicePostureOptionsOutputReference(this, "device_posture_options");
  public get devicePostureOptions() {
    return this._devicePostureOptions;
  }
  public putDevicePostureOptions(value: Ec2ClientVpnEndpointDevicePostureOptions) {
    this._devicePostureOptions.internalValue = value;
  }
  public resetDevicePostureOptions() {
    this._devicePostureOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePostureOptionsInput() {
    return this._devicePostureOptions.internalValue;
  }

  // disconnect_on_session_timeout - computed: true, optional: true, required: false
  private _disconnectOnSessionTimeout?: boolean | cdktn.IResolvable; 
  public get disconnectOnSessionTimeout() {
    return this.getBooleanAttribute('disconnect_on_session_timeout');
  }
  public set disconnectOnSessionTimeout(value: boolean | cdktn.IResolvable) {
    this._disconnectOnSessionTimeout = value;
  }
  public resetDisconnectOnSessionTimeout() {
    this._disconnectOnSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectOnSessionTimeoutInput() {
    return this._disconnectOnSessionTimeout;
  }

  // dns_servers - computed: true, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // endpoint_ip_address_type - computed: true, optional: true, required: false
  private _endpointIpAddressType?: string; 
  public get endpointIpAddressType() {
    return this.getStringAttribute('endpoint_ip_address_type');
  }
  public set endpointIpAddressType(value: string) {
    this._endpointIpAddressType = value;
  }
  public resetEndpointIpAddressType() {
    this._endpointIpAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIpAddressTypeInput() {
    return this._endpointIpAddressType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // self_service_portal - computed: true, optional: true, required: false
  private _selfServicePortal?: string; 
  public get selfServicePortal() {
    return this.getStringAttribute('self_service_portal');
  }
  public set selfServicePortal(value: string) {
    this._selfServicePortal = value;
  }
  public resetSelfServicePortal() {
    this._selfServicePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServicePortalInput() {
    return this._selfServicePortal;
  }

  // server_certificate_arn - computed: false, optional: false, required: true
  private _serverCertificateArn?: string; 
  public get serverCertificateArn() {
    return this.getStringAttribute('server_certificate_arn');
  }
  public set serverCertificateArn(value: string) {
    this._serverCertificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateArnInput() {
    return this._serverCertificateArn;
  }

  // session_timeout_hours - computed: true, optional: true, required: false
  private _sessionTimeoutHours?: number; 
  public get sessionTimeoutHours() {
    return this.getNumberAttribute('session_timeout_hours');
  }
  public set sessionTimeoutHours(value: number) {
    this._sessionTimeoutHours = value;
  }
  public resetSessionTimeoutHours() {
    this._sessionTimeoutHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutHoursInput() {
    return this._sessionTimeoutHours;
  }

  // split_tunnel - computed: true, optional: true, required: false
  private _splitTunnel?: boolean | cdktn.IResolvable; 
  public get splitTunnel() {
    return this.getBooleanAttribute('split_tunnel');
  }
  public set splitTunnel(value: boolean | cdktn.IResolvable) {
    this._splitTunnel = value;
  }
  public resetSplitTunnel() {
    this._splitTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelInput() {
    return this._splitTunnel;
  }

  // tag_specifications - computed: true, optional: true, required: false
  private _tagSpecifications = new Ec2ClientVpnEndpointTagSpecificationsList(this, "tag_specifications", false);
  public get tagSpecifications() {
    return this._tagSpecifications;
  }
  public putTagSpecifications(value: Ec2ClientVpnEndpointTagSpecifications[] | cdktn.IResolvable) {
    this._tagSpecifications.internalValue = value;
  }
  public resetTagSpecifications() {
    this._tagSpecifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSpecificationsInput() {
    return this._tagSpecifications.internalValue;
  }

  // traffic_ip_address_type - computed: true, optional: true, required: false
  private _trafficIpAddressType?: string; 
  public get trafficIpAddressType() {
    return this.getStringAttribute('traffic_ip_address_type');
  }
  public set trafficIpAddressType(value: string) {
    this._trafficIpAddressType = value;
  }
  public resetTrafficIpAddressType() {
    this._trafficIpAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficIpAddressTypeInput() {
    return this._trafficIpAddressType;
  }

  // transit_gateway_configuration - computed: true, optional: true, required: false
  private _transitGatewayConfiguration = new Ec2ClientVpnEndpointTransitGatewayConfigurationOutputReference(this, "transit_gateway_configuration");
  public get transitGatewayConfiguration() {
    return this._transitGatewayConfiguration;
  }
  public putTransitGatewayConfiguration(value: Ec2ClientVpnEndpointTransitGatewayConfiguration) {
    this._transitGatewayConfiguration.internalValue = value;
  }
  public resetTransitGatewayConfiguration() {
    this._transitGatewayConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConfigurationInput() {
    return this._transitGatewayConfiguration.internalValue;
  }

  // transport_protocol - computed: true, optional: true, required: false
  private _transportProtocol?: string; 
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }
  public set transportProtocol(value: string) {
    this._transportProtocol = value;
  }
  public resetTransportProtocol() {
    this._transportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportProtocolInput() {
    return this._transportProtocol;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpn_port - computed: true, optional: true, required: false
  private _vpnPort?: number; 
  public get vpnPort() {
    return this.getNumberAttribute('vpn_port');
  }
  public set vpnPort(value: number) {
    this._vpnPort = value;
  }
  public resetVpnPort() {
    this._vpnPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnPortInput() {
    return this._vpnPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_options: cdktn.listMapper(ec2ClientVpnEndpointAuthenticationOptionsToTerraform, false)(this._authenticationOptions.internalValue),
      authorization_policy: ec2ClientVpnEndpointAuthorizationPolicyToTerraform(this._authorizationPolicy.internalValue),
      client_cidr_block: cdktn.stringToTerraform(this._clientCidrBlock),
      client_connect_options: ec2ClientVpnEndpointClientConnectOptionsToTerraform(this._clientConnectOptions.internalValue),
      client_login_banner_options: ec2ClientVpnEndpointClientLoginBannerOptionsToTerraform(this._clientLoginBannerOptions.internalValue),
      client_route_enforcement_options: ec2ClientVpnEndpointClientRouteEnforcementOptionsToTerraform(this._clientRouteEnforcementOptions.internalValue),
      connection_log_options: ec2ClientVpnEndpointConnectionLogOptionsToTerraform(this._connectionLogOptions.internalValue),
      description: cdktn.stringToTerraform(this._description),
      device_posture_options: ec2ClientVpnEndpointDevicePostureOptionsToTerraform(this._devicePostureOptions.internalValue),
      disconnect_on_session_timeout: cdktn.booleanToTerraform(this._disconnectOnSessionTimeout),
      dns_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dnsServers),
      endpoint_ip_address_type: cdktn.stringToTerraform(this._endpointIpAddressType),
      security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
      self_service_portal: cdktn.stringToTerraform(this._selfServicePortal),
      server_certificate_arn: cdktn.stringToTerraform(this._serverCertificateArn),
      session_timeout_hours: cdktn.numberToTerraform(this._sessionTimeoutHours),
      split_tunnel: cdktn.booleanToTerraform(this._splitTunnel),
      tag_specifications: cdktn.listMapper(ec2ClientVpnEndpointTagSpecificationsToTerraform, false)(this._tagSpecifications.internalValue),
      traffic_ip_address_type: cdktn.stringToTerraform(this._trafficIpAddressType),
      transit_gateway_configuration: ec2ClientVpnEndpointTransitGatewayConfigurationToTerraform(this._transitGatewayConfiguration.internalValue),
      transport_protocol: cdktn.stringToTerraform(this._transportProtocol),
      vpc_id: cdktn.stringToTerraform(this._vpcId),
      vpn_port: cdktn.numberToTerraform(this._vpnPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_options: {
        value: cdktn.listMapperHcl(ec2ClientVpnEndpointAuthenticationOptionsToHclTerraform, false)(this._authenticationOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2ClientVpnEndpointAuthenticationOptionsList",
      },
      authorization_policy: {
        value: ec2ClientVpnEndpointAuthorizationPolicyToHclTerraform(this._authorizationPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2ClientVpnEndpointAuthorizationPolicy",
      },
      client_cidr_block: {
        value: cdktn.stringToHclTerraform(this._clientCidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_connect_options: {
        value: ec2ClientVpnEndpointClientConnectOptionsToHclTerraform(this._clientConnectOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2ClientVpnEndpointClientConnectOptions",
      },
      client_login_banner_options: {
        value: ec2ClientVpnEndpointClientLoginBannerOptionsToHclTerraform(this._clientLoginBannerOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2ClientVpnEndpointClientLoginBannerOptions",
      },
      client_route_enforcement_options: {
        value: ec2ClientVpnEndpointClientRouteEnforcementOptionsToHclTerraform(this._clientRouteEnforcementOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2ClientVpnEndpointClientRouteEnforcementOptions",
      },
      connection_log_options: {
        value: ec2ClientVpnEndpointConnectionLogOptionsToHclTerraform(this._connectionLogOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2ClientVpnEndpointConnectionLogOptions",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_posture_options: {
        value: ec2ClientVpnEndpointDevicePostureOptionsToHclTerraform(this._devicePostureOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2ClientVpnEndpointDevicePostureOptions",
      },
      disconnect_on_session_timeout: {
        value: cdktn.booleanToHclTerraform(this._disconnectOnSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_servers: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dnsServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      endpoint_ip_address_type: {
        value: cdktn.stringToHclTerraform(this._endpointIpAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      self_service_portal: {
        value: cdktn.stringToHclTerraform(this._selfServicePortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate_arn: {
        value: cdktn.stringToHclTerraform(this._serverCertificateArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_timeout_hours: {
        value: cdktn.numberToHclTerraform(this._sessionTimeoutHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      split_tunnel: {
        value: cdktn.booleanToHclTerraform(this._splitTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_specifications: {
        value: cdktn.listMapperHcl(ec2ClientVpnEndpointTagSpecificationsToHclTerraform, false)(this._tagSpecifications.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ec2ClientVpnEndpointTagSpecificationsList",
      },
      traffic_ip_address_type: {
        value: cdktn.stringToHclTerraform(this._trafficIpAddressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_configuration: {
        value: ec2ClientVpnEndpointTransitGatewayConfigurationToHclTerraform(this._transitGatewayConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Ec2ClientVpnEndpointTransitGatewayConfiguration",
      },
      transport_protocol: {
        value: cdktn.stringToHclTerraform(this._transportProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktn.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_port: {
        value: cdktn.numberToHclTerraform(this._vpnPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
