# `rtbfabricResponderGateway` Submodule <a name="`rtbfabricResponderGateway` Submodule" id="@cdktn/provider-awscc.rtbfabricResponderGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricResponderGateway <a name="RtbfabricResponderGateway" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGateway;

RtbfabricResponderGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .port(java.lang.Number)
    .protocol(java.lang.String)
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
//  .acmCertificateArn(java.lang.String)
//  .description(java.lang.String)
//  .domainName(java.lang.String)
//  .gatewayType(java.lang.String)
//  .listenerConfig(RtbfabricResponderGatewayListenerConfig)
//  .managedEndpointConfiguration(RtbfabricResponderGatewayManagedEndpointConfiguration)
//  .tags(IResolvable|java.util.List<RtbfabricResponderGatewayTags>)
//  .trustStoreConfiguration(RtbfabricResponderGatewayTrustStoreConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of one or more security groups in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of one or more subnets in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.acmCertificateArn">acmCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.gatewayType">gatewayType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.listenerConfig">listenerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.managedEndpointConfiguration">managedEndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>></code> | Tags to assign to the Responder Gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.trustStoreConfiguration">trustStoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

The ID of one or more security groups in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#security_group_ids RtbfabricResponderGateway#security_group_ids}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

The ID of one or more subnets in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#subnet_ids RtbfabricResponderGateway#subnet_ids}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}.

---

##### `acmCertificateArn`<sup>Optional</sup> <a name="acmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.acmCertificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}.

---

##### `gatewayType`<sup>Optional</sup> <a name="gatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.gatewayType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}.

---

##### `listenerConfig`<sup>Optional</sup> <a name="listenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.listenerConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}.

---

##### `managedEndpointConfiguration`<sup>Optional</sup> <a name="managedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.managedEndpointConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>>

Tags to assign to the Responder Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#tags RtbfabricResponderGateway#tags}

---

##### `trustStoreConfiguration`<sup>Optional</sup> <a name="trustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.trustStoreConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig">putListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration">putManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration">putTrustStoreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetAcmCertificateArn">resetAcmCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetGatewayType">resetGatewayType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetListenerConfig">resetListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetManagedEndpointConfiguration">resetManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTrustStoreConfiguration">resetTrustStoreConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putListenerConfig` <a name="putListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig"></a>

