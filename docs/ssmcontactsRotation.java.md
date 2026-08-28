# `ssmcontactsRotation` Submodule <a name="`ssmcontactsRotation` Submodule" id="@cdktn/provider-awscc.ssmcontactsRotation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsRotation <a name="SsmcontactsRotation" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation awscc_ssmcontacts_rotation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotation;

SsmcontactsRotation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .contactIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .recurrence(SsmcontactsRotationRecurrence)
    .startTime(java.lang.String)
    .timeZoneId(java.lang.String)
//  .tags(IResolvable|java.util.List<SsmcontactsRotationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.contactIds">contactIds</a></code> | <code>java.util.List<java.lang.String></code> | Members of the rotation. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Rotation. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.recurrence">recurrence</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a></code> | Information about when an on-call rotation is in effect and how long the rotation period lasts. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | Start time of the first shift of Oncall Schedule. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.timeZoneId">timeZoneId</a></code> | <code>java.lang.String</code> | TimeZone Identifier for the Oncall Schedule. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `contactIds`<sup>Required</sup> <a name="contactIds" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.contactIds"></a>

- *Type:* java.util.List<java.lang.String>

Members of the rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.recurrence"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>

Information about when an on-call rotation is in effect and how long the rotation period lasts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#recurrence SsmcontactsRotation#recurrence}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

Start time of the first shift of Oncall Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.timeZoneId"></a>

- *Type:* java.lang.String

TimeZone Identifier for the Oncall Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putRecurrence">putRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecurrence` <a name="putRecurrence" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putRecurrence"></a>

```java
public void putRecurrence(SsmcontactsRotationRecurrence value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putRecurrence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SsmcontactsRotationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmcontactsRotation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotation;

SsmcontactsRotation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotation;

SsmcontactsRotation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotation;

SsmcontactsRotation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotation;

SsmcontactsRotation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsmcontactsRotation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsmcontactsRotation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsmcontactsRotation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsmcontactsRotation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsRotation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.recurrence">recurrence</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference">SsmcontactsRotationRecurrenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList">SsmcontactsRotationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.contactIdsInput">contactIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.recurrenceInput">recurrenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneIdInput">timeZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.contactIds">contactIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneId">timeZoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.recurrence"></a>

```java
public SsmcontactsRotationRecurrenceOutputReference getRecurrence();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference">SsmcontactsRotationRecurrenceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tags"></a>

```java
public SsmcontactsRotationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList">SsmcontactsRotationTagsList</a>

---

##### `contactIdsInput`<sup>Optional</sup> <a name="contactIdsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.contactIdsInput"></a>

```java
public java.util.List<java.lang.String> getContactIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.recurrenceInput"></a>

```java
public IResolvable|SsmcontactsRotationRecurrence getRecurrenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>>

---

##### `timeZoneIdInput`<sup>Optional</sup> <a name="timeZoneIdInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneIdInput"></a>

```java
public java.lang.String getTimeZoneIdInput();
```

- *Type:* java.lang.String

---

##### `contactIds`<sup>Required</sup> <a name="contactIds" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.contactIds"></a>

```java
public java.util.List<java.lang.String> getContactIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.timeZoneId"></a>

```java
public java.lang.String getTimeZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsRotationConfig <a name="SsmcontactsRotationConfig" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationConfig;

SsmcontactsRotationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .contactIds(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .recurrence(SsmcontactsRotationRecurrence)
    .startTime(java.lang.String)
    .timeZoneId(java.lang.String)
//  .tags(IResolvable|java.util.List<SsmcontactsRotationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.contactIds">contactIds</a></code> | <code>java.util.List<java.lang.String></code> | Members of the rotation. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Rotation. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.recurrence">recurrence</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a></code> | Information about when an on-call rotation is in effect and how long the rotation period lasts. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Start time of the first shift of Oncall Schedule. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.timeZoneId">timeZoneId</a></code> | <code>java.lang.String</code> | TimeZone Identifier for the Oncall Schedule. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `contactIds`<sup>Required</sup> <a name="contactIds" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.contactIds"></a>

```java
public java.util.List<java.lang.String> getContactIds();
```

- *Type:* java.util.List<java.lang.String>

Members of the rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#contact_ids SsmcontactsRotation#contact_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#name SsmcontactsRotation#name}

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.recurrence"></a>

```java
public SsmcontactsRotationRecurrence getRecurrence();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>

