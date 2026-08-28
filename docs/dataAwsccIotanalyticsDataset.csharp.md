# `dataAwsccIotanalyticsDataset` Submodule <a name="`dataAwsccIotanalyticsDataset` Submodule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotanalyticsDataset <a name="DataAwsccIotanalyticsDataset" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotanalytics_dataset awscc_iotanalytics_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDataset(Construct Scope, string Id, DataAwsccIotanalyticsDatasetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig">DataAwsccIotanalyticsDatasetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig">DataAwsccIotanalyticsDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotanalyticsDataset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotanalyticsDataset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotanalyticsDataset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotanalyticsDataset.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotanalyticsDataset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccIotanalyticsDataset resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotanalyticsDataset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotanalyticsDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotanalytics_dataset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotanalyticsDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList">DataAwsccIotanalyticsDatasetActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.contentDeliveryRules">ContentDeliveryRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList">DataAwsccIotanalyticsDatasetContentDeliveryRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.datasetName">DatasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.lateDataRules">LateDataRules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList">DataAwsccIotanalyticsDatasetLateDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.retentionPeriod">RetentionPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference">DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList">DataAwsccIotanalyticsDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.triggers">Triggers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList">DataAwsccIotanalyticsDatasetTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.versioningConfiguration">VersioningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference">DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.actions"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsList Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList">DataAwsccIotanalyticsDatasetActionsList</a>

---

##### `ContentDeliveryRules`<sup>Required</sup> <a name="ContentDeliveryRules" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.contentDeliveryRules"></a>

```csharp
public DataAwsccIotanalyticsDatasetContentDeliveryRulesList ContentDeliveryRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList">DataAwsccIotanalyticsDatasetContentDeliveryRulesList</a>

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.datasetName"></a>

```csharp
public string DatasetName { get; }
```

- *Type:* string

---

##### `LateDataRules`<sup>Required</sup> <a name="LateDataRules" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.lateDataRules"></a>

```csharp
public DataAwsccIotanalyticsDatasetLateDataRulesList LateDataRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList">DataAwsccIotanalyticsDatasetLateDataRulesList</a>

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.retentionPeriod"></a>

```csharp
public DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference RetentionPeriod { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference">DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.tags"></a>

```csharp
public DataAwsccIotanalyticsDatasetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList">DataAwsccIotanalyticsDatasetTagsList</a>

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.triggers"></a>

```csharp
public DataAwsccIotanalyticsDatasetTriggersList Triggers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList">DataAwsccIotanalyticsDatasetTriggersList</a>

---

##### `VersioningConfiguration`<sup>Required</sup> <a name="VersioningConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.versioningConfiguration"></a>

```csharp
public DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference VersioningConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference">DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDataset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotanalyticsDatasetActions <a name="DataAwsccIotanalyticsDatasetActions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActions {

};
```


### DataAwsccIotanalyticsDatasetActionsContainerAction <a name="DataAwsccIotanalyticsDatasetActionsContainerAction" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsContainerAction {

};
```


### DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration <a name="DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration {

};
```


### DataAwsccIotanalyticsDatasetActionsContainerActionVariables <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariables" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsContainerActionVariables {

};
```


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue {

};
```


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue {

};
```


### DataAwsccIotanalyticsDatasetActionsQueryAction <a name="DataAwsccIotanalyticsDatasetActionsQueryAction" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsQueryAction {

};
```


### DataAwsccIotanalyticsDatasetActionsQueryActionFilters <a name="DataAwsccIotanalyticsDatasetActionsQueryActionFilters" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsQueryActionFilters {

};
```


### DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime <a name="DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime {

};
```


### DataAwsccIotanalyticsDatasetConfig <a name="DataAwsccIotanalyticsDatasetConfig" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotanalytics_dataset#id DataAwsccIotanalyticsDataset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotanalyticsDatasetContentDeliveryRules <a name="DataAwsccIotanalyticsDatasetContentDeliveryRules" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetContentDeliveryRules {

};
```


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination {

};
```


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration {

};
```


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration {

};
```


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration {

};
```


### DataAwsccIotanalyticsDatasetLateDataRules <a name="DataAwsccIotanalyticsDatasetLateDataRules" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetLateDataRules {

};
```


### DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration <a name="DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration {

};
```


### DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration <a name="DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration {

};
```


### DataAwsccIotanalyticsDatasetRetentionPeriod <a name="DataAwsccIotanalyticsDatasetRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetRetentionPeriod {

};
```


### DataAwsccIotanalyticsDatasetTags <a name="DataAwsccIotanalyticsDatasetTags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetTags {

};
```


### DataAwsccIotanalyticsDatasetTriggers <a name="DataAwsccIotanalyticsDatasetTriggers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetTriggers {

};
```


### DataAwsccIotanalyticsDatasetTriggersSchedule <a name="DataAwsccIotanalyticsDatasetTriggersSchedule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetTriggersSchedule {

};
```


### DataAwsccIotanalyticsDatasetTriggersTriggeringDataset <a name="DataAwsccIotanalyticsDatasetTriggersTriggeringDataset" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDataset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDataset.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetTriggersTriggeringDataset {

};
```


