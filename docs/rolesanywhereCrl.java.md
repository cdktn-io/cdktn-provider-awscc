# `rolesanywhereCrl` Submodule <a name="`rolesanywhereCrl` Submodule" id="@cdktn/provider-awscc.rolesanywhereCrl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RolesanywhereCrl <a name="RolesanywhereCrl" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl awscc_rolesanywhere_crl}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_crl.RolesanywhereCrl;

RolesanywhereCrl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .crlData(java.lang.String)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<RolesanywhereCrlTags>)
//  .trustAnchorArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.crlData">crlData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#crl_data RolesanywhereCrl#crl_data}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#name RolesanywhereCrl#name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#enabled RolesanywhereCrl#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#tags RolesanywhereCrl#tags}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.trustAnchorArn">trustAnchorArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#trust_anchor_arn RolesanywhereCrl#trust_anchor_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `crlData`<sup>Required</sup> <a name="crlData" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.crlData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#crl_data RolesanywhereCrl#crl_data}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#name RolesanywhereCrl#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#enabled RolesanywhereCrl#enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#tags RolesanywhereCrl#tags}.

---

##### `trustAnchorArn`<sup>Optional</sup> <a name="trustAnchorArn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.Initializer.parameter.trustAnchorArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#trust_anchor_arn RolesanywhereCrl#trust_anchor_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetTrustAnchorArn">resetTrustAnchorArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<RolesanywhereCrlTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetTags"></a>

```java
public void resetTags()
```

##### `resetTrustAnchorArn` <a name="resetTrustAnchorArn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.resetTrustAnchorArn"></a>

```java
public void resetTrustAnchorArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RolesanywhereCrl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isConstruct"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_crl.RolesanywhereCrl;

RolesanywhereCrl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_crl.RolesanywhereCrl;

RolesanywhereCrl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_crl.RolesanywhereCrl;

RolesanywhereCrl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_crl.RolesanywhereCrl;

RolesanywhereCrl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RolesanywhereCrl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RolesanywhereCrl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RolesanywhereCrl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RolesanywhereCrl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RolesanywhereCrl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlId">crlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList">RolesanywhereCrlTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlDataInput">crlDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.trustAnchorArnInput">trustAnchorArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlData">crlData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.trustAnchorArn">trustAnchorArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `crlId`<sup>Required</sup> <a name="crlId" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlId"></a>

```java
public java.lang.String getCrlId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tags"></a>

```java
public RolesanywhereCrlTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList">RolesanywhereCrlTagsList</a>

---

##### `crlDataInput`<sup>Optional</sup> <a name="crlDataInput" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlDataInput"></a>

```java
public java.lang.String getCrlDataInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tagsInput"></a>

```java
public IResolvable|java.util.List<RolesanywhereCrlTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>>

---

##### `trustAnchorArnInput`<sup>Optional</sup> <a name="trustAnchorArnInput" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.trustAnchorArnInput"></a>

```java
public java.lang.String getTrustAnchorArnInput();
```

- *Type:* java.lang.String

---

##### `crlData`<sup>Required</sup> <a name="crlData" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.crlData"></a>

```java
public java.lang.String getCrlData();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `trustAnchorArn`<sup>Required</sup> <a name="trustAnchorArn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.trustAnchorArn"></a>

```java
public java.lang.String getTrustAnchorArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RolesanywhereCrlConfig <a name="RolesanywhereCrlConfig" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_crl.RolesanywhereCrlConfig;

RolesanywhereCrlConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .crlData(java.lang.String)
    .name(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<RolesanywhereCrlTags>)
//  .trustAnchorArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.crlData">crlData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#crl_data RolesanywhereCrl#crl_data}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#name RolesanywhereCrl#name}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#enabled RolesanywhereCrl#enabled}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#tags RolesanywhereCrl#tags}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.trustAnchorArn">trustAnchorArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#trust_anchor_arn RolesanywhereCrl#trust_anchor_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `crlData`<sup>Required</sup> <a name="crlData" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.crlData"></a>

```java
public java.lang.String getCrlData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#crl_data RolesanywhereCrl#crl_data}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#name RolesanywhereCrl#name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#enabled RolesanywhereCrl#enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.tags"></a>

```java
public IResolvable|java.util.List<RolesanywhereCrlTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#tags RolesanywhereCrl#tags}.

---

##### `trustAnchorArn`<sup>Optional</sup> <a name="trustAnchorArn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlConfig.property.trustAnchorArn"></a>

```java
public java.lang.String getTrustAnchorArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#trust_anchor_arn RolesanywhereCrl#trust_anchor_arn}.

---

### RolesanywhereCrlTags <a name="RolesanywhereCrlTags" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_crl.RolesanywhereCrlTags;

RolesanywhereCrlTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#key RolesanywhereCrl#key}. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#value RolesanywhereCrl#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#key RolesanywhereCrl#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rolesanywhere_crl#value RolesanywhereCrl#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RolesanywhereCrlTagsList <a name="RolesanywhereCrlTagsList" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_crl.RolesanywhereCrlTagsList;

new RolesanywhereCrlTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.get"></a>

```java
public RolesanywhereCrlTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RolesanywhereCrlTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>>

---


### RolesanywhereCrlTagsOutputReference <a name="RolesanywhereCrlTagsOutputReference" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.rolesanywhere_crl.RolesanywhereCrlTagsOutputReference;

new RolesanywhereCrlTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|RolesanywhereCrlTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rolesanywhereCrl.RolesanywhereCrlTags">RolesanywhereCrlTags</a>

---



