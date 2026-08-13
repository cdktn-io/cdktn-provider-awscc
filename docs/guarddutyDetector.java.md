# `guarddutyDetector` Submodule <a name="`guarddutyDetector` Submodule" id="@cdktn/provider-awscc.guarddutyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyDetector <a name="GuarddutyDetector" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector awscc_guardduty_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetector;

GuarddutyDetector.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enable(java.lang.Boolean|IResolvable)
//  .dataSources(GuarddutyDetectorDataSources)
//  .features(IResolvable|java.util.List<GuarddutyDetectorFeatures>)
//  .findingPublishingFrequency(java.lang.String)
//  .tags(IResolvable|java.util.List<GuarddutyDetectorTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#data_sources GuarddutyDetector#data_sources}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.features">features</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#features GuarddutyDetector#features}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.findingPublishingFrequency">findingPublishingFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.enable"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.dataSources"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#data_sources GuarddutyDetector#data_sources}.

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.features"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#features GuarddutyDetector#features}.

---

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="findingPublishingFrequency" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.findingPublishingFrequency"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putFeatures">putFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetFeatures">resetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency">resetFindingPublishingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSources` <a name="putDataSources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putDataSources"></a>

```java
public void putDataSources(GuarddutyDetectorDataSources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a>

---

##### `putFeatures` <a name="putFeatures" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putFeatures"></a>

```java
public void putFeatures(IResolvable|java.util.List<GuarddutyDetectorFeatures> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putFeatures.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GuarddutyDetectorTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>>

---

##### `resetDataSources` <a name="resetDataSources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetDataSources"></a>

```java
public void resetDataSources()
```

##### `resetFeatures` <a name="resetFeatures" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetFeatures"></a>

```java
public void resetFeatures()
```

##### `resetFindingPublishingFrequency` <a name="resetFindingPublishingFrequency" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency"></a>

```java
public void resetFindingPublishingFrequency()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isConstruct"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetector;

GuarddutyDetector.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetector;

GuarddutyDetector.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetector;

GuarddutyDetector.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetector;

GuarddutyDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GuarddutyDetector.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GuarddutyDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GuarddutyDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GuarddutyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference">GuarddutyDetectorDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.detectorId">detectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.features">features</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList">GuarddutyDetectorFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList">GuarddutyDetectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dataSourcesInput">dataSourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.featuresInput">featuresInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput">findingPublishingFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency">findingPublishingFrequency</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dataSources"></a>

```java
public GuarddutyDetectorDataSourcesOutputReference getDataSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference">GuarddutyDetectorDataSourcesOutputReference</a>

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.detectorId"></a>

```java
public java.lang.String getDetectorId();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.features"></a>

```java
public GuarddutyDetectorFeaturesList getFeatures();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList">GuarddutyDetectorFeaturesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tags"></a>

```java
public GuarddutyDetectorTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList">GuarddutyDetectorTagsList</a>

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.dataSourcesInput"></a>

```java
public IResolvable|GuarddutyDetectorDataSources getDataSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.enableInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.featuresInput"></a>

```java
public IResolvable|java.util.List<GuarddutyDetectorFeatures> getFeaturesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>>

---

##### `findingPublishingFrequencyInput`<sup>Optional</sup> <a name="findingPublishingFrequencyInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput"></a>

```java
public java.lang.String getFindingPublishingFrequencyInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GuarddutyDetectorTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `findingPublishingFrequency`<sup>Required</sup> <a name="findingPublishingFrequency" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency"></a>

```java
public java.lang.String getFindingPublishingFrequency();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetector.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyDetectorConfig <a name="GuarddutyDetectorConfig" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorConfig;

GuarddutyDetectorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enable(java.lang.Boolean|IResolvable)
//  .dataSources(GuarddutyDetectorDataSources)
//  .features(IResolvable|java.util.List<GuarddutyDetectorFeatures>)
//  .findingPublishingFrequency(java.lang.String)
//  .tags(IResolvable|java.util.List<GuarddutyDetectorTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#data_sources GuarddutyDetector#data_sources}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.features">features</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#features GuarddutyDetector#features}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency">findingPublishingFrequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.dataSources"></a>

```java
public GuarddutyDetectorDataSources getDataSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#data_sources GuarddutyDetector#data_sources}.

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.features"></a>

```java
public IResolvable|java.util.List<GuarddutyDetectorFeatures> getFeatures();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#features GuarddutyDetector#features}.

---

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="findingPublishingFrequency" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency"></a>

```java
public java.lang.String getFindingPublishingFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GuarddutyDetectorTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}.

---

### GuarddutyDetectorDataSources <a name="GuarddutyDetectorDataSources" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSources;

GuarddutyDetectorDataSources.builder()
//  .kubernetes(GuarddutyDetectorDataSourcesKubernetes)
//  .malwareProtection(GuarddutyDetectorDataSourcesMalwareProtection)
//  .s3Logs(GuarddutyDetectorDataSourcesS3Logs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#kubernetes GuarddutyDetector#kubernetes}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.malwareProtection">malwareProtection</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#malware_protection GuarddutyDetector#malware_protection}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}. |

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.kubernetes"></a>

```java
public GuarddutyDetectorDataSourcesKubernetes getKubernetes();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#kubernetes GuarddutyDetector#kubernetes}.

---

##### `malwareProtection`<sup>Optional</sup> <a name="malwareProtection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.malwareProtection"></a>

```java
public GuarddutyDetectorDataSourcesMalwareProtection getMalwareProtection();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#malware_protection GuarddutyDetector#malware_protection}.

---

##### `s3Logs`<sup>Optional</sup> <a name="s3Logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources.property.s3Logs"></a>

```java
public GuarddutyDetectorDataSourcesS3Logs getS3Logs();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}.

