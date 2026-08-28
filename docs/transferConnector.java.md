# `transferConnector` Submodule <a name="`transferConnector` Submodule" id="@cdktn/provider-awscc.transferConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferConnector <a name="TransferConnector" id="@cdktn/provider-awscc.transferConnector.TransferConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector awscc_transfer_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnector;

TransferConnector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessRole(java.lang.String)
//  .as2Config(TransferConnectorAs2Config)
//  .egressConfig(TransferConnectorEgressConfig)
//  .egressType(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .loggingRole(java.lang.String)
//  .securityPolicyName(java.lang.String)
//  .sftpConfig(TransferConnectorSftpConfig)
//  .tags(IResolvable|java.util.List<TransferConnectorTags>)
//  .url(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.accessRole">accessRole</a></code> | <code>java.lang.String</code> | Specifies the access role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.as2Config">as2Config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | Configuration for an AS2 connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.egressConfig">egressConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | Egress configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.egressType">egressType</a></code> | <code>java.lang.String</code> | Specifies the egress type for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | IP address type for Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.loggingRole">loggingRole</a></code> | <code>java.lang.String</code> | Specifies the logging role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.securityPolicyName">securityPolicyName</a></code> | <code>java.lang.String</code> | Security policy for SFTP Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.sftpConfig">sftpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | Configuration for an SFTP connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>></code> | Key-value pairs that can be used to group and search for connectors. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | URL for Connector. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.accessRole"></a>

- *Type:* java.lang.String

Specifies the access role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}

---

##### `as2Config`<sup>Optional</sup> <a name="as2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.as2Config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

Configuration for an AS2 connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#as_2_config TransferConnector#as_2_config}

---

##### `egressConfig`<sup>Optional</sup> <a name="egressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.egressConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

Egress configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#egress_config TransferConnector#egress_config}

---

##### `egressType`<sup>Optional</sup> <a name="egressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.egressType"></a>

- *Type:* java.lang.String

Specifies the egress type for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#egress_type TransferConnector#egress_type}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

IP address type for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#ip_address_type TransferConnector#ip_address_type}

---

##### `loggingRole`<sup>Optional</sup> <a name="loggingRole" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.loggingRole"></a>

- *Type:* java.lang.String

Specifies the logging role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}

---

##### `securityPolicyName`<sup>Optional</sup> <a name="securityPolicyName" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.securityPolicyName"></a>

- *Type:* java.lang.String

Security policy for SFTP Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}

---

##### `sftpConfig`<sup>Optional</sup> <a name="sftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.sftpConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

Configuration for an SFTP connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>>

Key-value pairs that can be used to group and search for connectors.

Tags are metadata attached to connectors for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#tags TransferConnector#tags}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.url"></a>

- *Type:* java.lang.String

URL for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#url TransferConnector#url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config">putAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig">putEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig">putSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetAs2Config">resetAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressConfig">resetEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressType">resetEgressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetLoggingRole">resetLoggingRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetSecurityPolicyName">resetSecurityPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetSftpConfig">resetSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferConnector.TransferConnector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferConnector.TransferConnector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transferConnector.TransferConnector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAs2Config` <a name="putAs2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config"></a>

