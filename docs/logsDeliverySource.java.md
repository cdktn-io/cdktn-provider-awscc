# `logsDeliverySource` Submodule <a name="`logsDeliverySource` Submodule" id="@cdktn/provider-awscc.logsDeliverySource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsDeliverySource <a name="LogsDeliverySource" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source awscc_logs_delivery_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_source.LogsDeliverySource;

LogsDeliverySource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .deliverySourceConfiguration(java.util.Map<java.lang.String, java.lang.String>)
//  .logType(java.lang.String)
//  .resourceArn(java.lang.String)
//  .tags(IResolvable|java.util.List<LogsDeliverySourceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The unique name of the Log source. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.deliverySourceConfiguration">deliverySourceConfiguration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key-value pairs to configure the delivery source. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.logType">logType</a></code> | <code>java.lang.String</code> | The type of logs being delivered. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The ARN of the resource that will be sending the logs. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags">LogsDeliverySourceTags</a>></code> | The tags that have been assigned to this delivery source. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The unique name of the Log source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#name LogsDeliverySource#name}

---

##### `deliverySourceConfiguration`<sup>Optional</sup> <a name="deliverySourceConfiguration" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.deliverySourceConfiguration"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key-value pairs to configure the delivery source.

Both keys and values must be between 1 and 255 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#delivery_source_configuration LogsDeliverySource#delivery_source_configuration}

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.logType"></a>

- *Type:* java.lang.String

The type of logs being delivered.

Only mandatory when the resourceArn could match more than one. In such a case, the error message will contain all the possible options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#log_type LogsDeliverySource#log_type}

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.resourceArn"></a>

- *Type:* java.lang.String

The ARN of the resource that will be sending the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#resource_arn LogsDeliverySource#resource_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags">LogsDeliverySourceTags</a>>

The tags that have been assigned to this delivery source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#tags LogsDeliverySource#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.resetDeliverySourceConfiguration">resetDeliverySourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.resetLogType">resetLogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.resetResourceArn">resetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<LogsDeliverySourceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags">LogsDeliverySourceTags</a>>

---

##### `resetDeliverySourceConfiguration` <a name="resetDeliverySourceConfiguration" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.resetDeliverySourceConfiguration"></a>

```java
public void resetDeliverySourceConfiguration()
```

##### `resetLogType` <a name="resetLogType" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.resetLogType"></a>

```java
public void resetLogType()
```

##### `resetResourceArn` <a name="resetResourceArn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.resetResourceArn"></a>

```java
public void resetResourceArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsDeliverySource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.isConstruct"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_source.LogsDeliverySource;

LogsDeliverySource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_source.LogsDeliverySource;

LogsDeliverySource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_source.LogsDeliverySource;

LogsDeliverySource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_source.LogsDeliverySource;

LogsDeliverySource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LogsDeliverySource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LogsDeliverySource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LogsDeliverySource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LogsDeliverySource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LogsDeliverySource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList">LogsDeliverySourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.deliverySourceConfigurationInput">deliverySourceConfigurationInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.logTypeInput">logTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags">LogsDeliverySourceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.deliverySourceConfiguration">deliverySourceConfiguration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.tags"></a>

```java
public LogsDeliverySourceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList">LogsDeliverySourceTagsList</a>

---

##### `deliverySourceConfigurationInput`<sup>Optional</sup> <a name="deliverySourceConfigurationInput" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.deliverySourceConfigurationInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeliverySourceConfigurationInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.logTypeInput"></a>

```java
public java.lang.String getLogTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.tagsInput"></a>

```java
public IResolvable|java.util.List<LogsDeliverySourceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags">LogsDeliverySourceTags</a>>

---

##### `deliverySourceConfiguration`<sup>Required</sup> <a name="deliverySourceConfiguration" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.deliverySourceConfiguration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeliverySourceConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LogsDeliverySourceConfig <a name="LogsDeliverySourceConfig" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_source.LogsDeliverySourceConfig;

LogsDeliverySourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .deliverySourceConfiguration(java.util.Map<java.lang.String, java.lang.String>)
//  .logType(java.lang.String)
//  .resourceArn(java.lang.String)
//  .tags(IResolvable|java.util.List<LogsDeliverySourceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The unique name of the Log source. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.deliverySourceConfiguration">deliverySourceConfiguration</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of key-value pairs to configure the delivery source. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.logType">logType</a></code> | <code>java.lang.String</code> | The type of logs being delivered. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The ARN of the resource that will be sending the logs. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags">LogsDeliverySourceTags</a>></code> | The tags that have been assigned to this delivery source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique name of the Log source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#name LogsDeliverySource#name}

---

##### `deliverySourceConfiguration`<sup>Optional</sup> <a name="deliverySourceConfiguration" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.deliverySourceConfiguration"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDeliverySourceConfiguration();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of key-value pairs to configure the delivery source.

Both keys and values must be between 1 and 255 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#delivery_source_configuration LogsDeliverySource#delivery_source_configuration}

---

##### `logType`<sup>Optional</sup> <a name="logType" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

The type of logs being delivered.

Only mandatory when the resourceArn could match more than one. In such a case, the error message will contain all the possible options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#log_type LogsDeliverySource#log_type}

---

##### `resourceArn`<sup>Optional</sup> <a name="resourceArn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

The ARN of the resource that will be sending the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#resource_arn LogsDeliverySource#resource_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<LogsDeliverySourceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags">LogsDeliverySourceTags</a>>

The tags that have been assigned to this delivery source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#tags LogsDeliverySource#tags}

---

### LogsDeliverySourceTags <a name="LogsDeliverySourceTags" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_source.LogsDeliverySourceTags;

LogsDeliverySourceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. You can specify a value that is 1 to 128 Unicode. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag. You can specify a value that is 1 to 128 Unicode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#key LogsDeliverySource#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag. You can specify a value that is 0 to 256 Unicode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/logs_delivery_source#value LogsDeliverySource#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsDeliverySourceTagsList <a name="LogsDeliverySourceTagsList" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_source.LogsDeliverySourceTagsList;

new LogsDeliverySourceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.get"></a>

```java
public LogsDeliverySourceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags">LogsDeliverySourceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LogsDeliverySourceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags">LogsDeliverySourceTags</a>>

---


### LogsDeliverySourceTagsOutputReference <a name="LogsDeliverySourceTagsOutputReference" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.logs_delivery_source.LogsDeliverySourceTagsOutputReference;

new LogsDeliverySourceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags">LogsDeliverySourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|LogsDeliverySourceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.logsDeliverySource.LogsDeliverySourceTags">LogsDeliverySourceTags</a>

---



