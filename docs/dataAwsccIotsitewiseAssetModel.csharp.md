# `dataAwsccIotsitewiseAssetModel` Submodule <a name="`dataAwsccIotsitewiseAssetModel` Submodule" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotsitewiseAssetModel <a name="DataAwsccIotsitewiseAssetModel" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_asset_model awscc_iotsitewise_asset_model}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModel(Construct Scope, string Id, DataAwsccIotsitewiseAssetModelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig">DataAwsccIotsitewiseAssetModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig">DataAwsccIotsitewiseAssetModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotsitewiseAssetModel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotsitewiseAssetModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotsitewiseAssetModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotsitewiseAssetModel.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotsitewiseAssetModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccIotsitewiseAssetModel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotsitewiseAssetModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotsitewiseAssetModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_asset_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotsitewiseAssetModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelArn">AssetModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelCompositeModels">AssetModelCompositeModels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelDescription">AssetModelDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelExternalId">AssetModelExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelHierarchies">AssetModelHierarchies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList">DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelId">AssetModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelName">AssetModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelProperties">AssetModelProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelType">AssetModelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.enforcedAssetModelInterfaceRelationships">EnforcedAssetModelInterfaceRelationships</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList">DataAwsccIotsitewiseAssetModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AssetModelArn`<sup>Required</sup> <a name="AssetModelArn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelArn"></a>

```csharp
public string AssetModelArn { get; }
```

- *Type:* string

---

##### `AssetModelCompositeModels`<sup>Required</sup> <a name="AssetModelCompositeModels" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelCompositeModels"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList AssetModelCompositeModels { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList</a>

---

##### `AssetModelDescription`<sup>Required</sup> <a name="AssetModelDescription" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelDescription"></a>

```csharp
public string AssetModelDescription { get; }
```

- *Type:* string

---

##### `AssetModelExternalId`<sup>Required</sup> <a name="AssetModelExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelExternalId"></a>

```csharp
public string AssetModelExternalId { get; }
```

- *Type:* string

---

##### `AssetModelHierarchies`<sup>Required</sup> <a name="AssetModelHierarchies" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelHierarchies"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList AssetModelHierarchies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList">DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList</a>

---

##### `AssetModelId`<sup>Required</sup> <a name="AssetModelId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelId"></a>

```csharp
public string AssetModelId { get; }
```

- *Type:* string

---

##### `AssetModelName`<sup>Required</sup> <a name="AssetModelName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelName"></a>

```csharp
public string AssetModelName { get; }
```

- *Type:* string

---

##### `AssetModelProperties`<sup>Required</sup> <a name="AssetModelProperties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelProperties"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesList AssetModelProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesList</a>

---

##### `AssetModelType`<sup>Required</sup> <a name="AssetModelType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.assetModelType"></a>

```csharp
public string AssetModelType { get; }
```

- *Type:* string

---

##### `EnforcedAssetModelInterfaceRelationships`<sup>Required</sup> <a name="EnforcedAssetModelInterfaceRelationships" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.enforcedAssetModelInterfaceRelationships"></a>

```csharp
public DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList EnforcedAssetModelInterfaceRelationships { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.tags"></a>

```csharp
public DataAwsccIotsitewiseAssetModelTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList">DataAwsccIotsitewiseAssetModelTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotsitewiseAssetModelAssetModelCompositeModels <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModels" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModels {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelHierarchies <a name="DataAwsccIotsitewiseAssetModelAssetModelHierarchies" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelHierarchies {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelProperties <a name="DataAwsccIotsitewiseAssetModelAssetModelProperties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelProperties {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesType <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesType {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue {

};
```


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath {

};
```


### DataAwsccIotsitewiseAssetModelConfig <a name="DataAwsccIotsitewiseAssetModelConfig" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_asset_model#id DataAwsccIotsitewiseAssetModel#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships {

};
```


### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings {

};
```


### DataAwsccIotsitewiseAssetModelTags <a name="DataAwsccIotsitewiseAssetModelTags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataTypeSpec">DataTypeSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.logicalId">LogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.type">Type</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DataTypeSpec`<sup>Required</sup> <a name="DataTypeSpec" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.dataTypeSpec"></a>

```csharp
public string DataTypeSpec { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogicalId`<sup>Required</sup> <a name="LogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.logicalId"></a>

```csharp
public string LogicalId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.type"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference Type { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference</a>

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelProperties</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttribute</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.window">Window</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.variables"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList</a>

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.window"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference Window { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetric</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.value"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariables</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId">HierarchyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId">PropertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId">PropertyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath">PropertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HierarchyExternalId`<sup>Required</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId"></a>

```csharp
public string HierarchyExternalId { get; }
```

- *Type:* string

---

##### `HierarchyId`<sup>Required</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId"></a>

```csharp
public string HierarchyId { get; }
```