```java
public void putListenerConfig(RtbfabricResponderGatewayListenerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---

##### `putManagedEndpointConfiguration` <a name="putManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration"></a>

```java
public void putManagedEndpointConfiguration(RtbfabricResponderGatewayManagedEndpointConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RtbfabricResponderGatewayTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>>

---

##### `putTrustStoreConfiguration` <a name="putTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration"></a>

```java
public void putTrustStoreConfiguration(RtbfabricResponderGatewayTrustStoreConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---

##### `resetAcmCertificateArn` <a name="resetAcmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetAcmCertificateArn"></a>

```java
public void resetAcmCertificateArn()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDomainName"></a>

```java
public void resetDomainName()
```

##### `resetGatewayType` <a name="resetGatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetGatewayType"></a>

```java
public void resetGatewayType()
```

##### `resetListenerConfig` <a name="resetListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetListenerConfig"></a>

```java
public void resetListenerConfig()
```

##### `resetManagedEndpointConfiguration` <a name="resetManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetManagedEndpointConfiguration"></a>

```java
public void resetManagedEndpointConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTags"></a>

```java
public void resetTags()
```

##### `resetTrustStoreConfiguration` <a name="resetTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTrustStoreConfiguration"></a>

```java
public void resetTrustStoreConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricResponderGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGateway;

RtbfabricResponderGateway.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGateway;

RtbfabricResponderGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGateway;

RtbfabricResponderGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGateway;

RtbfabricResponderGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RtbfabricResponderGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RtbfabricResponderGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RtbfabricResponderGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RtbfabricResponderGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricResponderGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.certificateAssociationStatus">certificateAssociationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.externalInboundEndpoint">externalInboundEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfig">listenerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference">RtbfabricResponderGatewayListenerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfiguration">managedEndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.responderGatewayStatus">responderGatewayStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList">RtbfabricResponderGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfiguration">trustStoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference">RtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.updatedTimestamp">updatedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArnInput">acmCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayTypeInput">gatewayTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfigInput">listenerConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfigurationInput">managedEndpointConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfigurationInput">trustStoreConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArn">acmCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayType">gatewayType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `certificateAssociationStatus`<sup>Required</sup> <a name="certificateAssociationStatus" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.certificateAssociationStatus"></a>

```java
public java.lang.String getCertificateAssociationStatus();
```

- *Type:* java.lang.String

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `externalInboundEndpoint`<sup>Required</sup> <a name="externalInboundEndpoint" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.externalInboundEndpoint"></a>

```java
public java.lang.String getExternalInboundEndpoint();
```

- *Type:* java.lang.String

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `listenerConfig`<sup>Required</sup> <a name="listenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfig"></a>

```java
public RtbfabricResponderGatewayListenerConfigOutputReference getListenerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference">RtbfabricResponderGatewayListenerConfigOutputReference</a>

---

##### `managedEndpointConfiguration`<sup>Required</sup> <a name="managedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfiguration"></a>

```java
public RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference getManagedEndpointConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a>

---

##### `responderGatewayStatus`<sup>Required</sup> <a name="responderGatewayStatus" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.responderGatewayStatus"></a>

```java
public java.lang.String getResponderGatewayStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tags"></a>

```java
public RtbfabricResponderGatewayTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList">RtbfabricResponderGatewayTagsList</a>

---

##### `trustStoreConfiguration`<sup>Required</sup> <a name="trustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfiguration"></a>

```java
public RtbfabricResponderGatewayTrustStoreConfigurationOutputReference getTrustStoreConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference">RtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.updatedTimestamp"></a>

```java
public java.lang.String getUpdatedTimestamp();
```

- *Type:* java.lang.String

---

##### `acmCertificateArnInput`<sup>Optional</sup> <a name="acmCertificateArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArnInput"></a>

```java
public java.lang.String getAcmCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `gatewayTypeInput`<sup>Optional</sup> <a name="gatewayTypeInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayTypeInput"></a>

```java
public java.lang.String getGatewayTypeInput();
```

- *Type:* java.lang.String

---

##### `listenerConfigInput`<sup>Optional</sup> <a name="listenerConfigInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfigInput"></a>

```java
public IResolvable|RtbfabricResponderGatewayListenerConfig getListenerConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---

##### `managedEndpointConfigurationInput`<sup>Optional</sup> <a name="managedEndpointConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfigurationInput"></a>

```java
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfiguration getManagedEndpointConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RtbfabricResponderGatewayTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>>

---

##### `trustStoreConfigurationInput`<sup>Optional</sup> <a name="trustStoreConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfigurationInput"></a>

```java
public IResolvable|RtbfabricResponderGatewayTrustStoreConfiguration getTrustStoreConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `acmCertificateArn`<sup>Required</sup> <a name="acmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArn"></a>

```java
public java.lang.String getAcmCertificateArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `gatewayType`<sup>Required</sup> <a name="gatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayType"></a>

```java
public java.lang.String getGatewayType();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricResponderGatewayConfig <a name="RtbfabricResponderGatewayConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayConfig;

RtbfabricResponderGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .port(java.lang.Number)
    .protocol(java.lang.String)
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .vpcId(java.lang.String)
//  .acmCertificateArn(java.lang.String)
//  .description(java.lang.String)
//  .domainName(java.lang.String)
//  .gatewayType(java.lang.String)
//  .listenerConfig(RtbfabricResponderGatewayListenerConfig)
//  .managedEndpointConfiguration(RtbfabricResponderGatewayManagedEndpointConfiguration)
//  .tags(IResolvable|java.util.List<RtbfabricResponderGatewayTags>)
//  .trustStoreConfiguration(RtbfabricResponderGatewayTrustStoreConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of one or more security groups in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The ID of one or more subnets in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.acmCertificateArn">acmCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.gatewayType">gatewayType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.listenerConfig">listenerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.managedEndpointConfiguration">managedEndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>></code> | Tags to assign to the Responder Gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.trustStoreConfiguration">trustStoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The ID of one or more security groups in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#security_group_ids RtbfabricResponderGateway#security_group_ids}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The ID of one or more subnets in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#subnet_ids RtbfabricResponderGateway#subnet_ids}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}.

---

##### `acmCertificateArn`<sup>Optional</sup> <a name="acmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.acmCertificateArn"></a>

```java
public java.lang.String getAcmCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}.

---

##### `gatewayType`<sup>Optional</sup> <a name="gatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.gatewayType"></a>

```java
public java.lang.String getGatewayType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}.

---

##### `listenerConfig`<sup>Optional</sup> <a name="listenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.listenerConfig"></a>

```java
public RtbfabricResponderGatewayListenerConfig getListenerConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}.

