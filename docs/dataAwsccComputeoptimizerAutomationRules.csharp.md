# `dataAwsccComputeoptimizerAutomationRules` Submodule <a name="`dataAwsccComputeoptimizerAutomationRules` Submodule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComputeoptimizerAutomationRules <a name="DataAwsccComputeoptimizerAutomationRules" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/computeoptimizer_automation_rules awscc_computeoptimizer_automation_rules}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRules(Construct Scope, string Id, DataAwsccComputeoptimizerAutomationRulesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig">DataAwsccComputeoptimizerAutomationRulesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig">DataAwsccComputeoptimizerAutomationRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComputeoptimizerAutomationRules resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComputeoptimizerAutomationRules.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComputeoptimizerAutomationRules.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComputeoptimizerAutomationRules.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComputeoptimizerAutomationRules.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccComputeoptimizerAutomationRules resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccComputeoptimizerAutomationRules to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccComputeoptimizerAutomationRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/computeoptimizer_automation_rules#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComputeoptimizerAutomationRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRules.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComputeoptimizerAutomationRulesConfig <a name="DataAwsccComputeoptimizerAutomationRulesConfig" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRulesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRules.DataAwsccComputeoptimizerAutomationRulesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---