---

### GuarddutyDetectorDataSourcesKubernetes <a name="GuarddutyDetectorDataSourcesKubernetes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSourcesKubernetes;

GuarddutyDetectorDataSourcesKubernetes.builder()
//  .auditLogs(GuarddutyDetectorDataSourcesKubernetesAuditLogs)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes.property.auditLogs">auditLogs</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#audit_logs GuarddutyDetector#audit_logs}. |

---

##### `auditLogs`<sup>Optional</sup> <a name="auditLogs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes.property.auditLogs"></a>

```java
public GuarddutyDetectorDataSourcesKubernetesAuditLogs getAuditLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#audit_logs GuarddutyDetector#audit_logs}.

---

### GuarddutyDetectorDataSourcesKubernetesAuditLogs <a name="GuarddutyDetectorDataSourcesKubernetesAuditLogs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSourcesKubernetesAuditLogs;

GuarddutyDetectorDataSourcesKubernetesAuditLogs.builder()
//  .enable(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

### GuarddutyDetectorDataSourcesMalwareProtection <a name="GuarddutyDetectorDataSourcesMalwareProtection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSourcesMalwareProtection;

GuarddutyDetectorDataSourcesMalwareProtection.builder()
//  .scanEc2InstanceWithFindings(GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection.property.scanEc2InstanceWithFindings">scanEc2InstanceWithFindings</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#scan_ec_2_instance_with_findings GuarddutyDetector#scan_ec_2_instance_with_findings}. |

---

##### `scanEc2InstanceWithFindings`<sup>Optional</sup> <a name="scanEc2InstanceWithFindings" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection.property.scanEc2InstanceWithFindings"></a>

```java
public GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings getScanEc2InstanceWithFindings();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#scan_ec_2_instance_with_findings GuarddutyDetector#scan_ec_2_instance_with_findings}.

---

### GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings <a name="GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings;

GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings.builder()
//  .ebsVolumes(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes">ebsVolumes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#ebs_volumes GuarddutyDetector#ebs_volumes}. |

---

##### `ebsVolumes`<sup>Optional</sup> <a name="ebsVolumes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes"></a>

