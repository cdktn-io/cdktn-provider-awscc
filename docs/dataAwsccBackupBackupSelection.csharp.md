# `dataAwsccBackupBackupSelection` Submodule <a name="`dataAwsccBackupBackupSelection` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupBackupSelection <a name="DataAwsccBackupBackupSelection" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_backup_selection awscc_backup_backup_selection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelection(Construct Scope, string Id, DataAwsccBackupBackupSelectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig">DataAwsccBackupBackupSelectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig">DataAwsccBackupBackupSelectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupBackupSelection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBackupBackupSelection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBackupBackupSelection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBackupBackupSelection.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBackupBackupSelection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBackupBackupSelection resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBackupBackupSelection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBackupBackupSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_backup_selection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupBackupSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.backupPlanId">BackupPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.backupSelection">BackupSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference">DataAwsccBackupBackupSelectionBackupSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.backupSelectionId">BackupSelectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.selectionId">SelectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.backupPlanId"></a>

```csharp
public string BackupPlanId { get; }
```

- *Type:* string

---

##### `BackupSelection`<sup>Required</sup> <a name="BackupSelection" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.backupSelection"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionOutputReference BackupSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference">DataAwsccBackupBackupSelectionBackupSelectionOutputReference</a>

---

##### `BackupSelectionId`<sup>Required</sup> <a name="BackupSelectionId" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.backupSelectionId"></a>

```csharp
public string BackupSelectionId { get; }
```

- *Type:* string

---

##### `SelectionId`<sup>Required</sup> <a name="SelectionId" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.selectionId"></a>

```csharp
public string SelectionId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupBackupSelectionBackupSelection <a name="DataAwsccBackupBackupSelectionBackupSelection" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelection {

};
```


### DataAwsccBackupBackupSelectionBackupSelectionConditions <a name="DataAwsccBackupBackupSelectionBackupSelectionConditions" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditions {

};
```


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals {

};
```


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike {

};
```


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals {

};
```


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike {

};
```


### DataAwsccBackupBackupSelectionBackupSelectionListOfTags <a name="DataAwsccBackupBackupSelectionBackupSelectionListOfTags" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionListOfTags {

};
```


### DataAwsccBackupBackupSelectionConfig <a name="DataAwsccBackupBackupSelectionConfig" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/backup_backup_selection#id DataAwsccBackupBackupSelection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals">StringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike">StringLike</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals">StringNotEquals</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike">StringNotLike</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditions">DataAwsccBackupBackupSelectionBackupSelectionConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StringEquals`<sup>Required</sup> <a name="StringEquals" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList StringEquals { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList</a>

---

##### `StringLike`<sup>Required</sup> <a name="StringLike" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList StringLike { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList</a>

---

##### `StringNotEquals`<sup>Required</sup> <a name="StringNotEquals" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList StringNotEquals { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a>

---

##### `StringNotLike`<sup>Required</sup> <a name="StringNotLike" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList StringNotLike { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditions">DataAwsccBackupBackupSelectionBackupSelectionConditions</a>

---


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.get"></a>

```csharp
private DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey">ConditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue">ConditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey"></a>

```csharp
public string ConditionKey { get; }
```

- *Type:* string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue"></a>

```csharp
public string ConditionValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringEquals</a>

---


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.get"></a>

```csharp
private DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey">ConditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue">ConditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey"></a>

```csharp
public string ConditionKey { get; }
```

- *Type:* string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue"></a>

```csharp
public string ConditionValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringLike</a>

---


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get"></a>

```csharp
private DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey">ConditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue">ConditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey"></a>

```csharp
public string ConditionKey { get; }
```

- *Type:* string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue"></a>

```csharp
public string ConditionValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotEquals</a>

---


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get"></a>

```csharp
private DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference <a name="DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey">ConditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue">ConditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey"></a>

```csharp
public string ConditionKey { get; }
```

- *Type:* string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue"></a>

```csharp
public string ConditionValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike">DataAwsccBackupBackupSelectionBackupSelectionConditionsStringNotLike</a>

---


### DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList <a name="DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.get"></a>

```csharp
private DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference <a name="DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey">ConditionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType">ConditionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue">ConditionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTags">DataAwsccBackupBackupSelectionBackupSelectionListOfTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey"></a>

```csharp
public string ConditionKey { get; }
```

- *Type:* string

---

##### `ConditionType`<sup>Required</sup> <a name="ConditionType" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType"></a>

```csharp
public string ConditionType { get; }
```

- *Type:* string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue"></a>

```csharp
public string ConditionValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionListOfTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTags">DataAwsccBackupBackupSelectionBackupSelectionListOfTags</a>

---


### DataAwsccBackupBackupSelectionBackupSelectionOutputReference <a name="DataAwsccBackupBackupSelectionBackupSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBackupBackupSelectionBackupSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference">DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.listOfTags">ListOfTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList">DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.notResources">NotResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.selectionName">SelectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelection">DataAwsccBackupBackupSelectionBackupSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.conditions"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference">DataAwsccBackupBackupSelectionBackupSelectionConditionsOutputReference</a>

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `ListOfTags`<sup>Required</sup> <a name="ListOfTags" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.listOfTags"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList ListOfTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList">DataAwsccBackupBackupSelectionBackupSelectionListOfTagsList</a>

---

##### `NotResources`<sup>Required</sup> <a name="NotResources" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.notResources"></a>

```csharp
public string[] NotResources { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `SelectionName`<sup>Required</sup> <a name="SelectionName" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.selectionName"></a>

```csharp
public string SelectionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelectionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBackupBackupSelectionBackupSelection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupBackupSelection.DataAwsccBackupBackupSelectionBackupSelection">DataAwsccBackupBackupSelectionBackupSelection</a>

---



