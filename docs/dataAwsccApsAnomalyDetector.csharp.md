# `dataAwsccApsAnomalyDetector` Submodule <a name="`dataAwsccApsAnomalyDetector` Submodule" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApsAnomalyDetector <a name="DataAwsccApsAnomalyDetector" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/aps_anomaly_detector awscc_aps_anomaly_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetector(Construct Scope, string Id, DataAwsccApsAnomalyDetectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig">DataAwsccApsAnomalyDetectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig">DataAwsccApsAnomalyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApsAnomalyDetector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApsAnomalyDetector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApsAnomalyDetector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApsAnomalyDetector.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccApsAnomalyDetector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccApsAnomalyDetector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApsAnomalyDetector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApsAnomalyDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/aps_anomaly_detector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApsAnomalyDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference">DataAwsccApsAnomalyDetectorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.evaluationIntervalInSeconds">EvaluationIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.labels">Labels</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList">DataAwsccApsAnomalyDetectorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.missingDataAction">MissingDataAction</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference">DataAwsccApsAnomalyDetectorMissingDataActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList">DataAwsccApsAnomalyDetectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.workspace">Workspace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.configuration"></a>

```csharp
public DataAwsccApsAnomalyDetectorConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference">DataAwsccApsAnomalyDetectorConfigurationOutputReference</a>

---

##### `EvaluationIntervalInSeconds`<sup>Required</sup> <a name="EvaluationIntervalInSeconds" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.evaluationIntervalInSeconds"></a>

```csharp
public double EvaluationIntervalInSeconds { get; }
```

- *Type:* double

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.labels"></a>

```csharp
public DataAwsccApsAnomalyDetectorLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList">DataAwsccApsAnomalyDetectorLabelsList</a>

---

##### `MissingDataAction`<sup>Required</sup> <a name="MissingDataAction" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.missingDataAction"></a>

```csharp
public DataAwsccApsAnomalyDetectorMissingDataActionOutputReference MissingDataAction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference">DataAwsccApsAnomalyDetectorMissingDataActionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.tags"></a>

```csharp
public DataAwsccApsAnomalyDetectorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList">DataAwsccApsAnomalyDetectorTagsList</a>

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.workspace"></a>

```csharp
public string Workspace { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApsAnomalyDetectorConfig <a name="DataAwsccApsAnomalyDetectorConfig" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/aps_anomaly_detector#id DataAwsccApsAnomalyDetector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApsAnomalyDetectorConfiguration <a name="DataAwsccApsAnomalyDetectorConfiguration" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorConfiguration {

};
```


### DataAwsccApsAnomalyDetectorConfigurationRandomCutForest <a name="DataAwsccApsAnomalyDetectorConfigurationRandomCutForest" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorConfigurationRandomCutForest {

};
```


### DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove <a name="DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove {

};
```


### DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow <a name="DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow {

};
```


### DataAwsccApsAnomalyDetectorLabels <a name="DataAwsccApsAnomalyDetectorLabels" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorLabels {

};
```


### DataAwsccApsAnomalyDetectorMissingDataAction <a name="DataAwsccApsAnomalyDetectorMissingDataAction" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorMissingDataAction {

};
```


### DataAwsccApsAnomalyDetectorTags <a name="DataAwsccApsAnomalyDetectorTags" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApsAnomalyDetectorConfigurationOutputReference <a name="DataAwsccApsAnomalyDetectorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.property.randomCutForest">RandomCutForest</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference">DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfiguration">DataAwsccApsAnomalyDetectorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RandomCutForest`<sup>Required</sup> <a name="RandomCutForest" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.property.randomCutForest"></a>

```csharp
public DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference RandomCutForest { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference">DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApsAnomalyDetectorConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfiguration">DataAwsccApsAnomalyDetectorConfiguration</a>

---


### DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference <a name="DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio">Ratio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `Ratio`<sup>Required</sup> <a name="Ratio" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.ratio"></a>

```csharp
public double Ratio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove">DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAbove</a>

---


### DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference <a name="DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount">Amount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio">Ratio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.amount"></a>

```csharp
public double Amount { get; }
```

- *Type:* double

---

##### `Ratio`<sup>Required</sup> <a name="Ratio" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.ratio"></a>

```csharp
public double Ratio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow">DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelow</a>

---


### DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference <a name="DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove">IgnoreNearExpectedFromAbove</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference">DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow">IgnoreNearExpectedFromBelow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference">DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize">SampleSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize">ShingleSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForest">DataAwsccApsAnomalyDetectorConfigurationRandomCutForest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IgnoreNearExpectedFromAbove`<sup>Required</sup> <a name="IgnoreNearExpectedFromAbove" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromAbove"></a>

```csharp
public DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference IgnoreNearExpectedFromAbove { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference">DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromAboveOutputReference</a>

---

##### `IgnoreNearExpectedFromBelow`<sup>Required</sup> <a name="IgnoreNearExpectedFromBelow" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.ignoreNearExpectedFromBelow"></a>

```csharp
public DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference IgnoreNearExpectedFromBelow { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference">DataAwsccApsAnomalyDetectorConfigurationRandomCutForestIgnoreNearExpectedFromBelowOutputReference</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `SampleSize`<sup>Required</sup> <a name="SampleSize" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.sampleSize"></a>

```csharp
public double SampleSize { get; }
```

- *Type:* double

---

##### `ShingleSize`<sup>Required</sup> <a name="ShingleSize" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.shingleSize"></a>

```csharp
public double ShingleSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForestOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApsAnomalyDetectorConfigurationRandomCutForest InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorConfigurationRandomCutForest">DataAwsccApsAnomalyDetectorConfigurationRandomCutForest</a>

---


### DataAwsccApsAnomalyDetectorLabelsList <a name="DataAwsccApsAnomalyDetectorLabelsList" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.get"></a>

```csharp
private DataAwsccApsAnomalyDetectorLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApsAnomalyDetectorLabelsOutputReference <a name="DataAwsccApsAnomalyDetectorLabelsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabels">DataAwsccApsAnomalyDetectorLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabelsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApsAnomalyDetectorLabels InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorLabels">DataAwsccApsAnomalyDetectorLabels</a>

---


### DataAwsccApsAnomalyDetectorMissingDataActionOutputReference <a name="DataAwsccApsAnomalyDetectorMissingDataActionOutputReference" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorMissingDataActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly">MarkAsAnomaly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.property.skip">Skip</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataAction">DataAwsccApsAnomalyDetectorMissingDataAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MarkAsAnomaly`<sup>Required</sup> <a name="MarkAsAnomaly" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.property.markAsAnomaly"></a>

```csharp
public IResolvable MarkAsAnomaly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Skip`<sup>Required</sup> <a name="Skip" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.property.skip"></a>

```csharp
public IResolvable Skip { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataActionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApsAnomalyDetectorMissingDataAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorMissingDataAction">DataAwsccApsAnomalyDetectorMissingDataAction</a>

---


### DataAwsccApsAnomalyDetectorTagsList <a name="DataAwsccApsAnomalyDetectorTagsList" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.get"></a>

```csharp
private DataAwsccApsAnomalyDetectorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccApsAnomalyDetectorTagsOutputReference <a name="DataAwsccApsAnomalyDetectorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccApsAnomalyDetectorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTags">DataAwsccApsAnomalyDetectorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccApsAnomalyDetectorTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApsAnomalyDetector.DataAwsccApsAnomalyDetectorTags">DataAwsccApsAnomalyDetectorTags</a>

---



