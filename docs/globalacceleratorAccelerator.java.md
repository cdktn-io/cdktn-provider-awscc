# `globalacceleratorAccelerator` Submodule <a name="`globalacceleratorAccelerator` Submodule" id="@cdktn/provider-awscc.globalacceleratorAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorAccelerator <a name="GlobalacceleratorAccelerator" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator awscc_globalaccelerator_accelerator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_accelerator.GlobalacceleratorAccelerator;

GlobalacceleratorAccelerator.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .flowLogsEnabled(java.lang.Boolean|IResolvable)
//  .flowLogsS3Bucket(java.lang.String)
//  .flowLogsS3Prefix(java.lang.String)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .ipAddressType(java.lang.String)
//  .tags(IResolvable|java.util.List<GlobalacceleratorAcceleratorTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of accelerator. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether an accelerator is enabled. The value is true or false. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.flowLogsEnabled">flowLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether flow logs are enabled for the accelerator. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.flowLogsS3Bucket">flowLogsS3Bucket</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket for the flow logs. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.flowLogsS3Prefix">flowLogsS3Prefix</a></code> | <code>java.lang.String</code> | The prefix for the location in the Amazon S3 bucket for the flow logs. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | The IP addresses from BYOIP Prefix pool. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | IP Address type. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#name GlobalacceleratorAccelerator#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether an accelerator is enabled. The value is true or false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#enabled GlobalacceleratorAccelerator#enabled}

---

##### `flowLogsEnabled`<sup>Optional</sup> <a name="flowLogsEnabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.flowLogsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether flow logs are enabled for the accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}

---

##### `flowLogsS3Bucket`<sup>Optional</sup> <a name="flowLogsS3Bucket" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.flowLogsS3Bucket"></a>

- *Type:* java.lang.String

The name of the Amazon S3 bucket for the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}

---

##### `flowLogsS3Prefix`<sup>Optional</sup> <a name="flowLogsS3Prefix" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.flowLogsS3Prefix"></a>

- *Type:* java.lang.String

The prefix for the location in the Amazon S3 bucket for the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.ipAddresses"></a>

- *Type:* java.util.List<java.lang.String>

The IP addresses from BYOIP Prefix pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#ip_addresses GlobalacceleratorAccelerator#ip_addresses}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

IP Address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#ip_address_type GlobalacceleratorAccelerator#ip_address_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsEnabled">resetFlowLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsS3Bucket">resetFlowLogsS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsS3Prefix">resetFlowLogsS3Prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GlobalacceleratorAcceleratorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFlowLogsEnabled` <a name="resetFlowLogsEnabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsEnabled"></a>

```java
public void resetFlowLogsEnabled()
```

##### `resetFlowLogsS3Bucket` <a name="resetFlowLogsS3Bucket" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsS3Bucket"></a>

```java
public void resetFlowLogsS3Bucket()
```

##### `resetFlowLogsS3Prefix` <a name="resetFlowLogsS3Prefix" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetFlowLogsS3Prefix"></a>

```java
public void resetFlowLogsS3Prefix()
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddresses"></a>

```java
public void resetIpAddresses()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlobalacceleratorAccelerator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_accelerator.GlobalacceleratorAccelerator;

GlobalacceleratorAccelerator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_accelerator.GlobalacceleratorAccelerator;

GlobalacceleratorAccelerator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_accelerator.GlobalacceleratorAccelerator;

GlobalacceleratorAccelerator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_accelerator.GlobalacceleratorAccelerator;

GlobalacceleratorAccelerator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlobalacceleratorAccelerator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlobalacceleratorAccelerator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlobalacceleratorAccelerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlobalacceleratorAccelerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorAccelerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.acceleratorArn">acceleratorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dualStackDnsName">dualStackDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipv4Addresses">ipv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList">GlobalacceleratorAcceleratorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsEnabledInput">flowLogsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3BucketInput">flowLogsS3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3PrefixInput">flowLogsS3PrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressesInput">ipAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsEnabled">flowLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3Bucket">flowLogsS3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3Prefix">flowLogsS3Prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `acceleratorArn`<sup>Required</sup> <a name="acceleratorArn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.acceleratorArn"></a>

```java
public java.lang.String getAcceleratorArn();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `dualStackDnsName`<sup>Required</sup> <a name="dualStackDnsName" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.dualStackDnsName"></a>

```java
public java.lang.String getDualStackDnsName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipv4Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tags"></a>

