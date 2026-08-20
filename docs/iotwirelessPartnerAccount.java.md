# `iotwirelessPartnerAccount` Submodule <a name="`iotwirelessPartnerAccount` Submodule" id="@cdktn/provider-awscc.iotwirelessPartnerAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessPartnerAccount <a name="IotwirelessPartnerAccount" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account awscc_iotwireless_partner_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccount;

IotwirelessPartnerAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountLinked(java.lang.Boolean|IResolvable)
//  .partnerAccountId(java.lang.String)
//  .partnerType(java.lang.String)
//  .sidewalk(IotwirelessPartnerAccountSidewalk)
//  .sidewalkResponse(IotwirelessPartnerAccountSidewalkResponse)
//  .sidewalkUpdate(IotwirelessPartnerAccountSidewalkUpdate)
//  .tags(IResolvable|java.util.List<IotwirelessPartnerAccountTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.accountLinked">accountLinked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the partner account is linked to the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.partnerAccountId">partnerAccountId</a></code> | <code>java.lang.String</code> | The partner account ID to disassociate from the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.partnerType">partnerType</a></code> | <code>java.lang.String</code> | The partner type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalkResponse">sidewalkResponse</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalkUpdate">sidewalkUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>></code> | A list of key-value pairs that contain metadata for the destination. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountLinked`<sup>Optional</sup> <a name="accountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.accountLinked"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the partner account is linked to the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#account_linked IotwirelessPartnerAccount#account_linked}

---

##### `partnerAccountId`<sup>Optional</sup> <a name="partnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.partnerAccountId"></a>

- *Type:* java.lang.String

The partner account ID to disassociate from the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#partner_account_id IotwirelessPartnerAccount#partner_account_id}

---

##### `partnerType`<sup>Optional</sup> <a name="partnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.partnerType"></a>

- *Type:* java.lang.String

The partner type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#partner_type IotwirelessPartnerAccount#partner_type}

---

##### `sidewalk`<sup>Optional</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalk"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk IotwirelessPartnerAccount#sidewalk}

---

##### `sidewalkResponse`<sup>Optional</sup> <a name="sidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalkResponse"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk_response IotwirelessPartnerAccount#sidewalk_response}

---

##### `sidewalkUpdate`<sup>Optional</sup> <a name="sidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.sidewalkUpdate"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk_update IotwirelessPartnerAccount#sidewalk_update}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>>

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#tags IotwirelessPartnerAccount#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk">putSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse">putSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate">putSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetAccountLinked">resetAccountLinked</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerAccountId">resetPartnerAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerType">resetPartnerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalk">resetSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkResponse">resetSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkUpdate">resetSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSidewalk` <a name="putSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk"></a>

