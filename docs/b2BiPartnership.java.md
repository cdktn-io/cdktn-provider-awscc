# `b2BiPartnership` Submodule <a name="`b2BiPartnership` Submodule" id="@cdktn/provider-awscc.b2BiPartnership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### B2BiPartnership <a name="B2BiPartnership" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership awscc_b2bi_partnership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnership;

B2BiPartnership.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capabilities(java.util.List<java.lang.String>)
    .email(java.lang.String)
    .name(java.lang.String)
    .profileId(java.lang.String)
//  .capabilityOptions(B2BiPartnershipCapabilityOptions)
//  .phone(java.lang.String)
//  .tags(IResolvable|java.util.List<B2BiPartnershipTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#capabilities B2BiPartnership#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#email B2BiPartnership#email}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#name B2BiPartnership#name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#profile_id B2BiPartnership#profile_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.capabilityOptions">capabilityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions">B2BiPartnershipCapabilityOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#capability_options B2BiPartnership#capability_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.phone">phone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#phone B2BiPartnership#phone}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags">B2BiPartnershipTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#tags B2BiPartnership#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.capabilities"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#capabilities B2BiPartnership#capabilities}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.email"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#email B2BiPartnership#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#name B2BiPartnership#name}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.profileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#profile_id B2BiPartnership#profile_id}.

---

##### `capabilityOptions`<sup>Optional</sup> <a name="capabilityOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.capabilityOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions">B2BiPartnershipCapabilityOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#capability_options B2BiPartnership#capability_options}.

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.phone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#phone B2BiPartnership#phone}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags">B2BiPartnershipTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#tags B2BiPartnership#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.putCapabilityOptions">putCapabilityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.resetCapabilityOptions">resetCapabilityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.resetPhone">resetPhone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapabilityOptions` <a name="putCapabilityOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.putCapabilityOptions"></a>

```java
public void putCapabilityOptions(B2BiPartnershipCapabilityOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.putCapabilityOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions">B2BiPartnershipCapabilityOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<B2BiPartnershipTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags">B2BiPartnershipTags</a>>

---

##### `resetCapabilityOptions` <a name="resetCapabilityOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.resetCapabilityOptions"></a>

```java
public void resetCapabilityOptions()
```

##### `resetPhone` <a name="resetPhone" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.resetPhone"></a>

```java
public void resetPhone()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a B2BiPartnership resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.isConstruct"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnership;

B2BiPartnership.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnership;

B2BiPartnership.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnership;

B2BiPartnership.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnership;

B2BiPartnership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),B2BiPartnership.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a B2BiPartnership resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the B2BiPartnership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing B2BiPartnership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the B2BiPartnership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.capabilityOptions">capabilityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference">B2BiPartnershipCapabilityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.partnershipArn">partnershipArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.partnershipId">partnershipId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList">B2BiPartnershipTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.tradingPartnerId">tradingPartnerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.capabilityOptionsInput">capabilityOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions">B2BiPartnershipCapabilityOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.phoneInput">phoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags">B2BiPartnershipTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.phone">phone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capabilityOptions`<sup>Required</sup> <a name="capabilityOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.capabilityOptions"></a>

```java
public B2BiPartnershipCapabilityOptionsOutputReference getCapabilityOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference">B2BiPartnershipCapabilityOptionsOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `partnershipArn`<sup>Required</sup> <a name="partnershipArn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.partnershipArn"></a>

```java
public java.lang.String getPartnershipArn();
```

- *Type:* java.lang.String

---

##### `partnershipId`<sup>Required</sup> <a name="partnershipId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.partnershipId"></a>

```java
public java.lang.String getPartnershipId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.tags"></a>

```java
public B2BiPartnershipTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList">B2BiPartnershipTagsList</a>

---

##### `tradingPartnerId`<sup>Required</sup> <a name="tradingPartnerId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.tradingPartnerId"></a>

```java
public java.lang.String getTradingPartnerId();
```

- *Type:* java.lang.String

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capabilityOptionsInput`<sup>Optional</sup> <a name="capabilityOptionsInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.capabilityOptionsInput"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptions getCapabilityOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions">B2BiPartnershipCapabilityOptions</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.phoneInput"></a>

```java
public java.lang.String getPhoneInput();
```

- *Type:* java.lang.String

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.tagsInput"></a>

```java
public IResolvable|java.util.List<B2BiPartnershipTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags">B2BiPartnershipTags</a>>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.phone"></a>

```java
public java.lang.String getPhone();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnership.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### B2BiPartnershipCapabilityOptions <a name="B2BiPartnershipCapabilityOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptions;

B2BiPartnershipCapabilityOptions.builder()
//  .inboundEdi(B2BiPartnershipCapabilityOptionsInboundEdi)
//  .outboundEdi(B2BiPartnershipCapabilityOptionsOutboundEdi)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions.property.inboundEdi">inboundEdi</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdi">B2BiPartnershipCapabilityOptionsInboundEdi</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#inbound_edi B2BiPartnership#inbound_edi}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions.property.outboundEdi">outboundEdi</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdi">B2BiPartnershipCapabilityOptionsOutboundEdi</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#outbound_edi B2BiPartnership#outbound_edi}. |

---

##### `inboundEdi`<sup>Optional</sup> <a name="inboundEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions.property.inboundEdi"></a>

```java
public B2BiPartnershipCapabilityOptionsInboundEdi getInboundEdi();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdi">B2BiPartnershipCapabilityOptionsInboundEdi</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#inbound_edi B2BiPartnership#inbound_edi}.

---

##### `outboundEdi`<sup>Optional</sup> <a name="outboundEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions.property.outboundEdi"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdi getOutboundEdi();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdi">B2BiPartnershipCapabilityOptionsOutboundEdi</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#outbound_edi B2BiPartnership#outbound_edi}.

---

### B2BiPartnershipCapabilityOptionsInboundEdi <a name="B2BiPartnershipCapabilityOptionsInboundEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdi.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsInboundEdi;

B2BiPartnershipCapabilityOptionsInboundEdi.builder()
//  .x12(B2BiPartnershipCapabilityOptionsInboundEdiX12)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdi.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12">B2BiPartnershipCapabilityOptionsInboundEdiX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#x12 B2BiPartnership#x12}. |

---

##### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdi.property.x12"></a>

```java
public B2BiPartnershipCapabilityOptionsInboundEdiX12 getX12();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12">B2BiPartnershipCapabilityOptionsInboundEdiX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#x12 B2BiPartnership#x12}.

---

### B2BiPartnershipCapabilityOptionsInboundEdiX12 <a name="B2BiPartnershipCapabilityOptionsInboundEdiX12" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsInboundEdiX12;

