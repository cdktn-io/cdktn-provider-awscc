# `opensearchmemorySpace` Submodule <a name="`opensearchmemorySpace` Submodule" id="@cdktn/provider-awscc.opensearchmemorySpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchmemorySpace <a name="OpensearchmemorySpace" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space awscc_opensearchmemory_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpace;

OpensearchmemorySpace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .encryptionConfiguration(OpensearchmemorySpaceEncryptionConfiguration)
//  .eventExpiryDays(java.lang.Number)
//  .extractionModelId(java.lang.String)
//  .memoryExpiryDays(java.lang.Number)
//  .memoryStrategies(IResolvable|java.util.List<OpensearchmemorySpaceMemoryStrategies>)
//  .tags(IResolvable|java.util.List<OpensearchmemorySpaceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.eventExpiryDays">eventExpiryDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.extractionModelId">extractionModelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.memoryExpiryDays">memoryExpiryDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.memoryStrategies">memoryStrategies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}.

---

##### `eventExpiryDays`<sup>Optional</sup> <a name="eventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.eventExpiryDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}.

---

##### `extractionModelId`<sup>Optional</sup> <a name="extractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.extractionModelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}.

---

##### `memoryExpiryDays`<sup>Optional</sup> <a name="memoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.memoryExpiryDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}.

---

##### `memoryStrategies`<sup>Optional</sup> <a name="memoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.memoryStrategies"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#tags OpensearchmemorySpace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies">putMemoryStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEventExpiryDays">resetEventExpiryDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetExtractionModelId">resetExtractionModelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryExpiryDays">resetMemoryExpiryDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryStrategies">resetMemoryStrategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(OpensearchmemorySpaceEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---

##### `putMemoryStrategies` <a name="putMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies"></a>

```java
public void putMemoryStrategies(IResolvable|java.util.List<OpensearchmemorySpaceMemoryStrategies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<OpensearchmemorySpaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetEventExpiryDays` <a name="resetEventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEventExpiryDays"></a>

```java
public void resetEventExpiryDays()
```

##### `resetExtractionModelId` <a name="resetExtractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetExtractionModelId"></a>

```java
public void resetExtractionModelId()
```

##### `resetMemoryExpiryDays` <a name="resetMemoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryExpiryDays"></a>

```java
public void resetMemoryExpiryDays()
```

##### `resetMemoryStrategies` <a name="resetMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryStrategies"></a>

```java
public void resetMemoryStrategies()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchmemorySpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpace;

OpensearchmemorySpace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpace;

OpensearchmemorySpace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpace;

OpensearchmemorySpace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpace;

OpensearchmemorySpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OpensearchmemorySpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OpensearchmemorySpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OpensearchmemorySpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OpensearchmemorySpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchmemorySpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference">OpensearchmemorySpaceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategies">memoryStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList">OpensearchmemorySpaceMemoryStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.spaceId">spaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList">OpensearchmemorySpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDaysInput">eventExpiryDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelIdInput">extractionModelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDaysInput">memoryExpiryDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategiesInput">memoryStrategiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDays">eventExpiryDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelId">extractionModelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDays">memoryExpiryDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfiguration"></a>

```java
public OpensearchmemorySpaceEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference">OpensearchmemorySpaceEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `memoryStrategies`<sup>Required</sup> <a name="memoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategies"></a>

```java
public OpensearchmemorySpaceMemoryStrategiesList getMemoryStrategies();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList">OpensearchmemorySpaceMemoryStrategiesList</a>

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.spaceId"></a>

```java
public java.lang.String getSpaceId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tags"></a>

```java
public OpensearchmemorySpaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList">OpensearchmemorySpaceTagsList</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfigurationInput"></a>

```java
public IResolvable|OpensearchmemorySpaceEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---

##### `eventExpiryDaysInput`<sup>Optional</sup> <a name="eventExpiryDaysInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDaysInput"></a>

```java
public java.lang.Number getEventExpiryDaysInput();
```

- *Type:* java.lang.Number

---

##### `extractionModelIdInput`<sup>Optional</sup> <a name="extractionModelIdInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelIdInput"></a>

