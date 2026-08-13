# `dataAwsccCleanroomsConfiguredTable` Submodule <a name="`dataAwsccCleanroomsConfiguredTable` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsConfiguredTable <a name="DataAwsccCleanroomsConfiguredTable" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_configured_table awscc_cleanrooms_configured_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTable(Construct Scope, string Id, DataAwsccCleanroomsConfiguredTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig">DataAwsccCleanroomsConfiguredTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig">DataAwsccCleanroomsConfiguredTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsConfiguredTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsConfiguredTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsConfiguredTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsConfiguredTable.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsConfiguredTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCleanroomsConfiguredTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCleanroomsConfiguredTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCleanroomsConfiguredTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_configured_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsConfiguredTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.allowedColumns">AllowedColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.analysisMethod">AnalysisMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.analysisRules">AnalysisRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList">DataAwsccCleanroomsConfiguredTableAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.configuredTableIdentifier">ConfiguredTableIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.selectedAnalysisMethods">SelectedAnalysisMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.tableReference">TableReference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference">DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList">DataAwsccCleanroomsConfiguredTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllowedColumns`<sup>Required</sup> <a name="AllowedColumns" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.allowedColumns"></a>

```csharp
public string[] AllowedColumns { get; }
```

- *Type:* string[]

---

##### `AnalysisMethod`<sup>Required</sup> <a name="AnalysisMethod" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.analysisMethod"></a>

```csharp
public string AnalysisMethod { get; }
```

- *Type:* string

---

##### `AnalysisRules`<sup>Required</sup> <a name="AnalysisRules" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.analysisRules"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesList AnalysisRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList">DataAwsccCleanroomsConfiguredTableAnalysisRulesList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConfiguredTableIdentifier`<sup>Required</sup> <a name="ConfiguredTableIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.configuredTableIdentifier"></a>

```csharp
public string ConfiguredTableIdentifier { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SelectedAnalysisMethods`<sup>Required</sup> <a name="SelectedAnalysisMethods" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.selectedAnalysisMethods"></a>

```csharp
public string[] SelectedAnalysisMethods { get; }
```

- *Type:* string[]

---

##### `TableReference`<sup>Required</sup> <a name="TableReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.tableReference"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference TableReference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference">DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.tags"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList">DataAwsccCleanroomsConfiguredTableTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsConfiguredTableAnalysisRules <a name="DataAwsccCleanroomsConfiguredTableAnalysisRules" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRules {

};
```


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy {

};
```


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1 <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1 {

};
```


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation {

};
```


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns {

};
```


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints {

};
```


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom {

};
```


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy {

};
```


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns {

};
```


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct {

};
```


### DataAwsccCleanroomsConfiguredTableConfig <a name="DataAwsccCleanroomsConfiguredTableConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cleanrooms_configured_table#id DataAwsccCleanroomsConfiguredTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsConfiguredTableTableReference <a name="DataAwsccCleanroomsConfiguredTableTableReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReference {

};
```


### DataAwsccCleanroomsConfiguredTableTableReferenceAthena <a name="DataAwsccCleanroomsConfiguredTableTableReferenceAthena" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthena"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthena.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceAthena {

};
```


### DataAwsccCleanroomsConfiguredTableTableReferenceGlue <a name="DataAwsccCleanroomsConfiguredTableTableReferenceGlue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceGlue {

};
```


### DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake <a name="DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake {

};
```


### DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema <a name="DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema {

};
```


### DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1 <a name="DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1 {

};
```


### DataAwsccCleanroomsConfiguredTableTags <a name="DataAwsccCleanroomsConfiguredTableTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsConfiguredTableAnalysisRulesList <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesList" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.get"></a>

```csharp
private DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.property.policy">Policy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRules">DataAwsccCleanroomsConfiguredTableAnalysisRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.property.policy"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference Policy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRules">DataAwsccCleanroomsConfiguredTableAnalysisRules</a>

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `V1`<sup>Required</sup> <a name="V1" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.v1"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference V1 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicy</a>

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.get"></a>

```csharp
private DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.function">Function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.function"></a>

```csharp
public string Function { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumns</a>

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.get"></a>

```csharp
private DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraints</a>

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.aggregateColumns">AggregateColumns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.allowedJoinOperators">AllowedJoinOperators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.dimensionColumns">DimensionColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinColumns">JoinColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinRequired">JoinRequired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.outputConstraints">OutputConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.scalarFunctions">ScalarFunctions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalAnalyses`<sup>Required</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.additionalAnalyses"></a>

```csharp
public string AdditionalAnalyses { get; }
```

- *Type:* string

---

##### `AggregateColumns`<sup>Required</sup> <a name="AggregateColumns" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.aggregateColumns"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList AggregateColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationAggregateColumnsList</a>

---

##### `AllowedJoinOperators`<sup>Required</sup> <a name="AllowedJoinOperators" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.allowedJoinOperators"></a>

```csharp
public string[] AllowedJoinOperators { get; }
```

- *Type:* string[]

---

##### `DimensionColumns`<sup>Required</sup> <a name="DimensionColumns" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.dimensionColumns"></a>

```csharp
public string[] DimensionColumns { get; }
```

- *Type:* string[]

---

##### `JoinColumns`<sup>Required</sup> <a name="JoinColumns" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinColumns"></a>

```csharp
public string[] JoinColumns { get; }
```

- *Type:* string[]

---

##### `JoinRequired`<sup>Required</sup> <a name="JoinRequired" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.joinRequired"></a>

```csharp
public string JoinRequired { get; }
```