B2BiPartnershipCapabilityOptionsInboundEdiX12.builder()
//  .acknowledgmentOptions(B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12.property.acknowledgmentOptions">acknowledgmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#acknowledgment_options B2BiPartnership#acknowledgment_options}. |

---

##### `acknowledgmentOptions`<sup>Optional</sup> <a name="acknowledgmentOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12.property.acknowledgmentOptions"></a>

```java
public B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions getAcknowledgmentOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#acknowledgment_options B2BiPartnership#acknowledgment_options}.

---

### B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions <a name="B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions;

B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions.builder()
//  .functionalAcknowledgment(java.lang.String)
//  .technicalAcknowledgment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions.property.functionalAcknowledgment">functionalAcknowledgment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#functional_acknowledgment B2BiPartnership#functional_acknowledgment}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions.property.technicalAcknowledgment">technicalAcknowledgment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#technical_acknowledgment B2BiPartnership#technical_acknowledgment}. |

---

##### `functionalAcknowledgment`<sup>Optional</sup> <a name="functionalAcknowledgment" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions.property.functionalAcknowledgment"></a>

```java
public java.lang.String getFunctionalAcknowledgment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#functional_acknowledgment B2BiPartnership#functional_acknowledgment}.

---

##### `technicalAcknowledgment`<sup>Optional</sup> <a name="technicalAcknowledgment" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions.property.technicalAcknowledgment"></a>

```java
public java.lang.String getTechnicalAcknowledgment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#technical_acknowledgment B2BiPartnership#technical_acknowledgment}.

---

### B2BiPartnershipCapabilityOptionsOutboundEdi <a name="B2BiPartnershipCapabilityOptionsOutboundEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdi.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdi;

B2BiPartnershipCapabilityOptionsOutboundEdi.builder()
//  .x12(B2BiPartnershipCapabilityOptionsOutboundEdiX12)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdi.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12">B2BiPartnershipCapabilityOptionsOutboundEdiX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#x12 B2BiPartnership#x12}. |

---

##### `x12`<sup>Optional</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdi.property.x12"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12 getX12();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12">B2BiPartnershipCapabilityOptionsOutboundEdiX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#x12 B2BiPartnership#x12}.

---

### B2BiPartnershipCapabilityOptionsOutboundEdiX12 <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12;

B2BiPartnershipCapabilityOptionsOutboundEdiX12.builder()
//  .common(B2BiPartnershipCapabilityOptionsOutboundEdiX12Common)
//  .wrapOptions(B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12.property.common">common</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common">B2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#common B2BiPartnership#common}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12.property.wrapOptions">wrapOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#wrap_options B2BiPartnership#wrap_options}. |

---

##### `common`<sup>Optional</sup> <a name="common" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12.property.common"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12Common getCommon();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common">B2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#common B2BiPartnership#common}.

---

##### `wrapOptions`<sup>Optional</sup> <a name="wrapOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12.property.wrapOptions"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions getWrapOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#wrap_options B2BiPartnership#wrap_options}.

---

### B2BiPartnershipCapabilityOptionsOutboundEdiX12Common <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12Common" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common;

B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.builder()
//  .controlNumbers(B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers)
//  .delimiters(B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters)
//  .functionalGroupHeaders(B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders)
//  .gs05TimeFormat(java.lang.String)
//  .interchangeControlHeaders(B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders)
//  .validateEdi(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.controlNumbers">controlNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#control_numbers B2BiPartnership#control_numbers}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.delimiters">delimiters</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#delimiters B2BiPartnership#delimiters}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.functionalGroupHeaders">functionalGroupHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#functional_group_headers B2BiPartnership#functional_group_headers}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.gs05TimeFormat">gs05TimeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#gs_05_time_format B2BiPartnership#gs_05_time_format}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.interchangeControlHeaders">interchangeControlHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#interchange_control_headers B2BiPartnership#interchange_control_headers}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.validateEdi">validateEdi</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#validate_edi B2BiPartnership#validate_edi}. |

---

##### `controlNumbers`<sup>Optional</sup> <a name="controlNumbers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.controlNumbers"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers getControlNumbers();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#control_numbers B2BiPartnership#control_numbers}.

---

##### `delimiters`<sup>Optional</sup> <a name="delimiters" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.delimiters"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters getDelimiters();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#delimiters B2BiPartnership#delimiters}.

---

##### `functionalGroupHeaders`<sup>Optional</sup> <a name="functionalGroupHeaders" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.functionalGroupHeaders"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders getFunctionalGroupHeaders();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#functional_group_headers B2BiPartnership#functional_group_headers}.

---

##### `gs05TimeFormat`<sup>Optional</sup> <a name="gs05TimeFormat" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.gs05TimeFormat"></a>

```java
public java.lang.String getGs05TimeFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#gs_05_time_format B2BiPartnership#gs_05_time_format}.

---

##### `interchangeControlHeaders`<sup>Optional</sup> <a name="interchangeControlHeaders" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.interchangeControlHeaders"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders getInterchangeControlHeaders();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#interchange_control_headers B2BiPartnership#interchange_control_headers}.

---

##### `validateEdi`<sup>Optional</sup> <a name="validateEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common.property.validateEdi"></a>

```java
public java.lang.Boolean|IResolvable getValidateEdi();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#validate_edi B2BiPartnership#validate_edi}.

---

### B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers;

B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers.builder()
//  .startingFunctionalGroupControlNumber(java.lang.Number)
//  .startingInterchangeControlNumber(java.lang.Number)
//  .startingTransactionSetControlNumber(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers.property.startingFunctionalGroupControlNumber">startingFunctionalGroupControlNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#starting_functional_group_control_number B2BiPartnership#starting_functional_group_control_number}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers.property.startingInterchangeControlNumber">startingInterchangeControlNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#starting_interchange_control_number B2BiPartnership#starting_interchange_control_number}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers.property.startingTransactionSetControlNumber">startingTransactionSetControlNumber</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#starting_transaction_set_control_number B2BiPartnership#starting_transaction_set_control_number}. |

---

##### `startingFunctionalGroupControlNumber`<sup>Optional</sup> <a name="startingFunctionalGroupControlNumber" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers.property.startingFunctionalGroupControlNumber"></a>

```java
public java.lang.Number getStartingFunctionalGroupControlNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#starting_functional_group_control_number B2BiPartnership#starting_functional_group_control_number}.

---

##### `startingInterchangeControlNumber`<sup>Optional</sup> <a name="startingInterchangeControlNumber" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers.property.startingInterchangeControlNumber"></a>