```java
public java.lang.String getExtractionModelIdInput();
```

- *Type:* java.lang.String

---

##### `memoryExpiryDaysInput`<sup>Optional</sup> <a name="memoryExpiryDaysInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDaysInput"></a>

```java
public java.lang.Number getMemoryExpiryDaysInput();
```

- *Type:* java.lang.Number

---

##### `memoryStrategiesInput`<sup>Optional</sup> <a name="memoryStrategiesInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategiesInput"></a>

```java
public IResolvable|java.util.List<OpensearchmemorySpaceMemoryStrategies> getMemoryStrategiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tagsInput"></a>

```java
public IResolvable|java.util.List<OpensearchmemorySpaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>>

---

##### `eventExpiryDays`<sup>Required</sup> <a name="eventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDays"></a>

```java
public java.lang.Number getEventExpiryDays();
```

- *Type:* java.lang.Number

---

##### `extractionModelId`<sup>Required</sup> <a name="extractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelId"></a>

```java
public java.lang.String getExtractionModelId();
```

- *Type:* java.lang.String

---

##### `memoryExpiryDays`<sup>Required</sup> <a name="memoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDays"></a>

```java
public java.lang.Number getMemoryExpiryDays();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchmemorySpaceConfig <a name="OpensearchmemorySpaceConfig" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpaceConfig;

OpensearchmemorySpaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .encryptionConfiguration(OpensearchmemorySpaceEncryptionConfiguration)
//  .eventExpiryDays(java.lang.Number)
//  .extractionModelId(java.lang.String)
//  .memoryExpiryDays(java.lang.Number)
//  .memoryStrategies(IResolvable|java.util.List<OpensearchmemorySpaceMemoryStrategies>)
//  .tags(IResolvable|java.util.List<OpensearchmemorySpaceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.eventExpiryDays">eventExpiryDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.extractionModelId">extractionModelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryExpiryDays">memoryExpiryDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryStrategies">memoryStrategies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.encryptionConfiguration"></a>

```java
public OpensearchmemorySpaceEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}.

---

##### `eventExpiryDays`<sup>Optional</sup> <a name="eventExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.eventExpiryDays"></a>

```java
public java.lang.Number getEventExpiryDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}.

---

##### `extractionModelId`<sup>Optional</sup> <a name="extractionModelId" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.extractionModelId"></a>

```java
public java.lang.String getExtractionModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}.

---

##### `memoryExpiryDays`<sup>Optional</sup> <a name="memoryExpiryDays" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryExpiryDays"></a>

```java
public java.lang.Number getMemoryExpiryDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}.

---

##### `memoryStrategies`<sup>Optional</sup> <a name="memoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryStrategies"></a>

```java
public IResolvable|java.util.List<OpensearchmemorySpaceMemoryStrategies> getMemoryStrategies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<OpensearchmemorySpaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#tags OpensearchmemorySpace#tags}

---

### OpensearchmemorySpaceEncryptionConfiguration <a name="OpensearchmemorySpaceEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpaceEncryptionConfiguration;

OpensearchmemorySpaceEncryptionConfiguration.builder()
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}. |

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}.

---

### OpensearchmemorySpaceMemoryStrategies <a name="OpensearchmemorySpaceMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpaceMemoryStrategies;

OpensearchmemorySpaceMemoryStrategies.builder()
//  .configuration(OpensearchmemorySpaceMemoryStrategiesConfiguration)
//  .description(java.lang.String)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#configuration OpensearchmemorySpace#configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#description OpensearchmemorySpace#description}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#type OpensearchmemorySpace#type}. |

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.configuration"></a>

