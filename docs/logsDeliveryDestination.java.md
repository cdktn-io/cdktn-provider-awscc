# `logsDeliveryDestination` Submodule <a name="`logsDeliveryDestination` Submodule" id="@cdktn/provider-awscc.logsDeliveryDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsDeliveryDestination <a name="LogsDeliveryDestination" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination awscc_logs_delivery_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_destination.LogsDeliveryDestination;

LogsDeliveryDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .deliveryDestinationPolicy(LogsDeliveryDestinationDeliveryDestinationPolicy)
//  .deliveryDestinationType(java.lang.String)
//  .destinationResourceArn(java.lang.String)
//  .outputFormat(java.lang.String)
//  .tags(IResolvable|java.util.List<LogsDeliveryDestinationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.deliveryDestinationPolicy">deliveryDestinationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.deliveryDestinationType">deliveryDestinationType</a></code> | <code>java.lang.String</code> | Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.destinationResourceArn">destinationResourceArn</a></code> | <code>java.lang.String</code> | The ARN of the Amazon Web Services destination that this delivery destination represents. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | The format of the logs that are sent to this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>></code> | The tags that have been assigned to this delivery destination. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#name LogsDeliveryDestination#name}

---

##### `deliveryDestinationPolicy`<sup>Optional</sup> <a name="deliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.deliveryDestinationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.

The policy must be in JSON string format.

Length Constraints: Maximum length of 51200

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#delivery_destination_policy LogsDeliveryDestination#delivery_destination_policy}

---

##### `deliveryDestinationType`<sup>Optional</sup> <a name="deliveryDestinationType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.deliveryDestinationType"></a>

- *Type:* java.lang.String

Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#delivery_destination_type LogsDeliveryDestination#delivery_destination_type}

---

##### `destinationResourceArn`<sup>Optional</sup> <a name="destinationResourceArn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.destinationResourceArn"></a>

- *Type:* java.lang.String

The ARN of the Amazon Web Services destination that this delivery destination represents.

That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#destination_resource_arn LogsDeliveryDestination#destination_resource_arn}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.outputFormat"></a>

- *Type:* java.lang.String

The format of the logs that are sent to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#output_format LogsDeliveryDestination#output_format}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>>

The tags that have been assigned to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#tags LogsDeliveryDestination#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy">putDeliveryDestinationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationPolicy">resetDeliveryDestinationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationType">resetDeliveryDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDestinationResourceArn">resetDestinationResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeliveryDestinationPolicy` <a name="putDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy"></a>

```java
public void putDeliveryDestinationPolicy(LogsDeliveryDestinationDeliveryDestinationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putDeliveryDestinationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LogsDeliveryDestinationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>>

---

##### `resetDeliveryDestinationPolicy` <a name="resetDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationPolicy"></a>

```java
public void resetDeliveryDestinationPolicy()
```

##### `resetDeliveryDestinationType` <a name="resetDeliveryDestinationType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDeliveryDestinationType"></a>

```java
public void resetDeliveryDestinationType()
```

##### `resetDestinationResourceArn` <a name="resetDestinationResourceArn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetDestinationResourceArn"></a>

```java
public void resetDestinationResourceArn()
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetOutputFormat"></a>

```java
public void resetOutputFormat()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsDeliveryDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_destination.LogsDeliveryDestination;

LogsDeliveryDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_destination.LogsDeliveryDestination;

LogsDeliveryDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_destination.LogsDeliveryDestination;

LogsDeliveryDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_destination.LogsDeliveryDestination;

LogsDeliveryDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogsDeliveryDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LogsDeliveryDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogsDeliveryDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogsDeliveryDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LogsDeliveryDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicy">deliveryDestinationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference">LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList">LogsDeliveryDestinationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicyInput">deliveryDestinationPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationTypeInput">deliveryDestinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArnInput">destinationResourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormatInput">outputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationType">deliveryDestinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArn">destinationResourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `deliveryDestinationPolicy`<sup>Required</sup> <a name="deliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicy"></a>

```java
public LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference getDeliveryDestinationPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference">LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tags"></a>

