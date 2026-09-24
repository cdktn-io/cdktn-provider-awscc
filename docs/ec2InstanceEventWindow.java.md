# `ec2InstanceEventWindow` Submodule <a name="`ec2InstanceEventWindow` Submodule" id="@cdktn/provider-awscc.ec2InstanceEventWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2InstanceEventWindow <a name="Ec2InstanceEventWindow" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window awscc_ec2_instance_event_window}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindow;

Ec2InstanceEventWindow.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cronExpression(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2InstanceEventWindowTags>)
//  .timeRanges(IResolvable|java.util.List<Ec2InstanceEventWindowTimeRanges>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>></code> | The tags applied to the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.timeRanges">timeRanges</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>></code> | The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.cronExpression"></a>

- *Type:* java.lang.String

The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#cron_expression Ec2InstanceEventWindow#cron_expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#name Ec2InstanceEventWindow#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>>

The tags applied to the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#tags Ec2InstanceEventWindow#tags}

---

##### `timeRanges`<sup>Optional</sup> <a name="timeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.Initializer.parameter.timeRanges"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>>

The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#time_ranges Ec2InstanceEventWindow#time_ranges}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges">putTimeRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetCronExpression">resetCronExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTimeRanges">resetTimeRanges</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2InstanceEventWindowTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>>

---

##### `putTimeRanges` <a name="putTimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges"></a>

```java
public void putTimeRanges(IResolvable|java.util.List<Ec2InstanceEventWindowTimeRanges> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.putTimeRanges.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>>

---

##### `resetCronExpression` <a name="resetCronExpression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetCronExpression"></a>

```java
public void resetCronExpression()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetName"></a>

```java
public void resetName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeRanges` <a name="resetTimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.resetTimeRanges"></a>

```java
public void resetTimeRanges()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2InstanceEventWindow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindow;

Ec2InstanceEventWindow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindow;

Ec2InstanceEventWindow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindow;

Ec2InstanceEventWindow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindow;

Ec2InstanceEventWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2InstanceEventWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2InstanceEventWindow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2InstanceEventWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2InstanceEventWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2InstanceEventWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.instanceEventWindowId">instanceEventWindowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList">Ec2InstanceEventWindowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRanges">timeRanges</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList">Ec2InstanceEventWindowTimeRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpressionInput">cronExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRangesInput">timeRangesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceEventWindowId`<sup>Required</sup> <a name="instanceEventWindowId" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.instanceEventWindowId"></a>

```java
public java.lang.String getInstanceEventWindowId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tags"></a>

```java
public Ec2InstanceEventWindowTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList">Ec2InstanceEventWindowTagsList</a>

---

##### `timeRanges`<sup>Required</sup> <a name="timeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRanges"></a>

```java
public Ec2InstanceEventWindowTimeRangesList getTimeRanges();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList">Ec2InstanceEventWindowTimeRangesList</a>

---

##### `cronExpressionInput`<sup>Optional</sup> <a name="cronExpressionInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpressionInput"></a>

```java
public java.lang.String getCronExpressionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceEventWindowTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>>

---

##### `timeRangesInput`<sup>Optional</sup> <a name="timeRangesInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.timeRangesInput"></a>

```java
public IResolvable|java.util.List<Ec2InstanceEventWindowTimeRanges> getTimeRangesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>>

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceEventWindowConfig <a name="Ec2InstanceEventWindowConfig" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindowConfig;

Ec2InstanceEventWindowConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cronExpression(java.lang.String)
//  .name(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2InstanceEventWindowTags>)
//  .timeRanges(IResolvable|java.util.List<Ec2InstanceEventWindowTimeRanges>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.cronExpression">cronExpression</a></code> | <code>java.lang.String</code> | The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>></code> | The tags applied to the event window. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.timeRanges">timeRanges</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>></code> | The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cronExpression`<sup>Optional</sup> <a name="cronExpression" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.cronExpression"></a>

```java
public java.lang.String getCronExpression();
```

- *Type:* java.lang.String

The cron expression defined for the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#cron_expression Ec2InstanceEventWindow#cron_expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#name Ec2InstanceEventWindow#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2InstanceEventWindowTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>>

The tags applied to the event window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#tags Ec2InstanceEventWindow#tags}

---

##### `timeRanges`<sup>Optional</sup> <a name="timeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowConfig.property.timeRanges"></a>