- *Type:* string

---

##### `HierarchyLogicalId`<sup>Required</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```csharp
public string HierarchyLogicalId { get; }
```

- *Type:* string

---

##### `PropertyExternalId`<sup>Required</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId"></a>

```csharp
public string PropertyExternalId { get; }
```

- *Type:* string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId"></a>

```csharp
public string PropertyId { get; }
```

- *Type:* string

---

##### `PropertyLogicalId`<sup>Required</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId"></a>

```csharp
public string PropertyLogicalId { get; }
```

- *Type:* string

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList PropertyPath { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValue</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricVariablesValuePropertyPath</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tumbling`<sup>Required</sup> <a name="Tumbling" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.tumbling"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference Tumbling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindow</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset">Offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset"></a>

```csharp
public string Offset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricWindowTumbling</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.attribute">Attribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.transform">Transform</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.attribute"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference Attribute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeAttributeOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.metric"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference Metric { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeMetricOutputReference</a>

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.transform"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference Transform { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference</a>

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesType</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.variables"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransform</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.value"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariables</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId">HierarchyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId">PropertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId">PropertyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath">PropertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HierarchyExternalId`<sup>Required</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId"></a>

```csharp
public string HierarchyExternalId { get; }
```

- *Type:* string

---

##### `HierarchyId`<sup>Required</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId"></a>

```csharp
public string HierarchyId { get; }
```

- *Type:* string

---

##### `HierarchyLogicalId`<sup>Required</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```csharp
public string HierarchyLogicalId { get; }
```

- *Type:* string

---

##### `PropertyExternalId`<sup>Required</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId"></a>

```csharp
public string PropertyExternalId { get; }
```

- *Type:* string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId"></a>

```csharp
public string PropertyId { get; }
```

- *Type:* string

---

##### `PropertyLogicalId`<sup>Required</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId"></a>

```csharp
public string PropertyLogicalId { get; }
```

- *Type:* string

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList PropertyPath { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValue</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesTypeTransformVariablesValuePropertyPath</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.composedAssetModelId">ComposedAssetModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.compositeModelProperties">CompositeModelProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.parentAssetModelCompositeModelExternalId">ParentAssetModelCompositeModelExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.path">Path</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModels">DataAwsccIotsitewiseAssetModelAssetModelCompositeModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComposedAssetModelId`<sup>Required</sup> <a name="ComposedAssetModelId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.composedAssetModelId"></a>

```csharp
public string ComposedAssetModelId { get; }
```

- *Type:* string

---

##### `CompositeModelProperties`<sup>Required</sup> <a name="CompositeModelProperties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.compositeModelProperties"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList CompositeModelProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList">DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsCompositeModelPropertiesList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentAssetModelCompositeModelExternalId`<sup>Required</sup> <a name="ParentAssetModelCompositeModelExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.parentAssetModelCompositeModelExternalId"></a>

