# `securityhubHub` Submodule <a name="`securityhubHub` Submodule" id="@cdktn/provider-awscc.securityhubHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubHub <a name="SecurityhubHub" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_hub awscc_securityhub_hub}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_hub.SecurityhubHub;

SecurityhubHub.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .autoEnableControls(java.lang.Boolean|IResolvable)
//  .controlFindingGenerator(java.lang.String)
//  .enableDefaultStandards(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.autoEnableControls">autoEnableControls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to automatically enable new controls when they are added to standards that are enabled. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.controlFindingGenerator">controlFindingGenerator</a></code> | <code>java.lang.String</code> | This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.enableDefaultStandards">enableDefaultStandards</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable the security standards that Security Hub has designated as automatically enabled. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoEnableControls`<sup>Optional</sup> <a name="autoEnableControls" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.autoEnableControls"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to automatically enable new controls when they are added to standards that are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_hub#auto_enable_controls SecurityhubHub#auto_enable_controls}

---

##### `controlFindingGenerator`<sup>Optional</sup> <a name="controlFindingGenerator" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.controlFindingGenerator"></a>

- *Type:* java.lang.String

This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on.

If the value for this field is set to SECURITY_CONTROL, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.  If the value for this field is set to STANDARD_CONTROL, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_hub#control_finding_generator SecurityhubHub#control_finding_generator}

---

##### `enableDefaultStandards`<sup>Optional</sup> <a name="enableDefaultStandards" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.enableDefaultStandards"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable the security standards that Security Hub has designated as automatically enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_hub#enable_default_standards SecurityhubHub#enable_default_standards}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_hub#tags SecurityhubHub#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.resetAutoEnableControls">resetAutoEnableControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.resetControlFindingGenerator">resetControlFindingGenerator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.resetEnableDefaultStandards">resetEnableDefaultStandards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutoEnableControls` <a name="resetAutoEnableControls" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.resetAutoEnableControls"></a>

```java
public void resetAutoEnableControls()
```

##### `resetControlFindingGenerator` <a name="resetControlFindingGenerator" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.resetControlFindingGenerator"></a>

```java
public void resetControlFindingGenerator()
```

##### `resetEnableDefaultStandards` <a name="resetEnableDefaultStandards" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.resetEnableDefaultStandards"></a>

```java
public void resetEnableDefaultStandards()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubHub resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.isConstruct"></a>

```java
import io.cdktn.providers.awscc.securityhub_hub.SecurityhubHub;

SecurityhubHub.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.securityhub_hub.SecurityhubHub;

SecurityhubHub.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.securityhub_hub.SecurityhubHub;

SecurityhubHub.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.securityhub_hub.SecurityhubHub;

SecurityhubHub.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityhubHub.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityhubHub resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityhubHub to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityhubHub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_hub#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubHub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.subscribedAt">subscribedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.autoEnableControlsInput">autoEnableControlsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.controlFindingGeneratorInput">controlFindingGeneratorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.enableDefaultStandardsInput">enableDefaultStandardsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.autoEnableControls">autoEnableControls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.controlFindingGenerator">controlFindingGenerator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.enableDefaultStandards">enableDefaultStandards</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `subscribedAt`<sup>Required</sup> <a name="subscribedAt" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.subscribedAt"></a>

```java
public java.lang.String getSubscribedAt();
```

- *Type:* java.lang.String

---

##### `autoEnableControlsInput`<sup>Optional</sup> <a name="autoEnableControlsInput" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.autoEnableControlsInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoEnableControlsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `controlFindingGeneratorInput`<sup>Optional</sup> <a name="controlFindingGeneratorInput" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.controlFindingGeneratorInput"></a>

```java
public java.lang.String getControlFindingGeneratorInput();
```

- *Type:* java.lang.String

---

##### `enableDefaultStandardsInput`<sup>Optional</sup> <a name="enableDefaultStandardsInput" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.enableDefaultStandardsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableDefaultStandardsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `autoEnableControls`<sup>Required</sup> <a name="autoEnableControls" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.autoEnableControls"></a>

```java
public java.lang.Boolean|IResolvable getAutoEnableControls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `controlFindingGenerator`<sup>Required</sup> <a name="controlFindingGenerator" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.controlFindingGenerator"></a>

```java
public java.lang.String getControlFindingGenerator();
```

- *Type:* java.lang.String

---

##### `enableDefaultStandards`<sup>Required</sup> <a name="enableDefaultStandards" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.enableDefaultStandards"></a>

```java
public java.lang.Boolean|IResolvable getEnableDefaultStandards();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHub.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubHubConfig <a name="SecurityhubHubConfig" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityhub_hub.SecurityhubHubConfig;

SecurityhubHubConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .autoEnableControls(java.lang.Boolean|IResolvable)
//  .controlFindingGenerator(java.lang.String)
//  .enableDefaultStandards(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.autoEnableControls">autoEnableControls</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to automatically enable new controls when they are added to standards that are enabled. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.controlFindingGenerator">controlFindingGenerator</a></code> | <code>java.lang.String</code> | This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.enableDefaultStandards">enableDefaultStandards</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable the security standards that Security Hub has designated as automatically enabled. |
| <code><a href="#@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoEnableControls`<sup>Optional</sup> <a name="autoEnableControls" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.autoEnableControls"></a>

```java
public java.lang.Boolean|IResolvable getAutoEnableControls();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to automatically enable new controls when they are added to standards that are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_hub#auto_enable_controls SecurityhubHub#auto_enable_controls}

---

##### `controlFindingGenerator`<sup>Optional</sup> <a name="controlFindingGenerator" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.controlFindingGenerator"></a>

```java
public java.lang.String getControlFindingGenerator();
```

- *Type:* java.lang.String

This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on.

If the value for this field is set to SECURITY_CONTROL, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.  If the value for this field is set to STANDARD_CONTROL, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_hub#control_finding_generator SecurityhubHub#control_finding_generator}

---

##### `enableDefaultStandards`<sup>Optional</sup> <a name="enableDefaultStandards" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.enableDefaultStandards"></a>

```java
public java.lang.Boolean|IResolvable getEnableDefaultStandards();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable the security standards that Security Hub has designated as automatically enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_hub#enable_default_standards SecurityhubHub#enable_default_standards}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityhubHub.SecurityhubHubConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_hub#tags SecurityhubHub#tags}

---



