# `securityagentSecurityRequirementPack` Submodule <a name="`securityagentSecurityRequirementPack` Submodule" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityagentSecurityRequirementPack <a name="SecurityagentSecurityRequirementPack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack awscc_securityagent_security_requirement_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPack;

SecurityagentSecurityRequirementPack.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .securityRequirements(IResolvable|java.util.List<SecurityagentSecurityRequirementPackSecurityRequirements>)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<SecurityagentSecurityRequirementPackTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the security requirement pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | KMS key for client-side encryption of pack contents. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.securityRequirements">securityRequirements</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>></code> | Security requirements within this pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Whether the pack is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>></code> | Tags for the security requirement pack. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

KMS key for client-side encryption of pack contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#kms_key_id SecurityagentSecurityRequirementPack#kms_key_id}

---

##### `securityRequirements`<sup>Optional</sup> <a name="securityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.securityRequirements"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>>

Security requirements within this pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#security_requirements SecurityagentSecurityRequirementPack#security_requirements}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Whether the pack is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#status SecurityagentSecurityRequirementPack#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>>

Tags for the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#tags SecurityagentSecurityRequirementPack#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements">putSecurityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetSecurityRequirements">resetSecurityRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSecurityRequirements` <a name="putSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements"></a>

```java
public void putSecurityRequirements(IResolvable|java.util.List<SecurityagentSecurityRequirementPackSecurityRequirements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putSecurityRequirements.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SecurityagentSecurityRequirementPackTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSecurityRequirements` <a name="resetSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetSecurityRequirements"></a>

```java
public void resetSecurityRequirements()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPack;

SecurityagentSecurityRequirementPack.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPack;

SecurityagentSecurityRequirementPack.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPack;

SecurityagentSecurityRequirementPack.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPack;

SecurityagentSecurityRequirementPack.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityagentSecurityRequirementPack.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityagentSecurityRequirementPack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityagentSecurityRequirementPack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityagentSecurityRequirementPack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.packId">packId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirements">securityRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList">SecurityagentSecurityRequirementPackSecurityRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList">SecurityagentSecurityRequirementPackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirementsInput">securityRequirementsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `packId`<sup>Required</sup> <a name="packId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.packId"></a>

```java
public java.lang.String getPackId();
```

- *Type:* java.lang.String

---

##### `securityRequirements`<sup>Required</sup> <a name="securityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirements"></a>

```java
public SecurityagentSecurityRequirementPackSecurityRequirementsList getSecurityRequirements();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList">SecurityagentSecurityRequirementPackSecurityRequirementsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tags"></a>

```java
public SecurityagentSecurityRequirementPackTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList">SecurityagentSecurityRequirementPackTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `securityRequirementsInput`<sup>Optional</sup> <a name="securityRequirementsInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.securityRequirementsInput"></a>

```java
public IResolvable|java.util.List<SecurityagentSecurityRequirementPackSecurityRequirements> getSecurityRequirementsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SecurityagentSecurityRequirementPackTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPack.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityagentSecurityRequirementPackConfig <a name="SecurityagentSecurityRequirementPackConfig" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPackConfig;

SecurityagentSecurityRequirementPackConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .securityRequirements(IResolvable|java.util.List<SecurityagentSecurityRequirementPackSecurityRequirements>)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<SecurityagentSecurityRequirementPackTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the security requirement pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | KMS key for client-side encryption of pack contents. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.securityRequirements">securityRequirements</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>></code> | Security requirements within this pack. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.status">status</a></code> | <code>java.lang.String</code> | Whether the pack is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>></code> | Tags for the security requirement pack. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

KMS key for client-side encryption of pack contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#kms_key_id SecurityagentSecurityRequirementPack#kms_key_id}

---

##### `securityRequirements`<sup>Optional</sup> <a name="securityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.securityRequirements"></a>

