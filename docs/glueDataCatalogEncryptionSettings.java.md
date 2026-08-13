# `glueDataCatalogEncryptionSettings` Submodule <a name="`glueDataCatalogEncryptionSettings` Submodule" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDataCatalogEncryptionSettings <a name="GlueDataCatalogEncryptionSettings" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings awscc_glue_data_catalog_encryption_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettings;

GlueDataCatalogEncryptionSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogId(java.lang.String)
    .dataCatalogEncryptionSettings(GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.catalogId">catalogId</a></code> | <code>java.lang.String</code> | The ID of the Data Catalog in which the settings are created. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.dataCatalogEncryptionSettings">dataCatalogEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a></code> | Contains configuration information for maintaining Data Catalog security. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.catalogId"></a>

- *Type:* java.lang.String

The ID of the Data Catalog in which the settings are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#catalog_id GlueDataCatalogEncryptionSettings#catalog_id}

---

##### `dataCatalogEncryptionSettings`<sup>Required</sup> <a name="dataCatalogEncryptionSettings" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.Initializer.parameter.dataCatalogEncryptionSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a>

Contains configuration information for maintaining Data Catalog security.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#data_catalog_encryption_settings GlueDataCatalogEncryptionSettings#data_catalog_encryption_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.putDataCatalogEncryptionSettings">putDataCatalogEncryptionSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataCatalogEncryptionSettings` <a name="putDataCatalogEncryptionSettings" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.putDataCatalogEncryptionSettings"></a>

```java
public void putDataCatalogEncryptionSettings(GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.putDataCatalogEncryptionSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueDataCatalogEncryptionSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.isConstruct"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettings;

GlueDataCatalogEncryptionSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettings;

GlueDataCatalogEncryptionSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettings;

GlueDataCatalogEncryptionSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettings;

GlueDataCatalogEncryptionSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlueDataCatalogEncryptionSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlueDataCatalogEncryptionSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlueDataCatalogEncryptionSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlueDataCatalogEncryptionSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlueDataCatalogEncryptionSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.dataCatalogEncryptionSettings">dataCatalogEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.dataCatalogEncryptionSettingsInput">dataCatalogEncryptionSettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataCatalogEncryptionSettings`<sup>Required</sup> <a name="dataCatalogEncryptionSettings" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.dataCatalogEncryptionSettings"></a>

```java
public GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference getDataCatalogEncryptionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `dataCatalogEncryptionSettingsInput`<sup>Optional</sup> <a name="dataCatalogEncryptionSettingsInput" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.dataCatalogEncryptionSettingsInput"></a>

```java
public IResolvable|GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings getDataCatalogEncryptionSettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDataCatalogEncryptionSettingsConfig <a name="GlueDataCatalogEncryptionSettingsConfig" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettingsConfig;

GlueDataCatalogEncryptionSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogId(java.lang.String)
    .dataCatalogEncryptionSettings(GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | The ID of the Data Catalog in which the settings are created. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.dataCatalogEncryptionSettings">dataCatalogEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a></code> | Contains configuration information for maintaining Data Catalog security. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

The ID of the Data Catalog in which the settings are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#catalog_id GlueDataCatalogEncryptionSettings#catalog_id}

---

##### `dataCatalogEncryptionSettings`<sup>Required</sup> <a name="dataCatalogEncryptionSettings" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsConfig.property.dataCatalogEncryptionSettings"></a>

```java
public GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings getDataCatalogEncryptionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a>

Contains configuration information for maintaining Data Catalog security.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#data_catalog_encryption_settings GlueDataCatalogEncryptionSettings#data_catalog_encryption_settings}

---

### GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings <a name="GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;

GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.builder()
//  .connectionPasswordEncryption(GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption)
//  .encryptionAtRest(GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.property.connectionPasswordEncryption">connectionPasswordEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption</a></code> | When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of CreateConnection or UpdateConnection and store it in the ENCRYPTED_PASSWORD field in the connection properties. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.property.encryptionAtRest">encryptionAtRest</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest</a></code> | Specifies the encryption-at-rest configuration for the Data Catalog. |

---

##### `connectionPasswordEncryption`<sup>Optional</sup> <a name="connectionPasswordEncryption" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.property.connectionPasswordEncryption"></a>

```java
public GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption getConnectionPasswordEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption</a>

When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of CreateConnection or UpdateConnection and store it in the ENCRYPTED_PASSWORD field in the connection properties.

You can enable catalog encryption or only password encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#connection_password_encryption GlueDataCatalogEncryptionSettings#connection_password_encryption}

---

##### `encryptionAtRest`<sup>Optional</sup> <a name="encryptionAtRest" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings.property.encryptionAtRest"></a>

```java
public GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest getEncryptionAtRest();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest</a>

Specifies the encryption-at-rest configuration for the Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#encryption_at_rest GlueDataCatalogEncryptionSettings#encryption_at_rest}

---

### GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption <a name="GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption;

GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.builder()
//  .kmsKeyId(java.lang.String)
//  .returnConnectionPasswordEncrypted(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | An AWS KMS key that is used to encrypt the connection password. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.property.returnConnectionPasswordEncrypted">returnConnectionPasswordEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When the ReturnConnectionPasswordEncrypted flag is set to 'true', passwords remain encrypted in the responses of GetConnection and GetConnections. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

An AWS KMS key that is used to encrypt the connection password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#kms_key_id GlueDataCatalogEncryptionSettings#kms_key_id}

---

##### `returnConnectionPasswordEncrypted`<sup>Optional</sup> <a name="returnConnectionPasswordEncrypted" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption.property.returnConnectionPasswordEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getReturnConnectionPasswordEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When the ReturnConnectionPasswordEncrypted flag is set to 'true', passwords remain encrypted in the responses of GetConnection and GetConnections.

This encryption takes effect independently from catalog encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#return_connection_password_encrypted GlueDataCatalogEncryptionSettings#return_connection_password_encrypted}

---

### GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest <a name="GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest;

GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.builder()
//  .catalogEncryptionMode(java.lang.String)
//  .catalogEncryptionServiceRole(java.lang.String)
//  .sseAwsKmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.property.catalogEncryptionMode">catalogEncryptionMode</a></code> | <code>java.lang.String</code> | The encryption-at-rest mode for encrypting Data Catalog data. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.property.catalogEncryptionServiceRole">catalogEncryptionServiceRole</a></code> | <code>java.lang.String</code> | The role that AWS Glue assumes to encrypt and decrypt the Data Catalog objects on the caller's behalf. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.property.sseAwsKmsKeyId">sseAwsKmsKeyId</a></code> | <code>java.lang.String</code> | The ID of the AWS KMS key to use for encryption at rest. |

---

##### `catalogEncryptionMode`<sup>Optional</sup> <a name="catalogEncryptionMode" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.property.catalogEncryptionMode"></a>

```java
public java.lang.String getCatalogEncryptionMode();
```

- *Type:* java.lang.String

The encryption-at-rest mode for encrypting Data Catalog data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#catalog_encryption_mode GlueDataCatalogEncryptionSettings#catalog_encryption_mode}

---

##### `catalogEncryptionServiceRole`<sup>Optional</sup> <a name="catalogEncryptionServiceRole" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.property.catalogEncryptionServiceRole"></a>

```java
public java.lang.String getCatalogEncryptionServiceRole();
```

- *Type:* java.lang.String

The role that AWS Glue assumes to encrypt and decrypt the Data Catalog objects on the caller's behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#catalog_encryption_service_role GlueDataCatalogEncryptionSettings#catalog_encryption_service_role}

---

##### `sseAwsKmsKeyId`<sup>Optional</sup> <a name="sseAwsKmsKeyId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest.property.sseAwsKmsKeyId"></a>

```java
public java.lang.String getSseAwsKmsKeyId();
```

- *Type:* java.lang.String

The ID of the AWS KMS key to use for encryption at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_data_catalog_encryption_settings#sse_aws_kms_key_id GlueDataCatalogEncryptionSettings#sse_aws_kms_key_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference <a name="GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference;

new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resetReturnConnectionPasswordEncrypted">resetReturnConnectionPasswordEncrypted</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetReturnConnectionPasswordEncrypted` <a name="resetReturnConnectionPasswordEncrypted" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.resetReturnConnectionPasswordEncrypted"></a>

```java
public void resetReturnConnectionPasswordEncrypted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.returnConnectionPasswordEncryptedInput">returnConnectionPasswordEncryptedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.returnConnectionPasswordEncrypted">returnConnectionPasswordEncrypted</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `returnConnectionPasswordEncryptedInput`<sup>Optional</sup> <a name="returnConnectionPasswordEncryptedInput" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.returnConnectionPasswordEncryptedInput"></a>

```java
public java.lang.Boolean|IResolvable getReturnConnectionPasswordEncryptedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `returnConnectionPasswordEncrypted`<sup>Required</sup> <a name="returnConnectionPasswordEncrypted" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.returnConnectionPasswordEncrypted"></a>

```java
public java.lang.Boolean|IResolvable getReturnConnectionPasswordEncrypted();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption</a>

---


### GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference <a name="GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference;

new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resetCatalogEncryptionMode">resetCatalogEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resetCatalogEncryptionServiceRole">resetCatalogEncryptionServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resetSseAwsKmsKeyId">resetSseAwsKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogEncryptionMode` <a name="resetCatalogEncryptionMode" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resetCatalogEncryptionMode"></a>

```java
public void resetCatalogEncryptionMode()
```

##### `resetCatalogEncryptionServiceRole` <a name="resetCatalogEncryptionServiceRole" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resetCatalogEncryptionServiceRole"></a>

```java
public void resetCatalogEncryptionServiceRole()
```

##### `resetSseAwsKmsKeyId` <a name="resetSseAwsKmsKeyId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.resetSseAwsKmsKeyId"></a>

```java
public void resetSseAwsKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionModeInput">catalogEncryptionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionServiceRoleInput">catalogEncryptionServiceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.sseAwsKmsKeyIdInput">sseAwsKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionMode">catalogEncryptionMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionServiceRole">catalogEncryptionServiceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.sseAwsKmsKeyId">sseAwsKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogEncryptionModeInput`<sup>Optional</sup> <a name="catalogEncryptionModeInput" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionModeInput"></a>

```java
public java.lang.String getCatalogEncryptionModeInput();
```

- *Type:* java.lang.String

---

##### `catalogEncryptionServiceRoleInput`<sup>Optional</sup> <a name="catalogEncryptionServiceRoleInput" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionServiceRoleInput"></a>

```java
public java.lang.String getCatalogEncryptionServiceRoleInput();
```

- *Type:* java.lang.String

---

##### `sseAwsKmsKeyIdInput`<sup>Optional</sup> <a name="sseAwsKmsKeyIdInput" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.sseAwsKmsKeyIdInput"></a>

```java
public java.lang.String getSseAwsKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `catalogEncryptionMode`<sup>Required</sup> <a name="catalogEncryptionMode" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionMode"></a>

```java
public java.lang.String getCatalogEncryptionMode();
```

- *Type:* java.lang.String

---

##### `catalogEncryptionServiceRole`<sup>Required</sup> <a name="catalogEncryptionServiceRole" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.catalogEncryptionServiceRole"></a>

```java
public java.lang.String getCatalogEncryptionServiceRole();
```

- *Type:* java.lang.String

---

##### `sseAwsKmsKeyId`<sup>Required</sup> <a name="sseAwsKmsKeyId" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.sseAwsKmsKeyId"></a>

```java
public java.lang.String getSseAwsKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest</a>

---


### GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference <a name="GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_data_catalog_encryption_settings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference;

new GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.putConnectionPasswordEncryption">putConnectionPasswordEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.putEncryptionAtRest">putEncryptionAtRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resetConnectionPasswordEncryption">resetConnectionPasswordEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resetEncryptionAtRest">resetEncryptionAtRest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectionPasswordEncryption` <a name="putConnectionPasswordEncryption" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.putConnectionPasswordEncryption"></a>

```java
public void putConnectionPasswordEncryption(GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.putConnectionPasswordEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption</a>

---

##### `putEncryptionAtRest` <a name="putEncryptionAtRest" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.putEncryptionAtRest"></a>

```java
public void putEncryptionAtRest(GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.putEncryptionAtRest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest</a>

---

##### `resetConnectionPasswordEncryption` <a name="resetConnectionPasswordEncryption" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resetConnectionPasswordEncryption"></a>

```java
public void resetConnectionPasswordEncryption()
```

##### `resetEncryptionAtRest` <a name="resetEncryptionAtRest" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.resetEncryptionAtRest"></a>

```java
public void resetEncryptionAtRest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.connectionPasswordEncryption">connectionPasswordEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.encryptionAtRest">encryptionAtRest</a></code> | <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.connectionPasswordEncryptionInput">connectionPasswordEncryptionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.encryptionAtRestInput">encryptionAtRestInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionPasswordEncryption`<sup>Required</sup> <a name="connectionPasswordEncryption" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.connectionPasswordEncryption"></a>

```java
public GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference getConnectionPasswordEncryption();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference</a>

---

##### `encryptionAtRest`<sup>Required</sup> <a name="encryptionAtRest" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.encryptionAtRest"></a>

```java
public GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference getEncryptionAtRest();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference</a>

---

##### `connectionPasswordEncryptionInput`<sup>Optional</sup> <a name="connectionPasswordEncryptionInput" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.connectionPasswordEncryptionInput"></a>

```java
public IResolvable|GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption getConnectionPasswordEncryptionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption</a>

---

##### `encryptionAtRestInput`<sup>Optional</sup> <a name="encryptionAtRestInput" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.encryptionAtRestInput"></a>

```java
public IResolvable|GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest getEncryptionAtRestInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueDataCatalogEncryptionSettings.GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings">GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings</a>

---