---

##### `managedEndpointConfiguration`<sup>Optional</sup> <a name="managedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.managedEndpointConfiguration"></a>

```java
public RtbfabricResponderGatewayManagedEndpointConfiguration getManagedEndpointConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RtbfabricResponderGatewayTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>>

Tags to assign to the Responder Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#tags RtbfabricResponderGateway#tags}

---

##### `trustStoreConfiguration`<sup>Optional</sup> <a name="trustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.trustStoreConfiguration"></a>

```java
public RtbfabricResponderGatewayTrustStoreConfiguration getTrustStoreConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}.

---

### RtbfabricResponderGatewayListenerConfig <a name="RtbfabricResponderGatewayListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayListenerConfig;

RtbfabricResponderGatewayListenerConfig.builder()
//  .protocols(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocols RtbfabricResponderGateway#protocols}. |

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocols RtbfabricResponderGateway#protocols}.

---

### RtbfabricResponderGatewayManagedEndpointConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayManagedEndpointConfiguration;

RtbfabricResponderGatewayManagedEndpointConfiguration.builder()
//  .autoScalingGroupsConfiguration(RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration)
//  .eksEndpointsConfiguration(RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.autoScalingGroupsConfiguration">autoScalingGroupsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration RtbfabricResponderGateway#auto_scaling_groups_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.eksEndpointsConfiguration">eksEndpointsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration RtbfabricResponderGateway#eks_endpoints_configuration}. |

---

##### `autoScalingGroupsConfiguration`<sup>Optional</sup> <a name="autoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.autoScalingGroupsConfiguration"></a>

```java
public RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration getAutoScalingGroupsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration RtbfabricResponderGateway#auto_scaling_groups_configuration}.

---

##### `eksEndpointsConfiguration`<sup>Optional</sup> <a name="eksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.eksEndpointsConfiguration"></a>

```java
public RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration getEksEndpointsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration RtbfabricResponderGateway#eks_endpoints_configuration}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration;

RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.builder()
//  .autoScalingGroupNameList(java.util.List<java.lang.String>)
//  .healthCheckConfig(RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.autoScalingGroupNameList">autoScalingGroupNameList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list RtbfabricResponderGateway#auto_scaling_group_name_list}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#health_check_config RtbfabricResponderGateway#health_check_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}. |

---

##### `autoScalingGroupNameList`<sup>Optional</sup> <a name="autoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.autoScalingGroupNameList"></a>

```java
public java.util.List<java.lang.String> getAutoScalingGroupNameList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list RtbfabricResponderGateway#auto_scaling_group_name_list}.

---

##### `healthCheckConfig`<sup>Optional</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.healthCheckConfig"></a>

```java
public RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig getHealthCheckConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#health_check_config RtbfabricResponderGateway#health_check_config}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig;

RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.builder()
//  .healthyThresholdCount(java.lang.Number)
//  .intervalSeconds(java.lang.Number)
//  .path(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .statusCodeMatcher(java.lang.String)
//  .timeoutMs(java.lang.Number)
//  .unhealthyThresholdCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count RtbfabricResponderGateway#healthy_threshold_count}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#interval_seconds RtbfabricResponderGateway#interval_seconds}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#path RtbfabricResponderGateway#path}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.statusCodeMatcher">statusCodeMatcher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher RtbfabricResponderGateway#status_code_matcher}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.timeoutMs">timeoutMs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#timeout_ms RtbfabricResponderGateway#timeout_ms}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count RtbfabricResponderGateway#unhealthy_threshold_count}. |

---

##### `healthyThresholdCount`<sup>Optional</sup> <a name="healthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.healthyThresholdCount"></a>

```java
public java.lang.Number getHealthyThresholdCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count RtbfabricResponderGateway#healthy_threshold_count}.

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#interval_seconds RtbfabricResponderGateway#interval_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#path RtbfabricResponderGateway#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `statusCodeMatcher`<sup>Optional</sup> <a name="statusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.statusCodeMatcher"></a>

```java
public java.lang.String getStatusCodeMatcher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher RtbfabricResponderGateway#status_code_matcher}.

---

##### `timeoutMs`<sup>Optional</sup> <a name="timeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.timeoutMs"></a>