```java
public void putAs2Config(TransferConnectorAs2Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `putEgressConfig` <a name="putEgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig"></a>

```java
public void putEgressConfig(TransferConnectorEgressConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

---

##### `putSftpConfig` <a name="putSftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig"></a>

```java
public void putSftpConfig(TransferConnectorSftpConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<TransferConnectorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>>

---

##### `resetAs2Config` <a name="resetAs2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetAs2Config"></a>

```java
public void resetAs2Config()
```

##### `resetEgressConfig` <a name="resetEgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressConfig"></a>

```java
public void resetEgressConfig()
```

##### `resetEgressType` <a name="resetEgressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressType"></a>

```java
public void resetEgressType()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetLoggingRole` <a name="resetLoggingRole" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetLoggingRole"></a>

```java
public void resetLoggingRole()
```

##### `resetSecurityPolicyName` <a name="resetSecurityPolicyName" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetSecurityPolicyName"></a>

```java
public void resetSecurityPolicyName()
```

##### `resetSftpConfig` <a name="resetSftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetSftpConfig"></a>

```java
public void resetSftpConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetTags"></a>

```java
public void resetTags()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetUrl"></a>

```java
public void resetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransferConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnector;

TransferConnector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnector;

TransferConnector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnector;

TransferConnector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnector;

TransferConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransferConnector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TransferConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransferConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransferConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TransferConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2Config">as2Config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.connectorId">connectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfig">egressConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference">TransferConnectorEgressConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.serviceManagedEgressIpAddresses">serviceManagedEgressIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfig">sftpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList">TransferConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRoleInput">accessRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2ConfigInput">as2ConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfigInput">egressConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressTypeInput">egressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRoleInput">loggingRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyNameInput">securityPolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfigInput">sftpConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRole">accessRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressType">egressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRole">loggingRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyName">securityPolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `as2Config`<sup>Required</sup> <a name="as2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2Config"></a>

```java
public TransferConnectorAs2ConfigOutputReference getAs2Config();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a>

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.connectorId"></a>

```java
public java.lang.String getConnectorId();
```

- *Type:* java.lang.String

---

##### `egressConfig`<sup>Required</sup> <a name="egressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfig"></a>

```java
public TransferConnectorEgressConfigOutputReference getEgressConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference">TransferConnectorEgressConfigOutputReference</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `serviceManagedEgressIpAddresses`<sup>Required</sup> <a name="serviceManagedEgressIpAddresses" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.serviceManagedEgressIpAddresses"></a>

```java
public java.util.List<java.lang.String> getServiceManagedEgressIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sftpConfig`<sup>Required</sup> <a name="sftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfig"></a>

```java
public TransferConnectorSftpConfigOutputReference getSftpConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tags"></a>

```java
public TransferConnectorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList">TransferConnectorTagsList</a>

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRoleInput"></a>

```java
public java.lang.String getAccessRoleInput();
```

- *Type:* java.lang.String

---

##### `as2ConfigInput`<sup>Optional</sup> <a name="as2ConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2ConfigInput"></a>

```java
public IResolvable|TransferConnectorAs2Config getAs2ConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `egressConfigInput`<sup>Optional</sup> <a name="egressConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfigInput"></a>

```java
public IResolvable|TransferConnectorEgressConfig getEgressConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

---

##### `egressTypeInput`<sup>Optional</sup> <a name="egressTypeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressTypeInput"></a>

```java
public java.lang.String getEgressTypeInput();
```

- *Type:* java.lang.String

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `loggingRoleInput`<sup>Optional</sup> <a name="loggingRoleInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRoleInput"></a>

```java
public java.lang.String getLoggingRoleInput();
```

- *Type:* java.lang.String

---

##### `securityPolicyNameInput`<sup>Optional</sup> <a name="securityPolicyNameInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyNameInput"></a>

```java
public java.lang.String getSecurityPolicyNameInput();
```

- *Type:* java.lang.String

---

##### `sftpConfigInput`<sup>Optional</sup> <a name="sftpConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfigInput"></a>

```java
public IResolvable|TransferConnectorSftpConfig getSftpConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tagsInput"></a>

```java
public IResolvable|java.util.List<TransferConnectorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRole"></a>

```java
public java.lang.String getAccessRole();
```

- *Type:* java.lang.String

---

##### `egressType`<sup>Required</sup> <a name="egressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressType"></a>

```java
public java.lang.String getEgressType();
```

- *Type:* java.lang.String

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `loggingRole`<sup>Required</sup> <a name="loggingRole" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRole"></a>

```java
public java.lang.String getLoggingRole();
```

- *Type:* java.lang.String

---

##### `securityPolicyName`<sup>Required</sup> <a name="securityPolicyName" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyName"></a>

```java
public java.lang.String getSecurityPolicyName();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransferConnectorAs2Config <a name="TransferConnectorAs2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorAs2Config;

TransferConnectorAs2Config.builder()
//  .asyncMdnConfig(TransferConnectorAs2ConfigAsyncMdnConfig)
//  .basicAuthSecretId(java.lang.String)
//  .compression(java.lang.String)
//  .encryptionAlgorithm(java.lang.String)
//  .localProfileId(java.lang.String)
//  .mdnResponse(java.lang.String)
//  .mdnSigningAlgorithm(java.lang.String)
//  .messageSubject(java.lang.String)
//  .partnerProfileId(java.lang.String)
//  .preserveContentType(java.lang.String)
//  .signingAlgorithm(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.asyncMdnConfig">asyncMdnConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | Configuration for an AS2 connector with ASYNC MDN Response. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.basicAuthSecretId">basicAuthSecretId</a></code> | <code>java.lang.String</code> | ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.compression">compression</a></code> | <code>java.lang.String</code> | Compression setting for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | Encryption algorithm for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.localProfileId">localProfileId</a></code> | <code>java.lang.String</code> | A unique identifier for the local profile. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnResponse">mdnResponse</a></code> | <code>java.lang.String</code> | MDN Response setting for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm">mdnSigningAlgorithm</a></code> | <code>java.lang.String</code> | MDN Signing algorithm for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.messageSubject">messageSubject</a></code> | <code>java.lang.String</code> | The message subject for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.partnerProfileId">partnerProfileId</a></code> | <code>java.lang.String</code> | A unique identifier for the partner profile. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.preserveContentType">preserveContentType</a></code> | <code>java.lang.String</code> | Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | Signing algorithm for this AS2 connector configuration. |

---

##### `asyncMdnConfig`<sup>Optional</sup> <a name="asyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.asyncMdnConfig"></a>

```java
public TransferConnectorAs2ConfigAsyncMdnConfig getAsyncMdnConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

Configuration for an AS2 connector with ASYNC MDN Response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#async_mdn_config TransferConnector#async_mdn_config}

---

##### `basicAuthSecretId`<sup>Optional</sup> <a name="basicAuthSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.basicAuthSecretId"></a>

```java
public java.lang.String getBasicAuthSecretId();
```

- *Type:* java.lang.String

ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication.

If empty, Basic authentication is disabled for the AS2 connector

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#basic_auth_secret_id TransferConnector#basic_auth_secret_id}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

Compression setting for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#compression TransferConnector#compression}

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

Encryption algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}

