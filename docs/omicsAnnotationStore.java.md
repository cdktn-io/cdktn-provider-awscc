# `omicsAnnotationStore` Submodule <a name="`omicsAnnotationStore` Submodule" id="@cdktn/provider-awscc.omicsAnnotationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsAnnotationStore <a name="OmicsAnnotationStore" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store awscc_omics_annotation_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStore;

OmicsAnnotationStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .storeFormat(java.lang.String)
//  .description(java.lang.String)
//  .reference(OmicsAnnotationStoreReference)
//  .sseConfig(OmicsAnnotationStoreSseConfig)
//  .storeOptions(OmicsAnnotationStoreStoreOptions)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.storeFormat">storeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.storeOptions">storeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}.

---

##### `storeFormat`<sup>Required</sup> <a name="storeFormat" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.storeFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}.

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.reference"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}.

---

##### `sseConfig`<sup>Optional</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.sseConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}.

---

##### `storeOptions`<sup>Optional</sup> <a name="storeOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.storeOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference">putReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig">putSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions">putStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetReference">resetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetSseConfig">resetSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetStoreOptions">resetStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReference` <a name="putReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference"></a>

```java
public void putReference(OmicsAnnotationStoreReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---

##### `putSseConfig` <a name="putSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig"></a>

```java
public void putSseConfig(OmicsAnnotationStoreSseConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---

##### `putStoreOptions` <a name="putStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions"></a>

```java
public void putStoreOptions(OmicsAnnotationStoreStoreOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetReference` <a name="resetReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetReference"></a>

```java
public void resetReference()
```

##### `resetSseConfig` <a name="resetSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetSseConfig"></a>

```java
public void resetSseConfig()
```

##### `resetStoreOptions` <a name="resetStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetStoreOptions"></a>

```java
public void resetStoreOptions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsAnnotationStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStore;

OmicsAnnotationStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStore;

OmicsAnnotationStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStore;

OmicsAnnotationStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStore;

OmicsAnnotationStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OmicsAnnotationStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OmicsAnnotationStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OmicsAnnotationStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OmicsAnnotationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OmicsAnnotationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.annotationStoreId">annotationStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference">OmicsAnnotationStoreReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference">OmicsAnnotationStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeArn">storeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptions">storeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeSizeBytes">storeSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.referenceInput">referenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfigInput">sseConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormatInput">storeFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptionsInput">storeOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormat">storeFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `annotationStoreId`<sup>Required</sup> <a name="annotationStoreId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.annotationStoreId"></a>

```java
public java.lang.String getAnnotationStoreId();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.reference"></a>

```java
public OmicsAnnotationStoreReferenceOutputReference getReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference">OmicsAnnotationStoreReferenceOutputReference</a>

---

##### `sseConfig`<sup>Required</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfig"></a>

```java
public OmicsAnnotationStoreSseConfigOutputReference getSseConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference">OmicsAnnotationStoreSseConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `storeArn`<sup>Required</sup> <a name="storeArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeArn"></a>

```java
public java.lang.String getStoreArn();
```

- *Type:* java.lang.String

---

##### `storeOptions`<sup>Required</sup> <a name="storeOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptions"></a>

```java
public OmicsAnnotationStoreStoreOptionsOutputReference getStoreOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsOutputReference</a>

---

##### `storeSizeBytes`<sup>Required</sup> <a name="storeSizeBytes" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeSizeBytes"></a>

```java
public java.lang.Number getStoreSizeBytes();
```

- *Type:* java.lang.Number

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `referenceInput`<sup>Optional</sup> <a name="referenceInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.referenceInput"></a>

```java
public IResolvable|OmicsAnnotationStoreReference getReferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---

##### `sseConfigInput`<sup>Optional</sup> <a name="sseConfigInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfigInput"></a>

```java
public IResolvable|OmicsAnnotationStoreSseConfig getSseConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---

##### `storeFormatInput`<sup>Optional</sup> <a name="storeFormatInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormatInput"></a>

```java
public java.lang.String getStoreFormatInput();
```

- *Type:* java.lang.String

---

##### `storeOptionsInput`<sup>Optional</sup> <a name="storeOptionsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptionsInput"></a>

```java
public IResolvable|OmicsAnnotationStoreStoreOptions getStoreOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `storeFormat`<sup>Required</sup> <a name="storeFormat" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormat"></a>

```java
public java.lang.String getStoreFormat();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsAnnotationStoreConfig <a name="OmicsAnnotationStoreConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStoreConfig;

OmicsAnnotationStoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .storeFormat(java.lang.String)
//  .description(java.lang.String)
//  .reference(OmicsAnnotationStoreReference)
//  .sseConfig(OmicsAnnotationStoreSseConfig)
//  .storeOptions(OmicsAnnotationStoreStoreOptions)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeFormat">storeFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.reference">reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeOptions">storeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}.

---

##### `storeFormat`<sup>Required</sup> <a name="storeFormat" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeFormat"></a>

```java
public java.lang.String getStoreFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}.

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.reference"></a>