```java
public java.lang.Number getStartingInterchangeControlNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#starting_interchange_control_number B2BiPartnership#starting_interchange_control_number}.

---

##### `startingTransactionSetControlNumber`<sup>Optional</sup> <a name="startingTransactionSetControlNumber" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers.property.startingTransactionSetControlNumber"></a>

```java
public java.lang.Number getStartingTransactionSetControlNumber();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#starting_transaction_set_control_number B2BiPartnership#starting_transaction_set_control_number}.

---

### B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters;

B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters.builder()
//  .componentSeparator(java.lang.String)
//  .dataElementSeparator(java.lang.String)
//  .segmentTerminator(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters.property.componentSeparator">componentSeparator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#component_separator B2BiPartnership#component_separator}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters.property.dataElementSeparator">dataElementSeparator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#data_element_separator B2BiPartnership#data_element_separator}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters.property.segmentTerminator">segmentTerminator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#segment_terminator B2BiPartnership#segment_terminator}. |

---

##### `componentSeparator`<sup>Optional</sup> <a name="componentSeparator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters.property.componentSeparator"></a>

```java
public java.lang.String getComponentSeparator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#component_separator B2BiPartnership#component_separator}.

---

##### `dataElementSeparator`<sup>Optional</sup> <a name="dataElementSeparator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters.property.dataElementSeparator"></a>

```java
public java.lang.String getDataElementSeparator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#data_element_separator B2BiPartnership#data_element_separator}.

---

##### `segmentTerminator`<sup>Optional</sup> <a name="segmentTerminator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters.property.segmentTerminator"></a>

```java
public java.lang.String getSegmentTerminator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#segment_terminator B2BiPartnership#segment_terminator}.

---

### B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders;

B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders.builder()
//  .applicationReceiverCode(java.lang.String)
//  .applicationSenderCode(java.lang.String)
//  .responsibleAgencyCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders.property.applicationReceiverCode">applicationReceiverCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#application_receiver_code B2BiPartnership#application_receiver_code}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders.property.applicationSenderCode">applicationSenderCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#application_sender_code B2BiPartnership#application_sender_code}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders.property.responsibleAgencyCode">responsibleAgencyCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#responsible_agency_code B2BiPartnership#responsible_agency_code}. |

---

##### `applicationReceiverCode`<sup>Optional</sup> <a name="applicationReceiverCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders.property.applicationReceiverCode"></a>

```java
public java.lang.String getApplicationReceiverCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#application_receiver_code B2BiPartnership#application_receiver_code}.

---

##### `applicationSenderCode`<sup>Optional</sup> <a name="applicationSenderCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders.property.applicationSenderCode"></a>

```java
public java.lang.String getApplicationSenderCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#application_sender_code B2BiPartnership#application_sender_code}.

---

##### `responsibleAgencyCode`<sup>Optional</sup> <a name="responsibleAgencyCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders.property.responsibleAgencyCode"></a>

```java
public java.lang.String getResponsibleAgencyCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#responsible_agency_code B2BiPartnership#responsible_agency_code}.

---

### B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders;

B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.builder()
//  .acknowledgmentRequestedCode(java.lang.String)
//  .receiverId(java.lang.String)
//  .receiverIdQualifier(java.lang.String)
//  .repetitionSeparator(java.lang.String)
//  .senderId(java.lang.String)
//  .senderIdQualifier(java.lang.String)
//  .usageIndicatorCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.acknowledgmentRequestedCode">acknowledgmentRequestedCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#acknowledgment_requested_code B2BiPartnership#acknowledgment_requested_code}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.receiverId">receiverId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#receiver_id B2BiPartnership#receiver_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.receiverIdQualifier">receiverIdQualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#receiver_id_qualifier B2BiPartnership#receiver_id_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.repetitionSeparator">repetitionSeparator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#repetition_separator B2BiPartnership#repetition_separator}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.senderId">senderId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#sender_id B2BiPartnership#sender_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.senderIdQualifier">senderIdQualifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#sender_id_qualifier B2BiPartnership#sender_id_qualifier}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.usageIndicatorCode">usageIndicatorCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#usage_indicator_code B2BiPartnership#usage_indicator_code}. |

---

##### `acknowledgmentRequestedCode`<sup>Optional</sup> <a name="acknowledgmentRequestedCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.acknowledgmentRequestedCode"></a>

```java
public java.lang.String getAcknowledgmentRequestedCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#acknowledgment_requested_code B2BiPartnership#acknowledgment_requested_code}.

---

##### `receiverId`<sup>Optional</sup> <a name="receiverId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.receiverId"></a>

```java
public java.lang.String getReceiverId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#receiver_id B2BiPartnership#receiver_id}.

---

##### `receiverIdQualifier`<sup>Optional</sup> <a name="receiverIdQualifier" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.receiverIdQualifier"></a>

```java
public java.lang.String getReceiverIdQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#receiver_id_qualifier B2BiPartnership#receiver_id_qualifier}.

---

##### `repetitionSeparator`<sup>Optional</sup> <a name="repetitionSeparator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.repetitionSeparator"></a>

```java
public java.lang.String getRepetitionSeparator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#repetition_separator B2BiPartnership#repetition_separator}.

---

##### `senderId`<sup>Optional</sup> <a name="senderId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.senderId"></a>

```java
public java.lang.String getSenderId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#sender_id B2BiPartnership#sender_id}.

---

##### `senderIdQualifier`<sup>Optional</sup> <a name="senderIdQualifier" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.senderIdQualifier"></a>

```java
public java.lang.String getSenderIdQualifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#sender_id_qualifier B2BiPartnership#sender_id_qualifier}.

---

##### `usageIndicatorCode`<sup>Optional</sup> <a name="usageIndicatorCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders.property.usageIndicatorCode"></a>

```java
public java.lang.String getUsageIndicatorCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#usage_indicator_code B2BiPartnership#usage_indicator_code}.

---

### B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions;

B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions.builder()
//  .lineLength(java.lang.Number)
//  .lineTerminator(java.lang.String)
//  .wrapBy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions.property.lineLength">lineLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#line_length B2BiPartnership#line_length}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions.property.lineTerminator">lineTerminator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#line_terminator B2BiPartnership#line_terminator}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions.property.wrapBy">wrapBy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#wrap_by B2BiPartnership#wrap_by}. |

---

##### `lineLength`<sup>Optional</sup> <a name="lineLength" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions.property.lineLength"></a>

```java
public java.lang.Number getLineLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#line_length B2BiPartnership#line_length}.

