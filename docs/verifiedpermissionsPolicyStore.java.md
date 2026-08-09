# `verifiedpermissionsPolicyStore` Submodule <a name="`verifiedpermissionsPolicyStore` Submodule" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsPolicyStore <a name="VerifiedpermissionsPolicyStore" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store awscc_verifiedpermissions_policy_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStore;

VerifiedpermissionsPolicyStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .validationSettings(VerifiedpermissionsPolicyStoreValidationSettings)
//  .deletionProtection(VerifiedpermissionsPolicyStoreDeletionProtection)
//  .description(java.lang.String)
//  .encryptionSettings(VerifiedpermissionsPolicyStoreEncryptionSettings)
//  .schema(VerifiedpermissionsPolicyStoreSchema)
//  .tags(IResolvable|java.util.List<VerifiedpermissionsPolicyStoreTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.validationSettings">validationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#deletion_protection VerifiedpermissionsPolicyStore#deletion_protection}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.encryptionSettings">encryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#encryption_settings VerifiedpermissionsPolicyStore#encryption_settings}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#schema VerifiedpermissionsPolicyStore#schema}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>></code> | The tags to add to the policy store. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `validationSettings`<sup>Required</sup> <a name="validationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.validationSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.deletionProtection"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#deletion_protection VerifiedpermissionsPolicyStore#deletion_protection}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}.

---

##### `encryptionSettings`<sup>Optional</sup> <a name="encryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.encryptionSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#encryption_settings VerifiedpermissionsPolicyStore#encryption_settings}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#schema VerifiedpermissionsPolicyStore#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>>

The tags to add to the policy store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#tags VerifiedpermissionsPolicyStore#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putDeletionProtection">putDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putEncryptionSettings">putEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings">putValidationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetEncryptionSettings">resetEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDeletionProtection` <a name="putDeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putDeletionProtection"></a>

