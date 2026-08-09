# `guarddutyPublishingDestination` Submodule <a name="`guarddutyPublishingDestination` Submodule" id="@cdktn/provider-awscc.guarddutyPublishingDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyPublishingDestination <a name="GuarddutyPublishingDestination" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination awscc_guardduty_publishing_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_publishing_destination.GuarddutyPublishingDestination;

GuarddutyPublishingDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinationProperties(GuarddutyPublishingDestinationDestinationProperties)
    .destinationType(java.lang.String)
    .detectorId(java.lang.String)
//  .tags(IResolvable|java.util.List<GuarddutyPublishingDestinationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.destinationProperties">destinationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_properties GuarddutyPublishingDestination#destination_properties}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.destinationType">destinationType</a></code> | <code>java.lang.String</code> | The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.detectorId">detectorId</a></code> | <code>java.lang.String</code> | The ID of the GuardDuty detector associated with the publishing destination. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#tags GuarddutyPublishingDestination#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationProperties`<sup>Required</sup> <a name="destinationProperties" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.destinationProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_properties GuarddutyPublishingDestination#destination_properties}.

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.destinationType"></a>

- *Type:* java.lang.String

The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_type GuarddutyPublishingDestination#destination_type}

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.detectorId"></a>

- *Type:* java.lang.String

The ID of the GuardDuty detector associated with the publishing destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#detector_id GuarddutyPublishingDestination#detector_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#tags GuarddutyPublishingDestination#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putDestinationProperties">putDestinationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationProperties` <a name="putDestinationProperties" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putDestinationProperties"></a>

```java
public void putDestinationProperties(GuarddutyPublishingDestinationDestinationProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putDestinationProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GuarddutyPublishingDestinationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyPublishingDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isConstruct"></a>

```java
import io.cdktn.providers.awscc.guardduty_publishing_destination.GuarddutyPublishingDestination;

GuarddutyPublishingDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.guardduty_publishing_destination.GuarddutyPublishingDestination;

GuarddutyPublishingDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.guardduty_publishing_destination.GuarddutyPublishingDestination;

GuarddutyPublishingDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.guardduty_publishing_destination.GuarddutyPublishingDestination;

GuarddutyPublishingDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GuarddutyPublishingDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GuarddutyPublishingDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GuarddutyPublishingDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GuarddutyPublishingDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyPublishingDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationProperties">destinationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference">GuarddutyPublishingDestinationDestinationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.publishingDestinationId">publishingDestinationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.publishingFailureStartTimestamp">publishingFailureStartTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList">GuarddutyPublishingDestinationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationPropertiesInput">destinationPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationTypeInput">destinationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorIdInput">detectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationProperties`<sup>Required</sup> <a name="destinationProperties" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationProperties"></a>

```java
public GuarddutyPublishingDestinationDestinationPropertiesOutputReference getDestinationProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference">GuarddutyPublishingDestinationDestinationPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `publishingDestinationId`<sup>Required</sup> <a name="publishingDestinationId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.publishingDestinationId"></a>

```java
public java.lang.String getPublishingDestinationId();
```

- *Type:* java.lang.String

---

##### `publishingFailureStartTimestamp`<sup>Required</sup> <a name="publishingFailureStartTimestamp" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.publishingFailureStartTimestamp"></a>

```java
public java.lang.String getPublishingFailureStartTimestamp();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tags"></a>

```java
public GuarddutyPublishingDestinationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList">GuarddutyPublishingDestinationTagsList</a>

---

##### `destinationPropertiesInput`<sup>Optional</sup> <a name="destinationPropertiesInput" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationPropertiesInput"></a>

```java
public IResolvable|GuarddutyPublishingDestinationDestinationProperties getDestinationPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a>

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationTypeInput"></a>

```java
public java.lang.String getDestinationTypeInput();
```

- *Type:* java.lang.String

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorIdInput"></a>

```java
public java.lang.String getDetectorIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GuarddutyPublishingDestinationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>>

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyPublishingDestinationConfig <a name="GuarddutyPublishingDestinationConfig" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_publishing_destination.GuarddutyPublishingDestinationConfig;

GuarddutyPublishingDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .destinationProperties(GuarddutyPublishingDestinationDestinationProperties)
    .destinationType(java.lang.String)
    .detectorId(java.lang.String)
//  .tags(IResolvable|java.util.List<GuarddutyPublishingDestinationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationProperties">destinationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_properties GuarddutyPublishingDestination#destination_properties}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationType">destinationType</a></code> | <code>java.lang.String</code> | The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | The ID of the GuardDuty detector associated with the publishing destination. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#tags GuarddutyPublishingDestination#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `destinationProperties`<sup>Required</sup> <a name="destinationProperties" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationProperties"></a>

```java
public GuarddutyPublishingDestinationDestinationProperties getDestinationProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_properties GuarddutyPublishingDestination#destination_properties}.

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.destinationType"></a>

```java
public java.lang.String getDestinationType();
```

- *Type:* java.lang.String

The type of resource for the publishing destination. Currently only Amazon S3 buckets are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_type GuarddutyPublishingDestination#destination_type}

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

The ID of the GuardDuty detector associated with the publishing destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#detector_id GuarddutyPublishingDestination#detector_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GuarddutyPublishingDestinationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#tags GuarddutyPublishingDestination#tags}.

---

### GuarddutyPublishingDestinationDestinationProperties <a name="GuarddutyPublishingDestinationDestinationProperties" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_publishing_destination.GuarddutyPublishingDestinationDestinationProperties;

GuarddutyPublishingDestinationDestinationProperties.builder()
//  .destinationArn(java.lang.String)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | The ARN of the resource to publish to. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key to use for encryption. |

---

##### `destinationArn`<sup>Optional</sup> <a name="destinationArn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

The ARN of the resource to publish to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#destination_arn GuarddutyPublishingDestination#destination_arn}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#kms_key_arn GuarddutyPublishingDestination#kms_key_arn}

---

### GuarddutyPublishingDestinationTags <a name="GuarddutyPublishingDestinationTags" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_publishing_destination.GuarddutyPublishingDestinationTags;

GuarddutyPublishingDestinationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#key GuarddutyPublishingDestination#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#value GuarddutyPublishingDestination#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#key GuarddutyPublishingDestination#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_publishing_destination#value GuarddutyPublishingDestination#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyPublishingDestinationDestinationPropertiesOutputReference <a name="GuarddutyPublishingDestinationDestinationPropertiesOutputReference" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_publishing_destination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference;

new GuarddutyPublishingDestinationDestinationPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resetDestinationArn">resetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationArn` <a name="resetDestinationArn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resetDestinationArn"></a>

```java
public void resetDestinationArn()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.destinationArn">destinationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.destinationArnInput"></a>

```java
public java.lang.String getDestinationArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.destinationArn"></a>

```java
public java.lang.String getDestinationArn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyPublishingDestinationDestinationProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationDestinationProperties">GuarddutyPublishingDestinationDestinationProperties</a>

---


### GuarddutyPublishingDestinationTagsList <a name="GuarddutyPublishingDestinationTagsList" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_publishing_destination.GuarddutyPublishingDestinationTagsList;

new GuarddutyPublishingDestinationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.get"></a>

```java
public GuarddutyPublishingDestinationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GuarddutyPublishingDestinationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>>

---


### GuarddutyPublishingDestinationTagsOutputReference <a name="GuarddutyPublishingDestinationTagsOutputReference" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_publishing_destination.GuarddutyPublishingDestinationTagsOutputReference;

new GuarddutyPublishingDestinationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyPublishingDestinationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyPublishingDestination.GuarddutyPublishingDestinationTags">GuarddutyPublishingDestinationTags</a>

---



