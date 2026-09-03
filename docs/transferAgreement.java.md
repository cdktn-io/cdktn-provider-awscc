# `transferAgreement` Submodule <a name="`transferAgreement` Submodule" id="@cdktn/provider-awscc.transferAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferAgreement <a name="TransferAgreement" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement awscc_transfer_agreement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_agreement.TransferAgreement;

TransferAgreement.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessRole(java.lang.String)
    .localProfileId(java.lang.String)
    .partnerProfileId(java.lang.String)
    .serverId(java.lang.String)
//  .baseDirectory(java.lang.String)
//  .customDirectories(TransferAgreementCustomDirectories)
//  .description(java.lang.String)
//  .enforceMessageSigning(java.lang.String)
//  .preserveFilename(java.lang.String)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<TransferAgreementTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.accessRole">accessRole</a></code> | <code>java.lang.String</code> | Specifies the access role for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.localProfileId">localProfileId</a></code> | <code>java.lang.String</code> | A unique identifier for the local profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.partnerProfileId">partnerProfileId</a></code> | <code>java.lang.String</code> | A unique identifier for the partner profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.serverId">serverId</a></code> | <code>java.lang.String</code> | A unique identifier for the server. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.baseDirectory">baseDirectory</a></code> | <code>java.lang.String</code> | Specifies the base directory for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.customDirectories">customDirectories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | Specifies a separate directory for each type of file to store for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A textual description for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.enforceMessageSigning">enforceMessageSigning</a></code> | <code>java.lang.String</code> | Specifies whether to enforce an AS2 message is signed for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.preserveFilename">preserveFilename</a></code> | <code>java.lang.String</code> | Specifies whether to preserve the filename received for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Specifies the status of the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>></code> | Key-value pairs that can be used to group and search for agreements. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.accessRole"></a>

- *Type:* java.lang.String

Specifies the access role for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#access_role TransferAgreement#access_role}

---

##### `localProfileId`<sup>Required</sup> <a name="localProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.localProfileId"></a>

- *Type:* java.lang.String

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#local_profile_id TransferAgreement#local_profile_id}

---

##### `partnerProfileId`<sup>Required</sup> <a name="partnerProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.partnerProfileId"></a>

- *Type:* java.lang.String

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#partner_profile_id TransferAgreement#partner_profile_id}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.serverId"></a>

- *Type:* java.lang.String

A unique identifier for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#server_id TransferAgreement#server_id}

---

##### `baseDirectory`<sup>Optional</sup> <a name="baseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.baseDirectory"></a>

- *Type:* java.lang.String

Specifies the base directory for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#base_directory TransferAgreement#base_directory}

---

##### `customDirectories`<sup>Optional</sup> <a name="customDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.customDirectories"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

Specifies a separate directory for each type of file to store for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#custom_directories TransferAgreement#custom_directories}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A textual description for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#description TransferAgreement#description}

---

##### `enforceMessageSigning`<sup>Optional</sup> <a name="enforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.enforceMessageSigning"></a>

- *Type:* java.lang.String

Specifies whether to enforce an AS2 message is signed for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#enforce_message_signing TransferAgreement#enforce_message_signing}

---

##### `preserveFilename`<sup>Optional</sup> <a name="preserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.preserveFilename"></a>

- *Type:* java.lang.String

Specifies whether to preserve the filename received for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#preserve_filename TransferAgreement#preserve_filename}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Specifies the status of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#status TransferAgreement#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>>

Key-value pairs that can be used to group and search for agreements.

Tags are metadata attached to agreements for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#tags TransferAgreement#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories">putCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetBaseDirectory">resetBaseDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetCustomDirectories">resetCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetEnforceMessageSigning">resetEnforceMessageSigning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetPreserveFilename">resetPreserveFilename</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomDirectories` <a name="putCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories"></a>