---

##### `lineTerminator`<sup>Optional</sup> <a name="lineTerminator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions.property.lineTerminator"></a>

```java
public java.lang.String getLineTerminator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#line_terminator B2BiPartnership#line_terminator}.

---

##### `wrapBy`<sup>Optional</sup> <a name="wrapBy" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions.property.wrapBy"></a>

```java
public java.lang.String getWrapBy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#wrap_by B2BiPartnership#wrap_by}.

---

### B2BiPartnershipConfig <a name="B2BiPartnershipConfig" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipConfig;

B2BiPartnershipConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capabilities(java.util.List<java.lang.String>)
    .email(java.lang.String)
    .name(java.lang.String)
    .profileId(java.lang.String)
//  .capabilityOptions(B2BiPartnershipCapabilityOptions)
//  .phone(java.lang.String)
//  .tags(IResolvable|java.util.List<B2BiPartnershipTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#capabilities B2BiPartnership#capabilities}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#email B2BiPartnership#email}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#name B2BiPartnership#name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#profile_id B2BiPartnership#profile_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.capabilityOptions">capabilityOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions">B2BiPartnershipCapabilityOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#capability_options B2BiPartnership#capability_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.phone">phone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#phone B2BiPartnership#phone}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags">B2BiPartnershipTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#tags B2BiPartnership#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#capabilities B2BiPartnership#capabilities}.

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#email B2BiPartnership#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#name B2BiPartnership#name}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#profile_id B2BiPartnership#profile_id}.

---

##### `capabilityOptions`<sup>Optional</sup> <a name="capabilityOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.capabilityOptions"></a>

```java
public B2BiPartnershipCapabilityOptions getCapabilityOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions">B2BiPartnershipCapabilityOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#capability_options B2BiPartnership#capability_options}.

---

##### `phone`<sup>Optional</sup> <a name="phone" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.phone"></a>

```java
public java.lang.String getPhone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#phone B2BiPartnership#phone}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipConfig.property.tags"></a>

```java
public IResolvable|java.util.List<B2BiPartnershipTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags">B2BiPartnershipTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#tags B2BiPartnership#tags}.

---

### B2BiPartnershipTags <a name="B2BiPartnershipTags" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipTags;

B2BiPartnershipTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#key B2BiPartnership#key}. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#value B2BiPartnership#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#key B2BiPartnership#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/b2bi_partnership#value B2BiPartnership#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### B2BiPartnershipCapabilityOptionsInboundEdiOutputReference <a name="B2BiPartnershipCapabilityOptionsInboundEdiOutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference;

new B2BiPartnershipCapabilityOptionsInboundEdiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.putX12">putX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resetX12">resetX12</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putX12` <a name="putX12" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.putX12"></a>

```java
public void putX12(B2BiPartnershipCapabilityOptionsInboundEdiX12 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12">B2BiPartnershipCapabilityOptionsInboundEdiX12</a>

---

##### `resetX12` <a name="resetX12" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.resetX12"></a>

```java
public void resetX12()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference">B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.x12Input">x12Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12">B2BiPartnershipCapabilityOptionsInboundEdiX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdi">B2BiPartnershipCapabilityOptionsInboundEdi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.x12"></a>

```java
public B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference getX12();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference">B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference</a>

---

##### `x12Input`<sup>Optional</sup> <a name="x12Input" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.x12Input"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsInboundEdiX12 getX12Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12">B2BiPartnershipCapabilityOptionsInboundEdiX12</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsInboundEdi getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdi">B2BiPartnershipCapabilityOptionsInboundEdi</a>

---


### B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference <a name="B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference;

new B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resetFunctionalAcknowledgment">resetFunctionalAcknowledgment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resetTechnicalAcknowledgment">resetTechnicalAcknowledgment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFunctionalAcknowledgment` <a name="resetFunctionalAcknowledgment" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resetFunctionalAcknowledgment"></a>

```java
public void resetFunctionalAcknowledgment()
```

##### `resetTechnicalAcknowledgment` <a name="resetTechnicalAcknowledgment" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.resetTechnicalAcknowledgment"></a>

```java
public void resetTechnicalAcknowledgment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.functionalAcknowledgmentInput">functionalAcknowledgmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.technicalAcknowledgmentInput">technicalAcknowledgmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.functionalAcknowledgment">functionalAcknowledgment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.technicalAcknowledgment">technicalAcknowledgment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `functionalAcknowledgmentInput`<sup>Optional</sup> <a name="functionalAcknowledgmentInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.functionalAcknowledgmentInput"></a>

```java
public java.lang.String getFunctionalAcknowledgmentInput();
```

- *Type:* java.lang.String

---

##### `technicalAcknowledgmentInput`<sup>Optional</sup> <a name="technicalAcknowledgmentInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.technicalAcknowledgmentInput"></a>

```java
public java.lang.String getTechnicalAcknowledgmentInput();
```

- *Type:* java.lang.String

---

##### `functionalAcknowledgment`<sup>Required</sup> <a name="functionalAcknowledgment" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.functionalAcknowledgment"></a>

```java
public java.lang.String getFunctionalAcknowledgment();
```

- *Type:* java.lang.String

---

##### `technicalAcknowledgment`<sup>Required</sup> <a name="technicalAcknowledgment" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.technicalAcknowledgment"></a>

```java
public java.lang.String getTechnicalAcknowledgment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a>

---


### B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference <a name="B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference;

