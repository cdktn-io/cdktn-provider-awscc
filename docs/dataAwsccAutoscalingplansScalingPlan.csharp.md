# `dataAwsccAutoscalingplansScalingPlan` Submodule <a name="`dataAwsccAutoscalingplansScalingPlan` Submodule" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAutoscalingplansScalingPlan <a name="DataAwsccAutoscalingplansScalingPlan" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/autoscalingplans_scaling_plan awscc_autoscalingplans_scaling_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlan(Construct Scope, string Id, DataAwsccAutoscalingplansScalingPlanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig">DataAwsccAutoscalingplansScalingPlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig">DataAwsccAutoscalingplansScalingPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAutoscalingplansScalingPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAutoscalingplansScalingPlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAutoscalingplansScalingPlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAutoscalingplansScalingPlan.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAutoscalingplansScalingPlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccAutoscalingplansScalingPlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAutoscalingplansScalingPlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAutoscalingplansScalingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/autoscalingplans_scaling_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAutoscalingplansScalingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.applicationSource">ApplicationSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference">DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.scalingInstructions">ScalingInstructions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList">DataAwsccAutoscalingplansScalingPlanScalingInstructionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.scalingPlanArn">ScalingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.scalingPlanName">ScalingPlanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.scalingPlanVersion">ScalingPlanVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationSource`<sup>Required</sup> <a name="ApplicationSource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.applicationSource"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference ApplicationSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference">DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference</a>

---

##### `ScalingInstructions`<sup>Required</sup> <a name="ScalingInstructions" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.scalingInstructions"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsList ScalingInstructions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList">DataAwsccAutoscalingplansScalingPlanScalingInstructionsList</a>

---

##### `ScalingPlanArn`<sup>Required</sup> <a name="ScalingPlanArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.scalingPlanArn"></a>

```csharp
public string ScalingPlanArn { get; }
```

- *Type:* string

---

##### `ScalingPlanName`<sup>Required</sup> <a name="ScalingPlanName" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.scalingPlanName"></a>

```csharp
public string ScalingPlanName { get; }
```

- *Type:* string

---

##### `ScalingPlanVersion`<sup>Required</sup> <a name="ScalingPlanVersion" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.scalingPlanVersion"></a>

```csharp
public string ScalingPlanVersion { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAutoscalingplansScalingPlanApplicationSource <a name="DataAwsccAutoscalingplansScalingPlanApplicationSource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanApplicationSource {

};
```


### DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters <a name="DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters {

};
```


### DataAwsccAutoscalingplansScalingPlanConfig <a name="DataAwsccAutoscalingplansScalingPlanConfig" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/autoscalingplans_scaling_plan#id DataAwsccAutoscalingplansScalingPlan#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAutoscalingplansScalingPlanScalingInstructions <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructions" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructions {

};
```


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification {

};
```


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions {

};
```


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification {

};
```


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations {

};
```


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification {

};
```


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions {

};
```


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference <a name="DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArn">CloudformationStackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilters">TagFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList">DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSource">DataAwsccAutoscalingplansScalingPlanApplicationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudformationStackArn`<sup>Required</sup> <a name="CloudformationStackArn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.property.cloudformationStackArn"></a>

```csharp
public string CloudformationStackArn { get; }
```

- *Type:* string

---

##### `TagFilters`<sup>Required</sup> <a name="TagFilters" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.property.tagFilters"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList TagFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList">DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanApplicationSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSource">DataAwsccAutoscalingplansScalingPlanApplicationSource</a>

---


### DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList <a name="DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.get"></a>

```csharp
private DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference <a name="DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters">DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFiltersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters">DataAwsccAutoscalingplansScalingPlanApplicationSourceTagFilters</a>

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.get"></a>

```csharp
private DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions">DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensions</a>

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList">DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.dimensions"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList Dimensions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList">DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification">DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecification</a>

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsList <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.get"></a>

```csharp
private DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.customizedLoadMetricSpecification">CustomizedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.disableDynamicScaling">DisableDynamicScaling</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.minCapacity">MinCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predefinedLoadMetricSpecification">PredefinedLoadMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBehavior">PredictiveScalingMaxCapacityBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBuffer">PredictiveScalingMaxCapacityBuffer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMode">PredictiveScalingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalableDimension">ScalableDimension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalingPolicyUpdateBehavior">ScalingPolicyUpdateBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scheduledActionBufferTime">ScheduledActionBufferTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.serviceNamespace">ServiceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.targetTrackingConfigurations">TargetTrackingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructions">DataAwsccAutoscalingplansScalingPlanScalingInstructions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomizedLoadMetricSpecification`<sup>Required</sup> <a name="CustomizedLoadMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.customizedLoadMetricSpecification"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference CustomizedLoadMetricSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingplansScalingPlanScalingInstructionsCustomizedLoadMetricSpecificationOutputReference</a>

---

##### `DisableDynamicScaling`<sup>Required</sup> <a name="DisableDynamicScaling" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.disableDynamicScaling"></a>

```csharp
public IResolvable DisableDynamicScaling { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinCapacity`<sup>Required</sup> <a name="MinCapacity" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.minCapacity"></a>

```csharp
public double MinCapacity { get; }
```