```java
public void putSidewalk(IotwirelessPartnerAccountSidewalk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---

##### `putSidewalkResponse` <a name="putSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse"></a>

```java
public void putSidewalkResponse(IotwirelessPartnerAccountSidewalkResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---

##### `putSidewalkUpdate` <a name="putSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate"></a>

```java
public void putSidewalkUpdate(IotwirelessPartnerAccountSidewalkUpdate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putSidewalkUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotwirelessPartnerAccountTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>>

---

##### `resetAccountLinked` <a name="resetAccountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetAccountLinked"></a>

```java
public void resetAccountLinked()
```

##### `resetPartnerAccountId` <a name="resetPartnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerAccountId"></a>

```java
public void resetPartnerAccountId()
```

##### `resetPartnerType` <a name="resetPartnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetPartnerType"></a>

```java
public void resetPartnerType()
```

##### `resetSidewalk` <a name="resetSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalk"></a>

```java
public void resetSidewalk()
```

##### `resetSidewalkResponse` <a name="resetSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkResponse"></a>

```java
public void resetSidewalkResponse()
```

##### `resetSidewalkUpdate` <a name="resetSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetSidewalkUpdate"></a>

```java
public void resetSidewalkUpdate()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccount;

IotwirelessPartnerAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccount;

IotwirelessPartnerAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccount;

IotwirelessPartnerAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccount;

IotwirelessPartnerAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotwirelessPartnerAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotwirelessPartnerAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotwirelessPartnerAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotwirelessPartnerAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessPartnerAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference">IotwirelessPartnerAccountSidewalkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponse">sidewalkResponse</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference">IotwirelessPartnerAccountSidewalkResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdate">sidewalkUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference">IotwirelessPartnerAccountSidewalkUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList">IotwirelessPartnerAccountTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinkedInput">accountLinkedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountIdInput">partnerAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerTypeInput">partnerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkInput">sidewalkInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponseInput">sidewalkResponseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdateInput">sidewalkUpdateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinked">accountLinked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountId">partnerAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerType">partnerType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sidewalk`<sup>Required</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalk"></a>

```java
public IotwirelessPartnerAccountSidewalkOutputReference getSidewalk();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference">IotwirelessPartnerAccountSidewalkOutputReference</a>

---

##### `sidewalkResponse`<sup>Required</sup> <a name="sidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponse"></a>

```java
public IotwirelessPartnerAccountSidewalkResponseOutputReference getSidewalkResponse();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference">IotwirelessPartnerAccountSidewalkResponseOutputReference</a>

---

##### `sidewalkUpdate`<sup>Required</sup> <a name="sidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdate"></a>

```java
public IotwirelessPartnerAccountSidewalkUpdateOutputReference getSidewalkUpdate();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference">IotwirelessPartnerAccountSidewalkUpdateOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tags"></a>

```java
public IotwirelessPartnerAccountTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList">IotwirelessPartnerAccountTagsList</a>

---

##### `accountLinkedInput`<sup>Optional</sup> <a name="accountLinkedInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinkedInput"></a>

```java
public java.lang.Boolean|IResolvable getAccountLinkedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `partnerAccountIdInput`<sup>Optional</sup> <a name="partnerAccountIdInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountIdInput"></a>

```java
public java.lang.String getPartnerAccountIdInput();
```

- *Type:* java.lang.String

---

##### `partnerTypeInput`<sup>Optional</sup> <a name="partnerTypeInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerTypeInput"></a>

```java
public java.lang.String getPartnerTypeInput();
```

- *Type:* java.lang.String

---

##### `sidewalkInput`<sup>Optional</sup> <a name="sidewalkInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkInput"></a>

```java
public IResolvable|IotwirelessPartnerAccountSidewalk getSidewalkInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---

##### `sidewalkResponseInput`<sup>Optional</sup> <a name="sidewalkResponseInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkResponseInput"></a>

```java
public IResolvable|IotwirelessPartnerAccountSidewalkResponse getSidewalkResponseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---

##### `sidewalkUpdateInput`<sup>Optional</sup> <a name="sidewalkUpdateInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.sidewalkUpdateInput"></a>

```java
public IResolvable|IotwirelessPartnerAccountSidewalkUpdate getSidewalkUpdateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotwirelessPartnerAccountTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>>

---

##### `accountLinked`<sup>Required</sup> <a name="accountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.accountLinked"></a>

```java
public java.lang.Boolean|IResolvable getAccountLinked();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `partnerAccountId`<sup>Required</sup> <a name="partnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerAccountId"></a>

```java
public java.lang.String getPartnerAccountId();
```

- *Type:* java.lang.String

---

##### `partnerType`<sup>Required</sup> <a name="partnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.partnerType"></a>

```java
public java.lang.String getPartnerType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessPartnerAccountConfig <a name="IotwirelessPartnerAccountConfig" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccountConfig;

IotwirelessPartnerAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountLinked(java.lang.Boolean|IResolvable)
//  .partnerAccountId(java.lang.String)
//  .partnerType(java.lang.String)
//  .sidewalk(IotwirelessPartnerAccountSidewalk)
//  .sidewalkResponse(IotwirelessPartnerAccountSidewalkResponse)
//  .sidewalkUpdate(IotwirelessPartnerAccountSidewalkUpdate)
//  .tags(IResolvable|java.util.List<IotwirelessPartnerAccountTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.accountLinked">accountLinked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the partner account is linked to the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerAccountId">partnerAccountId</a></code> | <code>java.lang.String</code> | The partner account ID to disassociate from the AWS account. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerType">partnerType</a></code> | <code>java.lang.String</code> | The partner type. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalk">sidewalk</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkResponse">sidewalkResponse</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkUpdate">sidewalkUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | The Sidewalk account credentials. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>></code> | A list of key-value pairs that contain metadata for the destination. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountLinked`<sup>Optional</sup> <a name="accountLinked" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.accountLinked"></a>

```java
public java.lang.Boolean|IResolvable getAccountLinked();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the partner account is linked to the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#account_linked IotwirelessPartnerAccount#account_linked}

---

##### `partnerAccountId`<sup>Optional</sup> <a name="partnerAccountId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerAccountId"></a>

```java
public java.lang.String getPartnerAccountId();
```

- *Type:* java.lang.String

The partner account ID to disassociate from the AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#partner_account_id IotwirelessPartnerAccount#partner_account_id}

---

##### `partnerType`<sup>Optional</sup> <a name="partnerType" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.partnerType"></a>

```java
public java.lang.String getPartnerType();
```

- *Type:* java.lang.String

The partner type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#partner_type IotwirelessPartnerAccount#partner_type}

---

##### `sidewalk`<sup>Optional</sup> <a name="sidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalk"></a>

```java
public IotwirelessPartnerAccountSidewalk getSidewalk();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk IotwirelessPartnerAccount#sidewalk}

---

##### `sidewalkResponse`<sup>Optional</sup> <a name="sidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkResponse"></a>

```java
public IotwirelessPartnerAccountSidewalkResponse getSidewalkResponse();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk_response IotwirelessPartnerAccount#sidewalk_response}

---

##### `sidewalkUpdate`<sup>Optional</sup> <a name="sidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.sidewalkUpdate"></a>

```java
public IotwirelessPartnerAccountSidewalkUpdate getSidewalkUpdate();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

The Sidewalk account credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#sidewalk_update IotwirelessPartnerAccount#sidewalk_update}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotwirelessPartnerAccountTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>>

A list of key-value pairs that contain metadata for the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#tags IotwirelessPartnerAccount#tags}

---

### IotwirelessPartnerAccountSidewalk <a name="IotwirelessPartnerAccountSidewalk" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccountSidewalk;

IotwirelessPartnerAccountSidewalk.builder()
//  .appServerPrivateKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.property.appServerPrivateKey">appServerPrivateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}. |

---

##### `appServerPrivateKey`<sup>Optional</sup> <a name="appServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk.property.appServerPrivateKey"></a>

```java
public java.lang.String getAppServerPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

### IotwirelessPartnerAccountSidewalkResponse <a name="IotwirelessPartnerAccountSidewalkResponse" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccountSidewalkResponse;

IotwirelessPartnerAccountSidewalkResponse.builder()
//  .amazonId(java.lang.String)
//  .arn(java.lang.String)
//  .fingerprint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.amazonId">amazonId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#amazon_id IotwirelessPartnerAccount#amazon_id}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#arn IotwirelessPartnerAccount#arn}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#fingerprint IotwirelessPartnerAccount#fingerprint}. |

---

##### `amazonId`<sup>Optional</sup> <a name="amazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.amazonId"></a>

```java
public java.lang.String getAmazonId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#amazon_id IotwirelessPartnerAccount#amazon_id}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#arn IotwirelessPartnerAccount#arn}.

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#fingerprint IotwirelessPartnerAccount#fingerprint}.

---

### IotwirelessPartnerAccountSidewalkUpdate <a name="IotwirelessPartnerAccountSidewalkUpdate" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccountSidewalkUpdate;

IotwirelessPartnerAccountSidewalkUpdate.builder()
//  .appServerPrivateKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.property.appServerPrivateKey">appServerPrivateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}. |

---

##### `appServerPrivateKey`<sup>Optional</sup> <a name="appServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate.property.appServerPrivateKey"></a>

```java
public java.lang.String getAppServerPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#app_server_private_key IotwirelessPartnerAccount#app_server_private_key}.

---

### IotwirelessPartnerAccountTags <a name="IotwirelessPartnerAccountTags" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccountTags;

IotwirelessPartnerAccountTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#key IotwirelessPartnerAccount#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#value IotwirelessPartnerAccount#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#key IotwirelessPartnerAccount#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotwireless_partner_account#value IotwirelessPartnerAccount#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessPartnerAccountSidewalkOutputReference <a name="IotwirelessPartnerAccountSidewalkOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccountSidewalkOutputReference;

new IotwirelessPartnerAccountSidewalkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resetAppServerPrivateKey">resetAppServerPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppServerPrivateKey` <a name="resetAppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.resetAppServerPrivateKey"></a>

```java
public void resetAppServerPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKeyInput">appServerPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey">appServerPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appServerPrivateKeyInput`<sup>Optional</sup> <a name="appServerPrivateKeyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKeyInput"></a>

```java
public java.lang.String getAppServerPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `appServerPrivateKey`<sup>Required</sup> <a name="appServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.appServerPrivateKey"></a>

```java
public java.lang.String getAppServerPrivateKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessPartnerAccountSidewalk getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalk">IotwirelessPartnerAccountSidewalk</a>

---


### IotwirelessPartnerAccountSidewalkResponseOutputReference <a name="IotwirelessPartnerAccountSidewalkResponseOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccountSidewalkResponseOutputReference;

new IotwirelessPartnerAccountSidewalkResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetAmazonId">resetAmazonId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetFingerprint">resetFingerprint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAmazonId` <a name="resetAmazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetAmazonId"></a>

```java
public void resetAmazonId()
```

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetArn"></a>

```java
public void resetArn()
```

##### `resetFingerprint` <a name="resetFingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.resetFingerprint"></a>

```java
public void resetFingerprint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonIdInput">amazonIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprintInput">fingerprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId">amazonId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amazonIdInput`<sup>Optional</sup> <a name="amazonIdInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonIdInput"></a>

```java
public java.lang.String getAmazonIdInput();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `fingerprintInput`<sup>Optional</sup> <a name="fingerprintInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprintInput"></a>

```java
public java.lang.String getFingerprintInput();
```

- *Type:* java.lang.String

---

##### `amazonId`<sup>Required</sup> <a name="amazonId" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.amazonId"></a>

```java
public java.lang.String getAmazonId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponseOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessPartnerAccountSidewalkResponse getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkResponse">IotwirelessPartnerAccountSidewalkResponse</a>

---


### IotwirelessPartnerAccountSidewalkUpdateOutputReference <a name="IotwirelessPartnerAccountSidewalkUpdateOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccountSidewalkUpdateOutputReference;

new IotwirelessPartnerAccountSidewalkUpdateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resetAppServerPrivateKey">resetAppServerPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppServerPrivateKey` <a name="resetAppServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.resetAppServerPrivateKey"></a>

```java
public void resetAppServerPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKeyInput">appServerPrivateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey">appServerPrivateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appServerPrivateKeyInput`<sup>Optional</sup> <a name="appServerPrivateKeyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKeyInput"></a>

```java
public java.lang.String getAppServerPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `appServerPrivateKey`<sup>Required</sup> <a name="appServerPrivateKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.appServerPrivateKey"></a>

```java
public java.lang.String getAppServerPrivateKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdateOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessPartnerAccountSidewalkUpdate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountSidewalkUpdate">IotwirelessPartnerAccountSidewalkUpdate</a>

---


### IotwirelessPartnerAccountTagsList <a name="IotwirelessPartnerAccountTagsList" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccountTagsList;

new IotwirelessPartnerAccountTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get"></a>

```java
public IotwirelessPartnerAccountTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotwirelessPartnerAccountTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>>

---


### IotwirelessPartnerAccountTagsOutputReference <a name="IotwirelessPartnerAccountTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotwireless_partner_account.IotwirelessPartnerAccountTagsOutputReference;

new IotwirelessPartnerAccountTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotwirelessPartnerAccountTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotwirelessPartnerAccount.IotwirelessPartnerAccountTags">IotwirelessPartnerAccountTags</a>

---



