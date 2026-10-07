# `translateTerminology` Submodule <a name="`translateTerminology` Submodule" id="@cdktn/provider-awscc.translateTerminology"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranslateTerminology <a name="TranslateTerminology" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology awscc_translate_terminology}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminology;

TranslateTerminology.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKey(TranslateTerminologyEncryptionKey)
//  .mergeStrategy(java.lang.String)
//  .tags(IResolvable|java.util.List<TranslateTerminologyTags>)
//  .terminologyData(TranslateTerminologyTerminologyData)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | The encryption key for the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.mergeStrategy">mergeStrategy</a></code> | <code>java.lang.String</code> | The merge strategy for the custom terminology. Currently only OVERWRITE is supported. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>></code> | Tags associated with the terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.terminologyData">terminologyData</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | The terminology data for the custom terminology being imported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#name TranslateTerminology#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#description TranslateTerminology#description}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.encryptionKey"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

The encryption key for the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#encryption_key TranslateTerminology#encryption_key}

---

##### `mergeStrategy`<sup>Optional</sup> <a name="mergeStrategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.mergeStrategy"></a>

- *Type:* java.lang.String

The merge strategy for the custom terminology. Currently only OVERWRITE is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#merge_strategy TranslateTerminology#merge_strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>>

Tags associated with the terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#tags TranslateTerminology#tags}

---

##### `terminologyData`<sup>Optional</sup> <a name="terminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.Initializer.parameter.terminologyData"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

The terminology data for the custom terminology being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#terminology_data TranslateTerminology#terminology_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData">putTerminologyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetMergeStrategy">resetMergeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTerminologyData">resetTerminologyData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey"></a>