- *Type:* double

---

##### `PredefinedLoadMetricSpecification`<sup>Required</sup> <a name="PredefinedLoadMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predefinedLoadMetricSpecification"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference PredefinedLoadMetricSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference">DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference</a>

---

##### `PredictiveScalingMaxCapacityBehavior`<sup>Required</sup> <a name="PredictiveScalingMaxCapacityBehavior" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBehavior"></a>

```csharp
public string PredictiveScalingMaxCapacityBehavior { get; }
```

- *Type:* string

---

##### `PredictiveScalingMaxCapacityBuffer`<sup>Required</sup> <a name="PredictiveScalingMaxCapacityBuffer" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMaxCapacityBuffer"></a>

```csharp
public double PredictiveScalingMaxCapacityBuffer { get; }
```

- *Type:* double

---

##### `PredictiveScalingMode`<sup>Required</sup> <a name="PredictiveScalingMode" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.predictiveScalingMode"></a>

```csharp
public string PredictiveScalingMode { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ScalableDimension`<sup>Required</sup> <a name="ScalableDimension" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalableDimension"></a>

```csharp
public string ScalableDimension { get; }
```

- *Type:* string

---

##### `ScalingPolicyUpdateBehavior`<sup>Required</sup> <a name="ScalingPolicyUpdateBehavior" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scalingPolicyUpdateBehavior"></a>

```csharp
public string ScalingPolicyUpdateBehavior { get; }
```

- *Type:* string

---

##### `ScheduledActionBufferTime`<sup>Required</sup> <a name="ScheduledActionBufferTime" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.scheduledActionBufferTime"></a>

```csharp
public double ScheduledActionBufferTime { get; }
```

- *Type:* double

---

##### `ServiceNamespace`<sup>Required</sup> <a name="ServiceNamespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.serviceNamespace"></a>

```csharp
public string ServiceNamespace { get; }
```

- *Type:* string

---

##### `TargetTrackingConfigurations`<sup>Required</sup> <a name="TargetTrackingConfigurations" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.targetTrackingConfigurations"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList TargetTrackingConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructions">DataAwsccAutoscalingplansScalingPlanScalingInstructions</a>

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricType">PredefinedLoadMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel">ResourceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredefinedLoadMetricType`<sup>Required</sup> <a name="PredefinedLoadMetricType" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.predefinedLoadMetricType"></a>

```csharp
public string PredefinedLoadMetricType { get; }
```

- *Type:* string

---

##### `ResourceLabel`<sup>Required</sup> <a name="ResourceLabel" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.resourceLabel"></a>

```csharp
public string ResourceLabel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecificationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification">DataAwsccAutoscalingplansScalingPlanScalingInstructionsPredefinedLoadMetricSpecification</a>

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.get"></a>

```csharp
private DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensions</a>

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.dimensions"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList Dimensions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationDimensionsList</a>

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecification</a>

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.get"></a>

```csharp
private DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.customizedScalingMetricSpecification">CustomizedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.disableScaleIn">DisableScaleIn</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.estimatedInstanceWarmup">EstimatedInstanceWarmup</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.predefinedScalingMetricSpecification">PredefinedScalingMetricSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.targetValue">TargetValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomizedScalingMetricSpecification`<sup>Required</sup> <a name="CustomizedScalingMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.customizedScalingMetricSpecification"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference CustomizedScalingMetricSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsCustomizedScalingMetricSpecificationOutputReference</a>

---

##### `DisableScaleIn`<sup>Required</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.disableScaleIn"></a>

```csharp
public IResolvable DisableScaleIn { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EstimatedInstanceWarmup`<sup>Required</sup> <a name="EstimatedInstanceWarmup" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.estimatedInstanceWarmup"></a>

```csharp
public double EstimatedInstanceWarmup { get; }
```

- *Type:* double

---

##### `PredefinedScalingMetricSpecification`<sup>Required</sup> <a name="PredefinedScalingMetricSpecification" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.predefinedScalingMetricSpecification"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference PredefinedScalingMetricSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference</a>

---

##### `ScaleInCooldown`<sup>Required</sup> <a name="ScaleInCooldown" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleInCooldown"></a>

```csharp
public double ScaleInCooldown { get; }
```

- *Type:* double

---

##### `ScaleOutCooldown`<sup>Required</sup> <a name="ScaleOutCooldown" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.scaleOutCooldown"></a>

```csharp
public double ScaleOutCooldown { get; }
```

- *Type:* double

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.targetValue"></a>

```csharp
public double TargetValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurations</a>

---


### DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference <a name="DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricType">PredefinedScalingMetricType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel">ResourceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredefinedScalingMetricType`<sup>Required</sup> <a name="PredefinedScalingMetricType" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.predefinedScalingMetricType"></a>

```csharp
public string PredefinedScalingMetricType { get; }
```

- *Type:* string

---

##### `ResourceLabel`<sup>Required</sup> <a name="ResourceLabel" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.resourceLabel"></a>

```csharp
public string ResourceLabel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecificationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAutoscalingplansScalingPlan.DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification">DataAwsccAutoscalingplansScalingPlanScalingInstructionsTargetTrackingConfigurationsPredefinedScalingMetricSpecification</a>

---