### DataAwsccIotanalyticsDatasetVersioningConfiguration <a name="DataAwsccIotanalyticsDatasetVersioningConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetVersioningConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference <a name="DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfiguration">ResourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerAction">DataAwsccIotanalyticsDatasetActionsContainerAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `ResourceConfiguration`<sup>Required</sup> <a name="ResourceConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.resourceConfiguration"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference ResourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference</a>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.variables"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsContainerAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerAction">DataAwsccIotanalyticsDatasetActionsContainerAction</a>

---


### DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeType">ComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration">DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.computeType"></a>

```csharp
public string ComputeType { get; }
```

- *Type:* string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration">DataAwsccIotanalyticsDatasetActionsContainerActionResourceConfiguration</a>

---


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetName">DatasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.datasetName"></a>

```csharp
public string DatasetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValue</a>

---


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.get"></a>

```csharp
private DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValue</a>

---


### DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference <a name="DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValue">DatasetContentVersionValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValue">OutputFileUriValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableName">VariableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariables">DataAwsccIotanalyticsDatasetActionsContainerActionVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetContentVersionValue`<sup>Required</sup> <a name="DatasetContentVersionValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.datasetContentVersionValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference DatasetContentVersionValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesDatasetContentVersionValueOutputReference</a>

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `OutputFileUriValue`<sup>Required</sup> <a name="OutputFileUriValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.outputFileUriValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference OutputFileUriValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputFileUriValueOutputReference</a>

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.variableName"></a>

```csharp
public string VariableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsContainerActionVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionVariables">DataAwsccIotanalyticsDatasetActionsContainerActionVariables</a>

---


### DataAwsccIotanalyticsDatasetActionsList <a name="DataAwsccIotanalyticsDatasetActionsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.get"></a>

```csharp
private DataAwsccIotanalyticsDatasetActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotanalyticsDatasetActionsOutputReference <a name="DataAwsccIotanalyticsDatasetActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.containerAction">ContainerAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.queryAction">QueryAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference">DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActions">DataAwsccIotanalyticsDatasetActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `ContainerAction`<sup>Required</sup> <a name="ContainerAction" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.containerAction"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference ContainerAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference">DataAwsccIotanalyticsDatasetActionsContainerActionOutputReference</a>

---

##### `QueryAction`<sup>Required</sup> <a name="QueryAction" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.queryAction"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference QueryAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference">DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetActions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActions">DataAwsccIotanalyticsDatasetActions</a>

---


### DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference <a name="DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSeconds">OffsetSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpression">TimeExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OffsetSeconds`<sup>Required</sup> <a name="OffsetSeconds" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.offsetSeconds"></a>

```csharp
public double OffsetSeconds { get; }
```

- *Type:* double

---

##### `TimeExpression`<sup>Required</sup> <a name="TimeExpression" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.timeExpression"></a>

```csharp
public string TimeExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTime</a>

---


### DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList <a name="DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.get"></a>

```csharp
private DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference <a name="DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTime">DeltaTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFilters">DataAwsccIotanalyticsDatasetActionsQueryActionFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaTime`<sup>Required</sup> <a name="DeltaTime" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.deltaTime"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference DeltaTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersDeltaTimeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsQueryActionFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFilters">DataAwsccIotanalyticsDatasetActionsQueryActionFilters</a>

---


### DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference <a name="DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQuery">SqlQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryAction">DataAwsccIotanalyticsDatasetActionsQueryAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.filters"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList">DataAwsccIotanalyticsDatasetActionsQueryActionFiltersList</a>

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.sqlQuery"></a>

```csharp
public string SqlQuery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryActionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetActionsQueryAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetActionsQueryAction">DataAwsccIotanalyticsDatasetActionsQueryAction</a>

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputName">InputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputName`<sup>Required</sup> <a name="InputName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.inputName"></a>

```csharp
public string InputName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfiguration</a>

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfiguration">IotEventsDestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfiguration">S3DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IotEventsDestinationConfiguration`<sup>Required</sup> <a name="IotEventsDestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.iotEventsDestinationConfiguration"></a>

```csharp
public DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference IotEventsDestinationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationIotEventsDestinationConfigurationOutputReference</a>

---

##### `S3DestinationConfiguration`<sup>Required</sup> <a name="S3DestinationConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.s3DestinationConfiguration"></a>

```csharp
public DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference S3DestinationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestination</a>

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfiguration</a>

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfiguration">GlueConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `GlueConfiguration`<sup>Required</sup> <a name="GlueConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.glueConfiguration"></a>

```csharp
public DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference GlueConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationGlueConfigurationOutputReference</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationS3DestinationConfiguration</a>

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesList <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetContentDeliveryRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.get"></a>

```csharp
private DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference <a name="DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryName">EntryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRules">DataAwsccIotanalyticsDatasetContentDeliveryRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.destination"></a>

