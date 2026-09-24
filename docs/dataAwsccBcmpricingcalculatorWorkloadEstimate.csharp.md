# `dataAwsccBcmpricingcalculatorWorkloadEstimate` Submodule <a name="`dataAwsccBcmpricingcalculatorWorkloadEstimate` Submodule" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBcmpricingcalculatorWorkloadEstimate <a name="DataAwsccBcmpricingcalculatorWorkloadEstimate" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcmpricingcalculator_workload_estimate awscc_bcmpricingcalculator_workload_estimate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorWorkloadEstimate(Construct Scope, string Id, DataAwsccBcmpricingcalculatorWorkloadEstimateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig">DataAwsccBcmpricingcalculatorWorkloadEstimateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig">DataAwsccBcmpricingcalculatorWorkloadEstimateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBcmpricingcalculatorWorkloadEstimate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorWorkloadEstimate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorWorkloadEstimate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorWorkloadEstimate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorWorkloadEstimate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBcmpricingcalculatorWorkloadEstimate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBcmpricingcalculatorWorkloadEstimate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBcmpricingcalculatorWorkloadEstimate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcmpricingcalculator_workload_estimate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBcmpricingcalculatorWorkloadEstimate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.costCurrency">CostCurrency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.failureMessage">FailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.rateTimestamp">RateTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.rateType">RateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList">DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.totalCost">TotalCost</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.workloadEstimateId">WorkloadEstimateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CostCurrency`<sup>Required</sup> <a name="CostCurrency" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.costCurrency"></a>

```csharp
public string CostCurrency { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.failureMessage"></a>

```csharp
public string FailureMessage { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RateTimestamp`<sup>Required</sup> <a name="RateTimestamp" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.rateTimestamp"></a>

```csharp
public string RateTimestamp { get; }
```

- *Type:* string

---

##### `RateType`<sup>Required</sup> <a name="RateType" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.rateType"></a>

```csharp
public string RateType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.tags"></a>

```csharp
public DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList">DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList</a>

---

##### `TotalCost`<sup>Required</sup> <a name="TotalCost" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.totalCost"></a>

```csharp
public double TotalCost { get; }
```

- *Type:* double

---

##### `WorkloadEstimateId`<sup>Required</sup> <a name="WorkloadEstimateId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.workloadEstimateId"></a>

```csharp
public string WorkloadEstimateId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBcmpricingcalculatorWorkloadEstimateConfig <a name="DataAwsccBcmpricingcalculatorWorkloadEstimateConfig" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorWorkloadEstimateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcmpricingcalculator_workload_estimate#id DataAwsccBcmpricingcalculatorWorkloadEstimate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBcmpricingcalculatorWorkloadEstimateTags <a name="DataAwsccBcmpricingcalculatorWorkloadEstimateTags" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorWorkloadEstimateTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList <a name="DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.get"></a>

```csharp
private DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference <a name="DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTags">DataAwsccBcmpricingcalculatorWorkloadEstimateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBcmpricingcalculatorWorkloadEstimateTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimate.DataAwsccBcmpricingcalculatorWorkloadEstimateTags">DataAwsccBcmpricingcalculatorWorkloadEstimateTags</a>

---



