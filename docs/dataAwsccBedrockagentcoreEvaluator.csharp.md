# `dataAwsccBedrockagentcoreEvaluator` Submodule <a name="`dataAwsccBedrockagentcoreEvaluator` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreEvaluator <a name="DataAwsccBedrockagentcoreEvaluator" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_evaluator awscc_bedrockagentcore_evaluator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluator(Construct Scope, string Id, DataAwsccBedrockagentcoreEvaluatorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig">DataAwsccBedrockagentcoreEvaluatorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig">DataAwsccBedrockagentcoreEvaluatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreEvaluator resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreEvaluator.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreEvaluator.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreEvaluator.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockagentcoreEvaluator.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreEvaluator resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcoreEvaluator to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcoreEvaluator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_evaluator#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreEvaluator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorArn">EvaluatorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorConfig">EvaluatorConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorId">EvaluatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorName">EvaluatorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList">DataAwsccBedrockagentcoreEvaluatorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EvaluatorArn`<sup>Required</sup> <a name="EvaluatorArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorArn"></a>

```csharp
public string EvaluatorArn { get; }
```

- *Type:* string

---

##### `EvaluatorConfig`<sup>Required</sup> <a name="EvaluatorConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorConfig"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference EvaluatorConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference</a>

---

##### `EvaluatorId`<sup>Required</sup> <a name="EvaluatorId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorId"></a>

```csharp
public string EvaluatorId { get; }
```

- *Type:* string

---

##### `EvaluatorName`<sup>Required</sup> <a name="EvaluatorName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.evaluatorName"></a>

```csharp
public string EvaluatorName { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.tags"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList">DataAwsccBedrockagentcoreEvaluatorTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluator.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreEvaluatorConfig <a name="DataAwsccBedrockagentcoreEvaluatorConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/bedrockagentcore_evaluator#id DataAwsccBedrockagentcoreEvaluator#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig {

};
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased {

};
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig {

};
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge {

};
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig {

};
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig {

};
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig {

};
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig {

};
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning {

};
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale {

};
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical {

};
```


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical {

};
```


### DataAwsccBedrockagentcoreEvaluatorTags <a name="DataAwsccBedrockagentcoreEvaluatorTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArn">LambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSeconds">LambdaTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaArn`<sup>Required</sup> <a name="LambdaArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaArn"></a>

```csharp
public string LambdaArn { get; }
```

- *Type:* string

---

##### `LambdaTimeoutInSeconds`<sup>Required</sup> <a name="LambdaTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.lambdaTimeoutInSeconds"></a>

```csharp
public double LambdaTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfig">LambdaConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaConfig`<sup>Required</sup> <a name="LambdaConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.lambdaConfig"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference LambdaConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedLambdaConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBased</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFields">AdditionalModelRequestFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfig">InferenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalModelRequestFields`<sup>Required</sup> <a name="AdditionalModelRequestFields" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.additionalModelRequestFields"></a>

```csharp
public string AdditionalModelRequestFields { get; }
```

- *Type:* string

---

##### `InferenceConfig`<sup>Required</sup> <a name="InferenceConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.inferenceConfig"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference InferenceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigInferenceConfigOutputReference</a>

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfig">BedrockEvaluatorModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.responsesEvaluatorModelConfig">ResponsesEvaluatorModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BedrockEvaluatorModelConfig`<sup>Required</sup> <a name="BedrockEvaluatorModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.bedrockEvaluatorModelConfig"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference BedrockEvaluatorModelConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigBedrockEvaluatorModelConfigOutputReference</a>

---

##### `ResponsesEvaluatorModelConfig`<sup>Required</sup> <a name="ResponsesEvaluatorModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.responsesEvaluatorModelConfig"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference ResponsesEvaluatorModelConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.maxOutputTokens">MaxOutputTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.modelId">ModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.reasoning">Reasoning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.topP">TopP</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxOutputTokens`<sup>Required</sup> <a name="MaxOutputTokens" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.maxOutputTokens"></a>

```csharp
public double MaxOutputTokens { get; }
```

- *Type:* double

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.modelId"></a>

```csharp
public string ModelId { get; }
```

- *Type:* string

---

##### `Reasoning`<sup>Required</sup> <a name="Reasoning" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.reasoning"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference Reasoning { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference</a>

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `TopP`<sup>Required</sup> <a name="TopP" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.topP"></a>

```csharp
public double TopP { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.effort">Effort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Effort`<sup>Required</sup> <a name="Effort" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.effort"></a>

```csharp
public string Effort { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoningOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigResponsesEvaluatorModelConfigReasoning</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructions">Instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfig">ModelConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScale">RatingScale</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.instructions"></a>

```csharp
public string Instructions { get; }
```

- *Type:* string

---

##### `ModelConfig`<sup>Required</sup> <a name="ModelConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.modelConfig"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference ModelConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeModelConfigOutputReference</a>

---

##### `RatingScale`<sup>Required</sup> <a name="RatingScale" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.ratingScale"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference RatingScale { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudge</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get"></a>

```csharp
private DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategorical</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get"></a>

```csharp
private DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumerical</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categorical">Categorical</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numerical">Numerical</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Categorical`<sup>Required</sup> <a name="Categorical" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.categorical"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList Categorical { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleCategoricalList</a>

---

##### `Numerical`<sup>Required</sup> <a name="Numerical" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.numerical"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList Numerical { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleNumericalList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScaleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeRatingScale</a>

---


### DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBased">CodeBased</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudge">LlmAsAJudge</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeBased`<sup>Required</sup> <a name="CodeBased" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.codeBased"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference CodeBased { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigCodeBasedOutputReference</a>

---

##### `LlmAsAJudge`<sup>Required</sup> <a name="LlmAsAJudge" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.llmAsAJudge"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference LlmAsAJudge { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigLlmAsAJudgeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig">DataAwsccBedrockagentcoreEvaluatorEvaluatorConfig</a>

---


### DataAwsccBedrockagentcoreEvaluatorTagsList <a name="DataAwsccBedrockagentcoreEvaluatorTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.get"></a>

```csharp
private DataAwsccBedrockagentcoreEvaluatorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockagentcoreEvaluatorTagsOutputReference <a name="DataAwsccBedrockagentcoreEvaluatorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockagentcoreEvaluatorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTags">DataAwsccBedrockagentcoreEvaluatorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockagentcoreEvaluatorTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreEvaluator.DataAwsccBedrockagentcoreEvaluatorTags">DataAwsccBedrockagentcoreEvaluatorTags</a>

---



