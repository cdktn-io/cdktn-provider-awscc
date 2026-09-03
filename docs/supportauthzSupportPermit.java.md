# `supportauthzSupportPermit` Submodule <a name="`supportauthzSupportPermit` Submodule" id="@cdktn/provider-awscc.supportauthzSupportPermit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupportauthzSupportPermit <a name="SupportauthzSupportPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit awscc_supportauthz_support_permit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermit;

SupportauthzSupportPermit.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .permit(SupportauthzSupportPermitPermit)
    .signingKeyInfo(SupportauthzSupportPermitSigningKeyInfo)
//  .description(java.lang.String)
//  .supportCaseDisplayId(java.lang.String)
//  .tags(IResolvable|java.util.List<SupportauthzSupportPermitTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.permit">permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | The grant definition: which actions on which resources, optionally constrained by time conditions. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.signingKeyInfo">signingKeyInfo</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | The signing key used by the permit. Exactly one key type must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.supportCaseDisplayId">supportCaseDisplayId</a></code> | <code>java.lang.String</code> | The support case display identifier associated with the permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>></code> | A list of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#name SupportauthzSupportPermit#name}

---

##### `permit`<sup>Required</sup> <a name="permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.permit"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

The grant definition: which actions on which resources, optionally constrained by time conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#permit SupportauthzSupportPermit#permit}

---

##### `signingKeyInfo`<sup>Required</sup> <a name="signingKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.signingKeyInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

The signing key used by the permit. Exactly one key type must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#signing_key_info SupportauthzSupportPermit#signing_key_info}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#description SupportauthzSupportPermit#description}

---

##### `supportCaseDisplayId`<sup>Optional</sup> <a name="supportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.supportCaseDisplayId"></a>

- *Type:* java.lang.String

The support case display identifier associated with the permit.

When provided, the permit is linked to the specified AWS Support case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#support_case_display_id SupportauthzSupportPermit#support_case_display_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>>

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#tags SupportauthzSupportPermit#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit">putPermit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo">putSigningKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetSupportCaseDisplayId">resetSupportCaseDisplayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPermit` <a name="putPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit"></a>

