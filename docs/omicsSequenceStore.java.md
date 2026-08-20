# `omicsSequenceStore` Submodule <a name="`omicsSequenceStore` Submodule" id="@cdktn/provider-awscc.omicsSequenceStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsSequenceStore <a name="OmicsSequenceStore" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store awscc_omics_sequence_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_sequence_store.OmicsSequenceStore;

OmicsSequenceStore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accessLogLocation(java.lang.String)
//  .description(java.lang.String)
//  .eTagAlgorithmFamily(java.lang.String)
//  .fallbackLocation(java.lang.String)
//  .propagatedSetLevelTags(java.util.List<java.lang.String>)
//  .s3AccessPolicy(java.lang.String)
//  .sseConfig(OmicsSequenceStoreSseConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A name for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.accessLogLocation">accessLogLocation</a></code> | <code>java.lang.String</code> | Location of the access logs. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.eTagAlgorithmFamily">eTagAlgorithmFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.fallbackLocation">fallbackLocation</a></code> | <code>java.lang.String</code> | An S3 location that is used to store files that have failed a direct upload. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.propagatedSetLevelTags">propagatedSetLevelTags</a></code> | <code>java.util.List<java.lang.String></code> | The tags keys to propagate to the S3 objects associated with read sets in the sequence store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.s3AccessPolicy">s3AccessPolicy</a></code> | <code>java.lang.String</code> | The resource policy that controls S3 access on the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | Server-side encryption (SSE) settings for a store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A name for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#name OmicsSequenceStore#name}

---

##### `accessLogLocation`<sup>Optional</sup> <a name="accessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.accessLogLocation"></a>

- *Type:* java.lang.String

Location of the access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#access_log_location OmicsSequenceStore#access_log_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#description OmicsSequenceStore#description}

---

##### `eTagAlgorithmFamily`<sup>Optional</sup> <a name="eTagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.eTagAlgorithmFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}.

---

##### `fallbackLocation`<sup>Optional</sup> <a name="fallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.fallbackLocation"></a>

- *Type:* java.lang.String

An S3 location that is used to store files that have failed a direct upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#fallback_location OmicsSequenceStore#fallback_location}

---

##### `propagatedSetLevelTags`<sup>Optional</sup> <a name="propagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.propagatedSetLevelTags"></a>

- *Type:* java.util.List<java.lang.String>

The tags keys to propagate to the S3 objects associated with read sets in the sequence store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#propagated_set_level_tags OmicsSequenceStore#propagated_set_level_tags}

---

##### `s3AccessPolicy`<sup>Optional</sup> <a name="s3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.s3AccessPolicy"></a>

- *Type:* java.lang.String

The resource policy that controls S3 access on the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#s3_access_policy OmicsSequenceStore#s3_access_policy}

---

##### `sseConfig`<sup>Optional</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.sseConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

Server-side encryption (SSE) settings for a store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#sse_config OmicsSequenceStore#sse_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig">putSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetAccessLogLocation">resetAccessLogLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetETagAlgorithmFamily">resetETagAlgorithmFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetFallbackLocation">resetFallbackLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetPropagatedSetLevelTags">resetPropagatedSetLevelTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetS3AccessPolicy">resetS3AccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetSseConfig">resetSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSseConfig` <a name="putSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig"></a>

```java
public void putSseConfig(OmicsSequenceStoreSseConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---

##### `resetAccessLogLocation` <a name="resetAccessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetAccessLogLocation"></a>

```java
public void resetAccessLogLocation()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetETagAlgorithmFamily` <a name="resetETagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetETagAlgorithmFamily"></a>

```java
public void resetETagAlgorithmFamily()
```

##### `resetFallbackLocation` <a name="resetFallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetFallbackLocation"></a>

```java
public void resetFallbackLocation()
```

##### `resetPropagatedSetLevelTags` <a name="resetPropagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetPropagatedSetLevelTags"></a>

```java
public void resetPropagatedSetLevelTags()
```

##### `resetS3AccessPolicy` <a name="resetS3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetS3AccessPolicy"></a>

```java
public void resetS3AccessPolicy()
```

##### `resetSseConfig` <a name="resetSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetSseConfig"></a>

```java
public void resetSseConfig()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsSequenceStore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct"></a>