```java
public IResolvable|java.util.List<SecurityagentSecurityRequirementPackSecurityRequirements> getSecurityRequirements();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>>

Security requirements within this pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#security_requirements SecurityagentSecurityRequirementPack#security_requirements}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Whether the pack is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#status SecurityagentSecurityRequirementPack#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SecurityagentSecurityRequirementPackTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>>

Tags for the security requirement pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#tags SecurityagentSecurityRequirementPack#tags}

---

### SecurityagentSecurityRequirementPackSecurityRequirements <a name="SecurityagentSecurityRequirementPackSecurityRequirements" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPackSecurityRequirements;

SecurityagentSecurityRequirementPackSecurityRequirements.builder()
//  .description(java.lang.String)
//  .domain(java.lang.String)
//  .evaluation(java.lang.String)
//  .name(java.lang.String)
//  .remediation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.description">description</a></code> | <code>java.lang.String</code> | Description of the security requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.domain">domain</a></code> | <code>java.lang.String</code> | Security domain this requirement belongs to. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.evaluation">evaluation</a></code> | <code>java.lang.String</code> | How to evaluate compliance with this requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.name">name</a></code> | <code>java.lang.String</code> | Name of the security requirement. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.remediation">remediation</a></code> | <code>java.lang.String</code> | How to remediate non-compliance. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the security requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#description SecurityagentSecurityRequirementPack#description}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Security domain this requirement belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#domain SecurityagentSecurityRequirementPack#domain}

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.evaluation"></a>

```java
public java.lang.String getEvaluation();
```

- *Type:* java.lang.String

How to evaluate compliance with this requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#evaluation SecurityagentSecurityRequirementPack#evaluation}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the security requirement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#name SecurityagentSecurityRequirementPack#name}

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements.property.remediation"></a>

```java
public java.lang.String getRemediation();
```

- *Type:* java.lang.String

How to remediate non-compliance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#remediation SecurityagentSecurityRequirementPack#remediation}

---

### SecurityagentSecurityRequirementPackTags <a name="SecurityagentSecurityRequirementPackTags" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPackTags;

SecurityagentSecurityRequirementPackTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#key SecurityagentSecurityRequirementPack#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securityagent_security_requirement_pack#value SecurityagentSecurityRequirementPack#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityagentSecurityRequirementPackSecurityRequirementsList <a name="SecurityagentSecurityRequirementPackSecurityRequirementsList" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPackSecurityRequirementsList;

new SecurityagentSecurityRequirementPackSecurityRequirementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get"></a>

```java
public SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityagentSecurityRequirementPackSecurityRequirements> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>>

---


### SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference <a name="SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference;

new SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetEvaluation">resetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetRemediation">resetRemediation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetEvaluation` <a name="resetEvaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetEvaluation"></a>

```java
public void resetEvaluation()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRemediation` <a name="resetRemediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resetRemediation"></a>

```java
public void resetRemediation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluationInput">evaluationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediationInput">remediationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation">evaluation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation">remediation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `evaluationInput`<sup>Optional</sup> <a name="evaluationInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluationInput"></a>

```java
public java.lang.String getEvaluationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `remediationInput`<sup>Optional</sup> <a name="remediationInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediationInput"></a>

```java
public java.lang.String getRemediationInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation"></a>

```java
public java.lang.String getEvaluation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation"></a>

```java
public java.lang.String getRemediation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentSecurityRequirementPackSecurityRequirements getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackSecurityRequirements">SecurityagentSecurityRequirementPackSecurityRequirements</a>

---


### SecurityagentSecurityRequirementPackTagsList <a name="SecurityagentSecurityRequirementPackTagsList" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPackTagsList;

new SecurityagentSecurityRequirementPackTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get"></a>

```java
public SecurityagentSecurityRequirementPackTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityagentSecurityRequirementPackTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>>

---


### SecurityagentSecurityRequirementPackTagsOutputReference <a name="SecurityagentSecurityRequirementPackTagsOutputReference" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.securityagent_security_requirement_pack.SecurityagentSecurityRequirementPackTagsOutputReference;

new SecurityagentSecurityRequirementPackTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityagentSecurityRequirementPackTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityagentSecurityRequirementPack.SecurityagentSecurityRequirementPackTags">SecurityagentSecurityRequirementPackTags</a>

---