```java
public java.lang.Boolean|IResolvable getEbsVolumes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#ebs_volumes GuarddutyDetector#ebs_volumes}.

---

### GuarddutyDetectorDataSourcesS3Logs <a name="GuarddutyDetectorDataSourcesS3Logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSourcesS3Logs;

GuarddutyDetectorDataSourcesS3Logs.builder()
//  .enable(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

### GuarddutyDetectorFeatures <a name="GuarddutyDetectorFeatures" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorFeatures;

GuarddutyDetectorFeatures.builder()
//  .additionalConfiguration(IResolvable|java.util.List<GuarddutyDetectorFeaturesAdditionalConfiguration>)
//  .name(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.additionalConfiguration">additionalConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#additional_configuration GuarddutyDetector#additional_configuration}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#name GuarddutyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#status GuarddutyDetector#status}. |

---

##### `additionalConfiguration`<sup>Optional</sup> <a name="additionalConfiguration" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.additionalConfiguration"></a>

```java
public IResolvable|java.util.List<GuarddutyDetectorFeaturesAdditionalConfiguration> getAdditionalConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#additional_configuration GuarddutyDetector#additional_configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#name GuarddutyDetector#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#status GuarddutyDetector#status}.

---

### GuarddutyDetectorFeaturesAdditionalConfiguration <a name="GuarddutyDetectorFeaturesAdditionalConfiguration" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorFeaturesAdditionalConfiguration;

GuarddutyDetectorFeaturesAdditionalConfiguration.builder()
//  .name(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#name GuarddutyDetector#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#status GuarddutyDetector#status}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#name GuarddutyDetector#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#status GuarddutyDetector#status}.

---

### GuarddutyDetectorTags <a name="GuarddutyDetectorTags" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorTags;

GuarddutyDetectorTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#key GuarddutyDetector#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#value GuarddutyDetector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#key GuarddutyDetector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/guardduty_detector#value GuarddutyDetector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference <a name="GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference;

new GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.resetEnable"></a>

```java
public void resetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.enableInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyDetectorDataSourcesKubernetesAuditLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a>

---


### GuarddutyDetectorDataSourcesKubernetesOutputReference <a name="GuarddutyDetectorDataSourcesKubernetesOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSourcesKubernetesOutputReference;

new GuarddutyDetectorDataSourcesKubernetesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.putAuditLogs">putAuditLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.resetAuditLogs">resetAuditLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuditLogs` <a name="putAuditLogs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.putAuditLogs"></a>

```java
public void putAuditLogs(GuarddutyDetectorDataSourcesKubernetesAuditLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.putAuditLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a>

---

##### `resetAuditLogs` <a name="resetAuditLogs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.resetAuditLogs"></a>

```java
public void resetAuditLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.auditLogs">auditLogs</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference">GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.auditLogsInput">auditLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditLogs`<sup>Required</sup> <a name="auditLogs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.auditLogs"></a>

```java
public GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference getAuditLogs();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference">GuarddutyDetectorDataSourcesKubernetesAuditLogsOutputReference</a>

---

##### `auditLogsInput`<sup>Optional</sup> <a name="auditLogsInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.auditLogsInput"></a>

```java
public IResolvable|GuarddutyDetectorDataSourcesKubernetesAuditLogs getAuditLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesAuditLogs">GuarddutyDetectorDataSourcesKubernetesAuditLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyDetectorDataSourcesKubernetes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a>

---


### GuarddutyDetectorDataSourcesMalwareProtectionOutputReference <a name="GuarddutyDetectorDataSourcesMalwareProtectionOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference;