```java
import io.cdktn.providers.awscc.omics_sequence_store.OmicsSequenceStore;

OmicsSequenceStore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.omics_sequence_store.OmicsSequenceStore;

OmicsSequenceStore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.omics_sequence_store.OmicsSequenceStore;

OmicsSequenceStore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.omics_sequence_store.OmicsSequenceStore;

OmicsSequenceStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OmicsSequenceStore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OmicsSequenceStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OmicsSequenceStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OmicsSequenceStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OmicsSequenceStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPointArn">s3AccessPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sequenceStoreId">sequenceStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference">OmicsSequenceStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocationInput">accessLogLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamilyInput">eTagAlgorithmFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocationInput">fallbackLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTagsInput">propagatedSetLevelTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicyInput">s3AccessPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfigInput">sseConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocation">accessLogLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamily">eTagAlgorithmFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocation">fallbackLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTags">propagatedSetLevelTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicy">s3AccessPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `s3AccessPointArn`<sup>Required</sup> <a name="s3AccessPointArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPointArn"></a>

```java
public java.lang.String getS3AccessPointArn();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `sequenceStoreId`<sup>Required</sup> <a name="sequenceStoreId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sequenceStoreId"></a>

```java
public java.lang.String getSequenceStoreId();
```

- *Type:* java.lang.String

---

##### `sseConfig`<sup>Required</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfig"></a>

```java
public OmicsSequenceStoreSseConfigOutputReference getSseConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference">OmicsSequenceStoreSseConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accessLogLocationInput`<sup>Optional</sup> <a name="accessLogLocationInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocationInput"></a>

```java
public java.lang.String getAccessLogLocationInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `eTagAlgorithmFamilyInput`<sup>Optional</sup> <a name="eTagAlgorithmFamilyInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamilyInput"></a>

```java
public java.lang.String getETagAlgorithmFamilyInput();
```

- *Type:* java.lang.String

---

##### `fallbackLocationInput`<sup>Optional</sup> <a name="fallbackLocationInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocationInput"></a>

```java
public java.lang.String getFallbackLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propagatedSetLevelTagsInput`<sup>Optional</sup> <a name="propagatedSetLevelTagsInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTagsInput"></a>

```java
public java.util.List<java.lang.String> getPropagatedSetLevelTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3AccessPolicyInput`<sup>Optional</sup> <a name="s3AccessPolicyInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicyInput"></a>

```java
public java.lang.String getS3AccessPolicyInput();
```

- *Type:* java.lang.String

---

##### `sseConfigInput`<sup>Optional</sup> <a name="sseConfigInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfigInput"></a>

```java
public IResolvable|OmicsSequenceStoreSseConfig getSseConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `accessLogLocation`<sup>Required</sup> <a name="accessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocation"></a>

```java
public java.lang.String getAccessLogLocation();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `eTagAlgorithmFamily`<sup>Required</sup> <a name="eTagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamily"></a>

```java
public java.lang.String getETagAlgorithmFamily();
```

- *Type:* java.lang.String

---

##### `fallbackLocation`<sup>Required</sup> <a name="fallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocation"></a>

```java
public java.lang.String getFallbackLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `propagatedSetLevelTags`<sup>Required</sup> <a name="propagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTags"></a>

```java
public java.util.List<java.lang.String> getPropagatedSetLevelTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `s3AccessPolicy`<sup>Required</sup> <a name="s3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicy"></a>

```java
public java.lang.String getS3AccessPolicy();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsSequenceStoreConfig <a name="OmicsSequenceStoreConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_sequence_store.OmicsSequenceStoreConfig;

OmicsSequenceStoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .accessLogLocation(java.lang.String)
//  .description(java.lang.String)
//  .eTagAlgorithmFamily(java.lang.String)
//  .fallbackLocation(java.lang.String)
//  .propagatedSetLevelTags(java.util.List<java.lang.String>)
//  .s3AccessPolicy(java.lang.String)
//  .sseConfig(OmicsSequenceStoreSseConfig)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | A name for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.accessLogLocation">accessLogLocation</a></code> | <code>java.lang.String</code> | Location of the access logs. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.eTagAlgorithmFamily">eTagAlgorithmFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.fallbackLocation">fallbackLocation</a></code> | <code>java.lang.String</code> | An S3 location that is used to store files that have failed a direct upload. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.propagatedSetLevelTags">propagatedSetLevelTags</a></code> | <code>java.util.List<java.lang.String></code> | The tags keys to propagate to the S3 objects associated with read sets in the sequence store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.s3AccessPolicy">s3AccessPolicy</a></code> | <code>java.lang.String</code> | The resource policy that controls S3 access on the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.sseConfig">sseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | Server-side encryption (SSE) settings for a store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#name OmicsSequenceStore#name}

---

##### `accessLogLocation`<sup>Optional</sup> <a name="accessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.accessLogLocation"></a>

```java
public java.lang.String getAccessLogLocation();
```

- *Type:* java.lang.String

Location of the access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#access_log_location OmicsSequenceStore#access_log_location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#description OmicsSequenceStore#description}

---

##### `eTagAlgorithmFamily`<sup>Optional</sup> <a name="eTagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.eTagAlgorithmFamily"></a>

```java
public java.lang.String getETagAlgorithmFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}.

---

##### `fallbackLocation`<sup>Optional</sup> <a name="fallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.fallbackLocation"></a>

```java
public java.lang.String getFallbackLocation();
```

- *Type:* java.lang.String

An S3 location that is used to store files that have failed a direct upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#fallback_location OmicsSequenceStore#fallback_location}

---

##### `propagatedSetLevelTags`<sup>Optional</sup> <a name="propagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.propagatedSetLevelTags"></a>

```java
public java.util.List<java.lang.String> getPropagatedSetLevelTags();
```

- *Type:* java.util.List<java.lang.String>

The tags keys to propagate to the S3 objects associated with read sets in the sequence store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#propagated_set_level_tags OmicsSequenceStore#propagated_set_level_tags}

---

##### `s3AccessPolicy`<sup>Optional</sup> <a name="s3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.s3AccessPolicy"></a>

```java
public java.lang.String getS3AccessPolicy();
```

- *Type:* java.lang.String

The resource policy that controls S3 access on the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#s3_access_policy OmicsSequenceStore#s3_access_policy}

---

##### `sseConfig`<sup>Optional</sup> <a name="sseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.sseConfig"></a>

```java
public OmicsSequenceStoreSseConfig getSseConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

Server-side encryption (SSE) settings for a store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#sse_config OmicsSequenceStore#sse_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}.

---

### OmicsSequenceStoreSseConfig <a name="OmicsSequenceStoreSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_sequence_store.OmicsSequenceStoreSseConfig;

OmicsSequenceStoreSseConfig.builder()
//  .keyArn(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | An encryption key ARN. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#type OmicsSequenceStore#type}. |

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

An encryption key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#key_arn OmicsSequenceStore#key_arn}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/omics_sequence_store#type OmicsSequenceStore#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsSequenceStoreSseConfigOutputReference <a name="OmicsSequenceStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.omics_sequence_store.OmicsSequenceStoreSseConfigOutputReference;

new OmicsSequenceStoreSseConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetKeyArn">resetKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyArn` <a name="resetKeyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetKeyArn"></a>

```java
public void resetKeyArn()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArnInput"></a>

```java
public java.lang.String getKeyArnInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|OmicsSequenceStoreSseConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---