```java
public void putPermit(SupportauthzSupportPermitPermit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---

##### `putSigningKeyInfo` <a name="putSigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo"></a>

```java
public void putSigningKeyInfo(SupportauthzSupportPermitSigningKeyInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SupportauthzSupportPermitTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetSupportCaseDisplayId` <a name="resetSupportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetSupportCaseDisplayId"></a>

```java
public void resetSupportCaseDisplayId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SupportauthzSupportPermit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermit;

SupportauthzSupportPermit.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermit;

SupportauthzSupportPermit.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermit;

SupportauthzSupportPermit.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermit;

SupportauthzSupportPermit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SupportauthzSupportPermit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SupportauthzSupportPermit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SupportauthzSupportPermit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SupportauthzSupportPermit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SupportauthzSupportPermit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permit">permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference">SupportauthzSupportPermitPermitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitId">permitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfo">signingKeyInfo</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference">SupportauthzSupportPermitSigningKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList">SupportauthzSupportPermitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitInput">permitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfoInput">signingKeyInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayIdInput">supportCaseDisplayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayId">supportCaseDisplayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `permit`<sup>Required</sup> <a name="permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permit"></a>

```java
public SupportauthzSupportPermitPermitOutputReference getPermit();
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference">SupportauthzSupportPermitPermitOutputReference</a>

---

##### `permitId`<sup>Required</sup> <a name="permitId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitId"></a>

```java
public java.lang.String getPermitId();
```

- *Type:* java.lang.String

---

##### `signingKeyInfo`<sup>Required</sup> <a name="signingKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfo"></a>

```java
public SupportauthzSupportPermitSigningKeyInfoOutputReference getSigningKeyInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference">SupportauthzSupportPermitSigningKeyInfoOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tags"></a>

```java
public SupportauthzSupportPermitTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList">SupportauthzSupportPermitTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `permitInput`<sup>Optional</sup> <a name="permitInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitInput"></a>

```java
public IResolvable|SupportauthzSupportPermitPermit getPermitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---

##### `signingKeyInfoInput`<sup>Optional</sup> <a name="signingKeyInfoInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfoInput"></a>

```java
public IResolvable|SupportauthzSupportPermitSigningKeyInfo getSigningKeyInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---

##### `supportCaseDisplayIdInput`<sup>Optional</sup> <a name="supportCaseDisplayIdInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayIdInput"></a>

```java
public java.lang.String getSupportCaseDisplayIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SupportauthzSupportPermitTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `supportCaseDisplayId`<sup>Required</sup> <a name="supportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayId"></a>

```java
public java.lang.String getSupportCaseDisplayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SupportauthzSupportPermitConfig <a name="SupportauthzSupportPermitConfig" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitConfig;

SupportauthzSupportPermitConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .permit(SupportauthzSupportPermitPermit)
    .signingKeyInfo(SupportauthzSupportPermitSigningKeyInfo)
//  .description(java.lang.String)
//  .supportCaseDisplayId(java.lang.String)
//  .tags(IResolvable|java.util.List<SupportauthzSupportPermitTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.permit">permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | The grant definition: which actions on which resources, optionally constrained by time conditions. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.signingKeyInfo">signingKeyInfo</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | The signing key used by the permit. Exactly one key type must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.supportCaseDisplayId">supportCaseDisplayId</a></code> | <code>java.lang.String</code> | The support case display identifier associated with the permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>></code> | A list of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#name SupportauthzSupportPermit#name}

---

##### `permit`<sup>Required</sup> <a name="permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.permit"></a>

```java
public SupportauthzSupportPermitPermit getPermit();
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

The grant definition: which actions on which resources, optionally constrained by time conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#permit SupportauthzSupportPermit#permit}

---

##### `signingKeyInfo`<sup>Required</sup> <a name="signingKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.signingKeyInfo"></a>

```java
public SupportauthzSupportPermitSigningKeyInfo getSigningKeyInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

The signing key used by the permit. Exactly one key type must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#signing_key_info SupportauthzSupportPermit#signing_key_info}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#description SupportauthzSupportPermit#description}

---

##### `supportCaseDisplayId`<sup>Optional</sup> <a name="supportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.supportCaseDisplayId"></a>

```java
public java.lang.String getSupportCaseDisplayId();
```

- *Type:* java.lang.String

The support case display identifier associated with the permit.

When provided, the permit is linked to the specified AWS Support case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#support_case_display_id SupportauthzSupportPermit#support_case_display_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SupportauthzSupportPermitTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>>

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#tags SupportauthzSupportPermit#tags}

---

### SupportauthzSupportPermitPermit <a name="SupportauthzSupportPermitPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitPermit;

SupportauthzSupportPermitPermit.builder()
    .actions(SupportauthzSupportPermitPermitActions)
    .resources(SupportauthzSupportPermitPermitResources)
//  .conditions(IResolvable|java.util.List<SupportauthzSupportPermitPermitConditions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.conditions">conditions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>></code> | Optional time-bound conditions (at most two). |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.actions"></a>

```java
public SupportauthzSupportPermitPermitActions getActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.resources"></a>

```java
public SupportauthzSupportPermitPermitResources getResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.conditions"></a>

```java
public IResolvable|java.util.List<SupportauthzSupportPermitPermitConditions> getConditions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>>

Optional time-bound conditions (at most two).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#conditions SupportauthzSupportPermit#conditions}

---

### SupportauthzSupportPermitPermitActions <a name="SupportauthzSupportPermitPermitActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitPermitActions;

SupportauthzSupportPermitPermitActions.builder()
//  .actions(java.util.List<java.lang.String>)
//  .allActions(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | An explicit list of actions to grant. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.allActions">allActions</a></code> | <code>java.lang.String</code> | Grants all actions. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

An explicit list of actions to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

##### `allActions`<sup>Optional</sup> <a name="allActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.allActions"></a>

```java
public java.lang.String getAllActions();
```

- *Type:* java.lang.String

Grants all actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_actions SupportauthzSupportPermit#all_actions}

---

### SupportauthzSupportPermitPermitConditions <a name="SupportauthzSupportPermitPermitConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitPermitConditions;

SupportauthzSupportPermitPermitConditions.builder()
//  .allowAfter(java.lang.String)
//  .allowBefore(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowAfter">allowAfter</a></code> | <code>java.lang.String</code> | The permit is active only after this time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowBefore">allowBefore</a></code> | <code>java.lang.String</code> | The permit is active only before this time. |

---

##### `allowAfter`<sup>Optional</sup> <a name="allowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowAfter"></a>

```java
public java.lang.String getAllowAfter();
```

- *Type:* java.lang.String

The permit is active only after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#allow_after SupportauthzSupportPermit#allow_after}

---

##### `allowBefore`<sup>Optional</sup> <a name="allowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowBefore"></a>

```java
public java.lang.String getAllowBefore();
```

- *Type:* java.lang.String

The permit is active only before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#allow_before SupportauthzSupportPermit#allow_before}

---

### SupportauthzSupportPermitPermitResources <a name="SupportauthzSupportPermitPermitResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitPermitResources;

SupportauthzSupportPermitPermitResources.builder()
//  .allResourcesInRegion(java.lang.String)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.allResourcesInRegion">allResourcesInRegion</a></code> | <code>java.lang.String</code> | Applies to all resources in the region. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | An explicit list of resource ARNs. |

---

##### `allResourcesInRegion`<sup>Optional</sup> <a name="allResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.allResourcesInRegion"></a>

```java
public java.lang.String getAllResourcesInRegion();
```

- *Type:* java.lang.String

Applies to all resources in the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_resources_in_region SupportauthzSupportPermit#all_resources_in_region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

An explicit list of resource ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

### SupportauthzSupportPermitSigningKeyInfo <a name="SupportauthzSupportPermitSigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitSigningKeyInfo;

SupportauthzSupportPermitSigningKeyInfo.builder()
    .kmsKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to sign permit grants. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

The ARN of the KMS key used to sign permit grants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#kms_key SupportauthzSupportPermit#kms_key}

---

### SupportauthzSupportPermitTags <a name="SupportauthzSupportPermitTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitTags;

SupportauthzSupportPermitTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#key SupportauthzSupportPermit#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#value SupportauthzSupportPermit#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SupportauthzSupportPermitPermitActionsOutputReference <a name="SupportauthzSupportPermitPermitActionsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitPermitActionsOutputReference;

new SupportauthzSupportPermitPermitActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetAllActions">resetAllActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetActions"></a>

```java
public void resetActions()
```

##### `resetAllActions` <a name="resetAllActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetAllActions"></a>

```java
public void resetAllActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActionsInput">allActionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actions">actions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActions">allActions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actionsInput"></a>

```java
public java.util.List<java.lang.String> getActionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allActionsInput`<sup>Optional</sup> <a name="allActionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActionsInput"></a>

```java
public java.lang.String getAllActionsInput();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actions"></a>

```java
public java.util.List<java.lang.String> getActions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allActions`<sup>Required</sup> <a name="allActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActions"></a>

```java
public java.lang.String getAllActions();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SupportauthzSupportPermitPermitActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---


### SupportauthzSupportPermitPermitConditionsList <a name="SupportauthzSupportPermitPermitConditionsList" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitPermitConditionsList;

new SupportauthzSupportPermitPermitConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get"></a>

```java
public SupportauthzSupportPermitPermitConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SupportauthzSupportPermitPermitConditions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>>

---


### SupportauthzSupportPermitPermitConditionsOutputReference <a name="SupportauthzSupportPermitPermitConditionsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitPermitConditionsOutputReference;

new SupportauthzSupportPermitPermitConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowAfter">resetAllowAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowBefore">resetAllowBefore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAfter` <a name="resetAllowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowAfter"></a>

```java
public void resetAllowAfter()
```

##### `resetAllowBefore` <a name="resetAllowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowBefore"></a>

```java
public void resetAllowBefore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfterInput">allowAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBeforeInput">allowBeforeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter">allowAfter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore">allowBefore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowAfterInput`<sup>Optional</sup> <a name="allowAfterInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfterInput"></a>

```java
public java.lang.String getAllowAfterInput();
```

- *Type:* java.lang.String

---

##### `allowBeforeInput`<sup>Optional</sup> <a name="allowBeforeInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBeforeInput"></a>

```java
public java.lang.String getAllowBeforeInput();
```

- *Type:* java.lang.String

---

##### `allowAfter`<sup>Required</sup> <a name="allowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter"></a>

```java
public java.lang.String getAllowAfter();
```

- *Type:* java.lang.String

---

##### `allowBefore`<sup>Required</sup> <a name="allowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore"></a>

```java
public java.lang.String getAllowBefore();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|SupportauthzSupportPermitPermitConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>

---


### SupportauthzSupportPermitPermitOutputReference <a name="SupportauthzSupportPermitPermitOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitPermitOutputReference;

new SupportauthzSupportPermitPermitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resetConditions">resetConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions"></a>

```java
public void putActions(SupportauthzSupportPermitPermitActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions"></a>

```java
public void putConditions(IResolvable|java.util.List<SupportauthzSupportPermitPermitConditions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>>

---

##### `putResources` <a name="putResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources"></a>

```java
public void putResources(SupportauthzSupportPermitPermitResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resetConditions"></a>

```java
public void resetConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference">SupportauthzSupportPermitPermitActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList">SupportauthzSupportPermitPermitConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference">SupportauthzSupportPermitPermitResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actionsInput">actionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actions"></a>

```java
public SupportauthzSupportPermitPermitActionsOutputReference getActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference">SupportauthzSupportPermitPermitActionsOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditions"></a>

```java
public SupportauthzSupportPermitPermitConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList">SupportauthzSupportPermitPermitConditionsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resources"></a>

```java
public SupportauthzSupportPermitPermitResourcesOutputReference getResources();
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference">SupportauthzSupportPermitPermitResourcesOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actionsInput"></a>

```java
public IResolvable|SupportauthzSupportPermitPermitActions getActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditionsInput"></a>

```java
public IResolvable|java.util.List<SupportauthzSupportPermitPermitConditions> getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resourcesInput"></a>

```java
public IResolvable|SupportauthzSupportPermitPermitResources getResourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.internalValue"></a>

```java
public IResolvable|SupportauthzSupportPermitPermit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---


### SupportauthzSupportPermitPermitResourcesOutputReference <a name="SupportauthzSupportPermitPermitResourcesOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitPermitResourcesOutputReference;

new SupportauthzSupportPermitPermitResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetAllResourcesInRegion">resetAllResourcesInRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllResourcesInRegion` <a name="resetAllResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetAllResourcesInRegion"></a>

```java
public void resetAllResourcesInRegion()
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegionInput">allResourcesInRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion">allResourcesInRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allResourcesInRegionInput`<sup>Optional</sup> <a name="allResourcesInRegionInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegionInput"></a>

```java
public java.lang.String getAllResourcesInRegionInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allResourcesInRegion`<sup>Required</sup> <a name="allResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion"></a>

```java
public java.lang.String getAllResourcesInRegion();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|SupportauthzSupportPermitPermitResources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---


### SupportauthzSupportPermitSigningKeyInfoOutputReference <a name="SupportauthzSupportPermitSigningKeyInfoOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitSigningKeyInfoOutputReference;

new SupportauthzSupportPermitSigningKeyInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey">kmsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKeyInput"></a>

```java
public java.lang.String getKmsKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey"></a>

```java
public java.lang.String getKmsKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|SupportauthzSupportPermitSigningKeyInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---


### SupportauthzSupportPermitTagsList <a name="SupportauthzSupportPermitTagsList" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitTagsList;

new SupportauthzSupportPermitTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get"></a>

```java
public SupportauthzSupportPermitTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SupportauthzSupportPermitTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>>

---


### SupportauthzSupportPermitTagsOutputReference <a name="SupportauthzSupportPermitTagsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.supportauthz_support_permit.SupportauthzSupportPermitTagsOutputReference;

new SupportauthzSupportPermitTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SupportauthzSupportPermitTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>

---