```csharp
public DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference">DataAwsccIotanalyticsDatasetContentDeliveryRulesDestinationOutputReference</a>

---

##### `EntryName`<sup>Required</sup> <a name="EntryName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.entryName"></a>

```csharp
public string EntryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetContentDeliveryRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetContentDeliveryRules">DataAwsccIotanalyticsDatasetContentDeliveryRules</a>

---


### DataAwsccIotanalyticsDatasetLateDataRulesList <a name="DataAwsccIotanalyticsDatasetLateDataRulesList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetLateDataRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.get"></a>

```csharp
private DataAwsccIotanalyticsDatasetLateDataRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotanalyticsDatasetLateDataRulesOutputReference <a name="DataAwsccIotanalyticsDatasetLateDataRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetLateDataRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfiguration">RuleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRules">DataAwsccIotanalyticsDatasetLateDataRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RuleConfiguration`<sup>Required</sup> <a name="RuleConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.ruleConfiguration"></a>

```csharp
public DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference RuleConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference</a>

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetLateDataRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRules">DataAwsccIotanalyticsDatasetLateDataRules</a>

---


### DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutes">TimeoutInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeoutInMinutes`<sup>Required</sup> <a name="TimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.timeoutInMinutes"></a>

```csharp
public double TimeoutInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfiguration</a>

---


### DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfiguration">DeltaTimeSessionWindowConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaTimeSessionWindowConfiguration`<sup>Required</sup> <a name="DeltaTimeSessionWindowConfiguration" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.deltaTimeSessionWindowConfiguration"></a>

```csharp
public DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference DeltaTimeSessionWindowConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationDeltaTimeSessionWindowConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration">DataAwsccIotanalyticsDatasetLateDataRulesRuleConfiguration</a>

---


### DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference <a name="DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDays">NumberOfDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.unlimited">Unlimited</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriod">DataAwsccIotanalyticsDatasetRetentionPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumberOfDays`<sup>Required</sup> <a name="NumberOfDays" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.numberOfDays"></a>

```csharp
public double NumberOfDays { get; }
```

- *Type:* double

---

##### `Unlimited`<sup>Required</sup> <a name="Unlimited" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.unlimited"></a>

```csharp
public IResolvable Unlimited { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriodOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetRetentionPeriod InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetRetentionPeriod">DataAwsccIotanalyticsDatasetRetentionPeriod</a>

---


### DataAwsccIotanalyticsDatasetTagsList <a name="DataAwsccIotanalyticsDatasetTagsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.get"></a>

```csharp
private DataAwsccIotanalyticsDatasetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotanalyticsDatasetTagsOutputReference <a name="DataAwsccIotanalyticsDatasetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTags">DataAwsccIotanalyticsDatasetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTags">DataAwsccIotanalyticsDatasetTags</a>

---


### DataAwsccIotanalyticsDatasetTriggersList <a name="DataAwsccIotanalyticsDatasetTriggersList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetTriggersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.get"></a>

```csharp
private DataAwsccIotanalyticsDatasetTriggersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotanalyticsDatasetTriggersOutputReference <a name="DataAwsccIotanalyticsDatasetTriggersOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetTriggersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference">DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.triggeringDataset">TriggeringDataset</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference">DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggers">DataAwsccIotanalyticsDatasetTriggers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.schedule"></a>

```csharp
public DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference">DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference</a>

---

##### `TriggeringDataset`<sup>Required</sup> <a name="TriggeringDataset" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.triggeringDataset"></a>

```csharp
public DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference TriggeringDataset { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference">DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetTriggers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggers">DataAwsccIotanalyticsDatasetTriggers</a>

---


### DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference <a name="DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersSchedule">DataAwsccIotanalyticsDatasetTriggersSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetTriggersSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersSchedule">DataAwsccIotanalyticsDatasetTriggersSchedule</a>

---


### DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference <a name="DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetName">DatasetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDataset">DataAwsccIotanalyticsDatasetTriggersTriggeringDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetName`<sup>Required</sup> <a name="DatasetName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.datasetName"></a>

```csharp
public string DatasetName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDatasetOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetTriggersTriggeringDataset InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetTriggersTriggeringDataset">DataAwsccIotanalyticsDatasetTriggersTriggeringDataset</a>

---


### DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference <a name="DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersions">MaxVersions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimited">Unlimited</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfiguration">DataAwsccIotanalyticsDatasetVersioningConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxVersions`<sup>Required</sup> <a name="MaxVersions" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.maxVersions"></a>

```csharp
public double MaxVersions { get; }
```

- *Type:* double

---

##### `Unlimited`<sup>Required</sup> <a name="Unlimited" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.unlimited"></a>

```csharp
public IResolvable Unlimited { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsDatasetVersioningConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsDataset.DataAwsccIotanalyticsDatasetVersioningConfiguration">DataAwsccIotanalyticsDatasetVersioningConfiguration</a>

---



