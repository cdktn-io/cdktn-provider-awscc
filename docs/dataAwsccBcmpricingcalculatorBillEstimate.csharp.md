# `dataAwsccBcmpricingcalculatorBillEstimate` Submodule <a name="`dataAwsccBcmpricingcalculatorBillEstimate` Submodule" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBcmpricingcalculatorBillEstimate <a name="DataAwsccBcmpricingcalculatorBillEstimate" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bcmpricingcalculator_bill_estimate awscc_bcmpricingcalculator_bill_estimate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillEstimate(Construct Scope, string Id, DataAwsccBcmpricingcalculatorBillEstimateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig">DataAwsccBcmpricingcalculatorBillEstimateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig">DataAwsccBcmpricingcalculatorBillEstimateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBcmpricingcalculatorBillEstimate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorBillEstimate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorBillEstimate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorBillEstimate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorBillEstimate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBcmpricingcalculatorBillEstimate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBcmpricingcalculatorBillEstimate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBcmpricingcalculatorBillEstimate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bcmpricingcalculator_bill_estimate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBcmpricingcalculatorBillEstimate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billEstimateId">BillEstimateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billInterval">BillInterval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference">DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billScenarioId">BillScenarioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceArn">CostCategoryGroupSharingPreferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceEffectiveDate">CostCategoryGroupSharingPreferenceEffectiveDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.groupSharingPreference">GroupSharingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList">DataAwsccBcmpricingcalculatorBillEstimateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BillEstimateId`<sup>Required</sup> <a name="BillEstimateId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billEstimateId"></a>

```csharp
public string BillEstimateId { get; }
```

- *Type:* string

---

##### `BillInterval`<sup>Required</sup> <a name="BillInterval" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billInterval"></a>

```csharp
public DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference BillInterval { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference">DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference</a>

---

##### `BillScenarioId`<sup>Required</sup> <a name="BillScenarioId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.billScenarioId"></a>

```csharp
public string BillScenarioId { get; }
```

- *Type:* string

---

##### `CostCategoryGroupSharingPreferenceArn`<sup>Required</sup> <a name="CostCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceArn"></a>

```csharp
public string CostCategoryGroupSharingPreferenceArn { get; }
```

- *Type:* string

---

##### `CostCategoryGroupSharingPreferenceEffectiveDate`<sup>Required</sup> <a name="CostCategoryGroupSharingPreferenceEffectiveDate" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.costCategoryGroupSharingPreferenceEffectiveDate"></a>

```csharp
public string CostCategoryGroupSharingPreferenceEffectiveDate { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `GroupSharingPreference`<sup>Required</sup> <a name="GroupSharingPreference" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.groupSharingPreference"></a>

```csharp
public string GroupSharingPreference { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.tags"></a>

```csharp
public DataAwsccBcmpricingcalculatorBillEstimateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList">DataAwsccBcmpricingcalculatorBillEstimateTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBcmpricingcalculatorBillEstimateBillInterval <a name="DataAwsccBcmpricingcalculatorBillEstimateBillInterval" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillInterval.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillEstimateBillInterval {

};
```


### DataAwsccBcmpricingcalculatorBillEstimateConfig <a name="DataAwsccBcmpricingcalculatorBillEstimateConfig" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillEstimateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/bcmpricingcalculator_bill_estimate#id DataAwsccBcmpricingcalculatorBillEstimate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBcmpricingcalculatorBillEstimateTags <a name="DataAwsccBcmpricingcalculatorBillEstimateTags" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillEstimateTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference <a name="DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillInterval">DataAwsccBcmpricingcalculatorBillEstimateBillInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillIntervalOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBcmpricingcalculatorBillEstimateBillInterval InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateBillInterval">DataAwsccBcmpricingcalculatorBillEstimateBillInterval</a>

---


### DataAwsccBcmpricingcalculatorBillEstimateTagsList <a name="DataAwsccBcmpricingcalculatorBillEstimateTagsList" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillEstimateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.get"></a>

```csharp
private DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference <a name="DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTags">DataAwsccBcmpricingcalculatorBillEstimateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBcmpricingcalculatorBillEstimateTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillEstimate.DataAwsccBcmpricingcalculatorBillEstimateTags">DataAwsccBcmpricingcalculatorBillEstimateTags</a>

---