```java
public java.lang.Number getTimeoutMs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#timeout_ms RtbfabricResponderGateway#timeout_ms}.

---

##### `unhealthyThresholdCount`<sup>Optional</sup> <a name="unhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.unhealthyThresholdCount"></a>

```java
public java.lang.Number getUnhealthyThresholdCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count RtbfabricResponderGateway#unhealthy_threshold_count}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration;

RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.builder()
//  .clusterApiServerCaCertificateChain(java.lang.String)
//  .clusterApiServerEndpointUri(java.lang.String)
//  .clusterName(java.lang.String)
//  .endpointsResourceName(java.lang.String)
//  .endpointsResourceNamespace(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerCaCertificateChain">clusterApiServerCaCertificateChain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain RtbfabricResponderGateway#cluster_api_server_ca_certificate_chain}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerEndpointUri">clusterApiServerEndpointUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri RtbfabricResponderGateway#cluster_api_server_endpoint_uri}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_name RtbfabricResponderGateway#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceName">endpointsResourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name RtbfabricResponderGateway#endpoints_resource_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceNamespace">endpointsResourceNamespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace RtbfabricResponderGateway#endpoints_resource_namespace}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}. |

---

##### `clusterApiServerCaCertificateChain`<sup>Optional</sup> <a name="clusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerCaCertificateChain"></a>

```java
public java.lang.String getClusterApiServerCaCertificateChain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain RtbfabricResponderGateway#cluster_api_server_ca_certificate_chain}.

---

##### `clusterApiServerEndpointUri`<sup>Optional</sup> <a name="clusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerEndpointUri"></a>

```java
public java.lang.String getClusterApiServerEndpointUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri RtbfabricResponderGateway#cluster_api_server_endpoint_uri}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#cluster_name RtbfabricResponderGateway#cluster_name}.

---

##### `endpointsResourceName`<sup>Optional</sup> <a name="endpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceName"></a>

```java
public java.lang.String getEndpointsResourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name RtbfabricResponderGateway#endpoints_resource_name}.

---

##### `endpointsResourceNamespace`<sup>Optional</sup> <a name="endpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceNamespace"></a>

```java
public java.lang.String getEndpointsResourceNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace RtbfabricResponderGateway#endpoints_resource_namespace}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

### RtbfabricResponderGatewayTags <a name="RtbfabricResponderGatewayTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayTags;

RtbfabricResponderGatewayTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#key RtbfabricResponderGateway#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#value RtbfabricResponderGateway#value}

---

### RtbfabricResponderGatewayTrustStoreConfiguration <a name="RtbfabricResponderGatewayTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayTrustStoreConfiguration;

RtbfabricResponderGatewayTrustStoreConfiguration.builder()
//  .certificateAuthorityCertificates(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.property.certificateAuthorityCertificates">certificateAuthorityCertificates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates RtbfabricResponderGateway#certificate_authority_certificates}. |

---

##### `certificateAuthorityCertificates`<sup>Optional</sup> <a name="certificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.property.certificateAuthorityCertificates"></a>

```java
public java.util.List<java.lang.String> getCertificateAuthorityCertificates();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates RtbfabricResponderGateway#certificate_authority_certificates}.

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricResponderGatewayListenerConfigOutputReference <a name="RtbfabricResponderGatewayListenerConfigOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayListenerConfigOutputReference;

new RtbfabricResponderGatewayListenerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resetProtocols"></a>

```java
public void resetProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocols">protocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocolsInput"></a>

```java
public java.util.List<java.lang.String> getProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocols"></a>

```java
public java.util.List<java.lang.String> getProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|RtbfabricResponderGatewayListenerConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference;

new RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetHealthyThresholdCount">resetHealthyThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetStatusCodeMatcher">resetStatusCodeMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetTimeoutMs">resetTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetUnhealthyThresholdCount">resetUnhealthyThresholdCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthyThresholdCount` <a name="resetHealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetHealthyThresholdCount"></a>

```java
public void resetHealthyThresholdCount()
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetIntervalSeconds"></a>

```java
public void resetIntervalSeconds()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetStatusCodeMatcher` <a name="resetStatusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetStatusCodeMatcher"></a>

```java
public void resetStatusCodeMatcher()
```

##### `resetTimeoutMs` <a name="resetTimeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetTimeoutMs"></a>

```java
public void resetTimeoutMs()
```

##### `resetUnhealthyThresholdCount` <a name="resetUnhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetUnhealthyThresholdCount"></a>

```java
public void resetUnhealthyThresholdCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCountInput">healthyThresholdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcherInput">statusCodeMatcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMsInput">timeoutMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCountInput">unhealthyThresholdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher">statusCodeMatcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs">timeoutMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthyThresholdCountInput`<sup>Optional</sup> <a name="healthyThresholdCountInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCountInput"></a>

```java
public java.lang.Number getHealthyThresholdCountInput();
```

- *Type:* java.lang.Number

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `statusCodeMatcherInput`<sup>Optional</sup> <a name="statusCodeMatcherInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcherInput"></a>

```java
public java.lang.String getStatusCodeMatcherInput();
```

- *Type:* java.lang.String

---

##### `timeoutMsInput`<sup>Optional</sup> <a name="timeoutMsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMsInput"></a>

```java
public java.lang.Number getTimeoutMsInput();
```

- *Type:* java.lang.Number

---

##### `unhealthyThresholdCountInput`<sup>Optional</sup> <a name="unhealthyThresholdCountInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCountInput"></a>

```java
public java.lang.Number getUnhealthyThresholdCountInput();
```

- *Type:* java.lang.Number

---

##### `healthyThresholdCount`<sup>Required</sup> <a name="healthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount"></a>

```java
public java.lang.Number getHealthyThresholdCount();
```

- *Type:* java.lang.Number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `statusCodeMatcher`<sup>Required</sup> <a name="statusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher"></a>

```java
public java.lang.String getStatusCodeMatcher();
```

- *Type:* java.lang.String

---

##### `timeoutMs`<sup>Required</sup> <a name="timeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs"></a>

```java
public java.lang.Number getTimeoutMs();
```

- *Type:* java.lang.Number

---

##### `unhealthyThresholdCount`<sup>Required</sup> <a name="unhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount"></a>

```java
public java.lang.Number getUnhealthyThresholdCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference;

new RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig">putHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetAutoScalingGroupNameList">resetAutoScalingGroupNameList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetHealthCheckConfig">resetHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHealthCheckConfig` <a name="putHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig"></a>

```java
public void putHealthCheckConfig(RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---

##### `resetAutoScalingGroupNameList` <a name="resetAutoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetAutoScalingGroupNameList"></a>

```java
public void resetAutoScalingGroupNameList()
```

##### `resetHealthCheckConfig` <a name="resetHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetHealthCheckConfig"></a>

```java
public void resetHealthCheckConfig()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameListInput">autoScalingGroupNameListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfigInput">healthCheckConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList">autoScalingGroupNameList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthCheckConfig`<sup>Required</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig"></a>

```java
public RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference getHealthCheckConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a>

---

##### `autoScalingGroupNameListInput`<sup>Optional</sup> <a name="autoScalingGroupNameListInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameListInput"></a>

```java
public java.util.List<java.lang.String> getAutoScalingGroupNameListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `healthCheckConfigInput`<sup>Optional</sup> <a name="healthCheckConfigInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfigInput"></a>

```java
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig getHealthCheckConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `autoScalingGroupNameList`<sup>Required</sup> <a name="autoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList"></a>

```java
public java.util.List<java.lang.String> getAutoScalingGroupNameList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference;

new RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerCaCertificateChain">resetClusterApiServerCaCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerEndpointUri">resetClusterApiServerEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceName">resetEndpointsResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceNamespace">resetEndpointsResourceNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterApiServerCaCertificateChain` <a name="resetClusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerCaCertificateChain"></a>

```java
public void resetClusterApiServerCaCertificateChain()
```

##### `resetClusterApiServerEndpointUri` <a name="resetClusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerEndpointUri"></a>

```java
public void resetClusterApiServerEndpointUri()
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetEndpointsResourceName` <a name="resetEndpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceName"></a>

```java
public void resetEndpointsResourceName()
```

##### `resetEndpointsResourceNamespace` <a name="resetEndpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceNamespace"></a>

```java
public void resetEndpointsResourceNamespace()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChainInput">clusterApiServerCaCertificateChainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUriInput">clusterApiServerEndpointUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNameInput">endpointsResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespaceInput">endpointsResourceNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain">clusterApiServerCaCertificateChain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri">clusterApiServerEndpointUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName">endpointsResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace">endpointsResourceNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterApiServerCaCertificateChainInput`<sup>Optional</sup> <a name="clusterApiServerCaCertificateChainInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChainInput"></a>

```java
public java.lang.String getClusterApiServerCaCertificateChainInput();
```

- *Type:* java.lang.String

---

##### `clusterApiServerEndpointUriInput`<sup>Optional</sup> <a name="clusterApiServerEndpointUriInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUriInput"></a>

```java
public java.lang.String getClusterApiServerEndpointUriInput();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `endpointsResourceNameInput`<sup>Optional</sup> <a name="endpointsResourceNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNameInput"></a>

