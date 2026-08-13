# `bedrockDataAutomationLibrary` Submodule <a name="`bedrockDataAutomationLibrary` Submodule" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockDataAutomationLibrary <a name="BedrockDataAutomationLibrary" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library awscc_bedrock_data_automation_library}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibrary;

BedrockDataAutomationLibrary.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .libraryName(java.lang.String)
//  .encryptionConfiguration(BedrockDataAutomationLibraryEncryptionConfiguration)
//  .libraryDescription(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockDataAutomationLibraryTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.libraryName">libraryName</a></code> | <code>java.lang.String</code> | Name of the DataAutomationLibrary. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a></code> | KMS Encryption Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.libraryDescription">libraryDescription</a></code> | <code>java.lang.String</code> | Description of the DataAutomationLibrary. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>></code> | List of tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `libraryName`<sup>Required</sup> <a name="libraryName" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.libraryName"></a>

- *Type:* java.lang.String

Name of the DataAutomationLibrary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#library_name BedrockDataAutomationLibrary#library_name}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a>

KMS Encryption Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#encryption_configuration BedrockDataAutomationLibrary#encryption_configuration}

---

##### `libraryDescription`<sup>Optional</sup> <a name="libraryDescription" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.libraryDescription"></a>

- *Type:* java.lang.String

Description of the DataAutomationLibrary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#library_description BedrockDataAutomationLibrary#library_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>>

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#tags BedrockDataAutomationLibrary#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetLibraryDescription">resetLibraryDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putEncryptionConfiguration"></a>

```java
public void putEncryptionConfiguration(BedrockDataAutomationLibraryEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<BedrockDataAutomationLibraryTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>>

---

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetEncryptionConfiguration"></a>

```java
public void resetEncryptionConfiguration()
```

##### `resetLibraryDescription` <a name="resetLibraryDescription" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetLibraryDescription"></a>

```java
public void resetLibraryDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockDataAutomationLibrary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibrary;

BedrockDataAutomationLibrary.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibrary;

BedrockDataAutomationLibrary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibrary;

BedrockDataAutomationLibrary.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibrary;

BedrockDataAutomationLibrary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockDataAutomationLibrary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockDataAutomationLibrary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockDataAutomationLibrary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockDataAutomationLibrary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockDataAutomationLibrary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference">BedrockDataAutomationLibraryEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList">BedrockDataAutomationLibraryEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryArn">libraryArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList">BedrockDataAutomationLibraryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryDescriptionInput">libraryDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryNameInput">libraryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryDescription">libraryDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryName">libraryName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.encryptionConfiguration"></a>

```java
public BedrockDataAutomationLibraryEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference">BedrockDataAutomationLibraryEncryptionConfigurationOutputReference</a>

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.entityTypes"></a>

```java
public BedrockDataAutomationLibraryEntityTypesList getEntityTypes();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList">BedrockDataAutomationLibraryEntityTypesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `libraryArn`<sup>Required</sup> <a name="libraryArn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryArn"></a>

```java
public java.lang.String getLibraryArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tags"></a>

```java
public BedrockDataAutomationLibraryTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList">BedrockDataAutomationLibraryTagsList</a>

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.encryptionConfigurationInput"></a>

```java
public IResolvable|BedrockDataAutomationLibraryEncryptionConfiguration getEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a>

---

##### `libraryDescriptionInput`<sup>Optional</sup> <a name="libraryDescriptionInput" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryDescriptionInput"></a>

```java
public java.lang.String getLibraryDescriptionInput();
```

- *Type:* java.lang.String

---

##### `libraryNameInput`<sup>Optional</sup> <a name="libraryNameInput" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryNameInput"></a>

```java
public java.lang.String getLibraryNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tagsInput"></a>

```java
public IResolvable|java.util.List<BedrockDataAutomationLibraryTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>>

---

##### `libraryDescription`<sup>Required</sup> <a name="libraryDescription" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryDescription"></a>

```java
public java.lang.String getLibraryDescription();
```

- *Type:* java.lang.String

---

##### `libraryName`<sup>Required</sup> <a name="libraryName" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.libraryName"></a>

```java
public java.lang.String getLibraryName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibrary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockDataAutomationLibraryConfig <a name="BedrockDataAutomationLibraryConfig" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibraryConfig;

BedrockDataAutomationLibraryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .libraryName(java.lang.String)
//  .encryptionConfiguration(BedrockDataAutomationLibraryEncryptionConfiguration)
//  .libraryDescription(java.lang.String)
//  .tags(IResolvable|java.util.List<BedrockDataAutomationLibraryTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.libraryName">libraryName</a></code> | <code>java.lang.String</code> | Name of the DataAutomationLibrary. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a></code> | KMS Encryption Configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.libraryDescription">libraryDescription</a></code> | <code>java.lang.String</code> | Description of the DataAutomationLibrary. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>></code> | List of tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `libraryName`<sup>Required</sup> <a name="libraryName" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.libraryName"></a>