- *Type:* string

---

##### `OutputConstraints`<sup>Required</sup> <a name="OutputConstraints" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.outputConstraints"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList OutputConstraints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputConstraintsList</a>

---

##### `ScalarFunctions`<sup>Required</sup> <a name="ScalarFunctions" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.scalarFunctions"></a>

```csharp
public string[] ScalarFunctions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Aggregation</a>

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get"></a>

```csharp
private DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses">AllowedAnalyses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders">AllowedAnalysisProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy">DifferentialPrivacy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns">DisallowedOutputColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalAnalyses`<sup>Required</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses"></a>

```csharp
public string AdditionalAnalyses { get; }
```

- *Type:* string

---

##### `AllowedAnalyses`<sup>Required</sup> <a name="AllowedAnalyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses"></a>

```csharp
public string[] AllowedAnalyses { get; }
```

- *Type:* string[]

---

##### `AllowedAnalysisProviders`<sup>Required</sup> <a name="AllowedAnalysisProviders" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders"></a>

```csharp
public string[] AllowedAnalysisProviders { get; }
```

- *Type:* string[]

---

##### `DifferentialPrivacy`<sup>Required</sup> <a name="DifferentialPrivacy" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference DifferentialPrivacy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a>

---

##### `DisallowedOutputColumns`<sup>Required</sup> <a name="DisallowedOutputColumns" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns"></a>

```csharp
public string[] DisallowedOutputColumns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1Custom</a>

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.additionalAnalyses">AdditionalAnalyses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.allowedJoinOperators">AllowedJoinOperators</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.joinColumns">JoinColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.listColumns">ListColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalAnalyses`<sup>Required</sup> <a name="AdditionalAnalyses" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.additionalAnalyses"></a>

```csharp
public string AdditionalAnalyses { get; }
```

- *Type:* string

---

##### `AllowedJoinOperators`<sup>Required</sup> <a name="AllowedJoinOperators" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.allowedJoinOperators"></a>

```csharp
public string[] AllowedJoinOperators { get; }
```

- *Type:* string[]

---

##### `JoinColumns`<sup>Required</sup> <a name="JoinColumns" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.joinColumns"></a>

```csharp
public string[] JoinColumns { get; }
```

- *Type:* string[]

---

##### `ListColumns`<sup>Required</sup> <a name="ListColumns" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.listColumns"></a>

```csharp
public string[] ListColumns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStruct</a>

---


### DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference <a name="DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.aggregation">Aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.list">List</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.aggregation"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference Aggregation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1AggregationOutputReference</a>

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference Custom { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `List`<sup>Required</sup> <a name="List" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.list"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference List { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1ListStructOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1">DataAwsccCleanroomsConfiguredTableAnalysisRulesPolicyV1</a>

---


### DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference <a name="DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.outputLocation">OutputLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.workGroup">WorkGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthena">DataAwsccCleanroomsConfiguredTableTableReferenceAthena</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.outputLocation"></a>

```csharp
public string OutputLocation { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `WorkGroup`<sup>Required</sup> <a name="WorkGroup" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.workGroup"></a>

```csharp
public string WorkGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReferenceAthena InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthena">DataAwsccCleanroomsConfiguredTableTableReferenceAthena</a>

---


### DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference <a name="DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlue">DataAwsccCleanroomsConfiguredTableTableReferenceGlue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReferenceGlue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlue">DataAwsccCleanroomsConfiguredTableTableReferenceGlue</a>

---


### DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference <a name="DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.athena">Athena</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference">DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.glue">Glue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference">DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.snowflake">Snowflake</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReference">DataAwsccCleanroomsConfiguredTableTableReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Athena`<sup>Required</sup> <a name="Athena" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.athena"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference Athena { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference">DataAwsccCleanroomsConfiguredTableTableReferenceAthenaOutputReference</a>

---

##### `Glue`<sup>Required</sup> <a name="Glue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.glue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference Glue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference">DataAwsccCleanroomsConfiguredTableTableReferenceGlueOutputReference</a>

---

##### `Snowflake`<sup>Required</sup> <a name="Snowflake" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.snowflake"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference Snowflake { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReference InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReference">DataAwsccCleanroomsConfiguredTableTableReference</a>

---


### DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference <a name="DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.accountIdentifier">AccountIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableSchema">TableSchema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdentifier`<sup>Required</sup> <a name="AccountIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.accountIdentifier"></a>

```csharp
public string AccountIdentifier { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `TableSchema`<sup>Required</sup> <a name="TableSchema" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.tableSchema"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference TableSchema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflake</a>

---


### DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference <a name="DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.v1">V1</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `V1`<sup>Required</sup> <a name="V1" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.v1"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List V1 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchema</a>

---


### DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List <a name="DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.get"></a>

```csharp
private DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1List.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference <a name="DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnType">ColumnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.columnType"></a>

```csharp
public string ColumnType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1OutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1">DataAwsccCleanroomsConfiguredTableTableReferenceSnowflakeTableSchemaV1</a>

---


### DataAwsccCleanroomsConfiguredTableTagsList <a name="DataAwsccCleanroomsConfiguredTableTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.get"></a>

```csharp
private DataAwsccCleanroomsConfiguredTableTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsConfiguredTableTagsOutputReference <a name="DataAwsccCleanroomsConfiguredTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsConfiguredTableTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTags">DataAwsccCleanroomsConfiguredTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsConfiguredTableTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsConfiguredTable.DataAwsccCleanroomsConfiguredTableTags">DataAwsccCleanroomsConfiguredTableTags</a>

---