new GuarddutyDetectorDataSourcesMalwareProtectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings">putScanEc2InstanceWithFindings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.resetScanEc2InstanceWithFindings">resetScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScanEc2InstanceWithFindings` <a name="putScanEc2InstanceWithFindings" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings"></a>

```java
public void putScanEc2InstanceWithFindings(GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---

##### `resetScanEc2InstanceWithFindings` <a name="resetScanEc2InstanceWithFindings" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.resetScanEc2InstanceWithFindings"></a>

```java
public void resetScanEc2InstanceWithFindings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings">scanEc2InstanceWithFindings</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput">scanEc2InstanceWithFindingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scanEc2InstanceWithFindings`<sup>Required</sup> <a name="scanEc2InstanceWithFindings" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings"></a>

```java
public GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference getScanEc2InstanceWithFindings();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a>

---

##### `scanEc2InstanceWithFindingsInput`<sup>Optional</sup> <a name="scanEc2InstanceWithFindingsInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput"></a>

```java
public IResolvable|GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings getScanEc2InstanceWithFindingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyDetectorDataSourcesMalwareProtection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a>

---


### GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference <a name="GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference;

new GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resetEbsVolumes">resetEbsVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEbsVolumes` <a name="resetEbsVolumes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resetEbsVolumes"></a>

```java
public void resetEbsVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput">ebsVolumesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes">ebsVolumes</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsVolumesInput`<sup>Optional</sup> <a name="ebsVolumesInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput"></a>

```java
public java.lang.Boolean|IResolvable getEbsVolumesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ebsVolumes`<sup>Required</sup> <a name="ebsVolumes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes"></a>

```java
public java.lang.Boolean|IResolvable getEbsVolumes();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---


### GuarddutyDetectorDataSourcesOutputReference <a name="GuarddutyDetectorDataSourcesOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSourcesOutputReference;

new GuarddutyDetectorDataSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putKubernetes">putKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putMalwareProtection">putMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putS3Logs">putS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetKubernetes">resetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetMalwareProtection">resetMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetS3Logs">resetS3Logs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKubernetes` <a name="putKubernetes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putKubernetes"></a>

```java
public void putKubernetes(GuarddutyDetectorDataSourcesKubernetes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a>

---

##### `putMalwareProtection` <a name="putMalwareProtection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putMalwareProtection"></a>

```java
public void putMalwareProtection(GuarddutyDetectorDataSourcesMalwareProtection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putMalwareProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a>

---

##### `putS3Logs` <a name="putS3Logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putS3Logs"></a>

```java
public void putS3Logs(GuarddutyDetectorDataSourcesS3Logs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a>

---

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetKubernetes"></a>

```java
public void resetKubernetes()
```

##### `resetMalwareProtection` <a name="resetMalwareProtection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetMalwareProtection"></a>

```java
public void resetMalwareProtection()
```

##### `resetS3Logs` <a name="resetS3Logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.resetS3Logs"></a>

```java
public void resetS3Logs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference">GuarddutyDetectorDataSourcesKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.malwareProtection">malwareProtection</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference">GuarddutyDetectorDataSourcesMalwareProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference">GuarddutyDetectorDataSourcesS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.kubernetesInput">kubernetesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.malwareProtectionInput">malwareProtectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.s3LogsInput">s3LogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.kubernetes"></a>

```java
public GuarddutyDetectorDataSourcesKubernetesOutputReference getKubernetes();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetesOutputReference">GuarddutyDetectorDataSourcesKubernetesOutputReference</a>

---

##### `malwareProtection`<sup>Required</sup> <a name="malwareProtection" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.malwareProtection"></a>

```java
public GuarddutyDetectorDataSourcesMalwareProtectionOutputReference getMalwareProtection();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtectionOutputReference">GuarddutyDetectorDataSourcesMalwareProtectionOutputReference</a>

---

##### `s3Logs`<sup>Required</sup> <a name="s3Logs" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.s3Logs"></a>

```java
public GuarddutyDetectorDataSourcesS3LogsOutputReference getS3Logs();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference">GuarddutyDetectorDataSourcesS3LogsOutputReference</a>

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.kubernetesInput"></a>

```java
public IResolvable|GuarddutyDetectorDataSourcesKubernetes getKubernetesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesKubernetes">GuarddutyDetectorDataSourcesKubernetes</a>

---

##### `malwareProtectionInput`<sup>Optional</sup> <a name="malwareProtectionInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.malwareProtectionInput"></a>

```java
public IResolvable|GuarddutyDetectorDataSourcesMalwareProtection getMalwareProtectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesMalwareProtection">GuarddutyDetectorDataSourcesMalwareProtection</a>

---

##### `s3LogsInput`<sup>Optional</sup> <a name="s3LogsInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.s3LogsInput"></a>

```java
public IResolvable|GuarddutyDetectorDataSourcesS3Logs getS3LogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyDetectorDataSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSources">GuarddutyDetectorDataSources</a>

---


### GuarddutyDetectorDataSourcesS3LogsOutputReference <a name="GuarddutyDetectorDataSourcesS3LogsOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorDataSourcesS3LogsOutputReference;

new GuarddutyDetectorDataSourcesS3LogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.resetEnable"></a>

```java
public void resetEnable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.enableInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3LogsOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyDetectorDataSourcesS3Logs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorDataSourcesS3Logs">GuarddutyDetectorDataSourcesS3Logs</a>

---


### GuarddutyDetectorFeaturesAdditionalConfigurationList <a name="GuarddutyDetectorFeaturesAdditionalConfigurationList" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorFeaturesAdditionalConfigurationList;

new GuarddutyDetectorFeaturesAdditionalConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.get"></a>

```java
public GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GuarddutyDetectorFeaturesAdditionalConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>>

---


### GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference <a name="GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference;

new GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyDetectorFeaturesAdditionalConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>

---


### GuarddutyDetectorFeaturesList <a name="GuarddutyDetectorFeaturesList" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorFeaturesList;

new GuarddutyDetectorFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.get"></a>

```java
public GuarddutyDetectorFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GuarddutyDetectorFeatures> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>>

---


### GuarddutyDetectorFeaturesOutputReference <a name="GuarddutyDetectorFeaturesOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorFeaturesOutputReference;

new GuarddutyDetectorFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.putAdditionalConfiguration">putAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetAdditionalConfiguration">resetAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalConfiguration` <a name="putAdditionalConfiguration" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.putAdditionalConfiguration"></a>

```java
public void putAdditionalConfiguration(IResolvable|java.util.List<GuarddutyDetectorFeaturesAdditionalConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.putAdditionalConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>>

---

##### `resetAdditionalConfiguration` <a name="resetAdditionalConfiguration" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetAdditionalConfiguration"></a>

```java
public void resetAdditionalConfiguration()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.additionalConfiguration">additionalConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList">GuarddutyDetectorFeaturesAdditionalConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.additionalConfigurationInput">additionalConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalConfiguration`<sup>Required</sup> <a name="additionalConfiguration" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.additionalConfiguration"></a>

```java
public GuarddutyDetectorFeaturesAdditionalConfigurationList getAdditionalConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfigurationList">GuarddutyDetectorFeaturesAdditionalConfigurationList</a>

---

##### `additionalConfigurationInput`<sup>Optional</sup> <a name="additionalConfigurationInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.additionalConfigurationInput"></a>

```java
public IResolvable|java.util.List<GuarddutyDetectorFeaturesAdditionalConfiguration> getAdditionalConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesAdditionalConfiguration">GuarddutyDetectorFeaturesAdditionalConfiguration</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeaturesOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyDetectorFeatures getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorFeatures">GuarddutyDetectorFeatures</a>

---


### GuarddutyDetectorTagsList <a name="GuarddutyDetectorTagsList" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorTagsList;

new GuarddutyDetectorTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.get"></a>

```java
public GuarddutyDetectorTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GuarddutyDetectorTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>>

---


### GuarddutyDetectorTagsOutputReference <a name="GuarddutyDetectorTagsOutputReference" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.guardduty_detector.GuarddutyDetectorTagsOutputReference;

new GuarddutyDetectorTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GuarddutyDetectorTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyDetector.GuarddutyDetectorTags">GuarddutyDetectorTags</a>

---



