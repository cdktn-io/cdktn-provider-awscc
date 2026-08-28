# `dataAwsccBcmpricingcalculatorBillScenario` Submodule <a name="`dataAwsccBcmpricingcalculatorBillScenario` Submodule" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBcmpricingcalculatorBillScenario <a name="DataAwsccBcmpricingcalculatorBillScenario" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bcmpricingcalculator_bill_scenario awscc_bcmpricingcalculator_bill_scenario}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillScenario(Construct Scope, string Id, DataAwsccBcmpricingcalculatorBillScenarioConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig">DataAwsccBcmpricingcalculatorBillScenarioConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig">DataAwsccBcmpricingcalculatorBillScenarioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBcmpricingcalculatorBillScenario resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorBillScenario.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorBillScenario.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorBillScenario.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBcmpricingcalculatorBillScenario.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBcmpricingcalculatorBillScenario resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBcmpricingcalculatorBillScenario to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBcmpricingcalculatorBillScenario that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bcmpricingcalculator_bill_scenario#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBcmpricingcalculatorBillScenario to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.billInterval">BillInterval</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference">DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.billScenarioId">BillScenarioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArn">CostCategoryGroupSharingPreferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.failureMessage">FailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.groupSharingPreference">GroupSharingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList">DataAwsccBcmpricingcalculatorBillScenarioTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BillInterval`<sup>Required</sup> <a name="BillInterval" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.billInterval"></a>

```csharp
public DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference BillInterval { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference">DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference</a>

---

##### `BillScenarioId`<sup>Required</sup> <a name="BillScenarioId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.billScenarioId"></a>

```csharp
public string BillScenarioId { get; }
```

- *Type:* string

---

##### `CostCategoryGroupSharingPreferenceArn`<sup>Required</sup> <a name="CostCategoryGroupSharingPreferenceArn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.costCategoryGroupSharingPreferenceArn"></a>

```csharp
public string CostCategoryGroupSharingPreferenceArn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.failureMessage"></a>

```csharp
public string FailureMessage { get; }
```

- *Type:* string

---

##### `GroupSharingPreference`<sup>Required</sup> <a name="GroupSharingPreference" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.groupSharingPreference"></a>

```csharp
public string GroupSharingPreference { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.tags"></a>

```csharp
public DataAwsccBcmpricingcalculatorBillScenarioTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList">DataAwsccBcmpricingcalculatorBillScenarioTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenario.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBcmpricingcalculatorBillScenarioBillInterval <a name="DataAwsccBcmpricingcalculatorBillScenarioBillInterval" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillInterval.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillScenarioBillInterval {

};
```


### DataAwsccBcmpricingcalculatorBillScenarioConfig <a name="DataAwsccBcmpricingcalculatorBillScenarioConfig" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillScenarioConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bcmpricingcalculator_bill_scenario#id DataAwsccBcmpricingcalculatorBillScenario#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBcmpricingcalculatorBillScenarioTags <a name="DataAwsccBcmpricingcalculatorBillScenarioTags" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillScenarioTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference <a name="DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillInterval">DataAwsccBcmpricingcalculatorBillScenarioBillInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillIntervalOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBcmpricingcalculatorBillScenarioBillInterval InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioBillInterval">DataAwsccBcmpricingcalculatorBillScenarioBillInterval</a>

---


### DataAwsccBcmpricingcalculatorBillScenarioTagsList <a name="DataAwsccBcmpricingcalculatorBillScenarioTagsList" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillScenarioTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.get"></a>

```csharp
private DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference <a name="DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTags">DataAwsccBcmpricingcalculatorBillScenarioTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBcmpricingcalculatorBillScenarioTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorBillScenario.DataAwsccBcmpricingcalculatorBillScenarioTags">DataAwsccBcmpricingcalculatorBillScenarioTags</a>

---