```java
public OmicsAnnotationStoreReference getReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}.

---

##### `sseConfig`<sup>Optional</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.sseConfig"></a>

```java
public OmicsAnnotationStoreSseConfig getSseConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}.

---

##### `storeOptions`<sup>Optional</sup> <a name="storeOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeOptions"></a>

```java
public OmicsAnnotationStoreStoreOptions getStoreOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}.

---

### OmicsAnnotationStoreReference <a name="OmicsAnnotationStoreReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStoreReference;

OmicsAnnotationStoreReference.builder()
//  .referenceArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.property.referenceArn">referenceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#reference_arn OmicsAnnotationStore#reference_arn}. |

---

##### `referenceArn`<sup>Optional</sup> <a name="referenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.property.referenceArn"></a>

```java
public java.lang.String getReferenceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#reference_arn OmicsAnnotationStore#reference_arn}.

---

### OmicsAnnotationStoreSseConfig <a name="OmicsAnnotationStoreSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStoreSseConfig;

OmicsAnnotationStoreSseConfig.builder()
//  .keyArn(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#key_arn OmicsAnnotationStore#key_arn}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#type OmicsAnnotationStore#type}. |

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#key_arn OmicsAnnotationStore#key_arn}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#type OmicsAnnotationStore#type}.

---

### OmicsAnnotationStoreStoreOptions <a name="OmicsAnnotationStoreStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStoreStoreOptions;

OmicsAnnotationStoreStoreOptions.builder()
//  .tsvStoreOptions(OmicsAnnotationStoreStoreOptionsTsvStoreOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.property.tsvStoreOptions">tsvStoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#tsv_store_options OmicsAnnotationStore#tsv_store_options}. |

---

##### `tsvStoreOptions`<sup>Optional</sup> <a name="tsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.property.tsvStoreOptions"></a>

```java
public OmicsAnnotationStoreStoreOptionsTsvStoreOptions getTsvStoreOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#tsv_store_options OmicsAnnotationStore#tsv_store_options}.

---

### OmicsAnnotationStoreStoreOptionsTsvStoreOptions <a name="OmicsAnnotationStoreStoreOptionsTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStoreStoreOptionsTsvStoreOptions;

OmicsAnnotationStoreStoreOptionsTsvStoreOptions.builder()
//  .annotationType(java.lang.String)
//  .formatToHeader(java.util.Map<java.lang.String, java.lang.String>)
//  .schema(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.annotationType">annotationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#annotation_type OmicsAnnotationStore#annotation_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.formatToHeader">formatToHeader</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#format_to_header OmicsAnnotationStore#format_to_header}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.schema">schema</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#schema OmicsAnnotationStore#schema}. |

---

##### `annotationType`<sup>Optional</sup> <a name="annotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.annotationType"></a>

```java
public java.lang.String getAnnotationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#annotation_type OmicsAnnotationStore#annotation_type}.