```java
public void putCustomDirectories(TransferAgreementCustomDirectories value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putCustomDirectories.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<TransferAgreementTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>>

---

##### `resetBaseDirectory` <a name="resetBaseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetBaseDirectory"></a>

```java
public void resetBaseDirectory()
```

##### `resetCustomDirectories` <a name="resetCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetCustomDirectories"></a>

```java
public void resetCustomDirectories()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnforceMessageSigning` <a name="resetEnforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetEnforceMessageSigning"></a>

```java
public void resetEnforceMessageSigning()
```

##### `resetPreserveFilename` <a name="resetPreserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetPreserveFilename"></a>

```java
public void resetPreserveFilename()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TransferAgreement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct"></a>

```java
import io.cdktn.providers.awscc.transfer_agreement.TransferAgreement;

TransferAgreement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.transfer_agreement.TransferAgreement;

TransferAgreement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.transfer_agreement.TransferAgreement;

TransferAgreement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.transfer_agreement.TransferAgreement;

TransferAgreement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TransferAgreement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TransferAgreement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TransferAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TransferAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TransferAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.agreementId">agreementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectories">customDirectories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference">TransferAgreementCustomDirectoriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList">TransferAgreementTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRoleInput">accessRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectoryInput">baseDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectoriesInput">customDirectoriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigningInput">enforceMessageSigningInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileIdInput">localProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileIdInput">partnerProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilenameInput">preserveFilenameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverIdInput">serverIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRole">accessRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectory">baseDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigning">enforceMessageSigning</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileId">localProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileId">partnerProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilename">preserveFilename</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverId">serverId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agreementId`<sup>Required</sup> <a name="agreementId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.agreementId"></a>

```java
public java.lang.String getAgreementId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `customDirectories`<sup>Required</sup> <a name="customDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectories"></a>

```java
public TransferAgreementCustomDirectoriesOutputReference getCustomDirectories();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference">TransferAgreementCustomDirectoriesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tags"></a>

```java
public TransferAgreementTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList">TransferAgreementTagsList</a>

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRoleInput"></a>

```java
public java.lang.String getAccessRoleInput();
```

- *Type:* java.lang.String

---

##### `baseDirectoryInput`<sup>Optional</sup> <a name="baseDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectoryInput"></a>

```java
public java.lang.String getBaseDirectoryInput();
```

- *Type:* java.lang.String

---

##### `customDirectoriesInput`<sup>Optional</sup> <a name="customDirectoriesInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.customDirectoriesInput"></a>

```java
public IResolvable|TransferAgreementCustomDirectories getCustomDirectoriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enforceMessageSigningInput`<sup>Optional</sup> <a name="enforceMessageSigningInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigningInput"></a>

```java
public java.lang.String getEnforceMessageSigningInput();
```

- *Type:* java.lang.String

---

##### `localProfileIdInput`<sup>Optional</sup> <a name="localProfileIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileIdInput"></a>

```java
public java.lang.String getLocalProfileIdInput();
```

- *Type:* java.lang.String

---

##### `partnerProfileIdInput`<sup>Optional</sup> <a name="partnerProfileIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileIdInput"></a>

```java
public java.lang.String getPartnerProfileIdInput();
```

- *Type:* java.lang.String

---

##### `preserveFilenameInput`<sup>Optional</sup> <a name="preserveFilenameInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilenameInput"></a>

```java
public java.lang.String getPreserveFilenameInput();
```

- *Type:* java.lang.String

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverIdInput"></a>

```java
public java.lang.String getServerIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tagsInput"></a>