Information about when an on-call rotation is in effect and how long the rotation period lasts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#recurrence SsmcontactsRotation#recurrence}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Start time of the first shift of Oncall Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}

---

##### `timeZoneId`<sup>Required</sup> <a name="timeZoneId" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.timeZoneId"></a>

```java
public java.lang.String getTimeZoneId();
```

- *Type:* java.lang.String

TimeZone Identifier for the Oncall Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#time_zone_id SsmcontactsRotation#time_zone_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#tags SsmcontactsRotation#tags}.

---

### SsmcontactsRotationRecurrence <a name="SsmcontactsRotationRecurrence" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrence;

SsmcontactsRotationRecurrence.builder()
//  .dailySettings(java.util.List<java.lang.String>)
//  .monthlySettings(IResolvable|java.util.List<SsmcontactsRotationRecurrenceMonthlySettings>)
//  .numberOfOnCalls(java.lang.Number)
//  .recurrenceMultiplier(java.lang.Number)
//  .shiftCoverages(IResolvable|java.util.List<SsmcontactsRotationRecurrenceShiftCoverages>)
//  .weeklySettings(IResolvable|java.util.List<SsmcontactsRotationRecurrenceWeeklySettings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.dailySettings">dailySettings</a></code> | <code>java.util.List<java.lang.String></code> | Information about on-call rotations that recur daily. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.monthlySettings">monthlySettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>></code> | Information about on-call rotations that recur monthly. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.numberOfOnCalls">numberOfOnCalls</a></code> | <code>java.lang.Number</code> | Number of Oncalls per shift. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.recurrenceMultiplier">recurrenceMultiplier</a></code> | <code>java.lang.Number</code> | The number of days, weeks, or months a single rotation lasts. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.shiftCoverages">shiftCoverages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>></code> | Information about the days of the week included in on-call rotation coverage. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.weeklySettings">weeklySettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>></code> | Information about on-call rotations that recur weekly. |

---

##### `dailySettings`<sup>Optional</sup> <a name="dailySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.dailySettings"></a>

```java
public java.util.List<java.lang.String> getDailySettings();
```

- *Type:* java.util.List<java.lang.String>

Information about on-call rotations that recur daily.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#daily_settings SsmcontactsRotation#daily_settings}

---

##### `monthlySettings`<sup>Optional</sup> <a name="monthlySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.monthlySettings"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceMonthlySettings> getMonthlySettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>>

Information about on-call rotations that recur monthly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#monthly_settings SsmcontactsRotation#monthly_settings}

---

##### `numberOfOnCalls`<sup>Optional</sup> <a name="numberOfOnCalls" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.numberOfOnCalls"></a>

```java
public java.lang.Number getNumberOfOnCalls();
```

- *Type:* java.lang.Number

Number of Oncalls per shift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#number_of_on_calls SsmcontactsRotation#number_of_on_calls}

---

##### `recurrenceMultiplier`<sup>Optional</sup> <a name="recurrenceMultiplier" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.recurrenceMultiplier"></a>

```java
public java.lang.Number getRecurrenceMultiplier();
```

- *Type:* java.lang.Number

The number of days, weeks, or months a single rotation lasts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#recurrence_multiplier SsmcontactsRotation#recurrence_multiplier}

---

##### `shiftCoverages`<sup>Optional</sup> <a name="shiftCoverages" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.shiftCoverages"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceShiftCoverages> getShiftCoverages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>>

Information about the days of the week included in on-call rotation coverage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#shift_coverages SsmcontactsRotation#shift_coverages}

---

##### `weeklySettings`<sup>Optional</sup> <a name="weeklySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence.property.weeklySettings"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceWeeklySettings> getWeeklySettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>>

Information about on-call rotations that recur weekly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#weekly_settings SsmcontactsRotation#weekly_settings}

---

### SsmcontactsRotationRecurrenceMonthlySettings <a name="SsmcontactsRotationRecurrenceMonthlySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceMonthlySettings;

SsmcontactsRotationRecurrenceMonthlySettings.builder()
//  .dayOfMonth(java.lang.Number)
//  .handOffTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.Number</code> | The day of the month when monthly recurring on-call rotations begin. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.handOffTime">handOffTime</a></code> | <code>java.lang.String</code> | Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM. |

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.dayOfMonth"></a>

```java
public java.lang.Number getDayOfMonth();
```

- *Type:* java.lang.Number

