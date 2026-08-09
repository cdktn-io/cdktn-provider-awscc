# `signerProfilePermission` Submodule <a name="`signerProfilePermission` Submodule" id="@cdktn/provider-awscc.signerProfilePermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SignerProfilePermission <a name="SignerProfilePermission" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission awscc_signer_profile_permission}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer"></a>

```java
import io.cdktn.providers.awscc.signer_profile_permission.SignerProfilePermission;

SignerProfilePermission.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .principal(java.lang.String)
    .profileName(java.lang.String)
    .statementId(java.lang.String)
//  .profileVersion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#action SignerProfilePermission#action}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#principal SignerProfilePermission#principal}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#profile_name SignerProfilePermission#profile_name}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.statementId">statementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#statement_id SignerProfilePermission#statement_id}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.profileVersion">profileVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#profile_version SignerProfilePermission#profile_version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#action SignerProfilePermission#action}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.principal"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#principal SignerProfilePermission#principal}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.profileName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#profile_name SignerProfilePermission#profile_name}.

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.statementId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#statement_id SignerProfilePermission#statement_id}.

---

##### `profileVersion`<sup>Optional</sup> <a name="profileVersion" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.Initializer.parameter.profileVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#profile_version SignerProfilePermission#profile_version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.resetProfileVersion">resetProfileVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetProfileVersion` <a name="resetProfileVersion" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.resetProfileVersion"></a>

```java
public void resetProfileVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SignerProfilePermission resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isConstruct"></a>

```java
import io.cdktn.providers.awscc.signer_profile_permission.SignerProfilePermission;

SignerProfilePermission.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.signer_profile_permission.SignerProfilePermission;

SignerProfilePermission.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.signer_profile_permission.SignerProfilePermission;

SignerProfilePermission.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.signer_profile_permission.SignerProfilePermission;

SignerProfilePermission.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SignerProfilePermission.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SignerProfilePermission resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SignerProfilePermission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SignerProfilePermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SignerProfilePermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.principalInput">principalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileNameInput">profileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileVersionInput">profileVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.statementIdInput">statementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.principal">principal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileVersion">profileVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.statementId">statementId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.principalInput"></a>

```java
public java.lang.String getPrincipalInput();
```

- *Type:* java.lang.String

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileNameInput"></a>

```java
public java.lang.String getProfileNameInput();
```

- *Type:* java.lang.String

---

##### `profileVersionInput`<sup>Optional</sup> <a name="profileVersionInput" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileVersionInput"></a>

```java
public java.lang.String getProfileVersionInput();
```

- *Type:* java.lang.String

---

##### `statementIdInput`<sup>Optional</sup> <a name="statementIdInput" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.statementIdInput"></a>

```java
public java.lang.String getStatementIdInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

##### `profileVersion`<sup>Required</sup> <a name="profileVersion" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.profileVersion"></a>

```java
public java.lang.String getProfileVersion();
```

- *Type:* java.lang.String

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.statementId"></a>

```java
public java.lang.String getStatementId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermission.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SignerProfilePermissionConfig <a name="SignerProfilePermissionConfig" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.signer_profile_permission.SignerProfilePermissionConfig;

SignerProfilePermissionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .action(java.lang.String)
    .principal(java.lang.String)
    .profileName(java.lang.String)
    .statementId(java.lang.String)
//  .profileVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#action SignerProfilePermission#action}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.principal">principal</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#principal SignerProfilePermission#principal}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.profileName">profileName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#profile_name SignerProfilePermission#profile_name}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.statementId">statementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#statement_id SignerProfilePermission#statement_id}. |
| <code><a href="#@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.profileVersion">profileVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#profile_version SignerProfilePermission#profile_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#action SignerProfilePermission#action}.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.principal"></a>

```java
public java.lang.String getPrincipal();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#principal SignerProfilePermission#principal}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#profile_name SignerProfilePermission#profile_name}.

---

##### `statementId`<sup>Required</sup> <a name="statementId" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.statementId"></a>

```java
public java.lang.String getStatementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#statement_id SignerProfilePermission#statement_id}.

---

##### `profileVersion`<sup>Optional</sup> <a name="profileVersion" id="@cdktn/provider-awscc.signerProfilePermission.SignerProfilePermissionConfig.property.profileVersion"></a>

```java
public java.lang.String getProfileVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/signer_profile_permission#profile_version SignerProfilePermission#profile_version}.

---