```java
public IResolvable|java.util.List<TransferAgreementTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>>

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.accessRole"></a>

```java
public java.lang.String getAccessRole();
```

- *Type:* java.lang.String

---

##### `baseDirectory`<sup>Required</sup> <a name="baseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.baseDirectory"></a>

```java
public java.lang.String getBaseDirectory();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enforceMessageSigning`<sup>Required</sup> <a name="enforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.enforceMessageSigning"></a>

```java
public java.lang.String getEnforceMessageSigning();
```

- *Type:* java.lang.String

---

##### `localProfileId`<sup>Required</sup> <a name="localProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.localProfileId"></a>

```java
public java.lang.String getLocalProfileId();
```

- *Type:* java.lang.String

---

##### `partnerProfileId`<sup>Required</sup> <a name="partnerProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.partnerProfileId"></a>

```java
public java.lang.String getPartnerProfileId();
```

- *Type:* java.lang.String

---

##### `preserveFilename`<sup>Required</sup> <a name="preserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.preserveFilename"></a>

```java
public java.lang.String getPreserveFilename();
```

- *Type:* java.lang.String

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferAgreement.TransferAgreement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TransferAgreementConfig <a name="TransferAgreementConfig" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_agreement.TransferAgreementConfig;

TransferAgreementConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accessRole(java.lang.String)
    .localProfileId(java.lang.String)
    .partnerProfileId(java.lang.String)
    .serverId(java.lang.String)
//  .baseDirectory(java.lang.String)
//  .customDirectories(TransferAgreementCustomDirectories)
//  .description(java.lang.String)
//  .enforceMessageSigning(java.lang.String)
//  .preserveFilename(java.lang.String)
//  .status(java.lang.String)
//  .tags(IResolvable|java.util.List<TransferAgreementTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.accessRole">accessRole</a></code> | <code>java.lang.String</code> | Specifies the access role for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.localProfileId">localProfileId</a></code> | <code>java.lang.String</code> | A unique identifier for the local profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.partnerProfileId">partnerProfileId</a></code> | <code>java.lang.String</code> | A unique identifier for the partner profile. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.serverId">serverId</a></code> | <code>java.lang.String</code> | A unique identifier for the server. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.baseDirectory">baseDirectory</a></code> | <code>java.lang.String</code> | Specifies the base directory for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.customDirectories">customDirectories</a></code> | <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | Specifies a separate directory for each type of file to store for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.description">description</a></code> | <code>java.lang.String</code> | A textual description for the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.enforceMessageSigning">enforceMessageSigning</a></code> | <code>java.lang.String</code> | Specifies whether to enforce an AS2 message is signed for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.preserveFilename">preserveFilename</a></code> | <code>java.lang.String</code> | Specifies whether to preserve the filename received for this agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.status">status</a></code> | <code>java.lang.String</code> | Specifies the status of the agreement. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>></code> | Key-value pairs that can be used to group and search for agreements. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.accessRole"></a>

```java
public java.lang.String getAccessRole();
```

- *Type:* java.lang.String

Specifies the access role for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#access_role TransferAgreement#access_role}

---

##### `localProfileId`<sup>Required</sup> <a name="localProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.localProfileId"></a>

```java
public java.lang.String getLocalProfileId();
```

- *Type:* java.lang.String

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#local_profile_id TransferAgreement#local_profile_id}

---

##### `partnerProfileId`<sup>Required</sup> <a name="partnerProfileId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.partnerProfileId"></a>

```java
public java.lang.String getPartnerProfileId();
```

- *Type:* java.lang.String

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#partner_profile_id TransferAgreement#partner_profile_id}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.serverId"></a>

```java
public java.lang.String getServerId();
```

- *Type:* java.lang.String

A unique identifier for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#server_id TransferAgreement#server_id}

---

##### `baseDirectory`<sup>Optional</sup> <a name="baseDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.baseDirectory"></a>

```java
public java.lang.String getBaseDirectory();
```

- *Type:* java.lang.String

Specifies the base directory for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#base_directory TransferAgreement#base_directory}

---

##### `customDirectories`<sup>Optional</sup> <a name="customDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.customDirectories"></a>

```java
public TransferAgreementCustomDirectories getCustomDirectories();
```

- *Type:* <a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

Specifies a separate directory for each type of file to store for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#custom_directories TransferAgreement#custom_directories}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A textual description for the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#description TransferAgreement#description}

---

##### `enforceMessageSigning`<sup>Optional</sup> <a name="enforceMessageSigning" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.enforceMessageSigning"></a>

```java
public java.lang.String getEnforceMessageSigning();
```

- *Type:* java.lang.String

Specifies whether to enforce an AS2 message is signed for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#enforce_message_signing TransferAgreement#enforce_message_signing}

---

##### `preserveFilename`<sup>Optional</sup> <a name="preserveFilename" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.preserveFilename"></a>

```java
public java.lang.String getPreserveFilename();
```

- *Type:* java.lang.String

Specifies whether to preserve the filename received for this agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#preserve_filename TransferAgreement#preserve_filename}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Specifies the status of the agreement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#status TransferAgreement#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementConfig.property.tags"></a>

```java
public IResolvable|java.util.List<TransferAgreementTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>>