---

##### `localProfileId`<sup>Optional</sup> <a name="localProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.localProfileId"></a>

```java
public java.lang.String getLocalProfileId();
```

- *Type:* java.lang.String

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}

---

##### `mdnResponse`<sup>Optional</sup> <a name="mdnResponse" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnResponse"></a>

```java
public java.lang.String getMdnResponse();
```

- *Type:* java.lang.String

MDN Response setting for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}

---

##### `mdnSigningAlgorithm`<sup>Optional</sup> <a name="mdnSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm"></a>

```java
public java.lang.String getMdnSigningAlgorithm();
```

- *Type:* java.lang.String

MDN Signing algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}

---

##### `messageSubject`<sup>Optional</sup> <a name="messageSubject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.messageSubject"></a>

```java
public java.lang.String getMessageSubject();
```

- *Type:* java.lang.String

The message subject for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}

---

##### `partnerProfileId`<sup>Optional</sup> <a name="partnerProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.partnerProfileId"></a>

```java
public java.lang.String getPartnerProfileId();
```

- *Type:* java.lang.String

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}

---

##### `preserveContentType`<sup>Optional</sup> <a name="preserveContentType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.preserveContentType"></a>

```java
public java.lang.String getPreserveContentType();
```

- *Type:* java.lang.String

Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#preserve_content_type TransferConnector#preserve_content_type}