```java
public java.lang.String getLibraryName();
```

- *Type:* java.lang.String

Name of the DataAutomationLibrary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#library_name BedrockDataAutomationLibrary#library_name}

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.encryptionConfiguration"></a>

```java
public BedrockDataAutomationLibraryEncryptionConfiguration getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a>

KMS Encryption Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#encryption_configuration BedrockDataAutomationLibrary#encryption_configuration}

---

##### `libraryDescription`<sup>Optional</sup> <a name="libraryDescription" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.libraryDescription"></a>

```java
public java.lang.String getLibraryDescription();
```

- *Type:* java.lang.String

Description of the DataAutomationLibrary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#library_description BedrockDataAutomationLibrary#library_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryConfig.property.tags"></a>

```java
public IResolvable|java.util.List<BedrockDataAutomationLibraryTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>>

List of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#tags BedrockDataAutomationLibrary#tags}

---

### BedrockDataAutomationLibraryEncryptionConfiguration <a name="BedrockDataAutomationLibraryEncryptionConfiguration" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibraryEncryptionConfiguration;

BedrockDataAutomationLibraryEncryptionConfiguration.builder()
//  .kmsEncryptionContext(java.util.Map<java.lang.String, java.lang.String>)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration.property.kmsEncryptionContext">kmsEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | KMS Encryption Context. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | KMS Key Identifier. |

---

##### `kmsEncryptionContext`<sup>Optional</sup> <a name="kmsEncryptionContext" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration.property.kmsEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKmsEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

KMS Encryption Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#kms_encryption_context BedrockDataAutomationLibrary#kms_encryption_context}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

KMS Key Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#kms_key_id BedrockDataAutomationLibrary#kms_key_id}

---

### BedrockDataAutomationLibraryEntityTypes <a name="BedrockDataAutomationLibraryEntityTypes" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypes.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibraryEntityTypes;

BedrockDataAutomationLibraryEntityTypes.builder()
    .build();
```


### BedrockDataAutomationLibraryTags <a name="BedrockDataAutomationLibraryTags" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibraryTags;

BedrockDataAutomationLibraryTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags.property.key">key</a></code> | <code>java.lang.String</code> | Tag key. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags.property.value">value</a></code> | <code>java.lang.String</code> | Tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#key BedrockDataAutomationLibrary#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_data_automation_library#value BedrockDataAutomationLibrary#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockDataAutomationLibraryEncryptionConfigurationOutputReference <a name="BedrockDataAutomationLibraryEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference;

new BedrockDataAutomationLibraryEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resetKmsEncryptionContext">resetKmsEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsEncryptionContext` <a name="resetKmsEncryptionContext" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resetKmsEncryptionContext"></a>

```java
public void resetKmsEncryptionContext()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsEncryptionContextInput">kmsEncryptionContextInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsEncryptionContext">kmsEncryptionContext</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsEncryptionContextInput`<sup>Optional</sup> <a name="kmsEncryptionContextInput" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsEncryptionContextInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKmsEncryptionContextInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `kmsEncryptionContext`<sup>Required</sup> <a name="kmsEncryptionContext" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsEncryptionContext"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getKmsEncryptionContext();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockDataAutomationLibraryEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEncryptionConfiguration">BedrockDataAutomationLibraryEncryptionConfiguration</a>

---


### BedrockDataAutomationLibraryEntityTypesList <a name="BedrockDataAutomationLibraryEntityTypesList" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibraryEntityTypesList;

new BedrockDataAutomationLibraryEntityTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.get"></a>

```java
public BedrockDataAutomationLibraryEntityTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BedrockDataAutomationLibraryEntityTypesOutputReference <a name="BedrockDataAutomationLibraryEntityTypesOutputReference" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibraryEntityTypesOutputReference;

new BedrockDataAutomationLibraryEntityTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.entityMetadata">entityMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypes">BedrockDataAutomationLibraryEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityMetadata`<sup>Required</sup> <a name="entityMetadata" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.entityMetadata"></a>

```java
public java.lang.String getEntityMetadata();
```

- *Type:* java.lang.String

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypesOutputReference.property.internalValue"></a>

```java
public BedrockDataAutomationLibraryEntityTypes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryEntityTypes">BedrockDataAutomationLibraryEntityTypes</a>

---


### BedrockDataAutomationLibraryTagsList <a name="BedrockDataAutomationLibraryTagsList" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibraryTagsList;

new BedrockDataAutomationLibraryTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.get"></a>

```java
public BedrockDataAutomationLibraryTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockDataAutomationLibraryTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>>

---


### BedrockDataAutomationLibraryTagsOutputReference <a name="BedrockDataAutomationLibraryTagsOutputReference" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrock_data_automation_library.BedrockDataAutomationLibraryTagsOutputReference;

new BedrockDataAutomationLibraryTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockDataAutomationLibraryTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockDataAutomationLibrary.BedrockDataAutomationLibraryTags">BedrockDataAutomationLibraryTags</a>

---