```java
public LogsDeliveryDestinationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList">LogsDeliveryDestinationTagsList</a>

---

##### `deliveryDestinationPolicyInput`<sup>Optional</sup> <a name="deliveryDestinationPolicyInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationPolicyInput"></a>

```java
public IResolvable|LogsDeliveryDestinationDeliveryDestinationPolicy getDeliveryDestinationPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

---

##### `deliveryDestinationTypeInput`<sup>Optional</sup> <a name="deliveryDestinationTypeInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationTypeInput"></a>

```java
public java.lang.String getDeliveryDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `destinationResourceArnInput`<sup>Optional</sup> <a name="destinationResourceArnInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArnInput"></a>

```java
public java.lang.String getDestinationResourceArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormatInput"></a>

```java
public java.lang.String getOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LogsDeliveryDestinationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>>

---

##### `deliveryDestinationType`<sup>Required</sup> <a name="deliveryDestinationType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.deliveryDestinationType"></a>

```java
public java.lang.String getDeliveryDestinationType();
```

- *Type:* java.lang.String

---

##### `destinationResourceArn`<sup>Required</sup> <a name="destinationResourceArn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.destinationResourceArn"></a>

```java
public java.lang.String getDestinationResourceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogsDeliveryDestinationConfig <a name="LogsDeliveryDestinationConfig" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_destination.LogsDeliveryDestinationConfig;

LogsDeliveryDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .deliveryDestinationPolicy(LogsDeliveryDestinationDeliveryDestinationPolicy)
//  .deliveryDestinationType(java.lang.String)
//  .destinationResourceArn(java.lang.String)
//  .outputFormat(java.lang.String)
//  .tags(IResolvable|java.util.List<LogsDeliveryDestinationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationPolicy">deliveryDestinationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationType">deliveryDestinationType</a></code> | <code>java.lang.String</code> | Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.destinationResourceArn">destinationResourceArn</a></code> | <code>java.lang.String</code> | The ARN of the Amazon Web Services destination that this delivery destination represents. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.outputFormat">outputFormat</a></code> | <code>java.lang.String</code> | The format of the logs that are sent to this delivery destination. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>></code> | The tags that have been assigned to this delivery destination. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#name LogsDeliveryDestination#name}

---

##### `deliveryDestinationPolicy`<sup>Optional</sup> <a name="deliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationPolicy"></a>