```java
public IResolvable|java.util.List<Ec2InstanceEventWindowTimeRanges> getTimeRanges();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>>

The time ranges of the event window. Exactly one of TimeRanges or CronExpression must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#time_ranges Ec2InstanceEventWindow#time_ranges}

---

### Ec2InstanceEventWindowTags <a name="Ec2InstanceEventWindowTags" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindowTags;

Ec2InstanceEventWindowTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#key Ec2InstanceEventWindow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#value Ec2InstanceEventWindow#value}

---

### Ec2InstanceEventWindowTimeRanges <a name="Ec2InstanceEventWindowTimeRanges" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindowTimeRanges;

Ec2InstanceEventWindowTimeRanges.builder()
//  .endHour(java.lang.Number)
//  .endWeekDay(java.lang.String)
//  .startHour(java.lang.Number)
//  .startWeekDay(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endHour">endHour</a></code> | <code>java.lang.Number</code> | The hour when the time range ends. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endWeekDay">endWeekDay</a></code> | <code>java.lang.String</code> | The day on which the time range ends. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startHour">startHour</a></code> | <code>java.lang.Number</code> | The hour when the time range begins. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startWeekDay">startWeekDay</a></code> | <code>java.lang.String</code> | The day on which the time range begins. |

---

##### `endHour`<sup>Optional</sup> <a name="endHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endHour"></a>

```java
public java.lang.Number getEndHour();
```

- *Type:* java.lang.Number

The hour when the time range ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_hour Ec2InstanceEventWindow#end_hour}

---

##### `endWeekDay`<sup>Optional</sup> <a name="endWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.endWeekDay"></a>

```java
public java.lang.String getEndWeekDay();
```

- *Type:* java.lang.String

The day on which the time range ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#end_week_day Ec2InstanceEventWindow#end_week_day}

---

##### `startHour`<sup>Optional</sup> <a name="startHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startHour"></a>

```java
public java.lang.Number getStartHour();
```

- *Type:* java.lang.Number

The hour when the time range begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_hour Ec2InstanceEventWindow#start_hour}

---

##### `startWeekDay`<sup>Optional</sup> <a name="startWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges.property.startWeekDay"></a>

```java
public java.lang.String getStartWeekDay();
```

- *Type:* java.lang.String

The day on which the time range begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_instance_event_window#start_week_day Ec2InstanceEventWindow#start_week_day}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2InstanceEventWindowTagsList <a name="Ec2InstanceEventWindowTagsList" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindowTagsList;

new Ec2InstanceEventWindowTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get"></a>

```java
public Ec2InstanceEventWindowTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceEventWindowTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>>

---


### Ec2InstanceEventWindowTagsOutputReference <a name="Ec2InstanceEventWindowTagsOutputReference" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindowTagsOutputReference;

new Ec2InstanceEventWindowTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceEventWindowTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTags">Ec2InstanceEventWindowTags</a>

---


### Ec2InstanceEventWindowTimeRangesList <a name="Ec2InstanceEventWindowTimeRangesList" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindowTimeRangesList;

new Ec2InstanceEventWindowTimeRangesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get"></a>

```java
public Ec2InstanceEventWindowTimeRangesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2InstanceEventWindowTimeRanges> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>>

---


### Ec2InstanceEventWindowTimeRangesOutputReference <a name="Ec2InstanceEventWindowTimeRangesOutputReference" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_instance_event_window.Ec2InstanceEventWindowTimeRangesOutputReference;

new Ec2InstanceEventWindowTimeRangesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndHour">resetEndHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndWeekDay">resetEndWeekDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartHour">resetStartHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartWeekDay">resetStartWeekDay</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndHour` <a name="resetEndHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndHour"></a>

```java
public void resetEndHour()
```

##### `resetEndWeekDay` <a name="resetEndWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetEndWeekDay"></a>

```java
public void resetEndWeekDay()
```

##### `resetStartHour` <a name="resetStartHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartHour"></a>

```java
public void resetStartHour()
```

##### `resetStartWeekDay` <a name="resetStartWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.resetStartWeekDay"></a>

```java
public void resetStartWeekDay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHourInput">endHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDayInput">endWeekDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHourInput">startHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDayInput">startWeekDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHour">endHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDay">endWeekDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHour">startHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDay">startWeekDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endHourInput`<sup>Optional</sup> <a name="endHourInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHourInput"></a>

```java
public java.lang.Number getEndHourInput();
```

- *Type:* java.lang.Number

---

##### `endWeekDayInput`<sup>Optional</sup> <a name="endWeekDayInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDayInput"></a>

```java
public java.lang.String getEndWeekDayInput();
```

- *Type:* java.lang.String

---

##### `startHourInput`<sup>Optional</sup> <a name="startHourInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHourInput"></a>

```java
public java.lang.Number getStartHourInput();
```

- *Type:* java.lang.Number

---

##### `startWeekDayInput`<sup>Optional</sup> <a name="startWeekDayInput" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDayInput"></a>

```java
public java.lang.String getStartWeekDayInput();
```

- *Type:* java.lang.String

---

##### `endHour`<sup>Required</sup> <a name="endHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endHour"></a>

```java
public java.lang.Number getEndHour();
```

- *Type:* java.lang.Number

---

##### `endWeekDay`<sup>Required</sup> <a name="endWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.endWeekDay"></a>

```java
public java.lang.String getEndWeekDay();
```

- *Type:* java.lang.String

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startHour"></a>

```java
public java.lang.Number getStartHour();
```

- *Type:* java.lang.Number

---

##### `startWeekDay`<sup>Required</sup> <a name="startWeekDay" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.startWeekDay"></a>

```java
public java.lang.String getStartWeekDay();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRangesOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2InstanceEventWindowTimeRanges getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2InstanceEventWindow.Ec2InstanceEventWindowTimeRanges">Ec2InstanceEventWindowTimeRanges</a>

---