The day of the month when monthly recurring on-call rotations begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#day_of_month SsmcontactsRotation#day_of_month}

---

##### `handOffTime`<sup>Optional</sup> <a name="handOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings.property.handOffTime"></a>

```java
public java.lang.String getHandOffTime();
```

- *Type:* java.lang.String

Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}

---

### SsmcontactsRotationRecurrenceShiftCoverages <a name="SsmcontactsRotationRecurrenceShiftCoverages" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceShiftCoverages;

SsmcontactsRotationRecurrenceShiftCoverages.builder()
//  .coverageTimes(IResolvable|java.util.List<SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes>)
//  .dayOfWeek(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.coverageTimes">coverageTimes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>></code> | Information about when an on-call shift begins and ends. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | The day of the week when weekly recurring on-call shift rotations begin. |

---

##### `coverageTimes`<sup>Optional</sup> <a name="coverageTimes" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.coverageTimes"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes> getCoverageTimes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>>

Information about when an on-call shift begins and ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#coverage_times SsmcontactsRotation#coverage_times}

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

The day of the week when weekly recurring on-call shift rotations begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}

---

### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes;

SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.builder()
//  .endTime(java.lang.String)
//  .startTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.endTime">endTime</a></code> | <code>java.lang.String</code> | Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.startTime">startTime</a></code> | <code>java.lang.String</code> | Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#end_time SsmcontactsRotation#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#start_time SsmcontactsRotation#start_time}

---

### SsmcontactsRotationRecurrenceWeeklySettings <a name="SsmcontactsRotationRecurrenceWeeklySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceWeeklySettings;

SsmcontactsRotationRecurrenceWeeklySettings.builder()
//  .dayOfWeek(java.lang.String)
//  .handOffTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | The day of the week when weekly recurring on-call shift rotations begin. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.handOffTime">handOffTime</a></code> | <code>java.lang.String</code> | Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM. |

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

The day of the week when weekly recurring on-call shift rotations begin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#day_of_week SsmcontactsRotation#day_of_week}

---

##### `handOffTime`<sup>Optional</sup> <a name="handOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings.property.handOffTime"></a>

```java
public java.lang.String getHandOffTime();
```

- *Type:* java.lang.String

Details about when an on-call rotation shift begins or ends. Time of the day in format HH:MM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#hand_off_time SsmcontactsRotation#hand_off_time}

---

### SsmcontactsRotationTags <a name="SsmcontactsRotationTags" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationTags;

SsmcontactsRotationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#key SsmcontactsRotation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_rotation#value SsmcontactsRotation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsRotationRecurrenceMonthlySettingsList <a name="SsmcontactsRotationRecurrenceMonthlySettingsList" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceMonthlySettingsList;

new SsmcontactsRotationRecurrenceMonthlySettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get"></a>

```java
public SsmcontactsRotationRecurrenceMonthlySettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceMonthlySettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>>

---


### SsmcontactsRotationRecurrenceMonthlySettingsOutputReference <a name="SsmcontactsRotationRecurrenceMonthlySettingsOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference;

new SsmcontactsRotationRecurrenceMonthlySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetHandOffTime">resetHandOffTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetDayOfMonth"></a>

```java
public void resetDayOfMonth()
```

##### `resetHandOffTime` <a name="resetHandOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.resetHandOffTime"></a>

```java
public void resetHandOffTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTimeInput">handOffTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime">handOffTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonthInput"></a>

```java
public java.lang.Number getDayOfMonthInput();
```

- *Type:* java.lang.Number

---

##### `handOffTimeInput`<sup>Optional</sup> <a name="handOffTimeInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTimeInput"></a>

```java
public java.lang.String getHandOffTimeInput();
```

- *Type:* java.lang.String

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.dayOfMonth"></a>

```java
public java.lang.Number getDayOfMonth();
```

- *Type:* java.lang.Number

---

##### `handOffTime`<sup>Required</sup> <a name="handOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.handOffTime"></a>

```java
public java.lang.String getHandOffTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmcontactsRotationRecurrenceMonthlySettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>

---


### SsmcontactsRotationRecurrenceOutputReference <a name="SsmcontactsRotationRecurrenceOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceOutputReference;

new SsmcontactsRotationRecurrenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings">putMonthlySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages">putShiftCoverages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings">putWeeklySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetDailySettings">resetDailySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetMonthlySettings">resetMonthlySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetNumberOfOnCalls">resetNumberOfOnCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetRecurrenceMultiplier">resetRecurrenceMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetShiftCoverages">resetShiftCoverages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetWeeklySettings">resetWeeklySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonthlySettings` <a name="putMonthlySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings"></a>