```java
public GlobalacceleratorAcceleratorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList">GlobalacceleratorAcceleratorTagsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `flowLogsEnabledInput`<sup>Optional</sup> <a name="flowLogsEnabledInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getFlowLogsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `flowLogsS3BucketInput`<sup>Optional</sup> <a name="flowLogsS3BucketInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3BucketInput"></a>

```java
public java.lang.String getFlowLogsS3BucketInput();
```

- *Type:* java.lang.String

---

##### `flowLogsS3PrefixInput`<sup>Optional</sup> <a name="flowLogsS3PrefixInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3PrefixInput"></a>

```java
public java.lang.String getFlowLogsS3PrefixInput();
```

- *Type:* java.lang.String

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorAcceleratorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `flowLogsEnabled`<sup>Required</sup> <a name="flowLogsEnabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFlowLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `flowLogsS3Bucket`<sup>Required</sup> <a name="flowLogsS3Bucket" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3Bucket"></a>

```java
public java.lang.String getFlowLogsS3Bucket();
```

- *Type:* java.lang.String

---

##### `flowLogsS3Prefix`<sup>Required</sup> <a name="flowLogsS3Prefix" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.flowLogsS3Prefix"></a>

```java
public java.lang.String getFlowLogsS3Prefix();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAccelerator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorAcceleratorConfig <a name="GlobalacceleratorAcceleratorConfig" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_accelerator.GlobalacceleratorAcceleratorConfig;

GlobalacceleratorAcceleratorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .flowLogsEnabled(java.lang.Boolean|IResolvable)
//  .flowLogsS3Bucket(java.lang.String)
//  .flowLogsS3Prefix(java.lang.String)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .ipAddressType(java.lang.String)
//  .tags(IResolvable|java.util.List<GlobalacceleratorAcceleratorTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of accelerator. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether an accelerator is enabled. The value is true or false. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsEnabled">flowLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether flow logs are enabled for the accelerator. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsS3Bucket">flowLogsS3Bucket</a></code> | <code>java.lang.String</code> | The name of the Amazon S3 bucket for the flow logs. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsS3Prefix">flowLogsS3Prefix</a></code> | <code>java.lang.String</code> | The prefix for the location in the Amazon S3 bucket for the flow logs. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | The IP addresses from BYOIP Prefix pool. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | IP Address type. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#name GlobalacceleratorAccelerator#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether an accelerator is enabled. The value is true or false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#enabled GlobalacceleratorAccelerator#enabled}

---

##### `flowLogsEnabled`<sup>Optional</sup> <a name="flowLogsEnabled" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getFlowLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether flow logs are enabled for the accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}

---

##### `flowLogsS3Bucket`<sup>Optional</sup> <a name="flowLogsS3Bucket" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsS3Bucket"></a>

```java
public java.lang.String getFlowLogsS3Bucket();
```

- *Type:* java.lang.String

The name of the Amazon S3 bucket for the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}

---

##### `flowLogsS3Prefix`<sup>Optional</sup> <a name="flowLogsS3Prefix" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.flowLogsS3Prefix"></a>

```java
public java.lang.String getFlowLogsS3Prefix();
```

- *Type:* java.lang.String

The prefix for the location in the Amazon S3 bucket for the flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

The IP addresses from BYOIP Prefix pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#ip_addresses GlobalacceleratorAccelerator#ip_addresses}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

IP Address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#ip_address_type GlobalacceleratorAccelerator#ip_address_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorAcceleratorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#tags GlobalacceleratorAccelerator#tags}.

---

### GlobalacceleratorAcceleratorTags <a name="GlobalacceleratorAcceleratorTags" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_accelerator.GlobalacceleratorAcceleratorTags;

GlobalacceleratorAcceleratorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags.property.key">key</a></code> | <code>java.lang.String</code> | Key of the tag. Value can be 1 to 127 characters. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags.property.value">value</a></code> | <code>java.lang.String</code> | Value for the tag. Value can be 1 to 255 characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Key of the tag. Value can be 1 to 127 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#key GlobalacceleratorAccelerator#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value for the tag. Value can be 1 to 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/globalaccelerator_accelerator#value GlobalacceleratorAccelerator#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorAcceleratorTagsList <a name="GlobalacceleratorAcceleratorTagsList" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_accelerator.GlobalacceleratorAcceleratorTagsList;

new GlobalacceleratorAcceleratorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.get"></a>

```java
public GlobalacceleratorAcceleratorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorAcceleratorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>>

---


### GlobalacceleratorAcceleratorTagsOutputReference <a name="GlobalacceleratorAcceleratorTagsOutputReference" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_accelerator.GlobalacceleratorAcceleratorTagsOutputReference;

new GlobalacceleratorAcceleratorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlobalacceleratorAcceleratorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorAccelerator.GlobalacceleratorAcceleratorTags">GlobalacceleratorAcceleratorTags</a>

---