```java
public OpensearchmemorySpaceMemoryStrategiesConfiguration getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#configuration OpensearchmemorySpace#configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#description OpensearchmemorySpace#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#type OpensearchmemorySpace#type}.

---

### OpensearchmemorySpaceMemoryStrategiesConfiguration <a name="OpensearchmemorySpaceMemoryStrategiesConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpaceMemoryStrategiesConfiguration;

OpensearchmemorySpaceMemoryStrategiesConfiguration.builder()
//  .consolidationEnabled(java.lang.Boolean|IResolvable)
//  .extractEveryNMessages(java.lang.Number)
//  .extractEveryNTokens(java.lang.Number)
//  .extractionPrompt(java.lang.String)
//  .extractionSeedRecentN(java.lang.Number)
//  .extractionSeedTopK(java.lang.Number)
//  .idleTimeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.consolidationEnabled">consolidationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNMessages">extractEveryNMessages</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNTokens">extractEveryNTokens</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionPrompt">extractionPrompt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedRecentN">extractionSeedRecentN</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedTopK">extractionSeedTopK</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.idleTimeoutSeconds">idleTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}. |

---

##### `consolidationEnabled`<sup>Optional</sup> <a name="consolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.consolidationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getConsolidationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}.

---

##### `extractEveryNMessages`<sup>Optional</sup> <a name="extractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNMessages"></a>

```java
public java.lang.Number getExtractEveryNMessages();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}.

---

##### `extractEveryNTokens`<sup>Optional</sup> <a name="extractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNTokens"></a>

```java
public java.lang.Number getExtractEveryNTokens();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}.

---

##### `extractionPrompt`<sup>Optional</sup> <a name="extractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionPrompt"></a>

```java
public java.lang.String getExtractionPrompt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}.

---

##### `extractionSeedRecentN`<sup>Optional</sup> <a name="extractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedRecentN"></a>

```java
public java.lang.Number getExtractionSeedRecentN();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}.

---

##### `extractionSeedTopK`<sup>Optional</sup> <a name="extractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedTopK"></a>

```java
public java.lang.Number getExtractionSeedTopK();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}.

---

##### `idleTimeoutSeconds`<sup>Optional</sup> <a name="idleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.idleTimeoutSeconds"></a>

```java
public java.lang.Number getIdleTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}.

---

### OpensearchmemorySpaceTags <a name="OpensearchmemorySpaceTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpaceTags;

OpensearchmemorySpaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#key OpensearchmemorySpace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#value OpensearchmemorySpace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchmemorySpaceEncryptionConfigurationOutputReference <a name="OpensearchmemorySpaceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpaceEncryptionConfigurationOutputReference;

new OpensearchmemorySpaceEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchmemorySpaceEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---


### OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference <a name="OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference;

new OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetConsolidationEnabled">resetConsolidationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNMessages">resetExtractEveryNMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNTokens">resetExtractEveryNTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionPrompt">resetExtractionPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedRecentN">resetExtractionSeedRecentN</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedTopK">resetExtractionSeedTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetIdleTimeoutSeconds">resetIdleTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsolidationEnabled` <a name="resetConsolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetConsolidationEnabled"></a>

```java
public void resetConsolidationEnabled()
```

##### `resetExtractEveryNMessages` <a name="resetExtractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNMessages"></a>

```java
public void resetExtractEveryNMessages()
```

##### `resetExtractEveryNTokens` <a name="resetExtractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNTokens"></a>

```java
public void resetExtractEveryNTokens()
```

##### `resetExtractionPrompt` <a name="resetExtractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionPrompt"></a>

```java
public void resetExtractionPrompt()
```

##### `resetExtractionSeedRecentN` <a name="resetExtractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedRecentN"></a>

```java
public void resetExtractionSeedRecentN()
```

##### `resetExtractionSeedTopK` <a name="resetExtractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedTopK"></a>

```java
public void resetExtractionSeedTopK()
```

##### `resetIdleTimeoutSeconds` <a name="resetIdleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetIdleTimeoutSeconds"></a>

```java
public void resetIdleTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabledInput">consolidationEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessagesInput">extractEveryNMessagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokensInput">extractEveryNTokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPromptInput">extractionPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentNInput">extractionSeedRecentNInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopKInput">extractionSeedTopKInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSecondsInput">idleTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled">consolidationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages">extractEveryNMessages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens">extractEveryNTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt">extractionPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN">extractionSeedRecentN</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK">extractionSeedTopK</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds">idleTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `consolidationEnabledInput`<sup>Optional</sup> <a name="consolidationEnabledInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getConsolidationEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `extractEveryNMessagesInput`<sup>Optional</sup> <a name="extractEveryNMessagesInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessagesInput"></a>

```java
public java.lang.Number getExtractEveryNMessagesInput();
```

- *Type:* java.lang.Number

---

##### `extractEveryNTokensInput`<sup>Optional</sup> <a name="extractEveryNTokensInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokensInput"></a>

```java
public java.lang.Number getExtractEveryNTokensInput();
```

- *Type:* java.lang.Number

---

##### `extractionPromptInput`<sup>Optional</sup> <a name="extractionPromptInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPromptInput"></a>

```java
public java.lang.String getExtractionPromptInput();
```

- *Type:* java.lang.String

---

##### `extractionSeedRecentNInput`<sup>Optional</sup> <a name="extractionSeedRecentNInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentNInput"></a>

```java
public java.lang.Number getExtractionSeedRecentNInput();
```

- *Type:* java.lang.Number

---

##### `extractionSeedTopKInput`<sup>Optional</sup> <a name="extractionSeedTopKInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopKInput"></a>

```java
public java.lang.Number getExtractionSeedTopKInput();
```

- *Type:* java.lang.Number

---

##### `idleTimeoutSecondsInput`<sup>Optional</sup> <a name="idleTimeoutSecondsInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSecondsInput"></a>

```java
public java.lang.Number getIdleTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `consolidationEnabled`<sup>Required</sup> <a name="consolidationEnabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getConsolidationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `extractEveryNMessages`<sup>Required</sup> <a name="extractEveryNMessages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages"></a>

```java
public java.lang.Number getExtractEveryNMessages();
```

- *Type:* java.lang.Number

---

##### `extractEveryNTokens`<sup>Required</sup> <a name="extractEveryNTokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens"></a>

```java
public java.lang.Number getExtractEveryNTokens();
```

- *Type:* java.lang.Number

---

##### `extractionPrompt`<sup>Required</sup> <a name="extractionPrompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt"></a>

```java
public java.lang.String getExtractionPrompt();
```

- *Type:* java.lang.String

---

##### `extractionSeedRecentN`<sup>Required</sup> <a name="extractionSeedRecentN" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN"></a>

```java
public java.lang.Number getExtractionSeedRecentN();
```

- *Type:* java.lang.Number

---

##### `extractionSeedTopK`<sup>Required</sup> <a name="extractionSeedTopK" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK"></a>

```java
public java.lang.Number getExtractionSeedTopK();
```

- *Type:* java.lang.Number

---

##### `idleTimeoutSeconds`<sup>Required</sup> <a name="idleTimeoutSeconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds"></a>

```java
public java.lang.Number getIdleTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchmemorySpaceMemoryStrategiesConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---


### OpensearchmemorySpaceMemoryStrategiesList <a name="OpensearchmemorySpaceMemoryStrategiesList" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpaceMemoryStrategiesList;

new OpensearchmemorySpaceMemoryStrategiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get"></a>

```java
public OpensearchmemorySpaceMemoryStrategiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchmemorySpaceMemoryStrategies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>>

---


### OpensearchmemorySpaceMemoryStrategiesOutputReference <a name="OpensearchmemorySpaceMemoryStrategiesOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpaceMemoryStrategiesOutputReference;

new OpensearchmemorySpaceMemoryStrategiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration"></a>

```java
public void putConfiguration(OpensearchmemorySpaceMemoryStrategiesConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration"></a>

```java
public OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configurationInput"></a>

```java
public IResolvable|OpensearchmemorySpaceMemoryStrategiesConfiguration getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchmemorySpaceMemoryStrategies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>

---


### OpensearchmemorySpaceTagsList <a name="OpensearchmemorySpaceTagsList" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpaceTagsList;

new OpensearchmemorySpaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get"></a>

```java
public OpensearchmemorySpaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OpensearchmemorySpaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>>

---


### OpensearchmemorySpaceTagsOutputReference <a name="OpensearchmemorySpaceTagsOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.opensearchmemory_space.OpensearchmemorySpaceTagsOutputReference;

new OpensearchmemorySpaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|OpensearchmemorySpaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>

---