---

##### `formatToHeader`<sup>Optional</sup> <a name="formatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.formatToHeader"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatToHeader();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#format_to_header OmicsAnnotationStore#format_to_header}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.schema"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getSchema();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_annotation_store#schema OmicsAnnotationStore#schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsAnnotationStoreReferenceOutputReference <a name="OmicsAnnotationStoreReferenceOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStoreReferenceOutputReference;

new OmicsAnnotationStoreReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resetReferenceArn">resetReferenceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReferenceArn` <a name="resetReferenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resetReferenceArn"></a>

```java
public void resetReferenceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArnInput">referenceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArn">referenceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `referenceArnInput`<sup>Optional</sup> <a name="referenceArnInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArnInput"></a>

```java
public java.lang.String getReferenceArnInput();
```

- *Type:* java.lang.String

---

##### `referenceArn`<sup>Required</sup> <a name="referenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArn"></a>

```java
public java.lang.String getReferenceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|OmicsAnnotationStoreReference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---


### OmicsAnnotationStoreSseConfigOutputReference <a name="OmicsAnnotationStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStoreSseConfigOutputReference;

new OmicsAnnotationStoreSseConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetKeyArn">resetKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyArn` <a name="resetKeyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetKeyArn"></a>

```java
public void resetKeyArn()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArnInput"></a>

```java
public java.lang.String getKeyArnInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|OmicsAnnotationStoreSseConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---


### OmicsAnnotationStoreStoreOptionsOutputReference <a name="OmicsAnnotationStoreStoreOptionsOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStoreStoreOptionsOutputReference;

new OmicsAnnotationStoreStoreOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions">putTsvStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resetTsvStoreOptions">resetTsvStoreOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTsvStoreOptions` <a name="putTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions"></a>

```java
public void putTsvStoreOptions(OmicsAnnotationStoreStoreOptionsTsvStoreOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---

##### `resetTsvStoreOptions` <a name="resetTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resetTsvStoreOptions"></a>

```java
public void resetTsvStoreOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions">tsvStoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptionsInput">tsvStoreOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tsvStoreOptions`<sup>Required</sup> <a name="tsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions"></a>

```java
public OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference getTsvStoreOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a>

---

##### `tsvStoreOptionsInput`<sup>Optional</sup> <a name="tsvStoreOptionsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptionsInput"></a>

```java
public IResolvable|OmicsAnnotationStoreStoreOptionsTsvStoreOptions getTsvStoreOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OmicsAnnotationStoreStoreOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---


### OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference <a name="OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_annotation_store.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference;

new OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetAnnotationType">resetAnnotationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetFormatToHeader">resetFormatToHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotationType` <a name="resetAnnotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetAnnotationType"></a>

```java
public void resetAnnotationType()
```

##### `resetFormatToHeader` <a name="resetFormatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetFormatToHeader"></a>

```java
public void resetFormatToHeader()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationTypeInput">annotationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeaderInput">formatToHeaderInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schemaInput">schemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType">annotationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader">formatToHeader</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema">schema</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotationTypeInput`<sup>Optional</sup> <a name="annotationTypeInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationTypeInput"></a>

```java
public java.lang.String getAnnotationTypeInput();
```

- *Type:* java.lang.String

---

##### `formatToHeaderInput`<sup>Optional</sup> <a name="formatToHeaderInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeaderInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatToHeaderInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schemaInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `annotationType`<sup>Required</sup> <a name="annotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType"></a>

```java
public java.lang.String getAnnotationType();
```

- *Type:* java.lang.String

---

##### `formatToHeader`<sup>Required</sup> <a name="formatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFormatToHeader();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getSchema();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|OmicsAnnotationStoreStoreOptionsTsvStoreOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---