```java
public LogsDeliveryDestinationDeliveryDestinationPolicy getDeliveryDestinationPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.

The policy must be in JSON string format.

Length Constraints: Maximum length of 51200

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#delivery_destination_policy LogsDeliveryDestination#delivery_destination_policy}

---

##### `deliveryDestinationType`<sup>Optional</sup> <a name="deliveryDestinationType" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.deliveryDestinationType"></a>

```java
public java.lang.String getDeliveryDestinationType();
```

- *Type:* java.lang.String

Displays whether this delivery destination is CloudWatch Logs, Amazon S3, Kinesis Data Firehose, or XRay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#delivery_destination_type LogsDeliveryDestination#delivery_destination_type}

---

##### `destinationResourceArn`<sup>Optional</sup> <a name="destinationResourceArn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.destinationResourceArn"></a>

```java
public java.lang.String getDestinationResourceArn();
```

- *Type:* java.lang.String

The ARN of the Amazon Web Services destination that this delivery destination represents.

That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#destination_resource_arn LogsDeliveryDestination#destination_resource_arn}

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.outputFormat"></a>

```java
public java.lang.String getOutputFormat();
```

- *Type:* java.lang.String

The format of the logs that are sent to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#output_format LogsDeliveryDestination#output_format}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LogsDeliveryDestinationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>>

The tags that have been assigned to this delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#tags LogsDeliveryDestination#tags}

---

### LogsDeliveryDestinationDeliveryDestinationPolicy <a name="LogsDeliveryDestinationDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_destination.LogsDeliveryDestinationDeliveryDestinationPolicy;

LogsDeliveryDestinationDeliveryDestinationPolicy.builder()
//  .deliveryDestinationName(java.lang.String)
//  .deliveryDestinationPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationName">deliveryDestinationName</a></code> | <code>java.lang.String</code> | The name of the delivery destination to assign this policy to. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationPolicy">deliveryDestinationPolicy</a></code> | <code>java.lang.String</code> | The contents of the policy attached to the delivery destination. |

---

##### `deliveryDestinationName`<sup>Optional</sup> <a name="deliveryDestinationName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationName"></a>

```java
public java.lang.String getDeliveryDestinationName();
```

- *Type:* java.lang.String

The name of the delivery destination to assign this policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#delivery_destination_name LogsDeliveryDestination#delivery_destination_name}

---

##### `deliveryDestinationPolicy`<sup>Optional</sup> <a name="deliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy.property.deliveryDestinationPolicy"></a>

```java
public java.lang.String getDeliveryDestinationPolicy();
```

- *Type:* java.lang.String

The contents of the policy attached to the delivery destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#delivery_destination_policy LogsDeliveryDestination#delivery_destination_policy}

---

### LogsDeliveryDestinationTags <a name="LogsDeliveryDestinationTags" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_destination.LogsDeliveryDestinationTags;

LogsDeliveryDestinationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#key LogsDeliveryDestination#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/logs_delivery_destination#value LogsDeliveryDestination#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference <a name="LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_destination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference;

new LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationName">resetDeliveryDestinationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationPolicy">resetDeliveryDestinationPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryDestinationName` <a name="resetDeliveryDestinationName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationName"></a>

```java
public void resetDeliveryDestinationName()
```

##### `resetDeliveryDestinationPolicy` <a name="resetDeliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.resetDeliveryDestinationPolicy"></a>

```java
public void resetDeliveryDestinationPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationNameInput">deliveryDestinationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicyInput">deliveryDestinationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationName">deliveryDestinationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicy">deliveryDestinationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deliveryDestinationNameInput`<sup>Optional</sup> <a name="deliveryDestinationNameInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationNameInput"></a>

```java
public java.lang.String getDeliveryDestinationNameInput();
```

- *Type:* java.lang.String

---

##### `deliveryDestinationPolicyInput`<sup>Optional</sup> <a name="deliveryDestinationPolicyInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicyInput"></a>

```java
public java.lang.String getDeliveryDestinationPolicyInput();
```

- *Type:* java.lang.String

---

##### `deliveryDestinationName`<sup>Required</sup> <a name="deliveryDestinationName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationName"></a>

```java
public java.lang.String getDeliveryDestinationName();
```

- *Type:* java.lang.String

---

##### `deliveryDestinationPolicy`<sup>Required</sup> <a name="deliveryDestinationPolicy" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.deliveryDestinationPolicy"></a>

```java
public java.lang.String getDeliveryDestinationPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsDeliveryDestinationDeliveryDestinationPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationDeliveryDestinationPolicy">LogsDeliveryDestinationDeliveryDestinationPolicy</a>

---


### LogsDeliveryDestinationTagsList <a name="LogsDeliveryDestinationTagsList" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_destination.LogsDeliveryDestinationTagsList;

new LogsDeliveryDestinationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get"></a>

```java
public LogsDeliveryDestinationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsDeliveryDestinationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>>

---


### LogsDeliveryDestinationTagsOutputReference <a name="LogsDeliveryDestinationTagsOutputReference" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_destination.LogsDeliveryDestinationTagsOutputReference;

new LogsDeliveryDestinationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsDeliveryDestinationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDeliveryDestination.LogsDeliveryDestinationTags">LogsDeliveryDestinationTags</a>

---