---

##### `signingAlgorithm`<sup>Optional</sup> <a name="signingAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm"></a>

```java
public java.lang.String getSigningAlgorithm();
```

- *Type:* java.lang.String

Signing algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}

---

### TransferConnectorAs2ConfigAsyncMdnConfig <a name="TransferConnectorAs2ConfigAsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorAs2ConfigAsyncMdnConfig;

TransferConnectorAs2ConfigAsyncMdnConfig.builder()
//  .serverIds(java.util.List<java.lang.String>)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.serverIds">serverIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#server_ids TransferConnector#server_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.url">url</a></code> | <code>java.lang.String</code> | URL of the server to receive the MDN response on. |

---

##### `serverIds`<sup>Optional</sup> <a name="serverIds" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.serverIds"></a>

```java
public java.util.List<java.lang.String> getServerIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#server_ids TransferConnector#server_ids}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

URL of the server to receive the MDN response on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#url TransferConnector#url}

---

### TransferConnectorConfig <a name="TransferConnectorConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorConfig;

TransferConnectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessRole(java.lang.String)
//  .as2Config(TransferConnectorAs2Config)
//  .egressConfig(TransferConnectorEgressConfig)
//  .egressType(java.lang.String)
//  .ipAddressType(java.lang.String)
//  .loggingRole(java.lang.String)
//  .securityPolicyName(java.lang.String)
//  .sftpConfig(TransferConnectorSftpConfig)
//  .tags(IResolvable|java.util.List<TransferConnectorTags>)
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.accessRole">accessRole</a></code> | <code>java.lang.String</code> | Specifies the access role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.as2Config">as2Config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | Configuration for an AS2 connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressConfig">egressConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | Egress configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressType">egressType</a></code> | <code>java.lang.String</code> | Specifies the egress type for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | IP address type for Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.loggingRole">loggingRole</a></code> | <code>java.lang.String</code> | Specifies the logging role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.securityPolicyName">securityPolicyName</a></code> | <code>java.lang.String</code> | Security policy for SFTP Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.sftpConfig">sftpConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | Configuration for an SFTP connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>></code> | Key-value pairs that can be used to group and search for connectors. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.url">url</a></code> | <code>java.lang.String</code> | URL for Connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.accessRole"></a>

```java
public java.lang.String getAccessRole();
```

- *Type:* java.lang.String

Specifies the access role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}

---

##### `as2Config`<sup>Optional</sup> <a name="as2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.as2Config"></a>

```java
public TransferConnectorAs2Config getAs2Config();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

Configuration for an AS2 connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#as_2_config TransferConnector#as_2_config}

---

##### `egressConfig`<sup>Optional</sup> <a name="egressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressConfig"></a>

```java
public TransferConnectorEgressConfig getEgressConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

Egress configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#egress_config TransferConnector#egress_config}

---

##### `egressType`<sup>Optional</sup> <a name="egressType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressType"></a>

```java
public java.lang.String getEgressType();
```

- *Type:* java.lang.String

Specifies the egress type for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#egress_type TransferConnector#egress_type}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

IP address type for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#ip_address_type TransferConnector#ip_address_type}

---

##### `loggingRole`<sup>Optional</sup> <a name="loggingRole" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.loggingRole"></a>

```java
public java.lang.String getLoggingRole();
```

- *Type:* java.lang.String

Specifies the logging role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}

---

##### `securityPolicyName`<sup>Optional</sup> <a name="securityPolicyName" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.securityPolicyName"></a>

```java
public java.lang.String getSecurityPolicyName();
```

- *Type:* java.lang.String

Security policy for SFTP Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}

---

##### `sftpConfig`<sup>Optional</sup> <a name="sftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.sftpConfig"></a>

```java
public TransferConnectorSftpConfig getSftpConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

Configuration for an SFTP connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.tags"></a>