```java
public void putMonthlySettings(IResolvable|java.util.List<SsmcontactsRotationRecurrenceMonthlySettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putMonthlySettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>>

---

##### `putShiftCoverages` <a name="putShiftCoverages" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages"></a>

```java
public void putShiftCoverages(IResolvable|java.util.List<SsmcontactsRotationRecurrenceShiftCoverages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putShiftCoverages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>>

---

##### `putWeeklySettings` <a name="putWeeklySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings"></a>

```java
public void putWeeklySettings(IResolvable|java.util.List<SsmcontactsRotationRecurrenceWeeklySettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.putWeeklySettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>>

---

##### `resetDailySettings` <a name="resetDailySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetDailySettings"></a>

```java
public void resetDailySettings()
```

##### `resetMonthlySettings` <a name="resetMonthlySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetMonthlySettings"></a>

```java
public void resetMonthlySettings()
```

##### `resetNumberOfOnCalls` <a name="resetNumberOfOnCalls" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetNumberOfOnCalls"></a>

```java
public void resetNumberOfOnCalls()
```

##### `resetRecurrenceMultiplier` <a name="resetRecurrenceMultiplier" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetRecurrenceMultiplier"></a>

```java
public void resetRecurrenceMultiplier()
```

##### `resetShiftCoverages` <a name="resetShiftCoverages" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetShiftCoverages"></a>

```java
public void resetShiftCoverages()
```

##### `resetWeeklySettings` <a name="resetWeeklySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.resetWeeklySettings"></a>

```java
public void resetWeeklySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettings">monthlySettings</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList">SsmcontactsRotationRecurrenceMonthlySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages">shiftCoverages</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList">SsmcontactsRotationRecurrenceShiftCoveragesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettings">weeklySettings</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList">SsmcontactsRotationRecurrenceWeeklySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettingsInput">dailySettingsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettingsInput">monthlySettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCallsInput">numberOfOnCallsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplierInput">recurrenceMultiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoveragesInput">shiftCoveragesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettingsInput">weeklySettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettings">dailySettings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls">numberOfOnCalls</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier">recurrenceMultiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `monthlySettings`<sup>Required</sup> <a name="monthlySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettings"></a>

```java
public SsmcontactsRotationRecurrenceMonthlySettingsList getMonthlySettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettingsList">SsmcontactsRotationRecurrenceMonthlySettingsList</a>

---

##### `shiftCoverages`<sup>Required</sup> <a name="shiftCoverages" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoverages"></a>

```java
public SsmcontactsRotationRecurrenceShiftCoveragesList getShiftCoverages();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList">SsmcontactsRotationRecurrenceShiftCoveragesList</a>

---

##### `weeklySettings`<sup>Required</sup> <a name="weeklySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettings"></a>

```java
public SsmcontactsRotationRecurrenceWeeklySettingsList getWeeklySettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList">SsmcontactsRotationRecurrenceWeeklySettingsList</a>

---

##### `dailySettingsInput`<sup>Optional</sup> <a name="dailySettingsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettingsInput"></a>

```java
public java.util.List<java.lang.String> getDailySettingsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `monthlySettingsInput`<sup>Optional</sup> <a name="monthlySettingsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.monthlySettingsInput"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceMonthlySettings> getMonthlySettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceMonthlySettings">SsmcontactsRotationRecurrenceMonthlySettings</a>>

---

##### `numberOfOnCallsInput`<sup>Optional</sup> <a name="numberOfOnCallsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCallsInput"></a>

```java
public java.lang.Number getNumberOfOnCallsInput();
```

- *Type:* java.lang.Number

---

##### `recurrenceMultiplierInput`<sup>Optional</sup> <a name="recurrenceMultiplierInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplierInput"></a>

```java
public java.lang.Number getRecurrenceMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `shiftCoveragesInput`<sup>Optional</sup> <a name="shiftCoveragesInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.shiftCoveragesInput"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceShiftCoverages> getShiftCoveragesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>>

---

##### `weeklySettingsInput`<sup>Optional</sup> <a name="weeklySettingsInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.weeklySettingsInput"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceWeeklySettings> getWeeklySettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>>

---

##### `dailySettings`<sup>Required</sup> <a name="dailySettings" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.dailySettings"></a>

```java
public java.util.List<java.lang.String> getDailySettings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `numberOfOnCalls`<sup>Required</sup> <a name="numberOfOnCalls" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.numberOfOnCalls"></a>

```java
public java.lang.Number getNumberOfOnCalls();
```

- *Type:* java.lang.Number

---

##### `recurrenceMultiplier`<sup>Required</sup> <a name="recurrenceMultiplier" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.recurrenceMultiplier"></a>

```java
public java.lang.Number getRecurrenceMultiplier();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmcontactsRotationRecurrence getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrence">SsmcontactsRotationRecurrence</a>

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList;

new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get"></a>

```java
public SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>>

---


### SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference;

new SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>

---


### SsmcontactsRotationRecurrenceShiftCoveragesList <a name="SsmcontactsRotationRecurrenceShiftCoveragesList" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceShiftCoveragesList;

new SsmcontactsRotationRecurrenceShiftCoveragesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get"></a>

```java
public SsmcontactsRotationRecurrenceShiftCoveragesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceShiftCoverages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>>

---


### SsmcontactsRotationRecurrenceShiftCoveragesOutputReference <a name="SsmcontactsRotationRecurrenceShiftCoveragesOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference;

new SsmcontactsRotationRecurrenceShiftCoveragesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes">putCoverageTimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetCoverageTimes">resetCoverageTimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoverageTimes` <a name="putCoverageTimes" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes"></a>

```java
public void putCoverageTimes(IResolvable|java.util.List<SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.putCoverageTimes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>>

---

##### `resetCoverageTimes` <a name="resetCoverageTimes" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetCoverageTimes"></a>

```java
public void resetCoverageTimes()
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.resetDayOfWeek"></a>

```java
public void resetDayOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes">coverageTimes</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimesInput">coverageTimesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `coverageTimes`<sup>Required</sup> <a name="coverageTimes" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimes"></a>

```java
public SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList getCoverageTimes();
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimesList</a>

---

##### `coverageTimesInput`<sup>Optional</sup> <a name="coverageTimesInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.coverageTimesInput"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes> getCoverageTimesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes">SsmcontactsRotationRecurrenceShiftCoveragesCoverageTimes</a>>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoveragesOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmcontactsRotationRecurrenceShiftCoverages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceShiftCoverages">SsmcontactsRotationRecurrenceShiftCoverages</a>

---


### SsmcontactsRotationRecurrenceWeeklySettingsList <a name="SsmcontactsRotationRecurrenceWeeklySettingsList" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceWeeklySettingsList;

new SsmcontactsRotationRecurrenceWeeklySettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get"></a>

```java
public SsmcontactsRotationRecurrenceWeeklySettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationRecurrenceWeeklySettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>>

---


### SsmcontactsRotationRecurrenceWeeklySettingsOutputReference <a name="SsmcontactsRotationRecurrenceWeeklySettingsOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference;

new SsmcontactsRotationRecurrenceWeeklySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetHandOffTime">resetHandOffTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetDayOfWeek"></a>

```java
public void resetDayOfWeek()
```

##### `resetHandOffTime` <a name="resetHandOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.resetHandOffTime"></a>

```java
public void resetHandOffTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTimeInput">handOffTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime">handOffTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `handOffTimeInput`<sup>Optional</sup> <a name="handOffTimeInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTimeInput"></a>

```java
public java.lang.String getHandOffTimeInput();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `handOffTime`<sup>Required</sup> <a name="handOffTime" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.handOffTime"></a>

```java
public java.lang.String getHandOffTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmcontactsRotationRecurrenceWeeklySettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationRecurrenceWeeklySettings">SsmcontactsRotationRecurrenceWeeklySettings</a>

---


### SsmcontactsRotationTagsList <a name="SsmcontactsRotationTagsList" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationTagsList;

new SsmcontactsRotationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.get"></a>

```java
public SsmcontactsRotationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SsmcontactsRotationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>>

---


### SsmcontactsRotationTagsOutputReference <a name="SsmcontactsRotationTagsOutputReference" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ssmcontacts_rotation.SsmcontactsRotationTagsOutputReference;

new SsmcontactsRotationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsmcontactsRotationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsRotation.SsmcontactsRotationTags">SsmcontactsRotationTags</a>

---