```java
public java.lang.String getEndpointsResourceNameInput();
```

- *Type:* java.lang.String

---

##### `endpointsResourceNamespaceInput`<sup>Optional</sup> <a name="endpointsResourceNamespaceInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespaceInput"></a>

```java
public java.lang.String getEndpointsResourceNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `clusterApiServerCaCertificateChain`<sup>Required</sup> <a name="clusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain"></a>

```java
public java.lang.String getClusterApiServerCaCertificateChain();
```

- *Type:* java.lang.String

---

##### `clusterApiServerEndpointUri`<sup>Required</sup> <a name="clusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri"></a>

```java
public java.lang.String getClusterApiServerEndpointUri();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `endpointsResourceName`<sup>Required</sup> <a name="endpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName"></a>

```java
public java.lang.String getEndpointsResourceName();
```

- *Type:* java.lang.String

---

##### `endpointsResourceNamespace`<sup>Required</sup> <a name="endpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace"></a>

```java
public java.lang.String getEndpointsResourceNamespace();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference;

new RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration">putAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration">putEksEndpointsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetAutoScalingGroupsConfiguration">resetAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetEksEndpointsConfiguration">resetEksEndpointsConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoScalingGroupsConfiguration` <a name="putAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration"></a>

```java
public void putAutoScalingGroupsConfiguration(RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---

##### `putEksEndpointsConfiguration` <a name="putEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration"></a>

```java
public void putEksEndpointsConfiguration(RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---

##### `resetAutoScalingGroupsConfiguration` <a name="resetAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetAutoScalingGroupsConfiguration"></a>

```java
public void resetAutoScalingGroupsConfiguration()
```

##### `resetEksEndpointsConfiguration` <a name="resetEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetEksEndpointsConfiguration"></a>

```java
public void resetEksEndpointsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration">autoScalingGroupsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration">eksEndpointsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfigurationInput">autoScalingGroupsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfigurationInput">eksEndpointsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScalingGroupsConfiguration`<sup>Required</sup> <a name="autoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration"></a>

```java
public RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference getAutoScalingGroupsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a>

---

##### `eksEndpointsConfiguration`<sup>Required</sup> <a name="eksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration"></a>

```java
public RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference getEksEndpointsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a>

---

##### `autoScalingGroupsConfigurationInput`<sup>Optional</sup> <a name="autoScalingGroupsConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfigurationInput"></a>

```java
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration getAutoScalingGroupsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---

##### `eksEndpointsConfigurationInput`<sup>Optional</sup> <a name="eksEndpointsConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfigurationInput"></a>

```java
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration getEksEndpointsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|RtbfabricResponderGatewayManagedEndpointConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---


### RtbfabricResponderGatewayTagsList <a name="RtbfabricResponderGatewayTagsList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayTagsList;

new RtbfabricResponderGatewayTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get"></a>

```java
public RtbfabricResponderGatewayTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RtbfabricResponderGatewayTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>>

---


### RtbfabricResponderGatewayTagsOutputReference <a name="RtbfabricResponderGatewayTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayTagsOutputReference;

new RtbfabricResponderGatewayTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RtbfabricResponderGatewayTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>

---


### RtbfabricResponderGatewayTrustStoreConfigurationOutputReference <a name="RtbfabricResponderGatewayTrustStoreConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rtbfabric_responder_gateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference;

new RtbfabricResponderGatewayTrustStoreConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resetCertificateAuthorityCertificates">resetCertificateAuthorityCertificates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateAuthorityCertificates` <a name="resetCertificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resetCertificateAuthorityCertificates"></a>

```java
public void resetCertificateAuthorityCertificates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificatesInput">certificateAuthorityCertificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates">certificateAuthorityCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityCertificatesInput`<sup>Optional</sup> <a name="certificateAuthorityCertificatesInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificatesInput"></a>

```java
public java.util.List<java.lang.String> getCertificateAuthorityCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateAuthorityCertificates`<sup>Required</sup> <a name="certificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates"></a>

```java
public java.util.List<java.lang.String> getCertificateAuthorityCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|RtbfabricResponderGatewayTrustStoreConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---