```java
public IResolvable|java.util.List<TransferConnectorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>>

Key-value pairs that can be used to group and search for connectors.

Tags are metadata attached to connectors for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#tags TransferConnector#tags}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

URL for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#url TransferConnector#url}

---

### TransferConnectorEgressConfig <a name="TransferConnectorEgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorEgressConfig;

TransferConnectorEgressConfig.builder()
//  .vpcLattice(TransferConnectorEgressConfigVpcLattice)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.property.vpcLattice">vpcLattice</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#vpc_lattice TransferConnector#vpc_lattice}. |

---

##### `vpcLattice`<sup>Optional</sup> <a name="vpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.property.vpcLattice"></a>

```java
public TransferConnectorEgressConfigVpcLattice getVpcLattice();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#vpc_lattice TransferConnector#vpc_lattice}.

---

### TransferConnectorEgressConfigVpcLattice <a name="TransferConnectorEgressConfigVpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorEgressConfigVpcLattice;

TransferConnectorEgressConfigVpcLattice.builder()
//  .portNumber(java.lang.Number)
//  .resourceConfigurationArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.portNumber">portNumber</a></code> | <code>java.lang.Number</code> | Port to connect to on the target VPC Lattice resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>java.lang.String</code> | ARN of the VPC Lattice resource configuration. |

---

##### `portNumber`<sup>Optional</sup> <a name="portNumber" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.portNumber"></a>

```java
public java.lang.Number getPortNumber();
```

- *Type:* java.lang.Number

Port to connect to on the target VPC Lattice resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#port_number TransferConnector#port_number}

---

##### `resourceConfigurationArn`<sup>Optional</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.resourceConfigurationArn"></a>

```java
public java.lang.String getResourceConfigurationArn();
```

- *Type:* java.lang.String

ARN of the VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#resource_configuration_arn TransferConnector#resource_configuration_arn}

---

### TransferConnectorSftpConfig <a name="TransferConnectorSftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorSftpConfig;

TransferConnectorSftpConfig.builder()
//  .maxConcurrentConnections(java.lang.Number)
//  .trustedHostKeys(java.util.List<java.lang.String>)
//  .userSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.maxConcurrentConnections">maxConcurrentConnections</a></code> | <code>java.lang.Number</code> | Specifies the number of active connections that your connector can establish with the remote server at the same time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys">trustedHostKeys</a></code> | <code>java.util.List<java.lang.String></code> | List of public host keys, for the external server to which you are connecting. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.userSecretId">userSecretId</a></code> | <code>java.lang.String</code> | ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords. |

---

##### `maxConcurrentConnections`<sup>Optional</sup> <a name="maxConcurrentConnections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.maxConcurrentConnections"></a>

```java
public java.lang.Number getMaxConcurrentConnections();
```

- *Type:* java.lang.Number

Specifies the number of active connections that your connector can establish with the remote server at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#max_concurrent_connections TransferConnector#max_concurrent_connections}

---

##### `trustedHostKeys`<sup>Optional</sup> <a name="trustedHostKeys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys"></a>

```java
public java.util.List<java.lang.String> getTrustedHostKeys();
```

- *Type:* java.util.List<java.lang.String>

List of public host keys, for the external server to which you are connecting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}

---

##### `userSecretId`<sup>Optional</sup> <a name="userSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.userSecretId"></a>

```java
public java.lang.String getUserSecretId();
```

- *Type:* java.lang.String

ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}

---

### TransferConnectorTags <a name="TransferConnectorTags" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorTags;

TransferConnectorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.key">key</a></code> | <code>java.lang.String</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.value">value</a></code> | <code>java.lang.String</code> | Contains one or more values that you assigned to the key name you create. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#key TransferConnector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Contains one or more values that you assigned to the key name you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/transfer_connector#value TransferConnector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TransferConnectorAs2ConfigAsyncMdnConfigOutputReference <a name="TransferConnectorAs2ConfigAsyncMdnConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference;