Key-value pairs that can be used to group and search for agreements.

Tags are metadata attached to agreements for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#tags TransferAgreement#tags}

---

### TransferAgreementCustomDirectories <a name="TransferAgreementCustomDirectories" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_agreement.TransferAgreementCustomDirectories;

TransferAgreementCustomDirectories.builder()
//  .failedFilesDirectory(java.lang.String)
//  .mdnFilesDirectory(java.lang.String)
//  .payloadFilesDirectory(java.lang.String)
//  .statusFilesDirectory(java.lang.String)
//  .temporaryFilesDirectory(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.failedFilesDirectory">failedFilesDirectory</a></code> | <code>java.lang.String</code> | Specifies a location to store the failed files for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.mdnFilesDirectory">mdnFilesDirectory</a></code> | <code>java.lang.String</code> | Specifies a location to store the MDN file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.payloadFilesDirectory">payloadFilesDirectory</a></code> | <code>java.lang.String</code> | Specifies a location to store the payload file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.statusFilesDirectory">statusFilesDirectory</a></code> | <code>java.lang.String</code> | Specifies a location to store the status file for an AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.temporaryFilesDirectory">temporaryFilesDirectory</a></code> | <code>java.lang.String</code> | Specifies a location to store the temporary processing file for an AS2 message. |

---

##### `failedFilesDirectory`<sup>Optional</sup> <a name="failedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.failedFilesDirectory"></a>

```java
public java.lang.String getFailedFilesDirectory();
```

- *Type:* java.lang.String

Specifies a location to store the failed files for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#failed_files_directory TransferAgreement#failed_files_directory}

---

##### `mdnFilesDirectory`<sup>Optional</sup> <a name="mdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.mdnFilesDirectory"></a>

```java
public java.lang.String getMdnFilesDirectory();
```

- *Type:* java.lang.String

Specifies a location to store the MDN file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#mdn_files_directory TransferAgreement#mdn_files_directory}

---

##### `payloadFilesDirectory`<sup>Optional</sup> <a name="payloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.payloadFilesDirectory"></a>

```java
public java.lang.String getPayloadFilesDirectory();
```

- *Type:* java.lang.String

Specifies a location to store the payload file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#payload_files_directory TransferAgreement#payload_files_directory}

---

##### `statusFilesDirectory`<sup>Optional</sup> <a name="statusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.statusFilesDirectory"></a>

```java
public java.lang.String getStatusFilesDirectory();
```

- *Type:* java.lang.String

Specifies a location to store the status file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#status_files_directory TransferAgreement#status_files_directory}

---

##### `temporaryFilesDirectory`<sup>Optional</sup> <a name="temporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories.property.temporaryFilesDirectory"></a>

```java
public java.lang.String getTemporaryFilesDirectory();
```

- *Type:* java.lang.String

Specifies a location to store the temporary processing file for an AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#temporary_files_directory TransferAgreement#temporary_files_directory}

---

### TransferAgreementTags <a name="TransferAgreementTags" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_agreement.TransferAgreementTags;

TransferAgreementTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.key">key</a></code> | <code>java.lang.String</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.value">value</a></code> | <code>java.lang.String</code> | Contains one or more values that you assigned to the key name you create. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#key TransferAgreement#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Contains one or more values that you assigned to the key name you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/transfer_agreement#value TransferAgreement#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TransferAgreementCustomDirectoriesOutputReference <a name="TransferAgreementCustomDirectoriesOutputReference" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_agreement.TransferAgreementCustomDirectoriesOutputReference;

new TransferAgreementCustomDirectoriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetFailedFilesDirectory">resetFailedFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetMdnFilesDirectory">resetMdnFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetPayloadFilesDirectory">resetPayloadFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetStatusFilesDirectory">resetStatusFilesDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetTemporaryFilesDirectory">resetTemporaryFilesDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailedFilesDirectory` <a name="resetFailedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetFailedFilesDirectory"></a>