```java
public void putEncryptionKey(TranslateTerminologyEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<TranslateTerminologyTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>>

---

##### `putTerminologyData` <a name="putTerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData"></a>

```java
public void putTerminologyData(TranslateTerminologyTerminologyData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.putTerminologyData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetMergeStrategy` <a name="resetMergeStrategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetMergeStrategy"></a>

```java
public void resetMergeStrategy()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTags"></a>

```java
public void resetTags()
```

##### `resetTerminologyData` <a name="resetTerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.resetTerminologyData"></a>

```java
public void resetTerminologyData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a TranslateTerminology resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminology;

TranslateTerminology.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminology;

TranslateTerminology.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminology;

TranslateTerminology.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminology;

TranslateTerminology.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),TranslateTerminology.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a TranslateTerminology resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the TranslateTerminology to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing TranslateTerminology that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the TranslateTerminology to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.directionality">directionality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference">TranslateTerminologyEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sizeBytes">sizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sourceLanguageCode">sourceLanguageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList">TranslateTerminologyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.targetLanguageCodes">targetLanguageCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.termCount">termCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyData">terminologyData</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference">TranslateTerminologyTerminologyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategyInput">mergeStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyDataInput">terminologyDataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategy">mergeStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `directionality`<sup>Required</sup> <a name="directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.directionality"></a>

```java
public java.lang.String getDirectionality();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKey"></a>

```java
public TranslateTerminologyEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference">TranslateTerminologyEncryptionKeyOutputReference</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `sizeBytes`<sup>Required</sup> <a name="sizeBytes" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sizeBytes"></a>

```java
public java.lang.Number getSizeBytes();
```

- *Type:* java.lang.Number

---

##### `sourceLanguageCode`<sup>Required</sup> <a name="sourceLanguageCode" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.sourceLanguageCode"></a>

```java
public java.lang.String getSourceLanguageCode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tags"></a>

```java
public TranslateTerminologyTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList">TranslateTerminologyTagsList</a>

---

##### `targetLanguageCodes`<sup>Required</sup> <a name="targetLanguageCodes" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.targetLanguageCodes"></a>

```java
public java.util.List<java.lang.String> getTargetLanguageCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `termCount`<sup>Required</sup> <a name="termCount" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.termCount"></a>

```java
public java.lang.Number getTermCount();
```

- *Type:* java.lang.Number

---

##### `terminologyData`<sup>Required</sup> <a name="terminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyData"></a>

```java
public TranslateTerminologyTerminologyDataOutputReference getTerminologyData();
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference">TranslateTerminologyTerminologyDataOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.encryptionKeyInput"></a>

```java
public IResolvable|TranslateTerminologyEncryptionKey getEncryptionKeyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

---

##### `mergeStrategyInput`<sup>Optional</sup> <a name="mergeStrategyInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategyInput"></a>

```java
public java.lang.String getMergeStrategyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tagsInput"></a>

```java
public IResolvable|java.util.List<TranslateTerminologyTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>>

---

##### `terminologyDataInput`<sup>Optional</sup> <a name="terminologyDataInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.terminologyDataInput"></a>

```java
public IResolvable|TranslateTerminologyTerminologyData getTerminologyDataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `mergeStrategy`<sup>Required</sup> <a name="mergeStrategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.mergeStrategy"></a>

```java
public java.lang.String getMergeStrategy();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminology.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TranslateTerminologyConfig <a name="TranslateTerminologyConfig" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminologyConfig;

TranslateTerminologyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .encryptionKey(TranslateTerminologyEncryptionKey)
//  .mergeStrategy(java.lang.String)
//  .tags(IResolvable|java.util.List<TranslateTerminologyTags>)
//  .terminologyData(TranslateTerminologyTerminologyData)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | The encryption key for the custom terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.mergeStrategy">mergeStrategy</a></code> | <code>java.lang.String</code> | The merge strategy for the custom terminology. Currently only OVERWRITE is supported. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>></code> | Tags associated with the terminology. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.terminologyData">terminologyData</a></code> | <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | The terminology data for the custom terminology being imported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#name TranslateTerminology#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#description TranslateTerminology#description}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.encryptionKey"></a>

```java
public TranslateTerminologyEncryptionKey getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

The encryption key for the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#encryption_key TranslateTerminology#encryption_key}

---

##### `mergeStrategy`<sup>Optional</sup> <a name="mergeStrategy" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.mergeStrategy"></a>

```java
public java.lang.String getMergeStrategy();
```

- *Type:* java.lang.String

The merge strategy for the custom terminology. Currently only OVERWRITE is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#merge_strategy TranslateTerminology#merge_strategy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.tags"></a>

```java
public IResolvable|java.util.List<TranslateTerminologyTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>>

Tags associated with the terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#tags TranslateTerminology#tags}

---

##### `terminologyData`<sup>Optional</sup> <a name="terminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyConfig.property.terminologyData"></a>

```java
public TranslateTerminologyTerminologyData getTerminologyData();
```

- *Type:* <a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

The terminology data for the custom terminology being imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#terminology_data TranslateTerminology#terminology_data}

---

### TranslateTerminologyEncryptionKey <a name="TranslateTerminologyEncryptionKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminologyEncryptionKey;

TranslateTerminologyEncryptionKey.builder()
//  .id(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.id">id</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the encryption key. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.type">type</a></code> | <code>java.lang.String</code> | The type of encryption key. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#id TranslateTerminology#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#type TranslateTerminology#type}

---

### TranslateTerminologyTags <a name="TranslateTerminologyTags" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminologyTags;

TranslateTerminologyTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#key TranslateTerminology#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#value TranslateTerminology#value}

---

### TranslateTerminologyTerminologyData <a name="TranslateTerminologyTerminologyData" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.Initializer"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminologyTerminologyData;

TranslateTerminologyTerminologyData.builder()
//  .directionality(java.lang.String)
//  .file(java.lang.String)
//  .format(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.directionality">directionality</a></code> | <code>java.lang.String</code> | The directionality of the terminology resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.file">file</a></code> | <code>java.lang.String</code> | The file containing the custom terminology data, base64-encoded. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.format">format</a></code> | <code>java.lang.String</code> | The data format of the custom terminology. |

---

##### `directionality`<sup>Optional</sup> <a name="directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.directionality"></a>

```java
public java.lang.String getDirectionality();
```

- *Type:* java.lang.String

The directionality of the terminology resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#directionality TranslateTerminology#directionality}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

The file containing the custom terminology data, base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#file TranslateTerminology#file}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

The data format of the custom terminology.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/translate_terminology#format TranslateTerminology#format}

---

## Classes <a name="Classes" id="Classes"></a>

### TranslateTerminologyEncryptionKeyOutputReference <a name="TranslateTerminologyEncryptionKeyOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminologyEncryptionKeyOutputReference;

new TranslateTerminologyEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKeyOutputReference.property.internalValue"></a>

```java
public IResolvable|TranslateTerminologyEncryptionKey getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyEncryptionKey">TranslateTerminologyEncryptionKey</a>

---


### TranslateTerminologyTagsList <a name="TranslateTerminologyTagsList" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminologyTagsList;

new TranslateTerminologyTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get"></a>

```java
public TranslateTerminologyTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<TranslateTerminologyTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>>

---


### TranslateTerminologyTagsOutputReference <a name="TranslateTerminologyTagsOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminologyTagsOutputReference;

new TranslateTerminologyTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|TranslateTerminologyTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTags">TranslateTerminologyTags</a>

---


### TranslateTerminologyTerminologyDataOutputReference <a name="TranslateTerminologyTerminologyDataOutputReference" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.translate_terminology.TranslateTerminologyTerminologyDataOutputReference;

new TranslateTerminologyTerminologyDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetDirectionality">resetDirectionality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFormat">resetFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectionality` <a name="resetDirectionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetDirectionality"></a>

```java
public void resetDirectionality()
```

##### `resetFile` <a name="resetFile" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFile"></a>

```java
public void resetFile()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.resetFormat"></a>

```java
public void resetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionalityInput">directionalityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionality">directionality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionalityInput`<sup>Optional</sup> <a name="directionalityInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionalityInput"></a>

```java
public java.lang.String getDirectionalityInput();
```

- *Type:* java.lang.String

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `directionality`<sup>Required</sup> <a name="directionality" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.directionality"></a>

```java
public java.lang.String getDirectionality();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyDataOutputReference.property.internalValue"></a>

```java
public IResolvable|TranslateTerminologyTerminologyData getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.translateTerminology.TranslateTerminologyTerminologyData">TranslateTerminologyTerminologyData</a>

---



