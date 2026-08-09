# `dataAwsccBudgetsBudgetsAction` Submodule <a name="`dataAwsccBudgetsBudgetsAction` Submodule" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBudgetsBudgetsAction <a name="DataAwsccBudgetsBudgetsAction" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/budgets_budgets_action awscc_budgets_budgets_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsAction(Construct Scope, string Id, DataAwsccBudgetsBudgetsActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig">DataAwsccBudgetsBudgetsActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig">DataAwsccBudgetsBudgetsActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBudgetsBudgetsAction resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBudgetsBudgetsAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBudgetsBudgetsAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBudgetsBudgetsAction.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBudgetsBudgetsAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBudgetsBudgetsAction resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBudgetsBudgetsAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBudgetsBudgetsAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/budgets_budgets_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBudgetsBudgetsAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionThreshold">ActionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference">DataAwsccBudgetsBudgetsActionActionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionType">ActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.approvalModel">ApprovalModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.budgetName">BudgetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.notificationType">NotificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList">DataAwsccBudgetsBudgetsActionResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.subscribers">Subscribers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList">DataAwsccBudgetsBudgetsActionSubscribersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `ActionThreshold`<sup>Required</sup> <a name="ActionThreshold" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionThreshold"></a>

```csharp
public DataAwsccBudgetsBudgetsActionActionThresholdOutputReference ActionThreshold { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference">DataAwsccBudgetsBudgetsActionActionThresholdOutputReference</a>

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionType"></a>

```csharp
public string ActionType { get; }
```

- *Type:* string

---

##### `ApprovalModel`<sup>Required</sup> <a name="ApprovalModel" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.approvalModel"></a>

```csharp
public string ApprovalModel { get; }
```

- *Type:* string

---

##### `BudgetName`<sup>Required</sup> <a name="BudgetName" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.budgetName"></a>

```csharp
public string BudgetName { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.definition"></a>

```csharp
public DataAwsccBudgetsBudgetsActionDefinitionOutputReference Definition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionOutputReference</a>

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.notificationType"></a>

```csharp
public string NotificationType { get; }
```

- *Type:* string

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.resourceTags"></a>

```csharp
public DataAwsccBudgetsBudgetsActionResourceTagsList ResourceTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList">DataAwsccBudgetsBudgetsActionResourceTagsList</a>

---

##### `Subscribers`<sup>Required</sup> <a name="Subscribers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.subscribers"></a>

```csharp
public DataAwsccBudgetsBudgetsActionSubscribersList Subscribers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList">DataAwsccBudgetsBudgetsActionSubscribersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBudgetsBudgetsActionActionThreshold <a name="DataAwsccBudgetsBudgetsActionActionThreshold" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionActionThreshold {

};
```


### DataAwsccBudgetsBudgetsActionConfig <a name="DataAwsccBudgetsBudgetsActionConfig" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/budgets_budgets_action#id DataAwsccBudgetsBudgetsAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBudgetsBudgetsActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionDefinition {

};
```


### DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition {

};
```


### DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition {

};
```


### DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition {

};
```


### DataAwsccBudgetsBudgetsActionResourceTags <a name="DataAwsccBudgetsBudgetsActionResourceTags" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionResourceTags {

};
```


### DataAwsccBudgetsBudgetsActionSubscribers <a name="DataAwsccBudgetsBudgetsActionSubscribers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionSubscribers {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBudgetsBudgetsActionActionThresholdOutputReference <a name="DataAwsccBudgetsBudgetsActionActionThresholdOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionActionThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold">DataAwsccBudgetsBudgetsActionActionThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBudgetsBudgetsActionActionThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold">DataAwsccBudgetsBudgetsActionActionThreshold</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition">IamActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition">ScpActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition">SsmActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition">DataAwsccBudgetsBudgetsActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamActionDefinition`<sup>Required</sup> <a name="IamActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition"></a>

```csharp
public DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference IamActionDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a>

---

##### `ScpActionDefinition`<sup>Required</sup> <a name="ScpActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition"></a>

```csharp
public DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference ScpActionDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a>

---

##### `SsmActionDefinition`<sup>Required</sup> <a name="SsmActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition"></a>

```csharp
public DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference SsmActionDefinition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBudgetsBudgetsActionDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition">DataAwsccBudgetsBudgetsActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds">TargetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds"></a>

```csharp
public string[] TargetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds">InstanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceIds`<sup>Required</sup> <a name="InstanceIds" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds"></a>

```csharp
public string[] InstanceIds { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionResourceTagsList <a name="DataAwsccBudgetsBudgetsActionResourceTagsList" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionResourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.get"></a>

```csharp
private DataAwsccBudgetsBudgetsActionResourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBudgetsBudgetsActionResourceTagsOutputReference <a name="DataAwsccBudgetsBudgetsActionResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionResourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags">DataAwsccBudgetsBudgetsActionResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBudgetsBudgetsActionResourceTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags">DataAwsccBudgetsBudgetsActionResourceTags</a>

---


### DataAwsccBudgetsBudgetsActionSubscribersList <a name="DataAwsccBudgetsBudgetsActionSubscribersList" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionSubscribersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.get"></a>

```csharp
private DataAwsccBudgetsBudgetsActionSubscribersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBudgetsBudgetsActionSubscribersOutputReference <a name="DataAwsccBudgetsBudgetsActionSubscribersOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBudgetsBudgetsActionSubscribersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers">DataAwsccBudgetsBudgetsActionSubscribers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBudgetsBudgetsActionSubscribers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers">DataAwsccBudgetsBudgetsActionSubscribers</a>

---



