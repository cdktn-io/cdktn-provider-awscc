# `dataAwsccXraySamplingRule` Submodule <a name="`dataAwsccXraySamplingRule` Submodule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccXraySamplingRule <a name="DataAwsccXraySamplingRule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/xray_sampling_rule awscc_xray_sampling_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRule(Construct Scope, string Id, DataAwsccXraySamplingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig">DataAwsccXraySamplingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig">DataAwsccXraySamplingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccXraySamplingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccXraySamplingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccXraySamplingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccXraySamplingRule.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccXraySamplingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccXraySamplingRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccXraySamplingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccXraySamplingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/xray_sampling_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccXraySamplingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRule">SamplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference">DataAwsccXraySamplingRuleSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRuleRecord">SamplingRuleRecord</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRuleUpdate">SamplingRuleUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference">DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList">DataAwsccXraySamplingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `SamplingRule`<sup>Required</sup> <a name="SamplingRule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRule"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleOutputReference SamplingRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference">DataAwsccXraySamplingRuleSamplingRuleOutputReference</a>

---

##### `SamplingRuleRecord`<sup>Required</sup> <a name="SamplingRuleRecord" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRuleRecord"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference SamplingRuleRecord { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference</a>

---

##### `SamplingRuleUpdate`<sup>Required</sup> <a name="SamplingRuleUpdate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.samplingRuleUpdate"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference SamplingRuleUpdate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference">DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.tags"></a>

```csharp
public DataAwsccXraySamplingRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList">DataAwsccXraySamplingRuleTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccXraySamplingRuleConfig <a name="DataAwsccXraySamplingRuleConfig" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/xray_sampling_rule#id DataAwsccXraySamplingRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccXraySamplingRuleSamplingRule <a name="DataAwsccXraySamplingRuleSamplingRule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRule {

};
```


### DataAwsccXraySamplingRuleSamplingRuleRecord <a name="DataAwsccXraySamplingRuleSamplingRuleRecord" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecord.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleRecord {

};
```


### DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule <a name="DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule {

};
```


### DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost <a name="DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost {

};
```


### DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost <a name="DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost {

};
```


### DataAwsccXraySamplingRuleSamplingRuleUpdate <a name="DataAwsccXraySamplingRuleSamplingRuleUpdate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleUpdate {

};
```


### DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost <a name="DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost {

};
```


### DataAwsccXraySamplingRuleTags <a name="DataAwsccXraySamplingRuleTags" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccXraySamplingRuleSamplingRuleOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.attributes">Attributes</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.fixedRate">FixedRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.reservoirSize">ReservoirSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost">SamplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.urlPath">UrlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRule">DataAwsccXraySamplingRuleSamplingRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.attributes"></a>

```csharp
public StringMap Attributes { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `FixedRate`<sup>Required</sup> <a name="FixedRate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.fixedRate"></a>

```csharp
public double FixedRate { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ReservoirSize`<sup>Required</sup> <a name="ReservoirSize" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.reservoirSize"></a>

```csharp
public double ReservoirSize { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `SamplingRateBoost`<sup>Required</sup> <a name="SamplingRateBoost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.samplingRateBoost"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference SamplingRateBoost { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.urlPath"></a>

```csharp
public string UrlPath { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRule">DataAwsccXraySamplingRuleSamplingRule</a>

---


### DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule">SamplingRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecord">DataAwsccXraySamplingRuleSamplingRuleRecord</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `SamplingRule`<sup>Required</sup> <a name="SamplingRule" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.samplingRule"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference SamplingRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordOutputReference.property.internalValue"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleRecord InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecord">DataAwsccXraySamplingRuleSamplingRuleRecord</a>

---


### DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes">Attributes</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate">FixedRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize">ReservoirSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost">SamplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath">UrlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.attributes"></a>

```csharp
public StringMap Attributes { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `FixedRate`<sup>Required</sup> <a name="FixedRate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.fixedRate"></a>

```csharp
public double FixedRate { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ReservoirSize`<sup>Required</sup> <a name="ReservoirSize" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.reservoirSize"></a>

```csharp
public double ReservoirSize { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `SamplingRateBoost`<sup>Required</sup> <a name="SamplingRateBoost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.samplingRateBoost"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference SamplingRateBoost { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference</a>

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.urlPath"></a>

```csharp
public string UrlPath { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRule</a>

---


### DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">CooldownWindowMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate">MaxRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CooldownWindowMinutes`<sup>Required</sup> <a name="CooldownWindowMinutes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```csharp
public double CooldownWindowMinutes { get; }
```

- *Type:* double

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```csharp
public double MaxRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleRecordSamplingRuleSamplingRateBoost</a>

---


### DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes">CooldownWindowMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate">MaxRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CooldownWindowMinutes`<sup>Required</sup> <a name="CooldownWindowMinutes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```csharp
public double CooldownWindowMinutes { get; }
```

- *Type:* double

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.maxRate"></a>

```csharp
public double MaxRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoostOutputReference.property.internalValue"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleSamplingRateBoost</a>

---


### DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes">Attributes</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate">FixedRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize">ReservoirSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost">SamplingRateBoost</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath">UrlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdate">DataAwsccXraySamplingRuleSamplingRuleUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.attributes"></a>

```csharp
public StringMap Attributes { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `FixedRate`<sup>Required</sup> <a name="FixedRate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.fixedRate"></a>

```csharp
public double FixedRate { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ReservoirSize`<sup>Required</sup> <a name="ReservoirSize" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.reservoirSize"></a>

```csharp
public double ReservoirSize { get; }
```

- *Type:* double

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `SamplingRateBoost`<sup>Required</sup> <a name="SamplingRateBoost" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.samplingRateBoost"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference SamplingRateBoost { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference">DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference</a>

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.urlPath"></a>

```csharp
public string UrlPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleUpdate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdate">DataAwsccXraySamplingRuleSamplingRuleUpdate</a>

---


### DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference <a name="DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes">CooldownWindowMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate">MaxRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CooldownWindowMinutes`<sup>Required</sup> <a name="CooldownWindowMinutes" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.cooldownWindowMinutes"></a>

```csharp
public double CooldownWindowMinutes { get; }
```

- *Type:* double

---

##### `MaxRate`<sup>Required</sup> <a name="MaxRate" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.maxRate"></a>

```csharp
public double MaxRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoostOutputReference.property.internalValue"></a>

```csharp
public DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost">DataAwsccXraySamplingRuleSamplingRuleUpdateSamplingRateBoost</a>

---


### DataAwsccXraySamplingRuleTagsList <a name="DataAwsccXraySamplingRuleTagsList" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.get"></a>

```csharp
private DataAwsccXraySamplingRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccXraySamplingRuleTagsOutputReference <a name="DataAwsccXraySamplingRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccXraySamplingRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTags">DataAwsccXraySamplingRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccXraySamplingRuleTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccXraySamplingRule.DataAwsccXraySamplingRuleTags">DataAwsccXraySamplingRuleTags</a>

---