new B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.putAcknowledgmentOptions">putAcknowledgmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resetAcknowledgmentOptions">resetAcknowledgmentOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAcknowledgmentOptions` <a name="putAcknowledgmentOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.putAcknowledgmentOptions"></a>

```java
public void putAcknowledgmentOptions(B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.putAcknowledgmentOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a>

---

##### `resetAcknowledgmentOptions` <a name="resetAcknowledgmentOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.resetAcknowledgmentOptions"></a>

```java
public void resetAcknowledgmentOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.acknowledgmentOptions">acknowledgmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference">B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.acknowledgmentOptionsInput">acknowledgmentOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12">B2BiPartnershipCapabilityOptionsInboundEdiX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acknowledgmentOptions`<sup>Required</sup> <a name="acknowledgmentOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.acknowledgmentOptions"></a>

```java
public B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference getAcknowledgmentOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference">B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptionsOutputReference</a>

---

##### `acknowledgmentOptionsInput`<sup>Optional</sup> <a name="acknowledgmentOptionsInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.acknowledgmentOptionsInput"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions getAcknowledgmentOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions">B2BiPartnershipCapabilityOptionsInboundEdiX12AcknowledgmentOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12OutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsInboundEdiX12 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiX12">B2BiPartnershipCapabilityOptionsInboundEdiX12</a>

---


### B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference <a name="B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference;

new B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.putX12">putX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resetX12">resetX12</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putX12` <a name="putX12" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.putX12"></a>

```java
public void putX12(B2BiPartnershipCapabilityOptionsOutboundEdiX12 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12">B2BiPartnershipCapabilityOptionsOutboundEdiX12</a>

---

##### `resetX12` <a name="resetX12" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.resetX12"></a>

```java
public void resetX12()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.x12">x12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.x12Input">x12Input</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12">B2BiPartnershipCapabilityOptionsOutboundEdiX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdi">B2BiPartnershipCapabilityOptionsOutboundEdi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `x12`<sup>Required</sup> <a name="x12" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.x12"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference getX12();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference</a>

---

##### `x12Input`<sup>Optional</sup> <a name="x12Input" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.x12Input"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12 getX12Input();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12">B2BiPartnershipCapabilityOptionsOutboundEdiX12</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdi getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdi">B2BiPartnershipCapabilityOptionsOutboundEdi</a>

---


### B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference;

new B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resetStartingFunctionalGroupControlNumber">resetStartingFunctionalGroupControlNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resetStartingInterchangeControlNumber">resetStartingInterchangeControlNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resetStartingTransactionSetControlNumber">resetStartingTransactionSetControlNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartingFunctionalGroupControlNumber` <a name="resetStartingFunctionalGroupControlNumber" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resetStartingFunctionalGroupControlNumber"></a>

```java
public void resetStartingFunctionalGroupControlNumber()
```

##### `resetStartingInterchangeControlNumber` <a name="resetStartingInterchangeControlNumber" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resetStartingInterchangeControlNumber"></a>

```java
public void resetStartingInterchangeControlNumber()
```

##### `resetStartingTransactionSetControlNumber` <a name="resetStartingTransactionSetControlNumber" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.resetStartingTransactionSetControlNumber"></a>

```java
public void resetStartingTransactionSetControlNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingFunctionalGroupControlNumberInput">startingFunctionalGroupControlNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingInterchangeControlNumberInput">startingInterchangeControlNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingTransactionSetControlNumberInput">startingTransactionSetControlNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingFunctionalGroupControlNumber">startingFunctionalGroupControlNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingInterchangeControlNumber">startingInterchangeControlNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingTransactionSetControlNumber">startingTransactionSetControlNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startingFunctionalGroupControlNumberInput`<sup>Optional</sup> <a name="startingFunctionalGroupControlNumberInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingFunctionalGroupControlNumberInput"></a>

```java
public java.lang.Number getStartingFunctionalGroupControlNumberInput();
```

- *Type:* java.lang.Number

---

##### `startingInterchangeControlNumberInput`<sup>Optional</sup> <a name="startingInterchangeControlNumberInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingInterchangeControlNumberInput"></a>

```java
public java.lang.Number getStartingInterchangeControlNumberInput();
```

- *Type:* java.lang.Number

---

##### `startingTransactionSetControlNumberInput`<sup>Optional</sup> <a name="startingTransactionSetControlNumberInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingTransactionSetControlNumberInput"></a>

```java
public java.lang.Number getStartingTransactionSetControlNumberInput();
```

- *Type:* java.lang.Number

---

##### `startingFunctionalGroupControlNumber`<sup>Required</sup> <a name="startingFunctionalGroupControlNumber" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingFunctionalGroupControlNumber"></a>

```java
public java.lang.Number getStartingFunctionalGroupControlNumber();
```

- *Type:* java.lang.Number

---

##### `startingInterchangeControlNumber`<sup>Required</sup> <a name="startingInterchangeControlNumber" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingInterchangeControlNumber"></a>

```java
public java.lang.Number getStartingInterchangeControlNumber();
```

- *Type:* java.lang.Number

---

##### `startingTransactionSetControlNumber`<sup>Required</sup> <a name="startingTransactionSetControlNumber" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.startingTransactionSetControlNumber"></a>

```java
public java.lang.Number getStartingTransactionSetControlNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a>

---


### B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference;

new B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resetComponentSeparator">resetComponentSeparator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resetDataElementSeparator">resetDataElementSeparator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resetSegmentTerminator">resetSegmentTerminator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComponentSeparator` <a name="resetComponentSeparator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resetComponentSeparator"></a>

```java
public void resetComponentSeparator()
```

##### `resetDataElementSeparator` <a name="resetDataElementSeparator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resetDataElementSeparator"></a>

```java
public void resetDataElementSeparator()
```

##### `resetSegmentTerminator` <a name="resetSegmentTerminator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.resetSegmentTerminator"></a>

```java
public void resetSegmentTerminator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.componentSeparatorInput">componentSeparatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.dataElementSeparatorInput">dataElementSeparatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.segmentTerminatorInput">segmentTerminatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.componentSeparator">componentSeparator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.dataElementSeparator">dataElementSeparator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.segmentTerminator">segmentTerminator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentSeparatorInput`<sup>Optional</sup> <a name="componentSeparatorInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.componentSeparatorInput"></a>

```java
public java.lang.String getComponentSeparatorInput();
```

- *Type:* java.lang.String

---

##### `dataElementSeparatorInput`<sup>Optional</sup> <a name="dataElementSeparatorInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.dataElementSeparatorInput"></a>

```java
public java.lang.String getDataElementSeparatorInput();
```

- *Type:* java.lang.String

---

##### `segmentTerminatorInput`<sup>Optional</sup> <a name="segmentTerminatorInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.segmentTerminatorInput"></a>

```java
public java.lang.String getSegmentTerminatorInput();
```

- *Type:* java.lang.String

---

##### `componentSeparator`<sup>Required</sup> <a name="componentSeparator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.componentSeparator"></a>

```java
public java.lang.String getComponentSeparator();
```

- *Type:* java.lang.String

---

##### `dataElementSeparator`<sup>Required</sup> <a name="dataElementSeparator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.dataElementSeparator"></a>

```java
public java.lang.String getDataElementSeparator();
```

- *Type:* java.lang.String

---

##### `segmentTerminator`<sup>Required</sup> <a name="segmentTerminator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.segmentTerminator"></a>

```java
public java.lang.String getSegmentTerminator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a>

---


### B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference;

new B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resetApplicationReceiverCode">resetApplicationReceiverCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resetApplicationSenderCode">resetApplicationSenderCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resetResponsibleAgencyCode">resetResponsibleAgencyCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationReceiverCode` <a name="resetApplicationReceiverCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resetApplicationReceiverCode"></a>

```java
public void resetApplicationReceiverCode()
```

##### `resetApplicationSenderCode` <a name="resetApplicationSenderCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resetApplicationSenderCode"></a>

```java
public void resetApplicationSenderCode()
```

##### `resetResponsibleAgencyCode` <a name="resetResponsibleAgencyCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.resetResponsibleAgencyCode"></a>

```java
public void resetResponsibleAgencyCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationReceiverCodeInput">applicationReceiverCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationSenderCodeInput">applicationSenderCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.responsibleAgencyCodeInput">responsibleAgencyCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationReceiverCode">applicationReceiverCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationSenderCode">applicationSenderCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.responsibleAgencyCode">responsibleAgencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationReceiverCodeInput`<sup>Optional</sup> <a name="applicationReceiverCodeInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationReceiverCodeInput"></a>

```java
public java.lang.String getApplicationReceiverCodeInput();
```

- *Type:* java.lang.String

---

##### `applicationSenderCodeInput`<sup>Optional</sup> <a name="applicationSenderCodeInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationSenderCodeInput"></a>

```java
public java.lang.String getApplicationSenderCodeInput();
```

- *Type:* java.lang.String

---

##### `responsibleAgencyCodeInput`<sup>Optional</sup> <a name="responsibleAgencyCodeInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.responsibleAgencyCodeInput"></a>

```java
public java.lang.String getResponsibleAgencyCodeInput();
```

- *Type:* java.lang.String

---

##### `applicationReceiverCode`<sup>Required</sup> <a name="applicationReceiverCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationReceiverCode"></a>

```java
public java.lang.String getApplicationReceiverCode();
```

- *Type:* java.lang.String

---

##### `applicationSenderCode`<sup>Required</sup> <a name="applicationSenderCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.applicationSenderCode"></a>

```java
public java.lang.String getApplicationSenderCode();
```

- *Type:* java.lang.String

---

##### `responsibleAgencyCode`<sup>Required</sup> <a name="responsibleAgencyCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.responsibleAgencyCode"></a>

```java
public java.lang.String getResponsibleAgencyCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a>

---


### B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference;

new B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetAcknowledgmentRequestedCode">resetAcknowledgmentRequestedCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetReceiverId">resetReceiverId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetReceiverIdQualifier">resetReceiverIdQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetRepetitionSeparator">resetRepetitionSeparator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetSenderId">resetSenderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetSenderIdQualifier">resetSenderIdQualifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetUsageIndicatorCode">resetUsageIndicatorCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcknowledgmentRequestedCode` <a name="resetAcknowledgmentRequestedCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetAcknowledgmentRequestedCode"></a>

```java
public void resetAcknowledgmentRequestedCode()
```

##### `resetReceiverId` <a name="resetReceiverId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetReceiverId"></a>

```java
public void resetReceiverId()
```

##### `resetReceiverIdQualifier` <a name="resetReceiverIdQualifier" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetReceiverIdQualifier"></a>

```java
public void resetReceiverIdQualifier()
```

##### `resetRepetitionSeparator` <a name="resetRepetitionSeparator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetRepetitionSeparator"></a>

```java
public void resetRepetitionSeparator()
```

##### `resetSenderId` <a name="resetSenderId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetSenderId"></a>

```java
public void resetSenderId()
```

##### `resetSenderIdQualifier` <a name="resetSenderIdQualifier" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetSenderIdQualifier"></a>

```java
public void resetSenderIdQualifier()
```

##### `resetUsageIndicatorCode` <a name="resetUsageIndicatorCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.resetUsageIndicatorCode"></a>

```java
public void resetUsageIndicatorCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.acknowledgmentRequestedCodeInput">acknowledgmentRequestedCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdInput">receiverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdQualifierInput">receiverIdQualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.repetitionSeparatorInput">repetitionSeparatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdInput">senderIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdQualifierInput">senderIdQualifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.usageIndicatorCodeInput">usageIndicatorCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.acknowledgmentRequestedCode">acknowledgmentRequestedCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverId">receiverId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdQualifier">receiverIdQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.repetitionSeparator">repetitionSeparator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderId">senderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdQualifier">senderIdQualifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.usageIndicatorCode">usageIndicatorCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acknowledgmentRequestedCodeInput`<sup>Optional</sup> <a name="acknowledgmentRequestedCodeInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.acknowledgmentRequestedCodeInput"></a>

```java
public java.lang.String getAcknowledgmentRequestedCodeInput();
```

- *Type:* java.lang.String

---

##### `receiverIdInput`<sup>Optional</sup> <a name="receiverIdInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdInput"></a>

```java
public java.lang.String getReceiverIdInput();
```

- *Type:* java.lang.String

---

##### `receiverIdQualifierInput`<sup>Optional</sup> <a name="receiverIdQualifierInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdQualifierInput"></a>

```java
public java.lang.String getReceiverIdQualifierInput();
```

- *Type:* java.lang.String

---

##### `repetitionSeparatorInput`<sup>Optional</sup> <a name="repetitionSeparatorInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.repetitionSeparatorInput"></a>

```java
public java.lang.String getRepetitionSeparatorInput();
```

- *Type:* java.lang.String

---

##### `senderIdInput`<sup>Optional</sup> <a name="senderIdInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdInput"></a>

```java
public java.lang.String getSenderIdInput();
```

- *Type:* java.lang.String

---

##### `senderIdQualifierInput`<sup>Optional</sup> <a name="senderIdQualifierInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdQualifierInput"></a>

```java
public java.lang.String getSenderIdQualifierInput();
```

- *Type:* java.lang.String

---

##### `usageIndicatorCodeInput`<sup>Optional</sup> <a name="usageIndicatorCodeInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.usageIndicatorCodeInput"></a>

```java
public java.lang.String getUsageIndicatorCodeInput();
```

- *Type:* java.lang.String

---

##### `acknowledgmentRequestedCode`<sup>Required</sup> <a name="acknowledgmentRequestedCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.acknowledgmentRequestedCode"></a>

```java
public java.lang.String getAcknowledgmentRequestedCode();
```

- *Type:* java.lang.String

---

##### `receiverId`<sup>Required</sup> <a name="receiverId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverId"></a>

```java
public java.lang.String getReceiverId();
```

- *Type:* java.lang.String

---

##### `receiverIdQualifier`<sup>Required</sup> <a name="receiverIdQualifier" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.receiverIdQualifier"></a>

```java
public java.lang.String getReceiverIdQualifier();
```

- *Type:* java.lang.String

---

##### `repetitionSeparator`<sup>Required</sup> <a name="repetitionSeparator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.repetitionSeparator"></a>

```java
public java.lang.String getRepetitionSeparator();
```

- *Type:* java.lang.String

---

##### `senderId`<sup>Required</sup> <a name="senderId" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderId"></a>

```java
public java.lang.String getSenderId();
```

- *Type:* java.lang.String

---

##### `senderIdQualifier`<sup>Required</sup> <a name="senderIdQualifier" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.senderIdQualifier"></a>

```java
public java.lang.String getSenderIdQualifier();
```

- *Type:* java.lang.String

---

##### `usageIndicatorCode`<sup>Required</sup> <a name="usageIndicatorCode" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.usageIndicatorCode"></a>

```java
public java.lang.String getUsageIndicatorCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a>

---


### B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference;

new B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putControlNumbers">putControlNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putDelimiters">putDelimiters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putFunctionalGroupHeaders">putFunctionalGroupHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putInterchangeControlHeaders">putInterchangeControlHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetControlNumbers">resetControlNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetDelimiters">resetDelimiters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetFunctionalGroupHeaders">resetFunctionalGroupHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetGs05TimeFormat">resetGs05TimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetInterchangeControlHeaders">resetInterchangeControlHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetValidateEdi">resetValidateEdi</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlNumbers` <a name="putControlNumbers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putControlNumbers"></a>

```java
public void putControlNumbers(B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putControlNumbers.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a>

---

##### `putDelimiters` <a name="putDelimiters" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putDelimiters"></a>

```java
public void putDelimiters(B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putDelimiters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a>

---

##### `putFunctionalGroupHeaders` <a name="putFunctionalGroupHeaders" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putFunctionalGroupHeaders"></a>

```java
public void putFunctionalGroupHeaders(B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putFunctionalGroupHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a>

---

##### `putInterchangeControlHeaders` <a name="putInterchangeControlHeaders" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putInterchangeControlHeaders"></a>

```java
public void putInterchangeControlHeaders(B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.putInterchangeControlHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a>

---

##### `resetControlNumbers` <a name="resetControlNumbers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetControlNumbers"></a>

```java
public void resetControlNumbers()
```

##### `resetDelimiters` <a name="resetDelimiters" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetDelimiters"></a>

```java
public void resetDelimiters()
```

##### `resetFunctionalGroupHeaders` <a name="resetFunctionalGroupHeaders" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetFunctionalGroupHeaders"></a>

```java
public void resetFunctionalGroupHeaders()
```

##### `resetGs05TimeFormat` <a name="resetGs05TimeFormat" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetGs05TimeFormat"></a>

```java
public void resetGs05TimeFormat()
```

##### `resetInterchangeControlHeaders` <a name="resetInterchangeControlHeaders" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetInterchangeControlHeaders"></a>

```java
public void resetInterchangeControlHeaders()
```

##### `resetValidateEdi` <a name="resetValidateEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.resetValidateEdi"></a>

```java
public void resetValidateEdi()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.controlNumbers">controlNumbers</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.delimiters">delimiters</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.functionalGroupHeaders">functionalGroupHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.interchangeControlHeaders">interchangeControlHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.controlNumbersInput">controlNumbersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.delimitersInput">delimitersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.functionalGroupHeadersInput">functionalGroupHeadersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.gs05TimeFormatInput">gs05TimeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.interchangeControlHeadersInput">interchangeControlHeadersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.validateEdiInput">validateEdiInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.gs05TimeFormat">gs05TimeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.validateEdi">validateEdi</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common">B2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controlNumbers`<sup>Required</sup> <a name="controlNumbers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.controlNumbers"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference getControlNumbers();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbersOutputReference</a>

---

##### `delimiters`<sup>Required</sup> <a name="delimiters" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.delimiters"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference getDelimiters();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimitersOutputReference</a>

---

##### `functionalGroupHeaders`<sup>Required</sup> <a name="functionalGroupHeaders" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.functionalGroupHeaders"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference getFunctionalGroupHeaders();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeadersOutputReference</a>

---

##### `interchangeControlHeaders`<sup>Required</sup> <a name="interchangeControlHeaders" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.interchangeControlHeaders"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference getInterchangeControlHeaders();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeadersOutputReference</a>

---

##### `controlNumbersInput`<sup>Optional</sup> <a name="controlNumbersInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.controlNumbersInput"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers getControlNumbersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonControlNumbers</a>

---

##### `delimitersInput`<sup>Optional</sup> <a name="delimitersInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.delimitersInput"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters getDelimitersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonDelimiters</a>

---

##### `functionalGroupHeadersInput`<sup>Optional</sup> <a name="functionalGroupHeadersInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.functionalGroupHeadersInput"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders getFunctionalGroupHeadersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonFunctionalGroupHeaders</a>

---

##### `gs05TimeFormatInput`<sup>Optional</sup> <a name="gs05TimeFormatInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.gs05TimeFormatInput"></a>

```java
public java.lang.String getGs05TimeFormatInput();
```

- *Type:* java.lang.String

---

##### `interchangeControlHeadersInput`<sup>Optional</sup> <a name="interchangeControlHeadersInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.interchangeControlHeadersInput"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders getInterchangeControlHeadersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonInterchangeControlHeaders</a>

---

##### `validateEdiInput`<sup>Optional</sup> <a name="validateEdiInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.validateEdiInput"></a>

```java
public java.lang.Boolean|IResolvable getValidateEdiInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `gs05TimeFormat`<sup>Required</sup> <a name="gs05TimeFormat" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.gs05TimeFormat"></a>

```java
public java.lang.String getGs05TimeFormat();
```

- *Type:* java.lang.String

---

##### `validateEdi`<sup>Required</sup> <a name="validateEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.validateEdi"></a>

```java
public java.lang.Boolean|IResolvable getValidateEdi();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12Common getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common">B2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a>

---


### B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference;

new B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.putCommon">putCommon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.putWrapOptions">putWrapOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resetCommon">resetCommon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resetWrapOptions">resetWrapOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCommon` <a name="putCommon" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.putCommon"></a>

```java
public void putCommon(B2BiPartnershipCapabilityOptionsOutboundEdiX12Common value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.putCommon.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common">B2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a>

---

##### `putWrapOptions` <a name="putWrapOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.putWrapOptions"></a>

```java
public void putWrapOptions(B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.putWrapOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a>

---

##### `resetCommon` <a name="resetCommon" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resetCommon"></a>

```java
public void resetCommon()
```

##### `resetWrapOptions` <a name="resetWrapOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.resetWrapOptions"></a>

```java
public void resetWrapOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.common">common</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.wrapOptions">wrapOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.commonInput">commonInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common">B2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.wrapOptionsInput">wrapOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12">B2BiPartnershipCapabilityOptionsOutboundEdiX12</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `common`<sup>Required</sup> <a name="common" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.common"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference getCommon();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12CommonOutputReference</a>

---

##### `wrapOptions`<sup>Required</sup> <a name="wrapOptions" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.wrapOptions"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference getWrapOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference</a>

---

##### `commonInput`<sup>Optional</sup> <a name="commonInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.commonInput"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12Common getCommonInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12Common">B2BiPartnershipCapabilityOptionsOutboundEdiX12Common</a>

---

##### `wrapOptionsInput`<sup>Optional</sup> <a name="wrapOptionsInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.wrapOptionsInput"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions getWrapOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12OutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12 getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12">B2BiPartnershipCapabilityOptionsOutboundEdiX12</a>

---


### B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference <a name="B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference;

new B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resetLineLength">resetLineLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resetLineTerminator">resetLineTerminator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resetWrapBy">resetWrapBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLineLength` <a name="resetLineLength" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resetLineLength"></a>

```java
public void resetLineLength()
```

##### `resetLineTerminator` <a name="resetLineTerminator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resetLineTerminator"></a>

```java
public void resetLineTerminator()
```

##### `resetWrapBy` <a name="resetWrapBy" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.resetWrapBy"></a>

```java
public void resetWrapBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineLengthInput">lineLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineTerminatorInput">lineTerminatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.wrapByInput">wrapByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineLength">lineLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineTerminator">lineTerminator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.wrapBy">wrapBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lineLengthInput`<sup>Optional</sup> <a name="lineLengthInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineLengthInput"></a>

```java
public java.lang.Number getLineLengthInput();
```

- *Type:* java.lang.Number

---

##### `lineTerminatorInput`<sup>Optional</sup> <a name="lineTerminatorInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineTerminatorInput"></a>

```java
public java.lang.String getLineTerminatorInput();
```

- *Type:* java.lang.String

---

##### `wrapByInput`<sup>Optional</sup> <a name="wrapByInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.wrapByInput"></a>

```java
public java.lang.String getWrapByInput();
```

- *Type:* java.lang.String

---

##### `lineLength`<sup>Required</sup> <a name="lineLength" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineLength"></a>

```java
public java.lang.Number getLineLength();
```

- *Type:* java.lang.Number

---

##### `lineTerminator`<sup>Required</sup> <a name="lineTerminator" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.lineTerminator"></a>

```java
public java.lang.String getLineTerminator();
```

- *Type:* java.lang.String

---

##### `wrapBy`<sup>Required</sup> <a name="wrapBy" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.wrapBy"></a>

```java
public java.lang.String getWrapBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions">B2BiPartnershipCapabilityOptionsOutboundEdiX12WrapOptions</a>

---


### B2BiPartnershipCapabilityOptionsOutputReference <a name="B2BiPartnershipCapabilityOptionsOutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipCapabilityOptionsOutputReference;

new B2BiPartnershipCapabilityOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.putInboundEdi">putInboundEdi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.putOutboundEdi">putOutboundEdi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.resetInboundEdi">resetInboundEdi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.resetOutboundEdi">resetOutboundEdi</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInboundEdi` <a name="putInboundEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.putInboundEdi"></a>

```java
public void putInboundEdi(B2BiPartnershipCapabilityOptionsInboundEdi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.putInboundEdi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdi">B2BiPartnershipCapabilityOptionsInboundEdi</a>

---

##### `putOutboundEdi` <a name="putOutboundEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.putOutboundEdi"></a>

```java
public void putOutboundEdi(B2BiPartnershipCapabilityOptionsOutboundEdi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.putOutboundEdi.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdi">B2BiPartnershipCapabilityOptionsOutboundEdi</a>

---

##### `resetInboundEdi` <a name="resetInboundEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.resetInboundEdi"></a>

```java
public void resetInboundEdi()
```

##### `resetOutboundEdi` <a name="resetOutboundEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.resetOutboundEdi"></a>

```java
public void resetOutboundEdi()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.inboundEdi">inboundEdi</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference">B2BiPartnershipCapabilityOptionsInboundEdiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.outboundEdi">outboundEdi</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.inboundEdiInput">inboundEdiInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdi">B2BiPartnershipCapabilityOptionsInboundEdi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.outboundEdiInput">outboundEdiInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdi">B2BiPartnershipCapabilityOptionsOutboundEdi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions">B2BiPartnershipCapabilityOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inboundEdi`<sup>Required</sup> <a name="inboundEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.inboundEdi"></a>

```java
public B2BiPartnershipCapabilityOptionsInboundEdiOutputReference getInboundEdi();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdiOutputReference">B2BiPartnershipCapabilityOptionsInboundEdiOutputReference</a>

---

##### `outboundEdi`<sup>Required</sup> <a name="outboundEdi" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.outboundEdi"></a>

```java
public B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference getOutboundEdi();
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference">B2BiPartnershipCapabilityOptionsOutboundEdiOutputReference</a>

---

##### `inboundEdiInput`<sup>Optional</sup> <a name="inboundEdiInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.inboundEdiInput"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsInboundEdi getInboundEdiInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsInboundEdi">B2BiPartnershipCapabilityOptionsInboundEdi</a>

---

##### `outboundEdiInput`<sup>Optional</sup> <a name="outboundEdiInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.outboundEdiInput"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptionsOutboundEdi getOutboundEdiInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutboundEdi">B2BiPartnershipCapabilityOptionsOutboundEdi</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipCapabilityOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipCapabilityOptions">B2BiPartnershipCapabilityOptions</a>

---


### B2BiPartnershipTagsList <a name="B2BiPartnershipTagsList" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipTagsList;

new B2BiPartnershipTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.get"></a>

```java
public B2BiPartnershipTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags">B2BiPartnershipTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<B2BiPartnershipTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags">B2BiPartnershipTags</a>>

---


### B2BiPartnershipTagsOutputReference <a name="B2BiPartnershipTagsOutputReference" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.b2_bi_partnership.B2BiPartnershipTagsOutputReference;

new B2BiPartnershipTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags">B2BiPartnershipTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|B2BiPartnershipTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiPartnership.B2BiPartnershipTags">B2BiPartnershipTags</a>

---