```java
public void resetFailedFilesDirectory()
```

##### `resetMdnFilesDirectory` <a name="resetMdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetMdnFilesDirectory"></a>

```java
public void resetMdnFilesDirectory()
```

##### `resetPayloadFilesDirectory` <a name="resetPayloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetPayloadFilesDirectory"></a>

```java
public void resetPayloadFilesDirectory()
```

##### `resetStatusFilesDirectory` <a name="resetStatusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetStatusFilesDirectory"></a>

```java
public void resetStatusFilesDirectory()
```

##### `resetTemporaryFilesDirectory` <a name="resetTemporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.resetTemporaryFilesDirectory"></a>

```java
public void resetTemporaryFilesDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectoryInput">failedFilesDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectoryInput">mdnFilesDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectoryInput">payloadFilesDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectoryInput">statusFilesDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectoryInput">temporaryFilesDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectory">failedFilesDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectory">mdnFilesDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectory">payloadFilesDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectory">statusFilesDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectory">temporaryFilesDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failedFilesDirectoryInput`<sup>Optional</sup> <a name="failedFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectoryInput"></a>

```java
public java.lang.String getFailedFilesDirectoryInput();
```

- *Type:* java.lang.String

---

##### `mdnFilesDirectoryInput`<sup>Optional</sup> <a name="mdnFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectoryInput"></a>

```java
public java.lang.String getMdnFilesDirectoryInput();
```

- *Type:* java.lang.String

---

##### `payloadFilesDirectoryInput`<sup>Optional</sup> <a name="payloadFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectoryInput"></a>

```java
public java.lang.String getPayloadFilesDirectoryInput();
```

- *Type:* java.lang.String

---

##### `statusFilesDirectoryInput`<sup>Optional</sup> <a name="statusFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectoryInput"></a>

```java
public java.lang.String getStatusFilesDirectoryInput();
```

- *Type:* java.lang.String

---

##### `temporaryFilesDirectoryInput`<sup>Optional</sup> <a name="temporaryFilesDirectoryInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectoryInput"></a>

```java
public java.lang.String getTemporaryFilesDirectoryInput();
```

- *Type:* java.lang.String

---

##### `failedFilesDirectory`<sup>Required</sup> <a name="failedFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.failedFilesDirectory"></a>

```java
public java.lang.String getFailedFilesDirectory();
```

- *Type:* java.lang.String

---

##### `mdnFilesDirectory`<sup>Required</sup> <a name="mdnFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.mdnFilesDirectory"></a>

```java
public java.lang.String getMdnFilesDirectory();
```

- *Type:* java.lang.String

---

##### `payloadFilesDirectory`<sup>Required</sup> <a name="payloadFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.payloadFilesDirectory"></a>

```java
public java.lang.String getPayloadFilesDirectory();
```

- *Type:* java.lang.String

---

##### `statusFilesDirectory`<sup>Required</sup> <a name="statusFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.statusFilesDirectory"></a>

```java
public java.lang.String getStatusFilesDirectory();
```

- *Type:* java.lang.String

---

##### `temporaryFilesDirectory`<sup>Required</sup> <a name="temporaryFilesDirectory" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.temporaryFilesDirectory"></a>

```java
public java.lang.String getTemporaryFilesDirectory();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectoriesOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferAgreementCustomDirectories getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementCustomDirectories">TransferAgreementCustomDirectories</a>

---


### TransferAgreementTagsList <a name="TransferAgreementTagsList" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_agreement.TransferAgreementTagsList;

new TransferAgreementTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get"></a>

```java
public TransferAgreementTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TransferAgreementTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>>

---


### TransferAgreementTagsOutputReference <a name="TransferAgreementTagsOutputReference" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.transfer_agreement.TransferAgreementTagsOutputReference;

new TransferAgreementTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.transferAgreement.TransferAgreementTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TransferAgreementTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.transferAgreement.TransferAgreementTags">TransferAgreementTags</a>

---