new TransferConnectorAs2ConfigAsyncMdnConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetServerIds">resetServerIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerIds` <a name="resetServerIds" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetServerIds"></a>

```java
public void resetServerIds()
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIdsInput">serverIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIds">serverIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverIdsInput`<sup>Optional</sup> <a name="serverIdsInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIdsInput"></a>

```java
public java.util.List<java.lang.String> getServerIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `serverIds`<sup>Required</sup> <a name="serverIds" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIds"></a>

```java
public java.util.List<java.lang.String> getServerIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferConnectorAs2ConfigAsyncMdnConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

---


### TransferConnectorAs2ConfigOutputReference <a name="TransferConnectorAs2ConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorAs2ConfigOutputReference;

new TransferConnectorAs2ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig">putAsyncMdnConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetAsyncMdnConfig">resetAsyncMdnConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetBasicAuthSecretId">resetBasicAuthSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetLocalProfileId">resetLocalProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnResponse">resetMdnResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm">resetMdnSigningAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject">resetMessageSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPartnerProfileId">resetPartnerProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPreserveContentType">resetPreserveContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetSigningAlgorithm">resetSigningAlgorithm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAsyncMdnConfig` <a name="putAsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig"></a>

```java
public void putAsyncMdnConfig(TransferConnectorAs2ConfigAsyncMdnConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

---

##### `resetAsyncMdnConfig` <a name="resetAsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetAsyncMdnConfig"></a>

```java
public void resetAsyncMdnConfig()
```

##### `resetBasicAuthSecretId` <a name="resetBasicAuthSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetBasicAuthSecretId"></a>

```java
public void resetBasicAuthSecretId()
```

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetCompression"></a>

```java
public void resetCompression()
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetEncryptionAlgorithm"></a>

```java
public void resetEncryptionAlgorithm()
```

##### `resetLocalProfileId` <a name="resetLocalProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetLocalProfileId"></a>

```java
public void resetLocalProfileId()
```

##### `resetMdnResponse` <a name="resetMdnResponse" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnResponse"></a>

```java
public void resetMdnResponse()
```

##### `resetMdnSigningAlgorithm` <a name="resetMdnSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm"></a>

```java
public void resetMdnSigningAlgorithm()
```

##### `resetMessageSubject` <a name="resetMessageSubject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject"></a>

```java
public void resetMessageSubject()
```

##### `resetPartnerProfileId` <a name="resetPartnerProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPartnerProfileId"></a>

```java
public void resetPartnerProfileId()
```

##### `resetPreserveContentType` <a name="resetPreserveContentType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPreserveContentType"></a>

```java
public void resetPreserveContentType()
```

##### `resetSigningAlgorithm` <a name="resetSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetSigningAlgorithm"></a>

```java
public void resetSigningAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfig">asyncMdnConfig</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference">TransferConnectorAs2ConfigAsyncMdnConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfigInput">asyncMdnConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretIdInput">basicAuthSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput">localProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput">mdnResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput">mdnSigningAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput">messageSubjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput">partnerProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentTypeInput">preserveContentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput">signingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretId">basicAuthSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId">localProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse">mdnResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm">mdnSigningAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject">messageSubject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId">partnerProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentType">preserveContentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm">signingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `asyncMdnConfig`<sup>Required</sup> <a name="asyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfig"></a>

```java
public TransferConnectorAs2ConfigAsyncMdnConfigOutputReference getAsyncMdnConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference">TransferConnectorAs2ConfigAsyncMdnConfigOutputReference</a>

---

##### `asyncMdnConfigInput`<sup>Optional</sup> <a name="asyncMdnConfigInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfigInput"></a>

```java
public IResolvable|TransferConnectorAs2ConfigAsyncMdnConfig getAsyncMdnConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

---

##### `basicAuthSecretIdInput`<sup>Optional</sup> <a name="basicAuthSecretIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretIdInput"></a>

```java
public java.lang.String getBasicAuthSecretIdInput();
```

- *Type:* java.lang.String

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput"></a>

```java
public java.lang.String getEncryptionAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `localProfileIdInput`<sup>Optional</sup> <a name="localProfileIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput"></a>

```java
public java.lang.String getLocalProfileIdInput();
```

- *Type:* java.lang.String

---

##### `mdnResponseInput`<sup>Optional</sup> <a name="mdnResponseInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput"></a>

```java
public java.lang.String getMdnResponseInput();
```

- *Type:* java.lang.String

---

##### `mdnSigningAlgorithmInput`<sup>Optional</sup> <a name="mdnSigningAlgorithmInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput"></a>

```java
public java.lang.String getMdnSigningAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `messageSubjectInput`<sup>Optional</sup> <a name="messageSubjectInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput"></a>

```java
public java.lang.String getMessageSubjectInput();
```

- *Type:* java.lang.String

---

##### `partnerProfileIdInput`<sup>Optional</sup> <a name="partnerProfileIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput"></a>

```java
public java.lang.String getPartnerProfileIdInput();
```

- *Type:* java.lang.String

---

##### `preserveContentTypeInput`<sup>Optional</sup> <a name="preserveContentTypeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentTypeInput"></a>

```java
public java.lang.String getPreserveContentTypeInput();
```

- *Type:* java.lang.String

---

##### `signingAlgorithmInput`<sup>Optional</sup> <a name="signingAlgorithmInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput"></a>

```java
public java.lang.String getSigningAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `basicAuthSecretId`<sup>Required</sup> <a name="basicAuthSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretId"></a>

```java
public java.lang.String getBasicAuthSecretId();
```

- *Type:* java.lang.String

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `localProfileId`<sup>Required</sup> <a name="localProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId"></a>

```java
public java.lang.String getLocalProfileId();
```

- *Type:* java.lang.String

---

##### `mdnResponse`<sup>Required</sup> <a name="mdnResponse" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse"></a>

```java
public java.lang.String getMdnResponse();
```

- *Type:* java.lang.String

---

##### `mdnSigningAlgorithm`<sup>Required</sup> <a name="mdnSigningAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm"></a>

```java
public java.lang.String getMdnSigningAlgorithm();
```

- *Type:* java.lang.String

---

##### `messageSubject`<sup>Required</sup> <a name="messageSubject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject"></a>

```java
public java.lang.String getMessageSubject();
```

- *Type:* java.lang.String

---

##### `partnerProfileId`<sup>Required</sup> <a name="partnerProfileId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId"></a>

```java
public java.lang.String getPartnerProfileId();
```

- *Type:* java.lang.String

---

##### `preserveContentType`<sup>Required</sup> <a name="preserveContentType" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentType"></a>

```java
public java.lang.String getPreserveContentType();
```

- *Type:* java.lang.String

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm"></a>

```java
public java.lang.String getSigningAlgorithm();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferConnectorAs2Config getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---


### TransferConnectorEgressConfigOutputReference <a name="TransferConnectorEgressConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorEgressConfigOutputReference;

new TransferConnectorEgressConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice">putVpcLattice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resetVpcLattice">resetVpcLattice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcLattice` <a name="putVpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice"></a>

```java
public void putVpcLattice(TransferConnectorEgressConfigVpcLattice value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

---

##### `resetVpcLattice` <a name="resetVpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resetVpcLattice"></a>

```java
public void resetVpcLattice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLattice">vpcLattice</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference">TransferConnectorEgressConfigVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLatticeInput">vpcLatticeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcLattice`<sup>Required</sup> <a name="vpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLattice"></a>

```java
public TransferConnectorEgressConfigVpcLatticeOutputReference getVpcLattice();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference">TransferConnectorEgressConfigVpcLatticeOutputReference</a>

---

##### `vpcLatticeInput`<sup>Optional</sup> <a name="vpcLatticeInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLatticeInput"></a>

```java
public IResolvable|TransferConnectorEgressConfigVpcLattice getVpcLatticeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferConnectorEgressConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

---


### TransferConnectorEgressConfigVpcLatticeOutputReference <a name="TransferConnectorEgressConfigVpcLatticeOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorEgressConfigVpcLatticeOutputReference;

new TransferConnectorEgressConfigVpcLatticeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetPortNumber">resetPortNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetResourceConfigurationArn">resetResourceConfigurationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPortNumber` <a name="resetPortNumber" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetPortNumber"></a>

```java
public void resetPortNumber()
```

##### `resetResourceConfigurationArn` <a name="resetResourceConfigurationArn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetResourceConfigurationArn"></a>

```java
public void resetResourceConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumberInput">portNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArnInput">resourceConfigurationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumber">portNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArn">resourceConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portNumberInput`<sup>Optional</sup> <a name="portNumberInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumberInput"></a>

```java
public java.lang.Number getPortNumberInput();
```

- *Type:* java.lang.Number

---

##### `resourceConfigurationArnInput`<sup>Optional</sup> <a name="resourceConfigurationArnInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArnInput"></a>

```java
public java.lang.String getResourceConfigurationArnInput();
```

- *Type:* java.lang.String

---

##### `portNumber`<sup>Required</sup> <a name="portNumber" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumber"></a>

```java
public java.lang.Number getPortNumber();
```

- *Type:* java.lang.Number

---

##### `resourceConfigurationArn`<sup>Required</sup> <a name="resourceConfigurationArn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArn"></a>

```java
public java.lang.String getResourceConfigurationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferConnectorEgressConfigVpcLattice getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

---


### TransferConnectorSftpConfigOutputReference <a name="TransferConnectorSftpConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorSftpConfigOutputReference;

new TransferConnectorSftpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetMaxConcurrentConnections">resetMaxConcurrentConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys">resetTrustedHostKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId">resetUserSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxConcurrentConnections` <a name="resetMaxConcurrentConnections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetMaxConcurrentConnections"></a>

```java
public void resetMaxConcurrentConnections()
```

##### `resetTrustedHostKeys` <a name="resetTrustedHostKeys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys"></a>

```java
public void resetTrustedHostKeys()
```

##### `resetUserSecretId` <a name="resetUserSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId"></a>

```java
public void resetUserSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnectionsInput">maxConcurrentConnectionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput">trustedHostKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput">userSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnections">maxConcurrentConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys">trustedHostKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId">userSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxConcurrentConnectionsInput`<sup>Optional</sup> <a name="maxConcurrentConnectionsInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnectionsInput"></a>

```java
public java.lang.Number getMaxConcurrentConnectionsInput();
```

- *Type:* java.lang.Number

---

##### `trustedHostKeysInput`<sup>Optional</sup> <a name="trustedHostKeysInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput"></a>

```java
public java.util.List<java.lang.String> getTrustedHostKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userSecretIdInput`<sup>Optional</sup> <a name="userSecretIdInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput"></a>

```java
public java.lang.String getUserSecretIdInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrentConnections`<sup>Required</sup> <a name="maxConcurrentConnections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnections"></a>

```java
public java.lang.Number getMaxConcurrentConnections();
```

- *Type:* java.lang.Number

---

##### `trustedHostKeys`<sup>Required</sup> <a name="trustedHostKeys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys"></a>

```java
public java.util.List<java.lang.String> getTrustedHostKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userSecretId`<sup>Required</sup> <a name="userSecretId" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId"></a>

```java
public java.lang.String getUserSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferConnectorSftpConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---


### TransferConnectorTagsList <a name="TransferConnectorTagsList" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorTagsList;

new TransferConnectorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get"></a>

```java
public TransferConnectorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TransferConnectorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>>

---


### TransferConnectorTagsOutputReference <a name="TransferConnectorTagsOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_connector.TransferConnectorTagsOutputReference;

new TransferConnectorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferConnectorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>

---



