# `dataAwsccBackupTieringConfiguration` Submodule <a name="`dataAwsccBackupTieringConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupTieringConfiguration <a name="DataAwsccBackupTieringConfiguration" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_tiering_configuration awscc_backup_tiering_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupTieringConfiguration(Construct Scope, string Id, DataAwsccBackupTieringConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig">DataAwsccBackupTieringConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig">DataAwsccBackupTieringConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupTieringConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBackupTieringConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBackupTieringConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBackupTieringConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBackupTieringConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBackupTieringConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBackupTieringConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBackupTieringConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_tiering_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupTieringConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.backupVaultName">BackupVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.resourceSelection">ResourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList">DataAwsccBackupTieringConfigurationResourceSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.tieringConfigurationArn">TieringConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.tieringConfigurationName">TieringConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.tieringConfigurationTags">TieringConfigurationTags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BackupVaultName`<sup>Required</sup> <a name="BackupVaultName" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.backupVaultName"></a>

```csharp
public string BackupVaultName { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `ResourceSelection`<sup>Required</sup> <a name="ResourceSelection" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.resourceSelection"></a>

```csharp
public DataAwsccBackupTieringConfigurationResourceSelectionList ResourceSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList">DataAwsccBackupTieringConfigurationResourceSelectionList</a>

---

##### `TieringConfigurationArn`<sup>Required</sup> <a name="TieringConfigurationArn" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.tieringConfigurationArn"></a>

```csharp
public string TieringConfigurationArn { get; }
```

- *Type:* string

---

##### `TieringConfigurationName`<sup>Required</sup> <a name="TieringConfigurationName" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.tieringConfigurationName"></a>

```csharp
public string TieringConfigurationName { get; }
```

- *Type:* string

---

##### `TieringConfigurationTags`<sup>Required</sup> <a name="TieringConfigurationTags" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.tieringConfigurationTags"></a>

```csharp
public StringMap TieringConfigurationTags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupTieringConfigurationConfig <a name="DataAwsccBackupTieringConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupTieringConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_tiering_configuration#id DataAwsccBackupTieringConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBackupTieringConfigurationResourceSelection <a name="DataAwsccBackupTieringConfigurationResourceSelection" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupTieringConfigurationResourceSelection {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupTieringConfigurationResourceSelectionList <a name="DataAwsccBackupTieringConfigurationResourceSelectionList" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupTieringConfigurationResourceSelectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.get"></a>

```csharp
private DataAwsccBackupTieringConfigurationResourceSelectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBackupTieringConfigurationResourceSelectionOutputReference <a name="DataAwsccBackupTieringConfigurationResourceSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupTieringConfigurationResourceSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDays">TieringDownSettingsInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelection">DataAwsccBackupTieringConfigurationResourceSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `TieringDownSettingsInDays`<sup>Required</sup> <a name="TieringDownSettingsInDays" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDays"></a>

```csharp
public double TieringDownSettingsInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelectionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBackupTieringConfigurationResourceSelection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupTieringConfiguration.DataAwsccBackupTieringConfigurationResourceSelection">DataAwsccBackupTieringConfigurationResourceSelection</a>

---



