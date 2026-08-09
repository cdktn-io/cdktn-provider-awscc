# `uxcAccountCustomization` Submodule <a name="`uxcAccountCustomization` Submodule" id="@cdktn/provider-awscc.uxcAccountCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UxcAccountCustomization <a name="UxcAccountCustomization" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization awscc_uxc_account_customization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer"></a>

```java
import io.cdktn.providers.awscc.uxc_account_customization.UxcAccountCustomization;

UxcAccountCustomization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountColor(java.lang.String)
//  .visibleRegions(java.util.List<java.lang.String>)
//  .visibleServices(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.accountColor">accountColor</a></code> | <code>java.lang.String</code> | The color theme assigned to the account for visual identification in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.visibleRegions">visibleRegions</a></code> | <code>java.util.List<java.lang.String></code> | A list of AWS region identifiers visible to the account in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.visibleServices">visibleServices</a></code> | <code>java.util.List<java.lang.String></code> | A list of AWS service identifiers visible to the account in the AWS Console. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountColor`<sup>Optional</sup> <a name="accountColor" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.accountColor"></a>

- *Type:* java.lang.String

The color theme assigned to the account for visual identification in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#account_color UxcAccountCustomization#account_color}

---

##### `visibleRegions`<sup>Optional</sup> <a name="visibleRegions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.visibleRegions"></a>

- *Type:* java.util.List<java.lang.String>

A list of AWS region identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#visible_regions UxcAccountCustomization#visible_regions}

---

##### `visibleServices`<sup>Optional</sup> <a name="visibleServices" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.visibleServices"></a>

- *Type:* java.util.List<java.lang.String>

A list of AWS service identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#visible_services UxcAccountCustomization#visible_services}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetAccountColor">resetAccountColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleRegions">resetVisibleRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleServices">resetVisibleServices</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountColor` <a name="resetAccountColor" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetAccountColor"></a>

```java
public void resetAccountColor()
```

##### `resetVisibleRegions` <a name="resetVisibleRegions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleRegions"></a>

```java
public void resetVisibleRegions()
```

##### `resetVisibleServices` <a name="resetVisibleServices" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleServices"></a>

```java
public void resetVisibleServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a UxcAccountCustomization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct"></a>

```java
import io.cdktn.providers.awscc.uxc_account_customization.UxcAccountCustomization;

UxcAccountCustomization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.uxc_account_customization.UxcAccountCustomization;

UxcAccountCustomization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.uxc_account_customization.UxcAccountCustomization;

UxcAccountCustomization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.uxc_account_customization.UxcAccountCustomization;

UxcAccountCustomization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),UxcAccountCustomization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a UxcAccountCustomization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the UxcAccountCustomization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing UxcAccountCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the UxcAccountCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColorInput">accountColorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegionsInput">visibleRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServicesInput">visibleServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColor">accountColor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegions">visibleRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServices">visibleServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accountColorInput`<sup>Optional</sup> <a name="accountColorInput" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColorInput"></a>

```java
public java.lang.String getAccountColorInput();
```

- *Type:* java.lang.String

---

##### `visibleRegionsInput`<sup>Optional</sup> <a name="visibleRegionsInput" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegionsInput"></a>

```java
public java.util.List<java.lang.String> getVisibleRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `visibleServicesInput`<sup>Optional</sup> <a name="visibleServicesInput" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServicesInput"></a>

```java
public java.util.List<java.lang.String> getVisibleServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountColor`<sup>Required</sup> <a name="accountColor" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColor"></a>

```java
public java.lang.String getAccountColor();
```

- *Type:* java.lang.String

---

##### `visibleRegions`<sup>Required</sup> <a name="visibleRegions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegions"></a>

```java
public java.util.List<java.lang.String> getVisibleRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `visibleServices`<sup>Required</sup> <a name="visibleServices" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServices"></a>

```java
public java.util.List<java.lang.String> getVisibleServices();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UxcAccountCustomizationConfig <a name="UxcAccountCustomizationConfig" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.uxc_account_customization.UxcAccountCustomizationConfig;

UxcAccountCustomizationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountColor(java.lang.String)
//  .visibleRegions(java.util.List<java.lang.String>)
//  .visibleServices(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.accountColor">accountColor</a></code> | <code>java.lang.String</code> | The color theme assigned to the account for visual identification in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleRegions">visibleRegions</a></code> | <code>java.util.List<java.lang.String></code> | A list of AWS region identifiers visible to the account in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleServices">visibleServices</a></code> | <code>java.util.List<java.lang.String></code> | A list of AWS service identifiers visible to the account in the AWS Console. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountColor`<sup>Optional</sup> <a name="accountColor" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.accountColor"></a>

```java
public java.lang.String getAccountColor();
```

- *Type:* java.lang.String

The color theme assigned to the account for visual identification in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#account_color UxcAccountCustomization#account_color}

---

##### `visibleRegions`<sup>Optional</sup> <a name="visibleRegions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleRegions"></a>

```java
public java.util.List<java.lang.String> getVisibleRegions();
```

- *Type:* java.util.List<java.lang.String>

A list of AWS region identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#visible_regions UxcAccountCustomization#visible_regions}

---

##### `visibleServices`<sup>Optional</sup> <a name="visibleServices" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleServices"></a>

```java
public java.util.List<java.lang.String> getVisibleServices();
```

- *Type:* java.util.List<java.lang.String>

A list of AWS service identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/uxc_account_customization#visible_services UxcAccountCustomization#visible_services}

---



