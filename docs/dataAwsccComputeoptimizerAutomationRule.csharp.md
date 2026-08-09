# `dataAwsccComputeoptimizerAutomationRule` Submodule <a name="`dataAwsccComputeoptimizerAutomationRule` Submodule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComputeoptimizerAutomationRule <a name="DataAwsccComputeoptimizerAutomationRule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRule(Construct Scope, string Id, DataAwsccComputeoptimizerAutomationRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig">DataAwsccComputeoptimizerAutomationRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig">DataAwsccComputeoptimizerAutomationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComputeoptimizerAutomationRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComputeoptimizerAutomationRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComputeoptimizerAutomationRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccComputeoptimizerAutomationRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccComputeoptimizerAutomationRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccComputeoptimizerAutomationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/computeoptimizer_automation_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComputeoptimizerAutomationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference">DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.organizationConfiguration">OrganizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.recommendedActionTypes">RecommendedActionTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleRevision">RuleRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleType">RuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference">DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList">DataAwsccComputeoptimizerAutomationRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.criteria"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference">DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lastUpdatedTimestamp"></a>

```csharp
public string LastUpdatedTimestamp { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrganizationConfiguration`<sup>Required</sup> <a name="OrganizationConfiguration" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.organizationConfiguration"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference OrganizationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `RecommendedActionTypes`<sup>Required</sup> <a name="RecommendedActionTypes" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.recommendedActionTypes"></a>

```csharp
public string[] RecommendedActionTypes { get; }
```

- *Type:* string[]

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `RuleRevision`<sup>Required</sup> <a name="RuleRevision" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleRevision"></a>

```csharp
public string RuleRevision { get; }
```

- *Type:* string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleType"></a>

```csharp
public string RuleType { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.schedule"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference">DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tags"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList">DataAwsccComputeoptimizerAutomationRuleTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComputeoptimizerAutomationRuleConfig <a name="DataAwsccComputeoptimizerAutomationRuleConfig" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/computeoptimizer_automation_rule#id DataAwsccComputeoptimizerAutomationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComputeoptimizerAutomationRuleCriteria <a name="DataAwsccComputeoptimizerAutomationRuleCriteria" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteria {

};
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib {

};
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType {

};
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings {

};
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays {

};
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaRegion <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRegion" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaRegion {

};
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn {

};
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag {

};
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded {

};
```


### DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration <a name="DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration {

};
```


### DataAwsccComputeoptimizerAutomationRuleSchedule <a name="DataAwsccComputeoptimizerAutomationRuleSchedule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleSchedule {

};
```


### DataAwsccComputeoptimizerAutomationRuleTags <a name="DataAwsccComputeoptimizerAutomationRuleTags" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get"></a>

```csharp
private DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get"></a>

```csharp
private DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get"></a>

```csharp
private DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get"></a>

```csharp
private DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values">Values</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values"></a>

```csharp
public double[] Values { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib">EbsVolumeSizeInGib</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings">EstimatedMonthlySavings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays">LookBackPeriodInDays</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.region">Region</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList">DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn">ResourceArn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag">ResourceTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded">RestartNeeded</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria">DataAwsccComputeoptimizerAutomationRuleCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsVolumeSizeInGib`<sup>Required</sup> <a name="EbsVolumeSizeInGib" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList EbsVolumeSizeInGib { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a>

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList EbsVolumeType { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a>

---

##### `EstimatedMonthlySavings`<sup>Required</sup> <a name="EstimatedMonthlySavings" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList EstimatedMonthlySavings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a>

---

##### `LookBackPeriodInDays`<sup>Required</sup> <a name="LookBackPeriodInDays" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList LookBackPeriodInDays { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.region"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList Region { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList">DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList ResourceArn { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList</a>

---

##### `ResourceTag`<sup>Required</sup> <a name="ResourceTag" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList ResourceTag { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList</a>

---

##### `RestartNeeded`<sup>Required</sup> <a name="RestartNeeded" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList RestartNeeded { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria">DataAwsccComputeoptimizerAutomationRuleCriteria</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.get"></a>

```csharp
private DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion">DataAwsccComputeoptimizerAutomationRuleCriteriaRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaRegion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion">DataAwsccComputeoptimizerAutomationRuleCriteriaRegion</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.get"></a>

```csharp
private DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.get"></a>

```csharp
private DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.get"></a>

```csharp
private DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>

---


### DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder">RuleApplyOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration">DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `RuleApplyOrder`<sup>Required</sup> <a name="RuleApplyOrder" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder"></a>

```csharp
public string RuleApplyOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration">DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---


### DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes">ExecutionWindowInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule">DataAwsccComputeoptimizerAutomationRuleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionWindowInMinutes`<sup>Required</sup> <a name="ExecutionWindowInMinutes" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes"></a>

```csharp
public double ExecutionWindowInMinutes { get; }
```

- *Type:* double

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone"></a>

```csharp
public string ScheduleExpressionTimezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule">DataAwsccComputeoptimizerAutomationRuleSchedule</a>

---


### DataAwsccComputeoptimizerAutomationRuleTagsList <a name="DataAwsccComputeoptimizerAutomationRuleTagsList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.get"></a>

```csharp
private DataAwsccComputeoptimizerAutomationRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccComputeoptimizerAutomationRuleTagsOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccComputeoptimizerAutomationRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags">DataAwsccComputeoptimizerAutomationRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccComputeoptimizerAutomationRuleTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags">DataAwsccComputeoptimizerAutomationRuleTags</a>

---