```java
public void putDeletionProtection(VerifiedpermissionsPolicyStoreDeletionProtection value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putDeletionProtection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a>

---

##### `putEncryptionSettings` <a name="putEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putEncryptionSettings"></a>

```java
public void putEncryptionSettings(VerifiedpermissionsPolicyStoreEncryptionSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putSchema"></a>

```java
public void putSchema(VerifiedpermissionsPolicyStoreSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<VerifiedpermissionsPolicyStoreTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>>

---

##### `putValidationSettings` <a name="putValidationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings"></a>

```java
public void putValidationSettings(VerifiedpermissionsPolicyStoreValidationSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.putValidationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionSettings` <a name="resetEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetEncryptionSettings"></a>

```java
public void resetEncryptionSettings()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStore;

VerifiedpermissionsPolicyStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStore;

VerifiedpermissionsPolicyStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStore;

VerifiedpermissionsPolicyStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStore;

VerifiedpermissionsPolicyStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VerifiedpermissionsPolicyStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VerifiedpermissionsPolicyStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VerifiedpermissionsPolicyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsPolicyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtection">deletionProtection</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference">VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettings">encryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionState">encryptionState</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.policyStoreId">policyStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference">VerifiedpermissionsPolicyStoreSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList">VerifiedpermissionsPolicyStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettings">validationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference">VerifiedpermissionsPolicyStoreValidationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettingsInput">encryptionSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schemaInput">schemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettingsInput">validationSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtection"></a>

```java
public VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference getDeletionProtection();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference">VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference</a>

---

##### `encryptionSettings`<sup>Required</sup> <a name="encryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettings"></a>

```java
public VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference getEncryptionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference</a>

---

##### `encryptionState`<sup>Required</sup> <a name="encryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionState"></a>

```java
public VerifiedpermissionsPolicyStoreEncryptionStateOutputReference getEncryptionState();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.policyStoreId"></a>

```java
public java.lang.String getPolicyStoreId();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schema"></a>

```java
public VerifiedpermissionsPolicyStoreSchemaOutputReference getSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference">VerifiedpermissionsPolicyStoreSchemaOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tags"></a>

```java
public VerifiedpermissionsPolicyStoreTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList">VerifiedpermissionsPolicyStoreTagsList</a>

---

##### `validationSettings`<sup>Required</sup> <a name="validationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettings"></a>

```java
public VerifiedpermissionsPolicyStoreValidationSettingsOutputReference getValidationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference">VerifiedpermissionsPolicyStoreValidationSettingsOutputReference</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.deletionProtectionInput"></a>

```java
public IResolvable|VerifiedpermissionsPolicyStoreDeletionProtection getDeletionProtectionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptionSettingsInput`<sup>Optional</sup> <a name="encryptionSettingsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.encryptionSettingsInput"></a>

```java
public IResolvable|VerifiedpermissionsPolicyStoreEncryptionSettings getEncryptionSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.schemaInput"></a>

```java
public IResolvable|VerifiedpermissionsPolicyStoreSchema getSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tagsInput"></a>

```java
public IResolvable|java.util.List<VerifiedpermissionsPolicyStoreTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>>

---

##### `validationSettingsInput`<sup>Optional</sup> <a name="validationSettingsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.validationSettingsInput"></a>

```java
public IResolvable|VerifiedpermissionsPolicyStoreValidationSettings getValidationSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsPolicyStoreConfig <a name="VerifiedpermissionsPolicyStoreConfig" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreConfig;

VerifiedpermissionsPolicyStoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .validationSettings(VerifiedpermissionsPolicyStoreValidationSettings)
//  .deletionProtection(VerifiedpermissionsPolicyStoreDeletionProtection)
//  .description(java.lang.String)
//  .encryptionSettings(VerifiedpermissionsPolicyStoreEncryptionSettings)
//  .schema(VerifiedpermissionsPolicyStoreSchema)
//  .tags(IResolvable|java.util.List<VerifiedpermissionsPolicyStoreTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.validationSettings">validationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.deletionProtection">deletionProtection</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#deletion_protection VerifiedpermissionsPolicyStore#deletion_protection}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.encryptionSettings">encryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#encryption_settings VerifiedpermissionsPolicyStore#encryption_settings}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#schema VerifiedpermissionsPolicyStore#schema}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>></code> | The tags to add to the policy store. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `validationSettings`<sup>Required</sup> <a name="validationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.validationSettings"></a>

```java
public VerifiedpermissionsPolicyStoreValidationSettings getValidationSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.deletionProtection"></a>

```java
public VerifiedpermissionsPolicyStoreDeletionProtection getDeletionProtection();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#deletion_protection VerifiedpermissionsPolicyStore#deletion_protection}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}.

---

##### `encryptionSettings`<sup>Optional</sup> <a name="encryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.encryptionSettings"></a>

```java
public VerifiedpermissionsPolicyStoreEncryptionSettings getEncryptionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#encryption_settings VerifiedpermissionsPolicyStore#encryption_settings}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.schema"></a>

```java
public VerifiedpermissionsPolicyStoreSchema getSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#schema VerifiedpermissionsPolicyStore#schema}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreConfig.property.tags"></a>

```java
public IResolvable|java.util.List<VerifiedpermissionsPolicyStoreTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>>

The tags to add to the policy store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#tags VerifiedpermissionsPolicyStore#tags}

---

### VerifiedpermissionsPolicyStoreDeletionProtection <a name="VerifiedpermissionsPolicyStoreDeletionProtection" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreDeletionProtection;

VerifiedpermissionsPolicyStoreDeletionProtection.builder()
//  .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}.

---

### VerifiedpermissionsPolicyStoreEncryptionSettings <a name="VerifiedpermissionsPolicyStoreEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreEncryptionSettings;

VerifiedpermissionsPolicyStoreEncryptionSettings.builder()
//  .default(java.lang.String)
//  .kmsEncryptionSettings(VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#default VerifiedpermissionsPolicyStore#default}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.kmsEncryptionSettings">kmsEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#kms_encryption_settings VerifiedpermissionsPolicyStore#kms_encryption_settings}. |

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#default VerifiedpermissionsPolicyStore#default}.

---

##### `kmsEncryptionSettings`<sup>Optional</sup> <a name="kmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings.property.kmsEncryptionSettings"></a>

```java
public VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings getKmsEncryptionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#kms_encryption_settings VerifiedpermissionsPolicyStore#kms_encryption_settings}.

---

### VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings <a name="VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings;

VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.builder()
//  .encryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.encryptionContext">encryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#encryption_context VerifiedpermissionsPolicyStore#encryption_context}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}. |

---

##### `encryptionContext`<sup>Optional</sup> <a name="encryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.encryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#encryption_context VerifiedpermissionsPolicyStore#encryption_context}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}.

---

### VerifiedpermissionsPolicyStoreEncryptionState <a name="VerifiedpermissionsPolicyStoreEncryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreEncryptionState;

VerifiedpermissionsPolicyStoreEncryptionState.builder()
    .build();
```


### VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState <a name="VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState;

VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState.builder()
    .build();
```


### VerifiedpermissionsPolicyStoreSchema <a name="VerifiedpermissionsPolicyStoreSchema" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreSchema;

VerifiedpermissionsPolicyStoreSchema.builder()
//  .cedarJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema.property.cedarJson">cedarJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#cedar_json VerifiedpermissionsPolicyStore#cedar_json}. |

---

##### `cedarJson`<sup>Optional</sup> <a name="cedarJson" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema.property.cedarJson"></a>

```java
public java.lang.String getCedarJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#cedar_json VerifiedpermissionsPolicyStore#cedar_json}.

---

### VerifiedpermissionsPolicyStoreTags <a name="VerifiedpermissionsPolicyStoreTags" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreTags;

VerifiedpermissionsPolicyStoreTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#value VerifiedpermissionsPolicyStore#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#key VerifiedpermissionsPolicyStore#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#value VerifiedpermissionsPolicyStore#value}.

---

### VerifiedpermissionsPolicyStoreValidationSettings <a name="VerifiedpermissionsPolicyStoreValidationSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreValidationSettings;

VerifiedpermissionsPolicyStoreValidationSettings.builder()
    .mode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference <a name="VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference;

new VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resetMode"></a>

```java
public void resetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.internalValue"></a>

```java
public IResolvable|VerifiedpermissionsPolicyStoreDeletionProtection getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreDeletionProtection">VerifiedpermissionsPolicyStoreDeletionProtection</a>

---


### VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference;

new VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetEncryptionContext">resetEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionContext` <a name="resetEncryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetEncryptionContext"></a>

```java
public void resetEncryptionContext()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContextInput">encryptionContextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContext">encryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionContextInput`<sup>Optional</sup> <a name="encryptionContextInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEncryptionContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `encryptionContext`<sup>Required</sup> <a name="encryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

---


### VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference;

new VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.putKmsEncryptionSettings">putKmsEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetKmsEncryptionSettings">resetKmsEncryptionSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKmsEncryptionSettings` <a name="putKmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.putKmsEncryptionSettings"></a>

```java
public void putKmsEncryptionSettings(VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.putKmsEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

---

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetKmsEncryptionSettings` <a name="resetKmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resetKmsEncryptionSettings"></a>

```java
public void resetKmsEncryptionSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettings">kmsEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettingsInput">kmsEncryptionSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsEncryptionSettings`<sup>Required</sup> <a name="kmsEncryptionSettings" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettings"></a>

```java
public VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference getKmsEncryptionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference</a>

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `kmsEncryptionSettingsInput`<sup>Optional</sup> <a name="kmsEncryptionSettingsInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettingsInput"></a>

```java
public IResolvable|VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings getKmsEncryptionSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|VerifiedpermissionsPolicyStoreEncryptionSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionSettings">VerifiedpermissionsPolicyStoreEncryptionSettings</a>

---


### VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference;

new VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.encryptionContext">encryptionContext</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionContext`<sup>Required</sup> <a name="encryptionContext" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.encryptionContext"></a>

```java
public StringMap getEncryptionContext();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.internalValue"></a>

```java
public VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState</a>

---


### VerifiedpermissionsPolicyStoreEncryptionStateOutputReference <a name="VerifiedpermissionsPolicyStoreEncryptionStateOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference;

new VerifiedpermissionsPolicyStoreEncryptionStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.kmsEncryptionState">kmsEncryptionState</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState">VerifiedpermissionsPolicyStoreEncryptionState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `kmsEncryptionState`<sup>Required</sup> <a name="kmsEncryptionState" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.kmsEncryptionState"></a>

```java
public VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference getKmsEncryptionState();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference">VerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.internalValue"></a>

```java
public VerifiedpermissionsPolicyStoreEncryptionState getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreEncryptionState">VerifiedpermissionsPolicyStoreEncryptionState</a>

---


### VerifiedpermissionsPolicyStoreSchemaOutputReference <a name="VerifiedpermissionsPolicyStoreSchemaOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreSchemaOutputReference;

new VerifiedpermissionsPolicyStoreSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resetCedarJson">resetCedarJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCedarJson` <a name="resetCedarJson" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.resetCedarJson"></a>

```java
public void resetCedarJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJsonInput">cedarJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJson">cedarJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cedarJsonInput`<sup>Optional</sup> <a name="cedarJsonInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJsonInput"></a>

```java
public java.lang.String getCedarJsonInput();
```

- *Type:* java.lang.String

---

##### `cedarJson`<sup>Required</sup> <a name="cedarJson" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJson"></a>

```java
public java.lang.String getCedarJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|VerifiedpermissionsPolicyStoreSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreSchema">VerifiedpermissionsPolicyStoreSchema</a>

---


### VerifiedpermissionsPolicyStoreTagsList <a name="VerifiedpermissionsPolicyStoreTagsList" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreTagsList;

new VerifiedpermissionsPolicyStoreTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.get"></a>

```java
public VerifiedpermissionsPolicyStoreTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VerifiedpermissionsPolicyStoreTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>>

---


### VerifiedpermissionsPolicyStoreTagsOutputReference <a name="VerifiedpermissionsPolicyStoreTagsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreTagsOutputReference;

new VerifiedpermissionsPolicyStoreTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|VerifiedpermissionsPolicyStoreTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreTags">VerifiedpermissionsPolicyStoreTags</a>

---


### VerifiedpermissionsPolicyStoreValidationSettingsOutputReference <a name="VerifiedpermissionsPolicyStoreValidationSettingsOutputReference" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.verifiedpermissions_policy_store.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference;

new VerifiedpermissionsPolicyStoreValidationSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|VerifiedpermissionsPolicyStoreValidationSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.verifiedpermissionsPolicyStore.VerifiedpermissionsPolicyStoreValidationSettings">VerifiedpermissionsPolicyStoreValidationSettings</a>

---