```csharp
public string ParentAssetModelCompositeModelExternalId { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.path"></a>

```csharp
public string[] Path { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModelsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelCompositeModels InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelCompositeModels">DataAwsccIotsitewiseAssetModelAssetModelCompositeModels</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList <a name="DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.childAssetModelId">ChildAssetModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.logicalId">LogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchies">DataAwsccIotsitewiseAssetModelAssetModelHierarchies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChildAssetModelId`<sup>Required</sup> <a name="ChildAssetModelId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.childAssetModelId"></a>

```csharp
public string ChildAssetModelId { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogicalId`<sup>Required</sup> <a name="LogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.logicalId"></a>

```csharp
public string LogicalId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelHierarchies InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelHierarchies">DataAwsccIotsitewiseAssetModelAssetModelHierarchies</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesList <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataTypeSpec">DataTypeSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.logicalId">LogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.type">Type</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelProperties">DataAwsccIotsitewiseAssetModelAssetModelProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DataTypeSpec`<sup>Required</sup> <a name="DataTypeSpec" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.dataTypeSpec"></a>

```csharp
public string DataTypeSpec { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogicalId`<sup>Required</sup> <a name="LogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.logicalId"></a>

```csharp
public string LogicalId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.type"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference Type { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference</a>

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelProperties">DataAwsccIotsitewiseAssetModelAssetModelProperties</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttribute</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.window">Window</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.variables"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList</a>

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.window"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference Window { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetric</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.value"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariables</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId">HierarchyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId">PropertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId">PropertyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath">PropertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HierarchyExternalId`<sup>Required</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyExternalId"></a>

```csharp
public string HierarchyExternalId { get; }
```

- *Type:* string

---

##### `HierarchyId`<sup>Required</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyId"></a>

```csharp
public string HierarchyId { get; }
```

- *Type:* string

---

##### `HierarchyLogicalId`<sup>Required</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```csharp
public string HierarchyLogicalId { get; }
```

- *Type:* string

---

##### `PropertyExternalId`<sup>Required</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyExternalId"></a>

```csharp
public string PropertyExternalId { get; }
```

- *Type:* string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyId"></a>

```csharp
public string PropertyId { get; }
```

- *Type:* string

---

##### `PropertyLogicalId`<sup>Required</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyLogicalId"></a>

```csharp
public string PropertyLogicalId { get; }
```

- *Type:* string

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.propertyPath"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList PropertyPath { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValue</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricVariablesValuePropertyPath</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tumbling`<sup>Required</sup> <a name="Tumbling" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.tumbling"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference Tumbling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindow</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset">Offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.offset"></a>

```csharp
public string Offset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumblingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricWindowTumbling</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.attribute">Attribute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.transform">Transform</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesType">DataAwsccIotsitewiseAssetModelAssetModelPropertiesType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.attribute"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference Attribute { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeAttributeOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.metric"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference Metric { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeMetricOutputReference</a>

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.transform"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference Transform { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference</a>

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesType InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesType">DataAwsccIotsitewiseAssetModelAssetModelPropertiesType</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.variables"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransform</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.value"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariables</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId">HierarchyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId">HierarchyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId">HierarchyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId">PropertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId">PropertyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId">PropertyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath">PropertyPath</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HierarchyExternalId`<sup>Required</sup> <a name="HierarchyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyExternalId"></a>

```csharp
public string HierarchyExternalId { get; }
```

- *Type:* string

---

##### `HierarchyId`<sup>Required</sup> <a name="HierarchyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyId"></a>

```csharp
public string HierarchyId { get; }
```

- *Type:* string

---

##### `HierarchyLogicalId`<sup>Required</sup> <a name="HierarchyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.hierarchyLogicalId"></a>

```csharp
public string HierarchyLogicalId { get; }
```

- *Type:* string

---

##### `PropertyExternalId`<sup>Required</sup> <a name="PropertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyExternalId"></a>

```csharp
public string PropertyExternalId { get; }
```

- *Type:* string

---

##### `PropertyId`<sup>Required</sup> <a name="PropertyId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyId"></a>

```csharp
public string PropertyId { get; }
```

- *Type:* string

---

##### `PropertyLogicalId`<sup>Required</sup> <a name="PropertyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyLogicalId"></a>

```csharp
public string PropertyLogicalId { get; }
```

- *Type:* string

---

##### `PropertyPath`<sup>Required</sup> <a name="PropertyPath" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.propertyPath"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList PropertyPath { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValue</a>

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference <a name="DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPathOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath">DataAwsccIotsitewiseAssetModelAssetModelPropertiesTypeTransformVariablesValuePropertyPath</a>

---


### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.interfaceAssetModelId">InterfaceAssetModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.propertyMappings">PropertyMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InterfaceAssetModelId`<sup>Required</sup> <a name="InterfaceAssetModelId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.interfaceAssetModelId"></a>

```csharp
public string InterfaceAssetModelId { get; }
```

- *Type:* string

---

##### `PropertyMappings`<sup>Required</sup> <a name="PropertyMappings" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.propertyMappings"></a>

```csharp
public DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList PropertyMappings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationships</a>

---


### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference <a name="DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyExternalId">AssetModelPropertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyLogicalId">AssetModelPropertyLogicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.interfaceAssetModelPropertyExternalId">InterfaceAssetModelPropertyExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssetModelPropertyExternalId`<sup>Required</sup> <a name="AssetModelPropertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyExternalId"></a>

```csharp
public string AssetModelPropertyExternalId { get; }
```

- *Type:* string

---

##### `AssetModelPropertyLogicalId`<sup>Required</sup> <a name="AssetModelPropertyLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.assetModelPropertyLogicalId"></a>

```csharp
public string AssetModelPropertyLogicalId { get; }
```

- *Type:* string

---

##### `InterfaceAssetModelPropertyExternalId`<sup>Required</sup> <a name="InterfaceAssetModelPropertyExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.interfaceAssetModelPropertyExternalId"></a>

```csharp
public string InterfaceAssetModelPropertyExternalId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings">DataAwsccIotsitewiseAssetModelEnforcedAssetModelInterfaceRelationshipsPropertyMappings</a>

---


### DataAwsccIotsitewiseAssetModelTagsList <a name="DataAwsccIotsitewiseAssetModelTagsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.get"></a>

```csharp
private DataAwsccIotsitewiseAssetModelTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotsitewiseAssetModelTagsOutputReference <a name="DataAwsccIotsitewiseAssetModelTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotsitewiseAssetModelTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTags">DataAwsccIotsitewiseAssetModelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotsitewiseAssetModelTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAssetModel.DataAwsccIotsitewiseAssetModelTags">DataAwsccIotsitewiseAssetModelTags</a>

---



